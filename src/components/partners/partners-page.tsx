"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MailIcon } from "lucide-react";

import { withSiteBasePath } from "@/lib/site-path";
import { cn } from "@/lib/utils";

const contactHref = "https://cornell.ca1.qualtrics.com/jfe/form/SV_bKKQKsOe0Y54mYm";
const sectionHeadingClass = "mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] text-[#1f1f1f] sm:text-5xl xl:text-6xl";

const navItems = [
  { label: "About", href: withSiteBasePath("/#problem") },
  { label: "Framework", href: withSiteBasePath("/#framework") },
  { label: "Evidence", href: withSiteBasePath("/#evidence") },
  { label: "Practices", href: withSiteBasePath("/#practices") },
  { label: "Team", href: withSiteBasePath("/#team") },
  { label: "Partners", href: withSiteBasePath("/partners/"), active: true },
];

const competencies = [
  {
    title: "AI Fluency",
    text: "Deciding when and how to use AI, describing the work clearly, evaluating what comes back, and taking responsibility for the result. Measured individually and across team workflows.",
  },
  {
    title: "Adaptive Flexibility",
    text: "How quickly someone picks up a new approach, integrates feedback, and carries what they learned into the next task.",
  },
  {
    title: "Relational Fluency",
    text: "Working through the human parts AI does not remove: giving hard feedback, repairing after a mistake, and keeping a room safe enough that people say what they actually think.",
  },
];

const partnershipTiers = [
  {
    number: "1",
    title: "Tell us how the work really happens",
    cost: "About one hour, one conversation",
    text: "We interview someone who knows a role well and turn what they describe into a work pattern — the sequence of decisions a real task actually involves. This is the raw material for everything else we build. You get early access to whatever we build from it, and no further obligation.",
  },
  {
    number: "2",
    title: "Co-design a simulation for a role you care about",
    cost: "Two to three hours of subject-matter-expert time",
    text: "We build a scenario around work your people actually do, with your documents, your constraints, and your definition of a good outcome. You review it, we revise it, and you keep access to the result. The competency framework and scoring stay constant; the content is yours.",
  },
  {
    number: "3",
    title: "Run a pilot with your team",
    cost: "About one hour per participant · eight to nine weeks end to end",
    text: "Forty to sixty of your employees complete the simulation. Each one receives private feedback. You receive an aggregate report on where the capability sits, where the gaps are, and how much those gaps closed after a single round of feedback — plus a written interpretation from us and a live debrief.",
  },
  {
    number: "4",
    title: "Help us establish whether this predicts anything",
    cost: "Ongoing, for organizations willing to go further",
    text: "The open research question is whether simulation performance predicts outcomes employers actually care about — ramp time, quality, retention, promotion readiness. Answering it requires partners willing to connect assessment results to outcomes over time. If that interests you, it is the most valuable thing you can do with us.",
  },
];

const timeline = [
  ["0", "Intro call. Agree scope, participant count, and how results will be shared"],
  ["1–3", "Data Use Agreement in review, in parallel with the co-design session and scenario build"],
  ["4", "Participant recruitment and internal communications"],
  ["5–6", "Participants complete the simulation. Each receives feedback immediately"],
  ["7–8", "Analysis; aggregate report and written interpretation delivered"],
  ["8–9", "Leadership debrief"],
];

const frequentlyAsked = [
  {
    question: "Is this a test our employees can fail?",
    answer: "No, and we would push back on running it that way. It is a development instrument. Results are not tied to employment decisions, and we ask partners to say so explicitly when they invite people to participate.",
  },
  {
    question: "Do participants need to already use AI tools?",
    answer: "No. Part of what the simulation measures is what someone does when a capable tool is available and they have to decide whether and how to use it. We do ask which tools your people actually have access to, so the scenario reflects their real environment rather than a generic one.",
  },
  {
    question: "Which AI model does the simulation use?",
    answer: "The environment is model-agnostic and we configure it to resemble the tooling your participants actually have.",
  },
  {
    question: "Can we stay anonymous?",
    answer: "Yes. Your organization is unnamed in all public materials and publications unless you opt in. Several of our partners prefer this and it changes nothing about what you receive.",
  },
  {
    question: "How much of our leadership's time does this take?",
    answer: "For a pilot, roughly two hours from the executive sponsor, two to three hours from the subject-matter experts who help design the scenario, and three to four hours from whoever coordinates logistics. Participant time is about an hour each.",
  },
  {
    question: "We are a smaller organization. Is a pilot still worth it?",
    answer: "A full pilot needs around forty participants to produce a signal worth acting on. Below that, the first two ways in are a better fit and are equally useful to us.",
  },
  {
    question: "What happens after a pilot?",
    answer: "That is genuinely open, and depends on what we find. Some partners run a second cohort, some extend to new functions, and some tell us it did not earn a place in their process. We want to know either way.",
  },
];

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase text-[#b31b1b]">{children}</p>;
}

function AIWMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-11 place-items-center rounded-md border border-[#d8d2ca] bg-white p-1.5 shadow-sm">
        <Image alt="" className="size-8 object-contain" height={64} src={withSiteBasePath("/images/aiw-logo.png")} unoptimized width={64} />
      </div>
      <div>
        <p className="text-base font-bold leading-none text-[#1f1f1f]">AI-Ready Workforce Initiative</p>
        <p className="mt-1 text-sm leading-none text-[#666]">Cornell University</p>
      </div>
    </div>
  );
}

function PageSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("border-b border-[#d8d2ca] px-5 py-20 lg:px-8 lg:py-28", className)}>
      <div className="mx-auto max-w-[1320px]">{children}</div>
    </section>
  );
}

function PrimaryLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#b31b1b] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(179,27,27,0.2)] transition-colors hover:bg-[#8f1414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b31b1b]/40"
      href={href}
    >
      {children}
    </a>
  );
}

function SecondaryLink({ children, href, inverted = false }: { children: ReactNode; href: string; inverted?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md border px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2",
        inverted
          ? "border-white/70 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/40"
          : "border-[#b31b1b] bg-white text-[#b31b1b] hover:bg-[#fff7f5] hover:text-[#8f1414] focus-visible:ring-[#b31b1b]/40",
      )}
    >
      {children}
    </a>
  );
}

