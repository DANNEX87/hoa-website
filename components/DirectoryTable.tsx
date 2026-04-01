'use client'
import { useState } from 'react'

type Resident = {
  id: number
  address: string
  name: string
  phone: string | null
  email: string | null
  notes: string | null
}

export default function DirectoryTable({ residents }: { residents: Resident[] }) {
  const [search, setSearch] = useState('')

  const filtered = residents.filter(r =>
    [r.name, r.address, r.email, r.phone].some(v =>
      v?.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name, address, or email..."
        className="w-full border border-gray-200 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-12">No residents found.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((r) => (
            <div key={r.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-800">{r.name}</p>
                  <p className="text-sm text-gray-500">📍 {r.address}</p>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  {r.phone && <p>📞 {r.phone}</p>}
                  {r.email && <p>✉️ {r.email}</p>}
                </div>
              </div>
              {r.notes && (
                <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-50">{r.notes}</p>
              )}
            </div>
          ))}
        </div>
      )}
      <p className="text-xs text-gray-400 text-right mt-4">{filtered.length} resident(s)</p>
    </div>
  )
}
