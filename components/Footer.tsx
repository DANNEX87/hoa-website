export default function Footer() {
  return (
    <footer className="bg-brand-700 text-brand-100 text-sm py-6 px-6 text-center">
      <p>© {new Date().getFullYear()} My Neighborhood HOA · All rights reserved</p>
      <p className="mt-1 text-brand-100/60">For assistance, contact the board president.</p>
    </footer>
  )
}
