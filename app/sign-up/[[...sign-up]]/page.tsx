import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-700 mb-2">Request Access</h1>
        <p className="text-gray-500 mb-6 text-sm">Create an account to request access to the resident directory. The board president will approve your request.</p>
        <SignUp />
      </div>
    </div>
  )
}
