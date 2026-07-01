export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand mb-4">About Joblify Africa</h1>
        <p className="text-lg text-ink/80 mb-10">
          Connecting talented Africans to remote and freelance work from AI data annotation
          and translation to web development and design.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-3">Our Mission</h2>
          <p className="text-ink/80 leading-relaxed">
            Africa has no shortage of skilled, English-fluent, multilingual talent what's
            often missing is a clear path to the remote opportunities, already hiring for it.
            Joblify Africa exists to close that gap: a single place to find legitimate remote
            and freelance roles across AI training, translation, development, design, and more,
            without digging through a dozen scattered platforms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-3">Who It's For</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-brand mb-1">Job Seekers</h3>
              <p className="text-sm text-ink/70">
                Browse curated listings by category annotation, translation, development,
                transcription, design and apply directly, no middleman.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-accent mb-1">Employers</h3>
              <p className="text-sm text-ink/70">
                Post a role in minutes and reach a growing pool of African freelancers and
                remote professionals ready to work.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-ink mb-3">Why Africa</h2>
          <p className="text-ink/80 leading-relaxed">
            From Nairobi to Lagos to Harare, the continent has a deep bench of bilingual
            linguists, data specialists, and developers often overlooked by global hiring
            pipelines simply because there's no single place connecting supply to demand.
            Joblify Africa is that place.
          </p>
        </section>
      </div>
    </div>
  );
}