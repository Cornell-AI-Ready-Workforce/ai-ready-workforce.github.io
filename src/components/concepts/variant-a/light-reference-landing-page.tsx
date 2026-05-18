"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { useRef } from "react";
import { MotionConfig, motion, useReducedMotion, useScroll, useTransform, type MotionValue, type Variants } from "motion/react";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BarChart3Icon,
  BriefcaseBusinessIcon,
  CirclePlayIcon,
  CompassIcon,
  FileSearchIcon,
  GraduationCapIcon,
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
  hidden: { opacity: 0, y: 38, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: smoothEase },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: smoothEase },
  },
};

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Evidence", href: "#evidence" },
  { label: "Platform", href: "#platform" },
  { label: "Science", href: "#science" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const partnerLogos = ["Wegmans", "M&T Bank", "paychex", "Cornell University", "Strada", "eCornell"];

const heroSignals = [
  {
    title: "Simulation-based",
    text: "Real work, not proxy credentials",
    icon: OrbitIcon,
  },
  {
    title: "Evidence-linked",
    text: "Scores trace back to artifacts",
    icon: FileSearchIcon,
  },
  {
    title: "Human-reviewed",
    text: "AI prepares. Reviewers decide.",
    icon: BadgeCheckIcon,
  },
];

const evidenceSignals = [
  {
    icon: BarChart3Icon,
    title: "Authentic measures",
    label: "Simulation-based assessments reflect real work, transferable skills, and learning pathways.",
    source: "Vision slide",
  },
  {
    icon: WorkflowIcon,
    title: "6P evidence map",
    label: "Plan, Prompt, Probe, Protect, Pivot, and Present frame observable AI-ready work.",
    source: "Prototype Demo 2",
  },
  {
    icon: FileSearchIcon,
    title: "Evidence-linked review",
    label: "Scores connect to decisions, artifacts, rubric anchors, and reviewer notes.",
    source: "Design principles",
  },
  {
    icon: UsersIcon,
    title: "Human-centered AI",
    label: "AI structures evidence and surfaces patterns; trained human reviewers own the final call.",
    source: "Leadership transcript",
  },
];

const practices = [
  {
    icon: CompassIcon,
    title: "Plan",
    text: "Frame the task, constraints, and fit for AI support.",
  },
  {
    icon: MessageSquareTextIcon,
    title: "Prompt",
    text: "Brief the model with context, criteria, and role needs.",
  },
  {
    icon: SearchCheckIcon,
    title: "Probe",
    text: "Check evidence, limits, and competing explanations.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Protect",
    text: "Handle risk, privacy, bias, and responsible use.",
  },
  {
    icon: RefreshCcwIcon,
    title: "Pivot",
    text: "Adapt when evidence changes or the first path fails.",
  },
  {
    icon: PresentationIcon,
    title: "Present",
    text: "Explain the decision, tradeoffs, and final recommendation.",
  },
];

const platformModules = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Work modeling",
    text: "Employers define real tasks, source materials, and success criteria.",
  },
  {
    icon: SparklesIcon,
    title: "Simulation assessment",
    text: "Candidates work through role-relevant scenarios with AI as part of the environment.",
  },
  {
    icon: FileSearchIcon,
    title: "Reviewer console",
    text: "AI organizes evidence and proposes rubric scores for trained human review.",
  },
  {
    icon: RouteIcon,
    title: "Mobility map",
    text: "Evidence becomes a signal for growth, adjacent roles, and training pathways.",
  },
];

const solutionSteps = [
  {
    title: "Define",
    text: "Translate AI-era work into observable tasks with employers and educators.",
  },
  {
    title: "Assess",
    text: "Run realistic simulations that produce artifacts, decisions, and explanations.",
  },
  {
    title: "Review",
    text: "Anchor AI-supported scoring to rubrics, notes, and human judgment.",
  },
  {
    title: "Mobilize",
    text: "Turn the evidence into development paths and trusted opportunity signals.",
  },
];

const impactItems = [
  {
    icon: BriefcaseBusinessIcon,
    title: "For employers",
    text: "Higher-quality hiring signals for teams adapting to AI-enabled work.",
  },
  {
    icon: GraduationCapIcon,
    title: "For workers",
    text: "Clearer evidence of skill, growth, and readiness for new roles.",
  },
  {
    icon: HandshakeIcon,
    title: "For communities",
    text: "A stronger bridge between local talent, training, and economic mobility.",
  },
];

