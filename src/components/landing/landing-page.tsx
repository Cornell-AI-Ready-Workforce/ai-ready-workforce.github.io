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
import { withSiteBasePath } from "@/lib/site-path";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ className?: string }>;

type Person = {
  name: string;
  title: string;
  src: string;
  href?: string;
  imageClassName?: string;
};

type LogoAsset = {
  name: string;
  src: string;
  width: number;
  height: number;
  className: string;
  tone?: "light";
  unoptimized?: boolean;
};

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const contactHref = "https://cornell.ca1.qualtrics.com/jfe/form/SV_bKKQKsOe0Y54mYm";

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
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const problemSignals = [
  {
    title: "AI-readiness is hard to measure and cultivate",
    text: "Organizations lack reliable behavioral evidence of who can use AI well, learn with it, and improve over time.",
  },
  {
    title: "Skills-based hiring is too static",
    text: "Skills are granular and changing quickly, but credentials and job histories often describe the past rather than current capability.",
  },
  {
    title: "Relational skills are hard to observe at scale",
    text: "Communication, judgment, trust, and repair matter more in AI-mediated work, but interviews are costly and uneven signals.",
  },
];

const frameworkPillars = [
  {
    icon: BrainCircuitIcon,
    title: "AI Fluency",
    text: "Delegate, describe, discern, and act diligently when using AI across individual and team workflows.",
  },
  {
    icon: HandshakeIcon,
    title: "Relational Fluency",
    text: "Build trust, communicate under pressure, repair misunderstandings, and sustain collaboration in AI-mediated work.",
  },
  {
    icon: RefreshCcwIcon,
    title: "Adaptive Flexibility",
    text: "Pick up new skills, respond to feedback, revise strategies, and improve performance across attempts.",
  },
];

const designPrinciples = [
  {
    icon: BriefcaseBusinessIcon,
    title: "AI-Scaled Work Demonstrations",
    text: "Participants complete realistic, role-relevant cases with context, source materials, constraints, and deliverables.",
  },
  {
    icon: FileSearchIcon,
    title: "Granular Skill Evidence",
    text: "Behavioral evidence is linked to competencies, artifacts, decisions, revisions, and rubric anchors.",
  },
  {
    icon: UsersIcon,
    title: "AI Structures, Humans Judge",
    text: "AI helps generate cases, organize traces, and surface patterns while trained reviewers own interpretation.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Validate and Improve",
    text: "Partners review evidence, calibrate scoring, and refine simulations through pilots and validation studies.",
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
    title: "Prepare",
    text: "Give AI enough context, criteria, examples, and boundaries to support the work.",
  },
  {
    icon: SearchCheckIcon,
    title: "Collaborate",
    text: "Check sources, assumptions, calculations, edge cases, and competing explanations.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Verify",
    text: "Work within privacy, policy, fairness, and safety requirements.",
  },
  {
    icon: RefreshCcwIcon,
    title: "Adapt",
    text: "Revise the approach when evidence, feedback, or AI errors change the path.",
  },
  {
    icon: PresentationIcon,
    title: "Deliver",
    text: "Explain the recommendation, tradeoffs, supporting evidence, and next steps.",
  },
];

