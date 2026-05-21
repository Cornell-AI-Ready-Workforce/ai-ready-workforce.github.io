"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { useRef } from "react";
import { MotionConfig, motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BrainCircuitIcon,
  BriefcaseBusinessIcon,
  CompassIcon,
  FileSearchIcon,
  HandshakeIcon,
  MailIcon,
  MessageSquareTextIcon,
  PresentationIcon,
  RefreshCcwIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ className?: string }>;

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: smoothEase },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.74, ease: smoothEase },
  },
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Evidence", href: "#evidence" },
  { label: "Practices", href: "#practices" },
  { label: "People", href: "#people" },
  { label: "Contact", href: "#contact" },
];

const heroLabels = ["AI Fluency", "Relational Skills", "Adaptive Flexibility"];

const problemSignals = [
  {
    title: "Resumes show what was, not what is now",
    text: "Credentials rarely show whether someone can work effectively with AI today.",
  },
  {
    title: "Interviews ask people to describe, not do",
    text: "Words about work are not the work itself, and AI-generated materials hide the process.",
  },
  {
    title: "Rigorous case assessment does not scale",
    text: "Traditional work samples are expensive, inconsistent, and rarely capture AI-collaboration behavior.",
  },
];

const designPrinciples = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Simulation-Based Assessment",
    text: "Candidates complete role-relevant simulations with realistic context, source materials, and deliverables.",
  },
  {
    icon: FileSearchIcon,
    title: "Evidence Linked Evaluation",
    text: "Scores connect to observable work: decisions, artifacts, rubric anchors, and reviewer notes.",
  },
  {
    icon: UsersIcon,
    title: "AI Prepares, Human Decides",
    text: "Agents structure evidence and surface patterns while trained reviewers own the final interpretation.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Review and Calibrate",
    text: "Reviewers resolve disagreement, adjust anchors, and improve assessment quality over time.",
  },
];

const practices = [
  {
    icon: CompassIcon,
    title: "Plan",
    text: "Frame the problem, constraints, intended user, and where AI should or should not help.",
  },
  {
    icon: MessageSquareTextIcon,
    title: "Prompt",
    text: "Give AI enough context, criteria, examples, and boundaries to support the work.",
  },
  {
    icon: SearchCheckIcon,
    title: "Probe",
    text: "Check sources, assumptions, calculations, edge cases, and competing explanations.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Protect",
    text: "Work within privacy, policy, fairness, and safety requirements.",
  },
  {
    icon: RefreshCcwIcon,
    title: "Pivot",
    text: "Revise the approach when evidence, feedback, or AI errors change the path.",
  },
  {
    icon: PresentationIcon,
    title: "Present",
    text: "Explain the recommendation, tradeoffs, supporting evidence, and next steps.",
  },
];

const researchTracks = [
  {
    icon: HandshakeIcon,
    title: "Relational skills assessment",
    text: "Interview and collaboration tasks can surface communication, empathy, conflict resolution, and psychological safety.",
  },
  {
    icon: BrainCircuitIcon,
    title: "Adaptive flexibility",
    text: "The assessment can examine how people adapt when goals, evidence, or tool behavior changes.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Calibration and fairness",
    text: "Review rubrics, disagreement checks, and audit trails keep scoring visible and improvable.",
  },
];

const people = [
  { name: "Rene Kizilcec", src: "/images/people/rene-kizilcec.jpeg" },
  { name: "Rachel Slama", src: "/images/people/rachel-slama.jpeg" },
  { name: "Philipp Kircher", src: "/images/people/philipp-kircher.jpeg" },
  { name: "Michele Belot", src: "/images/people/michele-belot.jpeg" },
  { name: "Thorsten Joachims", src: "/images/people/thorsten-joachims.jpeg" },
  { name: "JR Keller", src: "/images/people/jr-keller.jpeg" },
  { name: "Steve Jackson", src: "/images/people/steve-jackson.jpeg" },
  { name: "Paul Krause", src: "/images/people/paul-krause.jpeg" },
  { name: "Haocheng Zhang", src: "/images/people/haocheng-zhang.png" },
  { name: "Diyang Lin", src: "/images/people/diyang-lin.jpeg" },
  { name: "Jinsook Lee", src: "/images/people/jinsook-lee.jpeg" },
];

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
};

