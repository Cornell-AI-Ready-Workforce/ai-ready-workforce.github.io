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
  LinkIcon,
  MailIcon,
  MessageSquareTextIcon,
  OrbitIcon,
  PresentationIcon,
  RefreshCcwIcon,
  RouteIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<{ className?: string }>;

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: smoothEase },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: smoothEase },
  },
};

const navItems = [
  { label: "Evidence", href: "#evidence" },
  { label: "Evidence Map", href: "#framework" },
  { label: "Loop", href: "#platform" },
  { label: "Pilots", href: "#pilots" },
  { label: "Science", href: "#science" },
];

const heroSignals = [
  {
    icon: OrbitIcon,
    title: "Simulation-based",
    text: "Role-relevant tasks with source materials and deliverables.",
  },
  {
    icon: FileSearchIcon,
    title: "Evidence-linked",
    text: "Scores connect to artifacts, rubric anchors, and reviewer notes.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Human-decided",
    text: "AI structures evidence. Trained reviewers own the call.",
  },
];

const evidenceChapters = [
  {
    icon: OrbitIcon,
    title: "Case-based work simulation",
    text: "Simulation-based competency assessments reflect real work, transferable skills, and visible work artifacts.",
    source: "Assessment model",
  },
  {
    icon: WorkflowIcon,
    title: "Six Practices Evidence Map",
    text: "Plan, Prompt, Probe, Protect, Pivot, and Present turn AI collaboration into observable practices reviewers can inspect.",
    source: "Evidence map",
  },
  {
    icon: FileSearchIcon,
    title: "Evidence-linked evaluation",
    text: "Every score should trace to decisions, artifacts, rubric anchors, and reviewer notes instead of standing alone as a black-box output.",
    source: "Review method",
  },
  {
    icon: UsersIcon,
    title: "AI prepares, humans decide",
    text: "Agents structure evidence and surface patterns while trained reviewers interpret, adjust, approve, or send work back.",
    source: "Governance",
  },
];

const practices = [
  {
    icon: CompassIcon,
    title: "Plan",
    text: "Frame the task, goals, constraints, and where AI belongs.",
  },
  {
    icon: MessageSquareTextIcon,
    title: "Prompt",
    text: "Brief AI with context, criteria, boundaries, and role needs.",
  },
  {
    icon: SearchCheckIcon,
    title: "Probe",
    text: "Check sources, formulas, assumptions, and competing answers.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Protect",
    text: "Work within policy, privacy, data, fairness, and safety limits.",
  },
  {
    icon: RefreshCcwIcon,
    title: "Pivot",
    text: "Change approach when evidence, feedback, or AI errors appear.",
  },
  {
    icon: PresentationIcon,
    title: "Present",
    text: "Deliver the recommendation, tradeoffs, next steps, and rationale.",
  },
];

const platformModules = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Work modeling",
    text: "Experts and AI draft the case, rubric, source materials, policy, and review rules together.",
  },
  {
    icon: SparklesIcon,
    title: "Run simulation",
    text: "Candidates complete realistic work with AI as part of the task environment, not as an afterthought.",
  },
  {
    icon: FileSearchIcon,
    title: "AI evaluation",
    text: "Scores trace back to evidence fragments, rubric anchors, reviewer notes, and visible reasoning.",
  },
  {
    icon: UsersIcon,
    title: "Reviewer calibration",
    text: "Reviewers resolve disagreement and update anchors so assessment quality improves over time.",
  },
  {
    icon: RouteIcon,
    title: "Mobility pathways",
    text: "Evidence becomes a useful signal for hiring, development, and movement into emerging opportunities.",
  },
];

const pilotTracks = [
  {
    icon: HandshakeIcon,
    title: "Relational skills",
    text: "AI interview pilots explore communication, empathy, conflict resolution, and psychological safety.",
  },
  {
    icon: BriefcaseBusinessIcon,
    title: "Case-based assessment",
    text: "Work-sample simulations test AI collaboration through realistic source materials and deliverables.",
  },
  {
    icon: BrainCircuitIcon,
    title: "Cognitive flexibility",
    text: "The research stream examines learning agility, adaptation, and how people acquire new skills.",
  },
];