const people: Person[] = [
  {
    name: "Rene Kizilcec",
    title: "Associate Professor; Faculty Director, Future of Learning Lab",
    src: "/images/people/rene-kizilcec.jpeg",
    href: "https://bowers.cornell.edu/people/rene-kizilcec",
  },
  {
    name: "Rachel Slama",
    title: "Associate Director, Future of Learning Lab",
    src: "/images/people/rachel-slama-2026.png",
    href: "https://bowers.cornell.edu/offices/information-science-administration",
  },
  {
    name: "Philipp Kircher",
    title: "Irving M. Ives Professor of Industrial and Labor Relations",
    src: "/images/people/philipp-kircher.jpeg",
    href: "https://economics.cornell.edu/philipp-kircher",
  },
  {
    name: "Michèle Belot",
    title: "Frances Perkins Professor of Industrial and Labor Relations and Economics",
    src: "/images/people/michele-belot.jpeg",
    href: "https://www.ilr.cornell.edu/people/michele-belot",
  },
  {
    name: "Thorsten Joachims",
    title: "Jacob Gould Schurman Professor of Computer Science and Information Science",
    src: "/images/people/thorsten-joachims-2025.jpeg",
    href: "https://bowers.cornell.edu/people/thorsten-joachims",
    imageClassName: "object-[50%_12%]",
  },
  {
    name: "JR Keller",
    title: "Associate Professor of Human Resource Studies",
    src: "/images/people/jr-keller.jpeg",
    href: "https://www.ilr.cornell.edu/people/jr-keller",
  },
  {
    name: "Steve Jackson",
    title: "Professor of Information Science and Science & Technology Studies; Vice Provost for Academic Innovation",
    src: "/images/people/steve-jackson.jpeg",
    href: "https://bowers.cornell.edu/people/steve-jackson",
  },
  {
    name: "Paul Krause",
    title: "Vice Provost for External Education; Executive Director, eCornell",
    src: "/images/people/paul-krause-official-2026.jpeg",
    href: "https://provost.cornell.edu/leadership/paul-krause/",
  },
  {
    name: "Haocheng Zhang",
    title: "Master's Student in Information Science",
    src: "/images/people/haocheng-zhang.png",
  },
  {
    name: "Diyang Lin",
    title: "PhD Student",
    src: "/images/people/diyang-lin.jpeg",
  },
  {
    name: "Jinsook Lee",
    title: "PhD Student in Information Science",
    src: "/images/people/jinsook-lee.jpeg",
    href: "https://bowers.cornell.edu/people/jinsook-lee",
  },
];

const institutionalLogos: LogoAsset[] = [
  {
    name: "Cornell Future of Learning Lab",
    src: "/images/cornell-future-learning-logo.png",
    width: 600,
    height: 154,
    className: "w-[190px]",
    tone: "light",
  },
  {
    name: "Cornell Bowers College of Computing and Information Science",
    src: "/images/cornell-bowers-logo.png",
    width: 440,
    height: 77,
    className: "w-[205px]",
    tone: "light",
  },
  {
    name: "Cornell ILR School",
    src: "/images/cornell-ilr-school-logo.png",
    width: 573,
    height: 164,
    className: "w-[205px]",
    tone: "light",
  },
  {
    name: "Cornell University",
    src: "/images/cornell-university-seal.svg",
    width: 115,
    height: 115,
    className: "size-[64px]",
    tone: "light",
    unoptimized: true,
  },
];

