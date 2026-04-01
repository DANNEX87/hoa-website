import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Neighborhood</h1>
        <p className="text-xl text-brand-100 max-w-2xl mx-auto mb-8">
          Your central hub for HOA information, announcements, and community resources.
        </p>
        <Link
          href="/directory"
          className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition"
        >
          Resident Directory →
        </Link>
      </section>

      {/* Announcements */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-brand-700 mb-6">Latest Announcements</h2>
        <div className="space-y-4">
          {announcements.map((a, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <p className="text-xs text-gray-400 mb-1">{a.date}</p>
              <h3 className="font-semibold text-gray-800">{a.title}</h3>
              <p className="text-gray-600 mt-1">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Link href="/faq" className="p-6 rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow transition">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold">FAQ</h3>
            <p className="text-sm text-gray-500 mt-1">Common questions answered</p>
          </Link>
          <Link href="/about" className="p-6 rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow transition">
            <div className="text-3xl mb-2">👋</div>
            <h3 className="font-semibold">About & Contact</h3>
            <p className="text-sm text-gray-500 mt-1">Meet the board & get in touch</p>
          </Link>
          <Link href="/directory" className="p-6 rounded-xl border border-gray-200 hover:border-brand-500 hover:shadow transition">
            <div className="text-3xl mb-2">🏘️</div>
            <h3 className="font-semibold">Resident Directory</h3>
            <p className="text-sm text-gray-500 mt-1">Login required</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

const announcements = [
  {
    date: 'March 28, 2026',
    title: 'Spring Community Cleanup – April 12th',
    body: 'Join your neighbors for our annual spring cleanup. Meet at the entrance at 9am. Gloves and bags provided.',
  },
  {
    date: 'March 15, 2026',
    title: 'HOA Meeting Minutes – March 2026',
    body: 'Minutes from the March board meeting are now available. Key topics included landscaping contract renewal and pool schedule.',
  },
  {
    date: 'March 1, 2026',
    title: 'Welcome to Our New HOA Website!',
    body: 'We\'ve launched a new portal to keep all residents informed. Log in with your Google or Microsoft account to access the resident directory.',
  },
]
