export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em]">
          Contact
        </p>

        <h1 className="mt-5 text-5xl font-bold">
          Get in touch.
        </h1>

        <div className="mt-12 space-y-6">
          <div className="border-b border-black pb-5">
            <p className="text-sm">Email</p>

            <a
              href="mailto:your@email.com"
              className="mt-2 block text-xl font-bold hover:underline"
            >
              lhutz@gmail.com
            </a>
          </div>

          <div className="border-b border-black pb-5">
            <p className="text-sm">GitHub</p>

            <a
              href="#"
              className="mt-2 block text-xl font-bold hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}