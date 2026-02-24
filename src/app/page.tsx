import Image from "next/image";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Need-to-know", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Scar Camouflage",
    desc: "Tone-matched pigment blending to reduce contrast and visibility.",
    bullets: [
      "Best for: lighter scars + color mismatch",
      "Goal: reduce contrast so the area stops drawing your eye",
      "Typical: 2-3 sessions (varies by case)",
    ],
    img: "/service-1.jpg",
  },
  {
    title: "Stretch Mark Revision",
    desc: "Layered technique to soften lines and create a more even look over time.",
    bullets: [
      "Best for: stretch marks that appear lighter than surrounding skin",
      "Goal: soften definition and blend into tone",
      "Typical: 2-3 sessions (varies by area)",
    ],
    img: "/service-2.jpg",
  },
  {
    title: "Inkless Scar Revision",
    desc: "Non-pigment approaches that support texture + tone improvement.",
    bullets: [
      "Best for: select scar types where inkless methods are appropriate",
      "Goal: encourage a smoother appearance",
      "Plan: guided by assessment",
    ],
    img: "/service-3.jpg",
  },
  {
    title: "Hyperpigmentation Support",
    desc: "Targeted work to help balance uneven pigmentation over time.",
    bullets: [
      "Best for: uneven tone concerns (case dependent)",
      "Goal: improve visual uniformity",
      "Plan: tailored treatment + aftercare",
    ],
    img: "/service-4.jpg",
  },
];

const FAQ = [
  {
    q: "Does this work on all scars?",
    a: "It depends on scar type, age, location, and skin tone. A consultation helps confirm the best approach and realistic outcomes.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most clients need 2-3 sessions, spaced out, to build a blended, natural-looking result.",
  },
  {
    q: "Is it painful?",
    a: "Sensation varies by area. Most clients describe it as very manageable.",
  },
  {
    q: "How long do results last?",
    a: "Results are long-lasting. Touch-ups may be recommended over time depending on skin, lifestyle, and sun exposure.",
  },
];

const TESTIMONIALS = [
  {
    quote: "I stopped feeling the need to cover up. The blending is incredible.",
    name: "Client A.",
  },
  {
    quote: "Professional and honest about expectations. Results look natural.",
    name: "Client B.",
  },
  {
    quote: "The studio experience was calm and private - I felt taken care of.",
    name: "Client C.",
  },
];

