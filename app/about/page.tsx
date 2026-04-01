export const dynamic = 'force-dynamic'

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-forest-700 mb-2">About Our HOA</h1>
      <p className="text-timber-500 mb-10">Meet the board and get in touch with us.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-forest-700 mb-4">Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {board.map((member, i) => (
            <div key={i} className="bg-white rounded-xl border-l-4 border-timber-500 shadow-sm p-5">
              <p className="font-semibold text-forest-800">{member.name}</p>
              <p className="text-sm text-timber-600 font-medium">{member.role}</p>
              <p className="text-sm text-timber-400 mt-1">{member.email}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl border border-forest-100 shadow-sm p-6">
        <h2 className="text-xl font-semibold text-forest-700 mb-4">Contact Us</h2>
        <form className="space-y-4" action="mailto:danny@talariaworks.com" method="GET">
          <div>
            <label className="block text-sm font-medium text-timber-600 mb-1">Your Name</label>
            <input type="text" name="name" className="w-full border border-forest-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-timber-400 bg-timber-50" placeholder="Jane Smith" />
          </div>
          <div>
            <label className="block text-sm font-medium text-timber-600 mb-1">Your Email</label>
            <input type="email" name="email" className="w-full border border-forest-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-timber-400 bg-timber-50" placeholder="jane@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-timber-600 mb-1">Message</label>
            <textarea rows={4} name="body" className="w-full border border-forest-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-timber-400 bg-timber-50" placeholder="Your message..." />
          </div>
          <button type="submit" className="bg-timber-600 text-white px-6 py-2 rounded-lg hover:bg-timber-500 transition font-medium">
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

const board = [
  { name: 'Danny Ondrey', role: 'President', email: 'danny@talariaworks.com' },
  { name: 'Board Member', role: 'Vice President', email: 'vp@neighborhood.com' },
  { name: 'Board Member', role: 'Treasurer', email: 'treasurer@neighborhood.com' },
  { name: 'Board Member', role: 'Secretary', email: 'secretary@neighborhood.com' },
]
