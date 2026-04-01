import { auth } from '@clerk/nextjs/server'
import { createClient } from '@/lib/supabase'
import DirectoryTable from '@/components/DirectoryTable'

export default async function DirectoryPage() {
  const { userId } = auth()
  if (!userId) return null // middleware handles redirect

  const supabase = createClient()
  const { data: residents, error } = await supabase
    .from('residents')
    .select('*')
    .order('address', { ascending: true })

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center text-red-500">
        Error loading directory. Please try again later.
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-brand-700 mb-2">Resident Directory</h1>
      <p className="text-gray-500 mb-8">This information is private and only visible to logged-in residents.</p>
      <DirectoryTable residents={residents ?? []} />
    </div>
  )
}