const NAV_BLOCKS = [
  {
    title: "See Results",
    desc: "Before/after proof and what a realistic finish looks like.",
    href: "#proof",
    img: "/result-2.jpg",
  },
  {
    title: "Understand the Process",
    desc: "What happens at consult, sessions, and aftercare.",
    href: "#process",
    img: "/process.jpg",
  },
  {
    title: "Explore Services",
    desc: "Scar camouflage, stretch marks, inkless, hyperpigmentation.",
    href: "#services",
    img: "/service-1.jpg",
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const BTN_GOLD =
  "inline-flex items-center justify-center gap-3 bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition";
const LINK_GOLD =
  "inline-flex items-center gap-3 text-sm font-semibold text-[var(--brand-accent)]";

// Accent “kicker” style (uses your new --font-accent from layout.tsx)
const KICKER_LIGHT =
  "font-[var(--font-accent)] text-[12px] uppercase tracking-[0.34em] text-black/55";
const KICKER_DARK =
  "font-[var(--font-accent)] text-[12px] uppercase tracking-[0.34em] text-white/70";
const KICKER_GOLD =
  "font-[var(--font-accent)] text-[12px] uppercase tracking-[0.34em] text-black/70";

function SectionHeader(props: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}) {
  const { kicker, title, subtitle, align = "left", theme = "light" } = props;
  const kickerClass = theme === "dark" ? KICKER_DARK : KICKER_LIGHT;
  const subtitleClass = theme === "dark" ? "text-white/75" : "text-black/65";

  return (
    <div className={cn(align === "center" ? "text-center" : "text-left")}>
      {kicker ? <p className={kickerClass}>{kicker}</p> : null}
      <h2 className="font-display mt-3 text-3xl leading-[1.05] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed",
            subtitleClass,
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* NAV - hard edges, editorial */}
      <header className="sticky top-0 z-50 bg-[var(--background)]/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b border-black/10 py-5 md:py-6">
            <a href="#top" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="SMP Revive"
                width={140}
                height={40}
                priority
                className="h-9 w-auto md:h-10"
              />
              <span className="hidden text-xs text-black/55 md:inline">
                Scar &amp; Stretch Mark Revision • NJ
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-black/70 hover:text-black transition"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <a
                href="#contact"
                className="hidden text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20 hover:decoration-black/60 md:inline"
              >
                Quick questions
              </a>

              <a href="#contact" className={BTN_GOLD}>
                Book consult <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
<section className="relative">
  <div className="grid md:grid-cols-2">
    <div className="bg-[var(--brand-light)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-20">
        <p className={KICKER_LIGHT}>Scar + Stretch Mark Revision</p>

        <h1 className="font-display mt-4 text-5xl leading-[1.02] md:text-6xl">
          Help scars and stretch marks
          <span className="block text-black/55">blend into your skin.</span>
        </h1>

        {/* Hero paragraph */}
        <p className="mt-7 max-w-xl text-sm leading-relaxed text-black/70">
          The go-to scar + stretch mark blending for people who want a smoother,
          more even look - right here in New Jersey, in a private studio focused
          on subtle, natural results.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a href="#contact" className={LINK_GOLD}>
            Book a free consultation <span aria-hidden>→</span>
          </a>

          <span className="hidden h-4 w-px bg-black/15 sm:block" />

          <a
            href="#proof"
            className="inline-flex items-center gap-3 text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20 hover:decoration-black/60"
          >
            See results &amp; reviews
          </a>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 text-xs text-black/55">
          Honest consult • Tone-matched approach • Discreet studio setting
        </div>
      </div>
    </div>

    <div className="relative min-h-[60vh] md:min-h-[72vh]">
      <Image
        src="/hero.jpg"
        alt="Scar blending close-up"
        fill
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      <div className="absolute bottom-0 left-0 w-[70%] bg-white/80 p-5 backdrop-blur md:w-[55%]">
        <p className={cn(KICKER_LIGHT, "text-black/60")}>Natural finish</p>
        <p className="mt-2 text-sm text-black/70">
          The goal is subtle improvement - reducing contrast so the area blends
          naturally.
        </p>
      </div>

      <div className="absolute top-30 right-12 hidden w-40 md:block">
        <div className="relative aspect-[4/5] bg-black/10">
          <Image
            src="/hero-detail.jpg"
            alt="Detail close-up"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PROOF */}
      <section id="proof" className="bg-[var(--brand-primary)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              {/* UPDATED kicker */}
              <p className={KICKER_DARK}>Social proof</p>

              <h2 className="font-display mt-3 text-3xl leading-[1.05] md:text-4xl">
                Proof you can feel good about.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                Results and reviews show up early to build trust before we ask for a
                booking.
              </p>
            </div>

            <a href="#contact" className={LINK_GOLD}>
              Get a quote <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] bg-white/10">
                <Image
                  src="/result-1.jpg"
                  alt="Before and after result 1"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:col-span-5">
              <div className="relative aspect-[16/10] bg-white/10">
                <Image
                  src="/result-2.jpg"
                  alt="Before and after result 2"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] bg-white/10">
                <Image
                  src="/result-3.jpg"
                  alt="Before and after result 3"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6 text-sm text-white/75">
            5.0 rating • Typical plan: 2-3 sessions • Private NJ studio
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border-l border-white/20 pl-6">
                <blockquote className="text-sm leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-xs tracking-widest text-white/70">
                  {t.name.toUpperCase()}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NAV BLOCK */}
      <section id="resources" className="bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          {/* UPDATED kicker styling via SectionHeader (still “Start here”) */}
          <SectionHeader
            kicker="Start here"
            title="Choose your path."
            subtitle="We keep navigation simple so people don’t get lost in a dozen tabs."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {NAV_BLOCKS.map((b) => (
              <a
                key={b.title}
                href={b.href}
                className="group border-t border-black/15 pt-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{b.title}</div>
                    <p className="mt-2 text-sm text-black/65">{b.desc}</p>
                  </div>
                  <span className="mt-1 text-sm text-[var(--brand-primary)] group-hover:translate-x-0.5 transition">
                    →
                  </span>
                </div>

                <div className="relative mt-6 h-40 bg-black/5">
                  <Image
                    src={b.img}
                    alt={`${b.title} preview`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD FEATURE */}
      <section className="relative">
        <div className="bg-[var(--brand-accent)]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                {/* UPDATED kicker */}
                <p className={KICKER_GOLD}>What to expect</p>

                <h2 className="font-display mt-3 text-3xl leading-[1.05] text-black md:text-5xl">
                  A clear plan - not guesswork.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/75">
                  Most clients need 2-3 sessions. We’ll tell you what’s realistic,
                  what results can look like, and how to care for the area so the
                  finish settles clean.
                </p>

                <div className="mt-8 grid gap-4 text-sm text-black/80 sm:grid-cols-3">
                  <div className="border-l border-black/25 pl-4">
                    <div className="font-semibold text-black">2-3 sessions</div>
                    <div className="text-xs text-black/70">Typical plan</div>
                  </div>
                  <div className="border-l border-black/25 pl-4">
                    <div className="font-semibold text-black">Tone-matched</div>
                    <div className="text-xs text-black/70">Blends naturally</div>
                  </div>
                  <div className="border-l border-black/25 pl-4">
                    <div className="font-semibold text-black">Aftercare</div>
                    <div className="text-xs text-black/70">Simple steps</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] bg-black/10">
                  <Image
                    src="/highlight.jpg"
                    alt="Treatment detail"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="h-14 md:h-20" />
          </div>
        </div>

        <div className="relative -mt-16 md:-mt-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 bg-[var(--brand-primary)] p-8 text-white shadow-[0_35px_90px_-70px_rgba(0,0,0,0.7)] md:grid-cols-12 md:p-10">
              <div className="md:col-span-8">
                {/* UPDATED kicker */}
                <p className={KICKER_DARK}>Free consultation</p>

                <div className="mt-3 text-xl font-semibold md:text-2xl">
                  Send photos + get a realistic recommendation.
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                  We’ll confirm eligibility, explain what technique fits best, and
                  outline the session plan before you ever commit.
                </p>
              </div>

              <div className="md:col-span-4 md:flex md:items-end md:justify-end">
                <a href="#contact" className={LINK_GOLD}>
                  Book now <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="about" className="bg-[var(--brand-light)] pt-16 md:pt-20">
        <div className="grid md:grid-cols-2">
          <div className="flex items-center">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
              {/* UPDATED kicker */}
              <p className={KICKER_LIGHT}>Why we exist</p>

              <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
                You’re not “being picky.”
                <span className="block text-black/55">
                  You want to feel like yourself.
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-black/70">
                <p>
                  People come here after trying creams, oils, and cover-ups. The goal
                  isn’t perfection - it’s reducing contrast so your eye stops going to
                  the area first.
                </p>
                <p>
                  We’re focused on subtle, realistic improvement with a clean, calm
                  process and honest expectations.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm">
                <a
                  href="#process"
                  className="font-semibold text-[var(--brand-primary)]"
                >
                  See the process →
                </a>
                <span className="h-4 w-px bg-black/15" />
                <a
                  href="#contact"
                  className="text-black/70 underline underline-offset-4 decoration-black/20 hover:decoration-black/60 hover:text-black transition"
                >
                  Ask a question
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[60vh] md:min-h-[78vh]">
            <Image
              src="/about.jpg"
              alt="Studio / practitioner"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />

            <div className="absolute bottom-0 right-0 w-[78%] bg-white/85 p-6 backdrop-blur md:w-[60%]">
              {/* UPDATED kicker */}
              <p className={cn(KICKER_LIGHT, "text-black/60")}>Private studio</p>

              <p className="mt-2 text-sm text-black/70">
                Discreet, clean, professional setting - built for comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-[var(--background)]">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[55vh] md:min-h-[78vh]">
            <Image
              src="/process.jpg"
              alt="Process"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute top-0 left-0 bg-[var(--brand-primary)] px-4 py-3 text-white">
              {/* UPDATED kicker */}
              <p className={KICKER_DARK}>The need-to-know</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Simple process.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/65">
                A clean experience designed for comfort and realistic expectations.
              </p>

              <div className="mt-10 border-t border-black/10">
                {[
                  {
                    t: "1) Consultation",
                    d: "We assess the area, review your goals, and set realistic expectations.",
                  },
                  {
                    t: "2) Treatment Plan",
                    d: "We tailor technique + tone to your skin and the type of scar/marks.",
                  },
                  {
                    t: "3) Sessions + Aftercare",
                    d: "Typically 2-3 sessions. You’ll get clear aftercare so results settle cleanly.",
                  },
                ].map((s) => (
                  <div key={s.t} className="border-b border-black/10 py-6">
                    <div className="flex items-baseline justify-between gap-6">
                      <div className="text-sm font-semibold">{s.t}</div>
                      {/* UPDATED tiny label */}
                      <div className={cn(KICKER_LIGHT, "text-[10px] text-black/45")}>
                        Details
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-black/65">{s.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="#contact" className={LINK_GOLD}>
                  Book a consultation <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#3f3f3f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <SectionHeader
            theme="dark"
            kicker="Services"
            title="What we offer."
            subtitle="Clear, simple service descriptions - so clients understand what to choose."
          />

          <div className="mt-12 space-y-16">
            {SERVICES.map((s, idx) => (
              <div
                key={s.title}
                className="grid gap-10 md:grid-cols-12 md:items-center"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] bg-white/10 md:aspect-[5/4]",
                    idx % 2 === 0 ? "md:col-span-6" : "md:col-span-6 md:order-2"
                  )}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={cn(
                    idx % 2 === 0 ? "md:col-span-6" : "md:col-span-6 md:order-1"
                  )}
                >
                  <p className="text-xs tracking-widest text-white/60">
                    {String(idx + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-display mt-3 text-3xl leading-tight md:text-4xl">
                    {s.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
                    {s.desc}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-white/75">
                    {s.bullets.map((b) => (
                      <li key={b} className="border-l border-white/25 pl-4">
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a href="#contact" className={LINK_GOLD}>
                      Ask about {s.title.toLowerCase()} <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <div className="border-t border-black/10 pt-14">
            <SectionHeader
              kicker="FAQ"
              title="Quick answers."
              subtitle="Focused on what people ask before booking."
            />

            <div className="mt-10 grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-sm text-black/65">
                  If you’re unsure, send a photo. We’ll tell you what’s realistic
                  and what approach fits best.
                </p>
              </div>

              <div className="md:col-span-8">
                <div className="divide-y divide-black/10 border-t border-black/10">
                  {FAQ.map((f) => (
                    <details key={f.q} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                        <span className="text-sm font-semibold">{f.q}</span>
                        <span className="text-black/50 transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-black/65">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FOOTER */}
<section id="contact" className="bg-[var(--brand-primary)] text-white">
  <div className="grid md:grid-cols-2">
    {/* LEFT: copy + form */}
    <div className="flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-16 md:py-24">
        <p className={KICKER_DARK}>Contact</p>

        <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
          Book the consult.
          <span className="block text-white/70">Get a clear plan.</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75">
          Share photos, ask questions, and we’ll tell you what’s realistic - plus what
          sessions may look like.
        </p>

        <form className="mt-10 grid gap-4 border-t border-white/15 pt-6">
          {/* Row 1 */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs text-white/70">First Name</label>
              <input
                className={cn(
                  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                  "placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                )}
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/70">Last Name</label>
              <input
                className={cn(
                  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                  "placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                )}
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs text-white/70">Phone Number</label>
              <input
                className={cn(
                  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                  "placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                )}
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/70">Email</label>
              <input
                className={cn(
                  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                  "placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
                )}
                placeholder="Email"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs text-white/70">Date of Birth</label>
              <input
                type="date"
                className={cn(
                  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                  "[color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-white/25"
                )}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/70">Sex</label>
              <select
                className={cn(
                  "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                  "focus:outline-none focus:ring-2 focus:ring-white/25"
                )}
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select
                </option>
                <option value="female" className="text-black">
                  Female
                </option>
                <option value="male" className="text-black">
                  Male
                </option>
                <option value="prefer-not" className="text-black">
                  Prefer not to say
                </option>
              </select>
            </div>
          </div>

          {/* Upload */}
          <div>
            <label className="mb-2 block text-xs text-white/70">Upload Images</label>
            <input
              type="file"
              multiple
              className={cn(
                "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                "file:mr-4 file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white",
                "focus:outline-none focus:ring-2 focus:ring-white/25"
              )}
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-xs text-white/70">How can we help?</label>
            <textarea
              rows={4}
              className={cn(
                "w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white",
                "placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/25"
              )}
              placeholder="How can we help?"
            />
          </div>

          <button type="button" className={cn("w-full", BTN_GOLD)}>
            Send <span aria-hidden>→</span>
          </button>

          <div className="pt-2 text-sm">
            <a
              href="#top"
              className="inline-flex items-center gap-3 text-white/75 underline underline-offset-4 decoration-white/30 hover:decoration-white/70 hover:text-white transition"
            >
              Back to top
            </a>
          </div>

          <p className="text-xs text-white/60">
            Concept demo for pitch - we’ll wire the form + tracking after approval.
          </p>
        </form>
      </div>
    </div>

    {/* RIGHT: image */}
    <div className="relative min-h-[55vh] md:min-h-[78vh]">
      <Image
        src="/cta.jpg"
        alt="Studio"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 h-3 w-full bg-[var(--brand-accent)]" />
    </div>
  </div>

  {/* Footer (full) */}
  <footer className="bg-[var(--background)] text-[var(--foreground)]">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="SMP Revive"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="mt-4 max-w-md text-sm text-black/65">
            Scar camouflage + stretch mark revision in a private NJ studio. Subtle,
            tone-matched results with honest expectations.
          </p>
          <p className="mt-5 text-xs text-black/50">
            © {new Date().getFullYear()} SMP Revive. All rights reserved.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-[var(--font-accent)] text-sm uppercase tracking-[0.34em] text-black/70">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-black/65">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="hover:text-black underline-offset-4 hover:underline"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-[var(--font-accent)] text-sm uppercase tracking-[0.34em] text-black/70">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm text-black/65">
            <li>
              <a
                className="hover:text-black underline-offset-4 hover:underline"
                href="#"
              >
                Instagram →
              </a>
            </li>
            <li>
              <a
                className="hover:text-black underline-offset-4 hover:underline"
                href="#contact"
              >
                Contact →
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <a href="#contact" className={BTN_GOLD}>
              Send an inquiry <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-black/10 pt-6 text-xs text-black/45">
        Homepage redesign concept by Ashanti Yow, Founder of The Social Infinity. Not authorized for production use without written approval.
      </div>
    </div>
  </footer>
</section>
    </div>
  );
}