const sciencePrinciples = [
  {
    title: "Explainable by design",
    text: "Assessment evidence must remain visible enough for reviewers, workers, employers, and partners to understand.",
  },
  {
    title: "Fair and accountable",
    text: "AI is a supplement to human decision-making, with review, confidence, and audit trails built into consequential moments.",
  },
  {
    title: "Built with partners",
    text: "Durable workforce signals require employers, educators, researchers, and workforce leaders to shape the same evidence loop.",
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
      whileHover={reducedMotion ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reducedMotion ? undefined : { y: 0, scale: 0.985 }}
      transition={{ duration: 0.22, ease: smoothEase }}
    >
      <Button nativeButton={false} render={<Link href={href} />} variant={variant} size={size} className={className}>
        {children}
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
      viewport={{ once: true, amount: 0.2 }}
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
    <motion.div className={className} initial="hidden" variants={staggerVariants} viewport={{ once: true, amount: 0.18 }} whileInView="visible">
      {children}
    </motion.div>
  );
}

function MotionCard({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={reducedMotion ? undefined : revealVariants}
      whileHover={reducedMotion ? undefined : { y: -8, scale: 1.01 }}
      transition={{ duration: 0.32, ease: smoothEase }}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  );
}

function MotionMedia({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92, y: 42 }}
      transition={{ duration: 0.9, ease: smoothEase }}
      viewport={{ once: true, amount: 0.28 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

function LogoGlyph({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-8 shrink-0", className)}>
      <div className="absolute left-0 top-2 h-5 w-6 skew-x-[-18deg] rounded-md bg-[#d9a84e]" />
      <div className="absolute left-3 top-0 h-7 w-3.5 skew-x-[22deg] rounded-md bg-[#ffe2a4]" />
      <div className="absolute bottom-0 right-0 size-3 rounded-sm bg-[#8d5b19]" />
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <LogoGlyph />
      <span className="text-[11px] font-extrabold leading-none text-[#fff5e6]">
        AI-READY
        <br />
        WORKFORCE
      </span>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#d9a84e]">{children}</p>;
}

function IconFrame({ icon: Icon, className }: { icon: IconComponent; className?: string }) {
  return (
    <div className={cn("flex size-11 items-center justify-center rounded-md border border-[#6d4c20] bg-[#15110b] text-[#f1be62]", className)}>
      <Icon className="size-5" />
    </div>
  );
}

function HeroCallout({
  icon: Icon,
  title,
  text,
  className,
}: {
  icon: IconComponent;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("absolute hidden max-w-[250px] items-center gap-4 text-left text-[#d7cbb8] lg:flex", className)}
      variants={revealVariants}
    >
      <IconFrame icon={Icon} className="size-12 rounded-full bg-[#0a0602] shadow-[0_0_34px_rgba(241,190,98,0.22)]" />
      <div>
        <p className="text-sm font-semibold text-[#fff5e6]">{title}</p>
        <p className="mt-1 text-xs leading-5 text-[#b9ad9b]">{text}</p>
      </div>
    </motion.div>
  );
}

function EvidenceCard({ item }: { item: (typeof evidenceChapters)[number] }) {
  const Icon = item.icon;

  return (
    <MotionCard className="group rounded-lg border-[#332715] bg-[#0c0a07]/92 text-[#fff5e6] shadow-[0_20px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:border-[#7b5a2b]">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-5">
          <IconFrame icon={Icon} />
          <Badge className="rounded-md border-[#4a371c] bg-[#16110a] px-2 py-1 text-[11px] text-[#d9a84e]" variant="outline">
            {item.source}
          </Badge>
        </div>
        <h3 className="mt-10 text-2xl font-semibold leading-tight text-[#fff5e6]">{item.title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#b9ad9b]">{item.text}</p>
      </CardContent>
    </MotionCard>
  );
}

function PracticeNode({ item }: { item: (typeof practices)[number] }) {
  const Icon = item.icon;

  return (
    <MotionCard className="rounded-lg border-[#332715] bg-[#0b0906] text-[#fff5e6] transition duration-300 hover:border-[#7b5a2b]">
      <CardContent className="p-5">
        <IconFrame icon={Icon} className="size-10" />
        <h3 className="mt-8 text-2xl font-semibold leading-none text-[#f4c875]">{item.title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#b9ad9b]">{item.text}</p>
      </CardContent>
    </MotionCard>
  );
}

function ModuleRow({ item }: { item: (typeof platformModules)[number] }) {
  const Icon = item.icon;

  return (
    <motion.div className="grid gap-5 border-b border-[#332715] py-6 last:border-b-0 sm:grid-cols-[56px_1fr]" variants={revealVariants}>
      <IconFrame icon={Icon} />
      <div>
        <h3 className="text-2xl font-semibold leading-tight text-[#fff5e6]">{item.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#b9ad9b]">{item.text}</p>
      </div>
    </motion.div>
  );
}

function PilotCard({ item }: { item: (typeof pilotTracks)[number] }) {
  const Icon = item.icon;

  return (
    <MotionCard className="rounded-lg border-[#332715] bg-[#0f0c08] text-[#fff5e6]">
      <CardContent className="p-7">
        <IconFrame icon={Icon} />
        <h3 className="mt-10 text-3xl font-semibold leading-tight">{item.title}</h3>
        <p className="mt-4 text-sm leading-6 text-[#b9ad9b]">{item.text}</p>
      </CardContent>
    </MotionCard>
  );
}

export function FrontierLabLandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: platformScroll } = useScroll({
    target: platformRef,
    offset: ["start end", "end start"],
  });
  const heroVisualY = useTransform(heroScroll, [0, 1], ["0%", "5%"]);
  const heroVisualScale = useTransform(heroScroll, [0, 1], [1, 1.035]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "-5%"]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.72, 1], [1, 0.95, 0.82]);
  const platformImageY = useTransform(platformScroll, [0, 1], ["6%", "-8%"]);
  const platformImageScale = useTransform(platformScroll, [0, 0.5, 1], [0.95, 1, 1.04]);

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: smoothEase }}>
      <main className="min-h-screen overflow-x-hidden bg-[#060504] text-[#fff5e6]">
      <section ref={heroRef} className="relative min-h-[calc(100svh-24px)] overflow-hidden border-b border-[#332715] bg-[#020100]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(241,190,98,0.24),transparent_25%),radial-gradient(circle_at_50%_4%,rgba(255,185,96,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(207,118,23,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(207,118,23,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(232,145,46,0.18),transparent_62%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-24px)] max-w-[1440px] flex-col px-6 py-6 lg:px-10">
          <motion.nav
            animate={reducedMotion ? undefined : "visible"}
            aria-label="Main navigation"
            className="flex items-center justify-between gap-5"
            initial={reducedMotion ? undefined : "hidden"}
            variants={heroVariants}
          >
            <Link href="/concepts" aria-label="AI-Ready Workforce concepts">
              <LogoMark />
            </Link>
            <NavigationMenu className="hidden flex-none lg:flex">
              <NavigationMenuList className="gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className="rounded-md px-3 py-2 text-[12px] font-medium text-[#d7cbb8] transition hover:bg-[#18120a] hover:text-[#f1be62] focus:bg-[#18120a] focus:text-[#f1be62]"
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3">
              <Button
                className="hidden h-auto px-0 text-[12px] font-medium text-[#d7cbb8] hover:bg-transparent hover:text-[#f1be62] sm:inline-flex"
                nativeButton={false}
                render={<Link href="#science" />}
                variant="ghost"
              >
                Science brief
              </Button>
              <CtaButton className="h-11 rounded-md bg-[#f1be62] px-5 text-sm text-[#130d05] transition active:scale-[0.98] hover:bg-[#ffe0a0]" href="mailto:hello@example.com">
                Discuss a Pilot
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
            </div>
          </motion.nav>

          <motion.div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-16" style={reducedMotion ? undefined : { y: heroTextY, opacity: heroTextOpacity }}>
            <motion.div animate={reducedMotion ? undefined : "visible"} className="order-1 text-left" initial={reducedMotion ? undefined : "hidden"} variants={staggerVariants}>
              <motion.div variants={heroVariants}>
                <Badge className="rounded-md border-[#4a371c] bg-[#15100a]/82 px-3 py-1.5 text-sm text-[#f1be62]" variant="outline">
                  Assessment for AI-era work
                </Badge>
              </motion.div>
              <motion.h1 className="mt-7 max-w-[820px] font-serif text-[clamp(4rem,7.1vw,8.8rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#fff5e6] text-balance" variants={heroVariants}>
                Measure how people collaborate with AI before hiring.
              </motion.h1>
              <motion.div className="mt-10 flex flex-wrap gap-3" variants={heroVariants}>
                <CtaButton className="h-12 rounded-md bg-[#f1be62] px-6 text-sm text-[#130d05] transition active:scale-[0.98] hover:bg-[#ffe0a0]" href="#evidence" size="lg">
                  Explore Evidence
                  <ArrowRightIcon data-icon="inline-end" />
                </CtaButton>
                <CtaButton className="h-12 rounded-md border-[#6d4c20] bg-[#090705]/70 px-6 text-sm text-[#fff5e6] transition active:scale-[0.98] hover:bg-[#18120a]" href="mailto:hello@example.com" size="lg" variant="outline">
                  Discuss a Pilot
                </CtaButton>
              </motion.div>

              <StaggerGroup className="mt-10 flex max-w-[760px] flex-wrap gap-3">
                {heroSignals.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <motion.div
                      key={signal.title}
                      className="inline-flex items-center gap-2 rounded-md border border-[#332715] bg-[#090705]/72 px-3 py-2 text-left transition-colors duration-300 hover:border-[#7b5a2b] hover:bg-[#130e08]/72"
                      variants={revealVariants}
                      whileHover={reducedMotion ? undefined : { y: -3, scale: 1.01 }}
                    >
                      <Icon className="size-4 shrink-0 text-[#f1be62]" />
                      <span className="text-xs font-semibold text-[#fff5e6]">{signal.title}</span>
                    </motion.div>
                  );
                })}
              </StaggerGroup>
            </motion.div>

            <motion.div animate={reducedMotion ? undefined : "visible"} className="order-2 w-full" initial={reducedMotion ? undefined : "hidden"} variants={staggerVariants}>
              <div className="relative mx-auto flex min-h-[360px] w-full max-w-[720px] items-center justify-center sm:min-h-[440px] lg:min-h-[590px]">
                <HeroCallout className="left-0 top-[18%]" icon={OrbitIcon} text="Role-relevant tasks. Real outcomes." title="Simulation assessment" />
                <HeroCallout className="bottom-[16%] left-[6%]" icon={UsersIcon} text="Expert feedback. Fair decisions." title="Human review" />
                <HeroCallout className="right-0 top-[31%]" icon={SparklesIcon} text="Context-aware support that builds capability." title="AI guidance" />
                <motion.div
                  className="relative flex size-[260px] items-center justify-center rounded-full border border-[#ff982d]/50 bg-[radial-gradient(circle,rgba(255,194,113,0.38),rgba(214,104,12,0.12)_42%,transparent_70%)] shadow-[0_0_100px_rgba(255,145,38,0.48)] sm:size-[390px] lg:size-[430px] motion-safe:animate-[aiw-portal-drift_13s_ease-in-out_infinite]"
                  style={reducedMotion ? undefined : { y: heroVisualY, scale: heroVisualScale }}
                  variants={heroVariants}
                >
                  <div className="absolute inset-4 rounded-full border border-[#ffae52]/30" />
                  <div className="absolute inset-12 rounded-full border border-dashed border-[#ffc174]/30" />
                  <div className="absolute h-px w-[78%] rotate-12 bg-[#ffae52]/35" />
                  <div className="absolute h-px w-[72%] -rotate-[32deg] bg-[#ffae52]/30" />
                  <div className="absolute h-px w-[62%] rotate-[55deg] bg-[#ffae52]/25" />
                  <div className="absolute left-[26%] top-[30%] size-2 rounded-full bg-[#ffc174] shadow-[0_0_18px_6px_rgba(255,172,62,0.42)]" />
                  <div className="absolute right-[28%] top-[38%] size-1.5 rounded-full bg-[#ffe2a9] shadow-[0_0_16px_5px_rgba(255,172,62,0.36)]" />
                  <div className="absolute bottom-[30%] left-[38%] size-1.5 rounded-full bg-[#ffbd68] shadow-[0_0_16px_5px_rgba(255,172,62,0.34)]" />
                  <div className="size-4 rounded-full bg-[#ffe2a9] shadow-[0_0_35px_12px_rgba(255,172,62,0.7)]" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="evidence" className="relative overflow-hidden border-b border-[#332715] bg-[#060504] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <SectionLabel>Evidence system</SectionLabel>
            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-none text-[#fff5e6] sm:text-6xl lg:text-7xl">
              Evidence should feel observable, not claimed.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#b9ad9b]">
              The strongest public story for AI-Ready Workforce is not a generic talent metric. It is a chain
              from real work, to artifacts, to rubrics, to reviewer judgment.
            </p>
          </Reveal>
          <MotionMedia>
            <Card className="overflow-hidden rounded-lg border-[#332715] bg-[#0b0906] shadow-[0_40px_130px_rgba(0,0,0,0.38)]">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    alt="Black and gold six-node evidence spine for AI-ready work practices"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 820px, 100vw"
                    src="/images/aiw-dark-evidence-spine.png"
                  />
                </div>
              </CardContent>
            </Card>
          </MotionMedia>
        </div>

        <StaggerGroup className="mx-auto mt-16 grid max-w-[1320px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {evidenceChapters.map((item) => (
            <EvidenceCard key={item.title} item={item} />
          ))}
        </StaggerGroup>
      </section>

      <section id="framework" className="border-b border-[#332715] bg-[#0a0805] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="grid items-end gap-8 lg:grid-cols-[1fr_0.62fr]">
            <div>
              <SectionLabel>Six Practices Evidence Map</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-[#fff5e6] sm:text-6xl lg:text-7xl">
                Six practices make AI-ready work reviewable.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#b9ad9b]">
              The framework turns broad AI literacy into behaviors a reviewer can observe inside a realistic
              work sample.
            </p>
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {practices.map((item) => (
              <PracticeNode key={item.title} item={item} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section ref={platformRef} id="platform" className="relative overflow-hidden border-b border-[#332715] bg-[#060504] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="grid items-end gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <SectionLabel>Assessment Evidence Loop</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-[#fff5e6] sm:text-6xl lg:text-7xl">
                A complete loop from case design to mobility signal.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#b9ad9b]">
              The platform acts as an assessment instrument: fewer panels, clearer evidence, and a visible path
              from simulation to reviewer calibration.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_0.75fr] lg:items-start">
            <MotionMedia className="lg:sticky lg:top-10">
              <Card className="overflow-hidden rounded-lg border-[#332715] bg-[#0b0906] shadow-[0_40px_130px_rgba(0,0,0,0.42)]">
                <CardContent className="p-0">
                  <motion.div className="relative min-h-[360px] bg-[#060504] lg:min-h-[620px]" style={reducedMotion ? undefined : { y: platformImageY, scale: platformImageScale }}>
                    <Image
                      alt="Dark platform system connecting simulation, review, mobility, and governance modules"
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 720px, 100vw"
                      src="/images/aiw-dark-platform-system.png"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </MotionMedia>
            <Card className="rounded-lg border-[#332715] bg-[#0b0906] text-[#fff5e6] shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
              <CardContent className="p-6 lg:p-9">
                <StaggerGroup>
                  {platformModules.map((item) => (
                    <ModuleRow key={item.title} item={item} />
                  ))}
                </StaggerGroup>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pilots" className="border-b border-[#332715] bg-[#0a0805] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-10">
              <SectionLabel>Pilot pathways</SectionLabel>
              <h2 className="mt-5 text-5xl font-semibold leading-none text-[#fff5e6] sm:text-6xl">
                Start with real constructs, not generic AI fluency.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#b9ad9b]">
                The leadership materials point to three practical research streams: relational skills,
                case-based AI collaboration, and cognitive flexibility.
              </p>
            </Reveal>
            <StaggerGroup className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {pilotTracks.map((item) => (
                <PilotCard key={item.title} item={item} />
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section id="science" className="border-b border-[#332715] bg-[#060504] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionLabel>Science and governance</SectionLabel>
            <h2 className="mt-5 text-5xl font-semibold leading-none text-[#fff5e6] sm:text-6xl lg:text-7xl">
              Trust is earned in the review loop.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#b9ad9b]">
              The site should make a simple claim: AI can help prepare evidence, but consequential interpretation
              stays accountable to trained people.
            </p>
          </Reveal>
          <StaggerGroup className="grid gap-px overflow-hidden rounded-lg border border-[#332715] bg-[#332715]">
            {sciencePrinciples.map((item) => (
              <motion.div key={item.title} className="bg-[#0b0906] p-8" variants={revealVariants}>
                <h3 className="text-3xl font-semibold leading-tight text-[#f4c875]">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#b9ad9b]">{item.text}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <footer className="bg-[#0a0805] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="grid items-end gap-10 pb-10 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionLabel>Get started</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-[#f1be62] sm:text-6xl">
                Build a signal people can inspect.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#b9ad9b]">
                Bring employers, educators, researchers, and workforce leaders into one evidence loop for
                AI-era work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CtaButton className="h-12 rounded-md bg-[#f1be62] px-7 text-sm text-[#130d05] transition active:scale-[0.98] hover:bg-[#ffe0a0]" href="mailto:hello@example.com" size="lg">
                Discuss a Pilot
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
              <CtaButton className="h-12 rounded-md border-[#6d4c20] bg-transparent px-7 text-sm text-[#fff5e6] transition active:scale-[0.98] hover:bg-[#18120a]" href="#evidence" size="lg" variant="outline">
                Review Evidence
              </CtaButton>
            </div>
          </Reveal>
          <Separator className="bg-[#332715]" />
          <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
            <Link href="/concepts" aria-label="AI-Ready Workforce concepts">
              <LogoMark />
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-[#b9ad9b]">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[#b9ad9b]">
              <span className="text-sm">&copy; 2026 AI-Ready Workforce Institute.</span>
              <LinkIcon className="size-4" />
              <MailIcon className="size-4" />
            </div>
          </div>
        </div>
      </footer>
      </main>
    </MotionConfig>
  );
}
