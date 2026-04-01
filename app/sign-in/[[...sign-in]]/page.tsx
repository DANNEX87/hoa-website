import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-700 mb-2">Resident Login</h1>
        <p className="text-gray-500 mb-6 text-sm">Sign in with your Google or Microsoft account to access the resident directory.</p>
        <SignIn />
      </div>
    </div>
  )
}
