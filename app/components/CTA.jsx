import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    let form = { email }

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

    const content = await res.json();
    alert("Thank you for signing up!")
    setEmail("");
  }

  return (
    <div className="bg-white w-full px-6" id="newsletter">
      <div className="flex flex-col gap-10 items-center max-w-7xl mx-auto py-60">
        <h2 className="text-center text-2xl font-bold text-black sm:text-4xl">Take control of your water consumption.<br/>Reserve early access to our app.</h2>
        <p className="text-center tracking-wide max-w-3xl">High Tide AI is moving forward quickly. We&apos;re developing our mobile application, conducting more customer research, and building partnerships with water suppliers in San Diego. Join our movement by signing up for our app waitlist and becoming part of the future of water conservation.</p>
        <form className="mt-6 flex max-w-md gap-x-4" onSubmit={handleSubmit}>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="min-w-80 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-neutral focus:ring-inset sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
          >
            Notify me
          </button>
        </form>
      </div>
    </div>
  )
}