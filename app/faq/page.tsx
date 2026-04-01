'use client'
import { useState } from 'react'

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-brand-700 mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-500 mb-10">Answers to common neighborhood questions.</p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.q}
              <span className="text-brand-600 ml-4 text-xl">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const faqs = [
  {
    q: 'When are HOA dues due?',
    a: 'HOA dues are due on the 1st of January each year. A 30-day grace period applies before late fees are assessed. Payment can be made by check or via bank transfer — contact the treasurer for details.',
  },
  {
    q: 'How do I submit a maintenance or landscaping request?',
    a: 'Use the contact form on the About page to submit a request to the board. Please include your address and a description of the issue. We aim to respond within 5 business days.',
  },
  {
    q: 'Can I make modifications to the exterior of my home?',
    a: 'Yes, but exterior modifications require prior board approval via an Architectural Review Committee (ARC) request. Submit your plans using the contact form before beginning any work.',
  },
  {
    q: 'How do I access the resident directory?',
    a: 'The directory is available to verified residents only. Click "Resident Directory" in the navigation, then sign in with your Google or Microsoft account. Access is approved by the board president.',
  },
  {
    q: 'When and where are board meetings held?',
    a: 'Board meetings are held on the second Tuesday of each month at 7pm. Location varies — check the Announcements section on the home page for the most current details.',
  },
  {
    q: 'What are the quiet hours in our neighborhood?',
    a: 'Quiet hours are from 10pm to 7am on weekdays, and 11pm to 8am on weekends and holidays. This includes outdoor music, power equipment, and other noise disturbances.',
  },
  {
    q: 'Are short-term rentals (Airbnb, VRBO) allowed?',
    a: 'Short-term rentals of less than 30 days are not permitted under our CC&Rs. Please review the governing documents or contact the board if you have questions.',
  },
]
