export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-brand-700 mb-2">About Our HOA</h1>
      <p className="text-gray-500 mb-10">Meet the board and get in touch with us.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {board.map((member, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="font-semibold text-gray-800">{member.name}</p>
              <p className="text-sm text-brand-600">{member.role}</p>
              <p className="text-sm text-gray-500 mt-1">{member.email}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Jane Smith" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
            <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="jane@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
            <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your message..." />
          </div>
          <button type="submit" className="bg-brand-600 text-white px-6 py-2 rounded-lg hover:bg-brand-700 transition font-medium">
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