export function PartnersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 border-b border-[#d8d2ca] bg-[#fbfaf7]/95 px-5 py-4 backdrop-blur lg:px-8">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-[1440px] items-center justify-between gap-6">
          <Link href="/" aria-label="AI-Ready Workforce home">
            <AIWMark />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "border-b-2 py-2 text-sm font-semibold transition",
                  item.active
                    ? "border-[#b31b1b] text-[#b31b1b]"
                    : "border-transparent text-[#555] hover:border-[#d8d2ca] hover:text-[#1f1f1f]",
                )}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="border-b border-[#d8d2ca] bg-white px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <SectionLabel>For Employers</SectionLabel>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#1f1f1f] sm:text-7xl xl:text-8xl">
            Partner with us
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-9 text-[#444] sm:text-2xl sm:leading-10">
            We build and validate realistic work simulations that measure whether people can actually do their work well with AI in it — not whether they finished a course or say they feel confident. Partner organizations shape what we build, run it with their own teams, and see the results first.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryLink href="#cta">Start a conversation</PrimaryLink>
            <SecondaryLink href="#cta">Book 30 minutes</SecondaryLink>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#666]">No cost. No software to install. Your organization can stay anonymous.</p>
        </div>
      </section>

      <PageSection>
        <Reveal>
          <SectionLabel>Why this exists</SectionLabel>
          <h2 className={sectionHeadingClass}>The problem with how AI readiness is measured today</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-[#444]">
            <p>Most organizations can report how many employees completed AI training and how many say they feel confident using AI tools. Neither number tells you whether anyone does better work. Course completion measures exposure and self-report measures comfort, and both leave leaders guessing about the thing they actually need to plan around.</p>
            <p>The alternative most often proposed — a skills taxonomy, a certification, a battery of questions about AI — has the opposite problem. It is precise about categories and silent about behavior. Knowing that someone can define a hallucination does not tell you whether they check the output before it goes to a customer.</p>
            <p>What is missing is evidence from the work itself. We put a person into a realistic task from their own function, with AI available, and observe what they do at each step: what they hand to the model and what they keep, how they specify the work, whether they verify against the source, and whether they take responsibility for what they deliver. They receive targeted feedback and attempt a second, comparable task. The change between the two attempts is a measurement in its own right — it separates a gap that closes with coaching from one that does not.</p>
          </div>
        </Reveal>
      </PageSection>

      <PageSection className="bg-white">
        <Reveal>
          <SectionLabel>What we measure</SectionLabel>
          <h2 className={sectionHeadingClass}>Three competencies</h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-[#d8d2ca] md:grid-cols-3">
          {competencies.map((competency) => (
            <Reveal key={competency.title} className="bg-white p-7 lg:p-9">
              <div className="h-1 w-12 bg-[#b31b1b]" />
              <h3 className="mt-8 text-2xl font-semibold leading-tight">{competency.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#555]">{competency.text}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <Reveal>
          <SectionLabel>Ways to partner</SectionLabel>
          <h2 className={sectionHeadingClass}>Four ways in, at four levels of commitment</h2>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#444]">Not every organization is ready to run a pilot, and you do not need to be. Each of these is useful to us on its own, and each one is a reasonable place to stop.</p>
        </Reveal>
        <div className="mt-10 border-t border-[#d8d2ca]">
          {partnershipTiers.map((tier) => (
            <Reveal key={tier.number} className="grid gap-5 border-b border-[#d8d2ca] py-9 md:grid-cols-[72px_1fr] md:gap-8">
              <p className="font-mono text-4xl font-semibold leading-none text-[#b31b1b]">{tier.number}</p>
              <div>
                <h3 className="text-2xl font-semibold leading-tight">{tier.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[#b31b1b]">{tier.cost}</p>
                <p className="mt-4 max-w-4xl text-base leading-7 text-[#444]">{tier.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <PrimaryLink href="#cta">Tell us which one fits</PrimaryLink>
        </Reveal>
      </PageSection>

      <PageSection className="bg-white">
        <Reveal>
          <SectionLabel>The exchange</SectionLabel>
          <h2 className={sectionHeadingClass}>What it costs, and what we ask</h2>
          <div className="mt-12 grid gap-px bg-[#d8d2ca] md:grid-cols-2">
            <article className="bg-white p-7 lg:p-9">
              <h3 className="text-2xl font-semibold leading-tight">What it costs you</h3>
              <p className="mt-5 text-base leading-7 text-[#444]">Nothing. Cornell funds the build, the platform, and the analysis. There is no licence, no per-seat fee, and no commercial commitment attached to a partnership.</p>
            </article>
            <article className="bg-white p-7 lg:p-9">
              <h3 className="text-2xl font-semibold leading-tight">What we ask in return</h3>
              <p className="mt-5 text-base leading-7 text-[#444]">This is a research initiative, and the thing we cannot manufacture is work that is real. We ask for the subject-matter-expert time to make a scenario honest, permission to use de-identified data in academic research, and your candid reaction to what we produce — including when it turns out not to be useful. A null result is a finding we need.</p>
            </article>
          </div>
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal>
          <SectionLabel>Your people and your data</SectionLabel>
          <h2 className={sectionHeadingClass}>How we handle participation and results</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-[#444]">
            <p>Participation is voluntary, carries no employment consequence, and both facts are disclosed to participants before they consent. All data collection runs under Cornell University IRB approval.</p>
            <p>Individual results go to the individual. Your organization receives aggregated, de-identified results at the group or function level, with a minimum reporting group size of five and cross-tabulation limited so small groups cannot be reconstructed. Cornell holds identifiable data as the research data controller; it is not transferred to you.</p>
            <p>We recommend against giving managers visibility into individual results, at least on a first run. The reason is practical rather than ideological: participants who believe their results reach their manager tend to perform to the instrument rather than work the way they normally would, which costs you both the accuracy of the measurement and the honesty of the feedback.</p>
            <p>
              Every partnership is governed by a Data Use Agreement covering purpose, retention, security, and publication. Your organization is not named in any public material or publication unless you choose to be.{" "}
              <a className="font-semibold text-[#b31b1b] underline decoration-[#b31b1b]/30 underline-offset-4 hover:decoration-[#b31b1b]" href="#cta">
                Request our standard data terms →
              </a>
            </p>
          </div>
        </Reveal>
      </PageSection>

      <PageSection className="bg-white">
        <Reveal>
          <SectionLabel>Deliverables</SectionLabel>
          <h2 className={sectionHeadingClass}>What you receive</h2>
          <div className="mt-12 grid gap-px bg-[#d8d2ca] md:grid-cols-2">
            <article className="bg-white p-7 lg:p-9">
              <h3 className="text-2xl font-semibold leading-tight">Each participant, privately</h3>
              <p className="mt-5 text-base leading-7 text-[#444]">A scored profile across each competency dimension, anchored to specific evidence quoted from their own work. Written feedback on what to do differently. Their own change between the first and second attempt.</p>
            </article>
            <article className="bg-white p-7 lg:p-9">
              <h3 className="text-2xl font-semibold leading-tight">Your organization, in aggregate</h3>
              <p className="mt-5 text-base leading-7 text-[#444]">Score distributions by competency and dimension. A dimension-by-function map of strengths and gaps. The growth signal — how much people improved after one round of feedback, and how many did. Behavioral indicators: who verified AI output against the source, who disclosed their AI use, who correctly chose not to use AI at all. Development recommendations tied to specific dimensions. A written interpretation from our team, and a live debrief.</p>
            </article>
          </div>
          <div className="mt-8 border-l-4 border-[#b31b1b] bg-[#fff7f5] p-6 text-base leading-7 text-[#444]">
            <p><strong className="text-[#b31b1b]">On benchmarks.</strong> No credible external benchmark for these competencies exists yet, and we would rather say so than imply otherwise. What we offer is comparison within your own organization, comparison of each person against their own earlier attempt, and reference distributions from our university pilots. The instrument is built for feedback and development, not for a score that ranks you against an outside standard.</p>
          </div>
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal>
          <SectionLabel>Fit</SectionLabel>
          <h2 className={sectionHeadingClass}>Where this works today, and where it does not yet</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-[#444]">
            <p>The simulations currently target desk-based work where AI tools sit inside the workflow — analysis, writing, planning, client-facing communication, and the judgment calls around them. We have built scenarios in and around finance, human resources, sales, operations, and technology functions.</p>
            <p>We have not yet built for frontline and field roles where the work is physical and the AI touchpoint is narrower. It is a direction we find genuinely interesting and want partners for, but we would not want an organization to expect a deployable assessment there today.</p>
            <p>Organizations of any size can partner with us. The pilot design needs roughly forty participants to produce a useful signal, but the first three ways in have no size requirement at all.</p>
          </div>
        </Reveal>
      </PageSection>

      <PageSection className="bg-white">
        <Reveal>
          <SectionLabel>Timeline</SectionLabel>
          <h2 className={sectionHeadingClass}>What a pilot looks like, week by week</h2>
          <div className="mt-10 overflow-x-auto border border-[#d8d2ca]">
            <table className="w-full min-w-[620px] border-collapse text-left text-base">
              <thead className="bg-[#b31b1b] text-white">
                <tr>
                  <th className="w-32 px-5 py-4 font-semibold">Weeks</th>
                  <th className="px-5 py-4 font-semibold">What happens</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map(([weeks, event]) => (
                  <tr key={weeks} className="border-b border-[#d8d2ca] last:border-0">
                    <td className="px-5 py-4 font-semibold text-[#666]">{weeks}</td>
                    <td className="px-5 py-4 leading-7 text-[#444]">{event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-4xl text-sm italic leading-6 text-[#666]">In our experience the legal review, not the design work, is what moves this date. Starting it in week 0 is the single best thing a partner can do to hold the schedule.</p>
        </Reveal>
      </PageSection>

      <PageSection>
        <Reveal>
          <SectionLabel>Questions</SectionLabel>
          <h2 className={sectionHeadingClass}>Frequently asked</h2>
          <div className="mt-10 max-w-5xl border-t border-[#d8d2ca]">
            {frequentlyAsked.map((item, index) => (
              <details key={item.question} className="group border-b border-[#d8d2ca] py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden="true" className="text-2xl font-normal leading-none text-[#b31b1b]">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl text-base leading-7 text-[#444]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </PageSection>

      <section id="cta" className="bg-[#b31b1b] px-5 py-20 text-white lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[1320px]">
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl xl:text-6xl">Start with a conversation</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">Tell us what your people do and where AI is changing it. We will tell you honestly whether we can help, and what it would take.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-6 text-sm font-semibold text-[#b31b1b] transition-colors hover:bg-[#f2e9e4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60" href={contactHref}>
              Contact us
              <MailIcon className="size-4" />
            </a>
            <SecondaryLink href={contactHref} inverted>Book 30 minutes with our team</SecondaryLink>
          </div>
          <p className="mt-9 text-base leading-7 text-white/85"><strong className="text-white">Rachel Slama</strong>, Associate Director — rslama@cornell.edu<br />Cornell University · Computing and Information Science Building 363 · Ithaca, NY</p>
        </Reveal>
      </section>
    </main>
  );
}