function CtaButton({ href, children, className, variant, size }: CtaButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex"
      whileHover={reducedMotion ? undefined : { y: -2 }}
      whileTap={reducedMotion ? undefined : { y: 0, scale: 0.985 }}
      transition={{ duration: 0.22, ease: smoothEase }}
    >
      <Button nativeButton={false} render={<Link href={href} />} variant={variant} size={size} className={cn("items-center justify-center", className)}>
        <span className="inline-flex items-center justify-center gap-2 leading-none [&_svg]:mt-0 [&_svg]:shrink-0">
          {children}
        </span>
      </Button>
    </motion.div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ delay }}
      variants={revealVariants}
      viewport={{ once: true, amount: 0.18 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} initial="hidden" variants={staggerVariants} viewport={{ once: true, amount: 0.16 }} whileInView="visible">
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase text-[#b31b1b]">{children}</p>;
}

function CornellLogo() {
  return (
    <Image
      alt="Cornell Future of Learning Lab logo"
      className="h-auto w-[210px]"
      height={154}
      src="/images/cornell-future-learning-logo.png"
      width={600}
    />
  );
}

function CornellUniversityLogo() {
  return (
    <Image
      alt="Cornell University logo"
      className="size-[76px]"
      height={115}
      src="/images/cornell-university-seal.svg"
      unoptimized
      width={115}
    />
  );
}

function AIWMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-9 place-items-center border border-[#b31b1b] bg-white text-lg font-black text-[#b31b1b]">AI</div>
      <div>
        <p className="text-sm font-bold leading-none text-white">AI-Ready Workforce</p>
        <p className="mt-1 text-xs leading-none text-white/68">Cornell research initiative</p>
      </div>
    </div>
  );
}

function IconFrame({ icon: Icon, className }: { icon: IconComponent; className?: string }) {
  return (
    <div className={cn("grid size-10 place-items-center border border-[#b31b1b]/30 bg-[#fff7f5] text-[#b31b1b]", className)}>
      <Icon className="size-5" />
    </div>
  );
}

function PrincipleCard({ item, index }: { item: (typeof designPrinciples)[number]; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="min-h-[260px] border border-[#d8d2ca] bg-white p-7 transition-colors duration-300 hover:border-[#b31b1b]/40 hover:bg-[#fff7f5]"
      variants={revealVariants}
    >
      <div className="flex items-center justify-between gap-5">
        <IconFrame icon={Icon} />
        <span className="font-mono text-sm text-[#9b9b9b]">0{index + 1}</span>
      </div>
      <h3 className="mt-10 text-2xl font-semibold leading-tight text-[#1f1f1f]">{item.title}</h3>
      <p className="mt-4 text-base leading-7 text-[#555]">{item.text}</p>
    </motion.article>
  );
}

function PracticeNode({ item }: { item: (typeof practices)[number] }) {
  const Icon = item.icon;

  return (
    <motion.article className="border-l border-[#d8d2ca] bg-white p-5 transition-colors duration-300 hover:border-[#b31b1b]" variants={revealVariants}>
      <IconFrame icon={Icon} className="size-9" />
      <h3 className="mt-7 text-2xl font-semibold leading-none text-[#b31b1b]">{item.title}</h3>
      <p className="mt-4 text-sm leading-6 text-[#555]">{item.text}</p>
    </motion.article>
  );
}

function ResearchRow({ item }: { item: (typeof researchTracks)[number] }) {
  const Icon = item.icon;

  return (
    <motion.article className="grid gap-5 border-b border-[#d8d2ca] py-7 last:border-b-0 sm:grid-cols-[48px_1fr]" variants={revealVariants}>
      <IconFrame icon={Icon} />
      <div>
        <h3 className="text-2xl font-semibold leading-tight text-[#1f1f1f]">{item.title}</h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#555]">{item.text}</p>
      </div>
    </motion.article>
  );
}

function PersonCard({ person }: { person: (typeof people)[number] }) {
  return (
    <motion.article className="group" variants={revealVariants}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e2dc]">
        <Image
          alt={`${person.name} headshot`}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          src={person.src}
        />
      </div>
      <div className="border-b border-[#d8d2ca] py-4">
        <h3 className="text-lg font-semibold leading-tight text-[#1f1f1f]">{person.name}</h3>
      </div>
    </motion.article>
  );
}

