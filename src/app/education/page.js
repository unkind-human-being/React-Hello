export default function Education() {
  return (
    <main className="min-h-[calc(100vh-65px)] bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em]">
          Background
        </p>

        <h1 className="mt-5 text-5xl font-bold">
          Education
        </h1>

        <div className="mt-12 border-t border-black">
          <div className="border-b border-black py-7">
            <p className="text-sm">College</p>

            <h2 className="mt-2 text-2xl font-bold">
              Bachelor of Science in Information Technology
            </h2>

            <p className="mt-2 text-sm">
              2023 — Present
            </p>
          </div>

          <div className="border-b border-black py-7">
            <p className="text-sm">Senior High School</p>

            <h2 className="mt-2 text-2xl font-bold">
              Information and Communication Technology
            </h2>

            <p className="mt-2 text-sm">
              2021 — 2023
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}