const dotOpacities = ["opacity-20", "opacity-30", "opacity-40", "opacity-50", "opacity-60", "opacity-70", "opacity-80", "opacity-90", "opacity-100"];

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
      transition={{ duration: 0.2, ease: smoothEase }}
      whileHover={reducedMotion ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reducedMotion ? undefined : { y: 0, scale: 0.985 }}
    >
      <Button nativeButton={false} render={<Link href={href} />} variant={variant} size={size} className={className}>
        {children}
      </Button>
    </motion.div>
  );
}

function Reveal({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      id={id}
      initial="hidden"
      variants={revealVariants}
      viewport={{ once: true, amount: 0.22 }}
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
      transition={{ duration: 0.3, ease: smoothEase }}
      whileHover={reducedMotion ? undefined : { y: -4, scale: 1.004 }}
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
      initial={{ opacity: 0, scale: 0.94, y: 38 }}
      transition={{ duration: 0.82, ease: smoothEase }}
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
      <div className="absolute left-0 top-2 h-5 w-6 skew-x-[-18deg] rounded-[6px] bg-[#3155e7]" />
      <div className="absolute left-3 top-0 h-7 w-3.5 skew-x-[22deg] rounded-[6px] bg-[#7ca0ff]" />
      <div className="absolute bottom-0 right-0 size-3 rounded-[3px] bg-[#2237bf]" />
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoGlyph />
      <span className="text-[11px] font-extrabold leading-[0.95] tracking-tight text-[#0b1028]">
        AI-READY
        <br />
        WORKFORCE
      </span>
    </div>
  );
}

function PartnerLogo({ partner }: { partner: string }) {
  if (partner === "Wegmans") {
    return <span className="font-serif text-[13px] font-bold italic tracking-[-0.06em]">Wegmans</span>;
  }

  if (partner === "M&T Bank") {
    return <span className="font-serif text-[13px] font-bold tracking-[-0.04em]">M&amp;TBank</span>;
  }

  if (partner === "paychex") {
    return <span className="text-[14px] font-extrabold tracking-[-0.05em]">paychex</span>;
  }

  if (partner === "Cornell University") {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="flex size-5 items-center justify-center rounded-full border border-[#7c8497] text-[7px] font-semibold">CU</span>
        <span className="font-serif text-[9px] font-semibold tracking-[-0.03em]">Cornell University</span>
      </span>
    );
  }

  if (partner === "Strada") {
    return (
      <span className="inline-flex flex-col leading-none">
        <span className="text-[14px] font-extrabold tracking-[-0.07em]">Strada</span>
        <span className="text-[4px] font-semibold uppercase tracking-[0.16em]">Education Network</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="size-4 rounded-[2px] border-2 border-[#111827]" />
      <span className="text-[12px] font-semibold tracking-[-0.04em]">eCornell</span>
    </span>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3155e7]">{children}</p>;
}

function IconBubble({ icon: Icon, className }: { icon: IconComponent; className?: string }) {
  return (
    <div className={cn("flex size-11 items-center justify-center rounded-full bg-[#edf4ff] text-[#3155e7]", className)}>
      <Icon className="size-5" />
    </div>
  );
}