export function FrontierLabLandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "7%"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "-4%"]);

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: smoothEase }}>
      <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#1f1f1f]">
        <section ref={heroRef} id="about" className="relative min-h-[100svh] overflow-hidden bg-[#120f0d] text-white">
          <motion.div className="absolute inset-0" style={reducedMotion ? undefined : { y: heroImageY }}>
            <Image
              alt="Modern AI-ready workforce assessment environment with luminous threshold and review materials"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src="/images/aiw-variant-b-hero-modern.png"
              unoptimized
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,18,0.88)_0%,rgba(12,13,18,0.58)_38%,rgba(12,13,18,0.1)_72%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,13,18,0.45)_0%,rgba(12,13,18,0)_44%,rgba(12,13,18,0.7)_100%)]" />
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 py-5 lg:px-8">
            <motion.nav
              animate={reducedMotion ? undefined : "visible"}
              aria-label="Main navigation"
              className="flex items-center justify-between gap-5"
              initial={reducedMotion ? undefined : "hidden"}
              variants={heroVariants}
            >
              <Link href="/" aria-label="AI-Ready Workforce home">
                <AIWMark />
              </Link>
              <div className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => (
                  <a key={item.href} className="text-sm font-semibold text-white/82 transition hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <CtaButton className="hidden h-11 rounded-md border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/18 sm:inline-flex" href="mailto:hello@example.com">
                Contact the team
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
            </motion.nav>

            <div className="grid flex-1 items-center py-16 lg:py-20">
              <motion.div
                animate={reducedMotion ? undefined : "visible"}
                className="max-w-5xl"
                initial={reducedMotion ? undefined : "hidden"}
                style={reducedMotion ? undefined : { y: heroTextY }}
                variants={staggerVariants}
              >
                <motion.div variants={heroVariants}>
                  <Badge className="rounded-md border-white/25 bg-white/12 px-3 py-1.5 text-sm text-white backdrop-blur-md" variant="outline">
                    Assessment for AI-era work
                  </Badge>
                </motion.div>
                <motion.h1 className="mt-7 max-w-[340px] text-[clamp(2.3rem,9.4vw,6.4rem)] font-semibold leading-[0.96] text-white sm:max-w-[1160px]" variants={heroVariants}>
                  Measure AI-ready skills through real work.
                </motion.h1>
                <motion.p className="mt-7 max-w-[340px] text-lg leading-7 text-white/78 sm:max-w-2xl sm:text-xl sm:leading-8" variants={heroVariants}>
                  Simulation-based assessments that reveal judgment, communication, adaptability, and real-world AI collaboration.
                </motion.p>
                <motion.div className="mt-10 grid max-w-[340px] gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:[&>div]:w-auto [&>div]:w-full" variants={heroVariants}>
                  <CtaButton className="h-12 w-full rounded-md bg-[#b31b1b] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(179,27,27,0.35)] hover:bg-[#8f1414] sm:w-auto" href="#evidence" size="lg">
                    View assessment model
                    <ArrowRightIcon data-icon="inline-end" />
                  </CtaButton>
                  <CtaButton className="h-12 w-full rounded-md border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/18 sm:w-auto" href="#people" size="lg" variant="outline">
                    See the people
                  </CtaButton>
                </motion.div>
              </motion.div>

              <motion.div className="mt-12 grid max-w-5xl gap-3 sm:grid-cols-3" variants={staggerVariants}>
                {heroLabels.map((label) => (
                  <motion.div key={label} className="border border-white/18 bg-black/24 px-5 py-4 text-sm font-semibold text-white backdrop-blur-md" variants={heroVariants}>
                    {label}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="problem" className="border-y border-[#d8d2ca] bg-[#fbfaf7] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-8 lg:grid-cols-[0.82fr_1fr]">
              <div>
                <SectionLabel>Problem</SectionLabel>
                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                  Hiring methods miss the work itself.
                </h2>
              </div>
              <p className="max-w-2xl text-xl leading-9 text-[#444]">
                Hiring teams need to see how candidates frame tasks, brief AI, verify output, adapt, and explain a decision under realistic constraints.
              </p>
            </Reveal>
            <StaggerGroup className="mt-12 grid gap-px bg-[#d8d2ca] lg:grid-cols-3">
              {problemSignals.map((item) => (
                <motion.article key={item.title} className="bg-white p-7" variants={revealVariants}>
                  <h3 className="text-2xl font-semibold leading-tight text-[#1f1f1f]">{item.title}</h3>
                  <p className="mt-5 text-base leading-7 text-[#555]">{item.text}</p>
                </motion.article>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="evidence" className="relative border-b border-[#d8d2ca] bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-10 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <SectionLabel>Design principles</SectionLabel>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                  A case-based assessment people can inspect.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#555]">
                The public story is not a black-box score. It is a visible chain from role-relevant simulation to evidence-linked review.
              </p>
            </Reveal>

            <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2">
              {designPrinciples.map((item, index) => (
                <PrincipleCard key={item.title} index={index} item={item} />
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="practices" className="border-b border-[#d8d2ca] bg-[#fbfaf7] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-8 lg:grid-cols-[1fr_0.62fr]">
              <div>
                <SectionLabel>Six practices</SectionLabel>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                  AI-ready work can be observed one practice at a time.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#555]">
                The evidence map turns broad AI skill into behaviors a reviewer can see inside a realistic work sample.
              </p>
            </Reveal>

            <StaggerGroup className="mt-14 grid gap-px bg-[#d8d2ca] md:grid-cols-2 lg:grid-cols-6">
              {practices.map((item) => (
                <PracticeNode key={item.title} item={item} />
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="border-b border-[#d8d2ca] bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
            <Reveal>
              <SectionLabel>Assessment evidence loop</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                AI prepares the evidence. Humans make the decision.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#555]">
                The system is designed around visible evidence, reviewer calibration, and partner learning rather than an opaque score.
              </p>
            </Reveal>
            <Reveal className="overflow-hidden rounded-lg border border-[#d8d2ca] bg-white shadow-[0_24px_70px_rgba(80,48,30,0.08)]">
              <div className="relative aspect-[16/10] min-h-[340px]">
                <Image
                  alt="Light assessment evidence loop connecting simulation, evidence, review, and scoring"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  src="/images/aiw-assessment-loop-light.png"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[#d8d2ca] bg-white px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.72fr_1fr]">
            <Reveal className="lg:sticky lg:top-10">
              <SectionLabel>Research streams</SectionLabel>
              <h2 className="mt-5 max-w-2xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                Built for assessment research, not generic AI fluency claims.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#555]">
                The work stays close to measurable constructs, reviewer calibration, and settings where decisions matter.
              </p>
            </Reveal>
            <StaggerGroup>
              {researchTracks.map((item) => (
                <ResearchRow key={item.title} item={item} />
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="people" className="border-b border-[#d8d2ca] bg-[#fbfaf7] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <Reveal>
              <div>
                <SectionLabel>Research Team</SectionLabel>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                  People
                </h2>
              </div>
            </Reveal>

            <StaggerGroup className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {people.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </StaggerGroup>
          </div>
        </section>

        <footer id="contact" className="bg-[#b31b1b] px-5 py-12 text-white lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid gap-10 border-b border-white/25 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-white/75">Contact</p>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
                  Demonstrate AI-ready skills with work people can review.
                </h2>
              </div>
              <CtaButton className="h-12 rounded-md bg-white px-7 text-sm font-semibold text-[#b31b1b] hover:bg-[#f2e9e4]" href="mailto:hello@example.com" size="lg">
                Contact the team
                <MailIcon data-icon="inline-end" />
              </CtaButton>
            </Reveal>

            <div className="flex flex-col gap-8 pt-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex w-fit flex-col gap-3 sm:flex-row sm:items-center">
                <div className="inline-flex h-20 items-center bg-white px-4">
                  <CornellLogo />
                </div>
                <div className="inline-flex size-20 items-center justify-center border border-white/40 bg-[#b31b1b]">
                  <CornellUniversityLogo />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-semibold text-white/85">
                {navItems.map((item) => (
                  <a key={item.href} className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <p className="text-sm text-white/75">&copy; 2026 AI-Ready Workforce.</p>
            </div>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