const supporterLogos: LogoAsset[] = [
  {
    name: "Cornell Center for Social Sciences",
    src: "/images/cornell-ccss-logo.png",
    width: 349,
    height: 79,
    className: "w-[210px]",
    tone: "light",
  },
  {
    name: "Laude Institute",
    src: "/images/laude-institute-logo.png",
    width: 128,
    height: 24,
    className: "w-[132px]",
    tone: "light",
  },
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
    <motion.div className={className} initial="hidden" variants={staggerVariants} viewport={{ once: true, amount: 0.03 }} whileInView="visible">
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase text-[#b31b1b]">{children}</p>;
}

function LogoTile({ logo }: { logo: LogoAsset }) {
  return (
    <div className="inline-flex min-h-16 items-center justify-center py-2">
      <Image
        alt={`${logo.name} logo`}
        className={cn("h-auto max-h-16 object-contain", logo.tone === "light" && "brightness-0 invert opacity-90", logo.className)}
        height={logo.height}
        src={withSiteBasePath(logo.src)}
        unoptimized={logo.unoptimized}
        width={logo.width}
      />
    </div>
  );
}

function FrameworkPillar({ item }: { item: (typeof frameworkPillars)[number] }) {
  const Icon = item.icon;

  return (
    <motion.article className="border-t border-[#d8d2ca] pt-7" variants={revealVariants}>
      <IconFrame icon={Icon} />
      <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#1f1f1f]">{item.title}</h3>
      <p className="mt-4 max-w-sm text-base leading-7 text-[#555]">{item.text}</p>
    </motion.article>
  );
}

function AIWMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-11 place-items-center rounded-md border border-white/30 bg-white/95 p-1.5 shadow-sm backdrop-blur">
        <Image alt="" className="size-8 object-contain" height={64} src={withSiteBasePath("/images/aiw-logo.png")} unoptimized width={64} />
      </div>
      <div>
        <p className="text-base font-bold leading-none text-white">AI-Ready Workforce Initiative</p>
        <p className="mt-1 text-sm leading-none text-white/68">Cornell University</p>
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

function PersonCard({ person }: { person: Person }) {
  const content = (
    <>
      <div className="relative aspect-square overflow-hidden bg-[#e8e2dc]">
        <Image
          alt={`${person.name} headshot`}
          className={cn("object-cover", person.imageClassName)}
          fill
          sizes="(min-width: 1024px) 250px, (min-width: 768px) 31vw, 100vw"
          src={withSiteBasePath(person.src)}
        />
      </div>
      <div className="border-b border-[#d8d2ca] py-4 text-center">
        <h3 className="text-lg font-semibold leading-tight text-[#1f1f1f]">{person.name}</h3>
        <p className="mt-2 text-sm leading-6 text-[#555]">{person.title}</p>
      </div>
    </>
  );

  return (
    <motion.article className="group" variants={revealVariants}>
      {person.href ? (
        <a className="block transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b31b1b]" href={person.href} rel="noreferrer" target="_blank">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.article>
  );
}

export function AIWLandingPage() {
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
              alt="People collaborating in a learning workspace with a subtle AI network overlay"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={withSiteBasePath("/images/aiw-hero-modern.png")}
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
            </motion.nav>

            <div className="grid flex-1 items-center py-16 lg:py-20">
              <motion.div
                animate={reducedMotion ? undefined : "visible"}
                className="max-w-5xl"
                initial={reducedMotion ? undefined : "hidden"}
                style={reducedMotion ? undefined : { y: heroTextY }}
                variants={staggerVariants}
              >
                <motion.h1 className="mt-7 max-w-[340px] text-[clamp(2.3rem,9.4vw,6.4rem)] font-semibold leading-[0.96] text-white sm:max-w-[1160px]" variants={heroVariants}>
                  Measure and Grow AI-ready
                  <br />
                  workforce skills with
                  <br />
                  realistic work simulations.
                </motion.h1>
                <motion.p className="mt-7 max-w-[340px] text-lg leading-7 text-white/78 sm:max-w-2xl sm:text-xl sm:leading-8" variants={heroVariants}>
                  We create AI-scaled, case-based simulations that reveal how people use AI, adapt to feedback, and collaborate with others under realistic workplace constraints.
                </motion.p>
                <motion.div className="mt-10 grid max-w-[340px] gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:[&>div]:w-auto [&>div]:w-full" variants={heroVariants}>
                  <CtaButton className="h-12 w-full rounded-md bg-[#b31b1b] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(179,27,27,0.35)] hover:bg-[#8f1414] sm:w-auto" href="#evidence" size="lg">
                    Explore the model
                    <ArrowRightIcon data-icon="inline-end" />
                  </CtaButton>
                  <CtaButton className="h-12 w-full rounded-md border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/18 sm:w-auto" href="#team" size="lg" variant="outline">
                    Meet our team
                  </CtaButton>
                </motion.div>
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
                  Workforce decisions need better evidence of real capability.
                </h2>
              </div>
              <p className="max-w-2xl text-xl leading-9 text-[#444]">
                Employers need to see how people frame problems, use AI, evaluate evidence, adapt to feedback, and communicate decisions in role-relevant work.
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

        <section id="framework" className="border-b border-[#d8d2ca] bg-[#fbfaf7] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid items-end gap-8 lg:grid-cols-[0.78fr_1fr]">
              <div>
                <SectionLabel>Framework</SectionLabel>
                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                  Three competencies define AI-ready work.
                </h2>
              </div>
              <p className="max-w-2xl text-xl leading-9 text-[#444]">
                Our framework separates practical AI use from the human capabilities that make AI-supported work effective, trustworthy, and learnable.
              </p>
            </Reveal>

            <StaggerGroup className="mt-14 grid gap-10 md:grid-cols-3">
              {frameworkPillars.map((item) => (
                <FrameworkPillar key={item.title} item={item} />
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
                  Case-based simulations that make work visible.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#555]">
                Each simulation links role-relevant tasks, source materials, AI collaboration, work artifacts, and reviewer evidence into an inspectable assessment record.
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
                  A common work pattern reveals AI-ready behavior.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#555]">
                Across roles, simulations follow a shared pattern: plan the work, prepare the evidence, collaborate with AI, adapt through feedback, and deliver a decision-ready artifact.
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
                AI scales the evidence. Humans own the decision.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#555]">
                The system is designed around visible behavioral evidence, reviewer calibration, feedback, and partner learning—not opaque scores.
              </p>
            </Reveal>
            <Reveal className="overflow-hidden rounded-lg border border-[#d8d2ca] bg-white shadow-[0_24px_70px_rgba(80,48,30,0.08)]">
              <div className="relative aspect-[16/10] min-h-[340px]">
                <Image
                  alt="Light assessment evidence loop connecting simulation, evidence, review, and scoring"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  src={withSiteBasePath("/images/aiw-assessment-loop-light.png")}
                />
              </div>
            </Reveal>
          </div>
        </section>
        
        <section>
          <SectionLabel>Growth and validation</SectionLabel>
            <h2>Measure capability, then help people improve.</h2>
            <p>
              Simulations can be used for hiring and promotion, but also for upskilling, internal mobility, and workforce-wide AI-readiness assessment. Participants receive feedback, try again, and demonstrate how quickly they adapt.
            </p>
        </section>
        
        <section id="team" className="border-b border-[#d8d2ca] bg-[#fbfaf7] px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="mx-auto max-w-3xl text-center">
              <div>
                <SectionLabel>Our team</SectionLabel>
                <h2 className="mt-5 text-5xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
                  Team
                </h2>
              </div>
            </Reveal>

            <StaggerGroup className="mx-auto mt-14 grid max-w-[1080px] gap-x-7 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {people.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </StaggerGroup>
          </div>

          <div className="mt-10 flex justify-center">
            <CtaButton href={contactHref} variant="secondary" size="lg">Contact the team</CtaButton>
          </div>
        </section>

        <footer id="contact" className="bg-[#b31b1b] px-5 py-12 text-white lg:px-8">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid gap-10 border-b border-white/25 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase text-white/75">Contact</p>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
                  Partner with us to build and validate AI-ready workforce simulations. We are recruiting employer partners to co-design realistic use cases, pilot simulations, and evaluate evidence together.
                </h2>
                <div className="mt-7 grid gap-2 text-base leading-7 text-white/82">
                  <p>Location: Computing and Information Science Building 363, Cornell University, Ithaca, NY.</p>
                </div>
              </div>
              <CtaButton className="h-12 rounded-md bg-white px-7 text-sm font-semibold text-[#b31b1b] hover:bg-[#f2e9e4]" href={contactHref} size="lg">
                Contact the team
                <MailIcon data-icon="inline-end" />
              </CtaButton>
            </Reveal>

            <div className="grid gap-8 pt-8 lg:grid-cols-[1.2fr_0.55fr] lg:items-end">
              <div className="grid gap-8">
                <div>
                  <p className="text-xs font-bold uppercase text-white/70">Partners</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {institutionalLogos.map((logo) => (
                      <LogoTile key={logo.name} logo={logo} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-white/70">Supporters</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {supporterLogos.map((logo) => (
                      <LogoTile key={logo.name} logo={logo} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-6 lg:justify-items-end">
                <div className="flex flex-wrap gap-6 text-sm font-semibold text-white/85 lg:justify-end">
                  {navItems.map((item) => (
                    <a key={item.href} className="transition hover:text-white" href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-white/75">&copy; 2026 AI-Ready Workforce.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </MotionConfig>
  );
}