function HeroCallout({
  icon: Icon,
  title,
  text,
  className,
  delay = 0,
  reverse = false,
}: {
  icon: IconComponent;
  title: string;
  text: string;
  className?: string;
  delay?: number;
  reverse?: boolean;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("absolute hidden max-w-[250px] items-center gap-4 text-left text-[#273653] drop-shadow-[0_1px_12px_rgba(255,255,255,0.9)] lg:flex", className)}
      initial={reducedMotion ? undefined : { opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.82, delay, ease: smoothEase }}
    >
      <div className={cn("flex items-center gap-4", reverse && "flex-row-reverse text-right", !reducedMotion && "motion-safe:animate-[aiw-float_8s_ease-in-out_infinite]")}>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#b9cdf4] bg-white/82 text-[#3155e7] shadow-[0_18px_54px_rgba(49,85,231,0.16)] backdrop-blur">
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[-0.02em] text-[#0b1028]">{title}</p>
          <p className="mt-1 text-xs leading-5 text-[#53617f]">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

function HeroVisual({
  glowOpacity,
  glowScale,
  imageScale,
  imageY,
}: {
  glowOpacity: MotionValue<number>;
  glowScale: MotionValue<number>;
  imageScale: MotionValue<number>;
  imageY: MotionValue<string>;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={reducedMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <div className="absolute inset-0 motion-safe:animate-[aiw-portal-drift_13s_ease-in-out_infinite]">
          <Image
            alt="Luminous research portal representing AI-ready workforce mobility"
            className="pointer-events-none select-none object-contain object-top md:hidden"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 1px"
            src="/images/aiw-hero-gpt-image-2-mobile.png"
          />
          <Image
            alt="Luminous research portal representing AI-ready workforce mobility"
            className="pointer-events-none hidden select-none object-cover object-[73%_50%] md:block lg:object-center"
            fill
            priority
            sizes="(min-width: 768px) 100vw, 1px"
            src="/images/aiw-hero-gpt-image-2-wide.png"
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute right-[12%] top-[12%] hidden h-[56%] w-[38%] rounded-full bg-[#85c7ff]/26 blur-3xl lg:block"
        style={reducedMotion ? undefined : { opacity: glowOpacity, scale: glowScale }}
      />
      <HeroCallout
        className="right-[29%] top-[18%]"
        delay={0.34}
        icon={FileSearchIcon}
        text="Scores trace back to artifacts."
        title="Evidence trace"
      />
      <HeroCallout
        className="right-[9%] top-[35%]"
        delay={0.44}
        icon={SparklesIcon}
        text="Context-aware support builds capability."
        title="AI guidance"
      />
      <HeroCallout
        className="bottom-[28%] right-[4%]"
        delay={0.54}
        icon={UsersIcon}
        reverse
        text="Expert feedback. Fair decisions."
        title="Human review"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,251,255,0.98)_0%,rgba(247,251,255,0.9)_58%,rgba(247,251,255,0.44)_100%)] md:bg-[linear-gradient(90deg,rgba(247,251,255,0.96)_0%,rgba(247,251,255,0.74)_35%,rgba(247,251,255,0.12)_67%,rgba(247,251,255,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,251,255,0.82)_0%,rgba(247,251,255,0)_21%,rgba(247,251,255,0)_76%,rgba(247,251,255,0.8)_100%)]" />
      <div className="absolute inset-x-[12%] bottom-[10%] h-px bg-[linear-gradient(90deg,transparent,rgba(49,85,231,0.45),transparent)] motion-safe:animate-[aiw-glow_4.5s_ease-in-out_infinite]" />
    </div>
  );
}

function EvidenceCard({ signal }: { signal: (typeof evidenceSignals)[number] }) {
  const Icon = signal.icon;

  return (
    <MotionCard className="group rounded-[22px] border-[#dce7f6] bg-white/75 shadow-[0_24px_70px_rgba(54,86,142,0.08)] backdrop-blur transition duration-300 hover:border-[#b9cdf4] hover:shadow-[0_28px_80px_rgba(49,85,231,0.14)]">
      <CardContent className="p-6">
        <IconBubble icon={Icon} />
        <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-[#0b1028]">{signal.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#4e5a76]">{signal.label}</p>
        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8a96ad]">{signal.source}</p>
      </CardContent>
    </MotionCard>
  );
}

function PracticeNode({ practice, index }: { practice: (typeof practices)[number]; index: number }) {
  const Icon = practice.icon;
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      transition={{ duration: 0.3, ease: smoothEase }}
      variants={reducedMotion ? undefined : revealVariants}
      whileHover={reducedMotion ? undefined : { y: -6 }}
    >
      <div className="hidden lg:absolute lg:left-1/2 lg:top-[22px] lg:h-px lg:w-full lg:bg-[#cbdcf4] lg:content-['']" aria-hidden="true" />
      <div className="relative z-10 rounded-[20px] border border-[#dce7f6] bg-white/80 p-5 shadow-[0_18px_50px_rgba(54,86,142,0.06)]">
        <div className="flex items-center justify-between gap-4">
          <IconBubble icon={Icon} className="size-10" />
          <span className="text-[11px] font-semibold text-[#8a96ad]">0{index + 1}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">{practice.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#53617e]">{practice.text}</p>
      </div>
    </motion.div>
  );
}

export function LightReferenceLandingPage() {
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
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "3%"]);
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.018]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "-5%"]);
  const heroTextOpacity = useTransform(heroScroll, [0, 0.74, 1], [1, 0.96, 0.82]);
  const portalGlowOpacity = useTransform(heroScroll, [0, 0.42, 1], [0.18, 0.72, 0.16]);
  const portalGlowScale = useTransform(heroScroll, [0, 1], [0.82, 1.2]);
  const platformImageY = useTransform(platformScroll, [0, 1], ["5%", "-7%"]);
  const platformImageScale = useTransform(platformScroll, [0, 0.5, 1], [0.96, 1, 1.04]);

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: smoothEase }}>
      <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#0b1028]">
      <section ref={heroRef} className="relative min-h-[calc(100svh-24px)] overflow-hidden border-b border-[#dce7f6] bg-[radial-gradient(circle_at_67%_18%,rgba(187,224,255,0.72),transparent_30%),radial-gradient(circle_at_92%_9%,rgba(255,231,204,0.78),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]">
        <HeroVisual glowOpacity={portalGlowOpacity} glowScale={portalGlowScale} imageScale={heroImageScale} imageY={heroImageY} />
        <div className="relative mx-auto flex min-h-[calc(100svh-24px)] max-w-[1440px] flex-col px-6 py-6 lg:px-10">
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
                      className="rounded-full px-3 py-2 text-[12px] font-medium text-[#18223c] transition hover:bg-white/70 hover:text-[#3155e7] focus:bg-white/70 focus:text-[#3155e7]"
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <Button
                className="hidden h-auto px-0 text-[12px] font-medium text-[#18223c] hover:bg-transparent hover:text-[#3155e7] sm:inline-flex"
                nativeButton={false}
                render={<Link href="#signin" />}
                variant="ghost"
              >
                Sign in
              </Button>
              <CtaButton className="h-11 rounded-full bg-[#3155e7] px-5 text-sm text-white shadow-[0_16px_36px_rgba(49,85,231,0.24)] transition active:scale-[0.98] hover:bg-[#2647d6]" href="mailto:hello@example.com">
                Book a Demo
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
            </div>
          </motion.nav>

          <div className="flex flex-1 items-center py-16 lg:py-20">
            <motion.div className="relative z-10 max-w-[920px]" style={reducedMotion ? undefined : { y: heroTextY, opacity: heroTextOpacity }}>
              <motion.div animate={reducedMotion ? undefined : "visible"} initial={reducedMotion ? undefined : "hidden"} variants={staggerVariants}>
                <motion.div variants={heroVariants}>
                  <Badge className="rounded-full border-0 bg-[#e7f0ff] px-4 py-1.5 text-[12px] text-[#3155e7]">
                    Institute for Human Advancement in the AI Economy
                  </Badge>
                </motion.div>
                <motion.h1 className="mt-8 max-w-[900px] text-[clamp(4.5rem,10.4vw,10.8rem)] font-semibold leading-[0.86] tracking-[-0.085em] text-balance lg:leading-[0.8]" variants={heroVariants}>
                  Build the <span className="text-[#3155e7]">AI-ready</span> workforce.
                </motion.h1>
                <motion.p className="mt-8 max-w-[650px] text-xl leading-9 text-[#34405d]" variants={heroVariants}>
                  Simulation-based assessments and evidence-linked review help employers see real capability,
                  help workers grow, and help communities build mobility in the AI economy.
                </motion.p>
                <motion.div className="mt-8 flex flex-wrap gap-3" variants={heroVariants}>
                  <CtaButton className="h-12 rounded-full bg-[#3155e7] px-6 text-sm text-white shadow-[0_16px_36px_rgba(49,85,231,0.22)] transition active:scale-[0.98] hover:bg-[#2647d6]" href="#platform" size="lg">
                    See the Platform
                    <ArrowRightIcon data-icon="inline-end" />
                  </CtaButton>
                  <CtaButton className="h-12 rounded-full border-[#b8c8ee] bg-white/70 px-6 text-sm text-[#3155e7] transition active:scale-[0.98] hover:bg-white" href="#evidence" size="lg" variant="outline">
                    <CirclePlayIcon data-icon="inline-start" />
                    View Evidence
                  </CtaButton>
                </motion.div>
              </motion.div>

              <StaggerGroup className="mt-14 grid max-w-[820px] overflow-hidden rounded-[30px] border border-[#d8e5f6] bg-white/58 shadow-[0_30px_100px_rgba(54,86,142,0.1)] backdrop-blur md:grid-cols-3">
                {heroSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <motion.div
                      key={signal.title}
                      className="border-b border-[#d8e5f6] p-5 transition-colors duration-300 hover:bg-white/62 md:border-r md:border-b-0 md:last:border-r-0"
                      variants={revealVariants}
                      whileHover={reducedMotion ? undefined : { y: -3 }}
                    >
                      <Icon className="size-5 text-[#3155e7]" />
                      <p className="mt-5 text-base font-semibold tracking-[-0.04em]">{signal.title}</p>
                      <p className="mt-1 text-xs leading-5 text-[#61708d]">{signal.text}</p>
                    </motion.div>
                  );
                })}
              </StaggerGroup>
            </motion.div>
          </div>

          <motion.div
            className="relative z-10 flex flex-col gap-4 border-t border-[#dce7f6] pt-6 lg:flex-row lg:items-center lg:justify-between"
            initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.68, ease: smoothEase }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8791a8]">
              Trusted by forward-thinking partners
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[#151b2e] opacity-90">
              {partnerLogos.map((partner) => (
                <PartnerLogo key={partner} partner={partner} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="evidence" className="relative overflow-hidden border-b border-[#dce7f6] bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <SectionLabel>Evidence system</SectionLabel>
            <h2 className="mt-5 max-w-[560px] text-[clamp(2.75rem,5vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-balance">
              Every score needs a visible chain of evidence.
            </h2>
            <p className="mt-7 max-w-[560px] text-lg leading-8 text-[#4e5a76]">
              The leadership materials point to a simple standard: AI can structure the evidence, but the
              assessment must stay anchored to observable work and trained human judgment.
            </p>
          </Reveal>
          <MotionMedia>
            <Card className="overflow-hidden rounded-[34px] border-[#dce7f6] bg-[#f7fbff] shadow-[0_34px_110px_rgba(54,86,142,0.14)]">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    alt="Glass evidence spine with six connected AI-ready work practices"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    src="/images/aiw-evidence-spine.png"
                  />
                </div>
              </CardContent>
            </Card>
          </MotionMedia>
        </div>

        <StaggerGroup className="mx-auto mt-16 grid max-w-[1320px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {evidenceSignals.map((signal) => (
            <EvidenceCard key={signal.title} signal={signal} />
          ))}
        </StaggerGroup>

        <div className="mx-auto mt-20 max-w-[1320px]">
          <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {practices.map((practice, index) => (
              <PracticeNode key={practice.title} practice={practice} index={index} />
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section id="mission" className="border-b border-[#dce7f6] bg-[#f7fbff] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <SectionLabel>Our solution</SectionLabel>
            <h2 className="mt-5 max-w-[640px] text-[clamp(2.6rem,5vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-balance">
              A public-good signal for skill, mobility, and opportunity.
            </h2>
            <p className="mt-7 max-w-[600px] text-lg leading-8 text-[#4e5a76]">
              AI-Ready Workforce combines employer co-design, simulation assessment, reviewer calibration,
              and mobility insight into one evidence loop.
            </p>
          </Reveal>

          <StaggerGroup className="grid gap-4">
            {solutionSteps.map((step, index) => (
              <MotionCard key={step.title} className="rounded-[26px] border-[#dce7f6] bg-white/80 shadow-[0_22px_70px_rgba(54,86,142,0.07)] transition duration-300 hover:shadow-[0_28px_86px_rgba(49,85,231,0.12)]">
                <CardContent className="grid gap-5 p-6 sm:grid-cols-[80px_1fr] sm:items-center">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-[#edf4ff] text-2xl font-semibold tracking-[-0.06em] text-[#3155e7]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#53617e]">{step.text}</p>
                  </div>
                </CardContent>
              </MotionCard>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section ref={platformRef} id="platform" className="relative overflow-hidden border-b border-[#dce7f6] bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
            <div>
              <SectionLabel>The AI-Ready Workforce platform</SectionLabel>
              <h2 className="mt-5 max-w-[820px] text-[clamp(2.75rem,5vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-balance">
                Infrastructure for workforce transformation.
              </h2>
            </div>
            <p className="max-w-[500px] text-lg leading-8 text-[#4e5a76] lg:pb-2">
              The platform is not just a test. It is a workflow for turning real work into evidence,
              evidence into review, and review into paths people can use.
            </p>
          </Reveal>

          <MotionMedia className="mt-14">
          <Card className="overflow-hidden rounded-[38px] border-[#dce7f6] bg-[#f7fbff] shadow-[0_40px_120px_rgba(54,86,142,0.14)]">
            <CardContent className="grid gap-0 p-0 lg:grid-cols-[1.12fr_0.88fr]">
              <motion.div
                className="relative min-h-[360px] bg-[radial-gradient(circle_at_45%_40%,rgba(191,225,255,0.52),transparent_42%),linear-gradient(180deg,#f9fcff,#eef6ff)] lg:min-h-[620px]"
                style={reducedMotion ? undefined : { y: platformImageY, scale: platformImageScale }}
              >
                <div className="absolute inset-0">
                  <Image
                    alt="Glass platform system connecting assessment, review, and mobility modules"
                    className="object-cover object-center"
                    fill
                    sizes="(min-width: 1024px) 680px, 100vw"
                    src="/images/aiw-platform-system.png"
                  />
                </div>
              </motion.div>
              <div className="grid gap-px bg-[#dce7f6]">
                {platformModules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <motion.div
                      key={module.title}
                      className="bg-white/88 p-8 transition duration-300 hover:bg-[#f7fbff]"
                      initial={reducedMotion ? undefined : { opacity: 0, x: 24 }}
                      transition={{ duration: 0.55, ease: smoothEase }}
                      viewport={{ once: true, amount: 0.28 }}
                      whileHover={reducedMotion ? undefined : { x: -4 }}
                      whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                    >
                      <IconBubble icon={Icon} />
                      <h3 className="mt-8 text-3xl font-semibold tracking-[-0.055em]">{module.title}</h3>
                      <p className="mt-4 max-w-[420px] text-base leading-7 text-[#53617e]">{module.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          </MotionMedia>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#eef6ff,#ffffff_50%,#f1f6ff)] px-6 py-20 lg:px-10 lg:py-24">
        <Reveal className="mx-auto max-w-[1180px] text-center">
          <SectionLabel>Our impact</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-[920px] text-[clamp(2.7rem,5vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-balance">
            Better signals. Better decisions. Better futures.
          </h2>
          <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-[#dce7f6] bg-[#dce7f6] text-left md:grid-cols-3">
            {impactItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} className="bg-white/78 p-8" variants={revealVariants}>
                  <Icon className="size-7 text-[#3155e7]" />
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.05em]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#53617e]">{item.text}</p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </Reveal>
      </section>

      <section id="science" className="border-b border-[#dce7f6] bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_220px_0.9fr]">
          <Reveal>
            <SectionLabel>Rooted in science</SectionLabel>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.1rem)] font-semibold leading-none tracking-[-0.055em]">Rigor you can trust.</h2>
            <p className="mt-6 max-w-[460px] text-base leading-7 text-[#53617e]">
              Our research program tests what works reliably, fairly, and at scale.
            </p>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3155e7]" href="#science">
              Explore our science
              <ArrowRightIcon className="size-4" />
            </Link>
          </Reveal>
          <MotionMedia className="hidden items-center justify-center lg:flex">
            <div className="grid grid-cols-14 gap-2 [clip-path:polygon(0_0,78%_0,100%_50%,78%_100%,0_100%,12%_50%)]">
              {Array.from({ length: 126 }).map((_, index) => (
                <span
                  key={index}
                  className={cn("size-2 rounded-full bg-[#3155e7]", dotOpacities[index % dotOpacities.length])}
                />
              ))}
            </div>
          </MotionMedia>
          <Reveal className="lg:pl-4" id="partners">
            <SectionLabel>Built with partners</SectionLabel>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.1rem)] font-semibold leading-none tracking-[-0.055em]">Together, we go further.</h2>
            <p className="mt-6 max-w-[500px] text-base leading-7 text-[#53617e]">
              We collaborate with employers, educators, researchers, and workforce leaders to create lasting change.
            </p>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3155e7]" href="#partners">
              See our partners
              <ArrowRightIcon className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className="bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="grid items-center gap-8 pb-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-[760px] text-[clamp(2.4rem,5vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-[#3155e7]">
                Let&apos;s build the future of work, together.
              </h2>
              <p className="mt-4 text-base text-[#53617e]">Join leading organizations advancing the AI-ready workforce.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CtaButton className="h-12 rounded-full bg-[#3155e7] px-8 text-sm text-white transition active:scale-[0.98] hover:bg-[#2647d6]" href="mailto:hello@example.com" size="lg">
                Book a Demo
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
              <CtaButton className="h-12 rounded-full border-[#b8c8ee] px-8 text-sm text-[#3155e7] transition active:scale-[0.98]" href="mailto:hello@example.com" size="lg" variant="outline">
                Contact Us
              </CtaButton>
            </div>
          </Reveal>
          <Separator className="bg-[#dce7f6]" />
          <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
            <LogoMark />
            <div className="flex flex-wrap gap-8 text-sm text-[#53617e]">
              {navItems.slice(1, 5).map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5 text-[#53617e]">
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
