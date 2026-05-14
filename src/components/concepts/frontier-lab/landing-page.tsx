import Link from "next/link";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import {
  ArrowRightIcon,
  BrainCircuitIcon,
  BriefcaseBusinessIcon,
  ChartNoAxesColumnIncreasingIcon,
  CheckIcon,
  GraduationCapIcon,
  HandshakeIcon,
  HexagonIcon,
  ListChecksIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const navItems = ["Platform", "Solutions", "Science", "Resources", "Company"];

const problemCards = [
  {
    icon: SparklesIcon,
    title: "Unclear skill needs",
    text: "AI is changing roles faster than job descriptions can keep up. Organizations lack a shared, granular view of the skills that drive performance.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Low-trust signals",
    text: "Resumes, titles, and credentials do not prove what someone can do. Generic tests and self-claims add more noise than clarity.",
  },
  {
    icon: ChartNoAxesColumnIncreasingIcon,
    title: "Weak mobility pathways",
    text: "Without trusted, comparable evidence of skills, workers cannot unlock opportunity and employers cannot confidently build what is next.",
  },
];

const workflowSteps = [
  {
    icon: ListChecksIcon,
    title: "Define real tasks",
    text: "Work experts define the outcomes, tasks, and quality standards.",
  },
  {
    icon: HexagonIcon,
    title: "Simulate work",
    text: "Candidates complete realistic, scenario-based tasks in the platform.",
  },
  {
    icon: SparklesIcon,
    title: "Support with AI guidance",
    text: "AI provides context-aware hints, resources, and feedback in the flow.",
  },
  {
    icon: UserCheckIcon,
    title: "Review with humans",
    text: "Expert reviewers validate performance and ensure fair, consistent decisions.",
  },
];

const platformFeatures = [
  {
    icon: ListChecksIcon,
    title: "Skill & Task Intelligence",
    text: "Stay ahead of change with evolving role and skill models.",
  },
  {
    icon: HexagonIcon,
    title: "Simulation Assessments",
    text: "Measure skills through realistic work simulations.",
  },
  {
    icon: SparklesIcon,
    title: "AI Guidance",
    text: "Deliver personalized support that builds capability in the flow.",
  },
  {
    icon: UserCheckIcon,
    title: "Human Review",
    text: "Combine AI efficiency with human judgment for fairness.",
  },
  {
    icon: ChartNoAxesColumnIncreasingIcon,
    title: "Insights & Mobility",
    text: "Turn evidence into clear decisions and mobility pathways.",
  },
];

const dimensions = [
  {
    icon: ScaleIcon,
    title: "Judgment",
    text: "Sound decisions based on context and clear reasoning.",
  },
  {
    icon: ListChecksIcon,
    title: "Execution",
    text: "Turning plans into results with focus, ownership, and follow-through.",
  },
  {
    icon: BrainCircuitIcon,
    title: "AI Collaboration",
    text: "Working effectively with AI to amplify impact and creativity.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Responsible Use",
    text: "Using AI ethically, safely, and in service of human values.",
  },
  {
    icon: HandshakeIcon,
    title: "Communication",
    text: "Clear, concise, and persuasive communication that drives understanding.",
  },
  {
    icon: ChartNoAxesColumnIncreasingIcon,
    title: "Adaptability",
    text: "Learning quickly and adapting to change with confidence.",
  },
];

const outcomes = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Employers",
    points: ["Hire with confidence", "Reduce time-to-productivity", "Build future-ready teams"],
  },
  {
    icon: UsersIcon,
    title: "Workers",
    points: ["Show your true capability", "Access better opportunities", "Grow skills with feedback"],
  },
  {
    icon: GraduationCapIcon,
    title: "Training Providers",
    points: ["Align learning to real skills", "Prove impact with evidence", "Improve learner outcomes"],
  },
];

const scienceCards = [
  {
    icon: HexagonIcon,
    title: "Skillable assessment design",
    text: "Built on established psychometric principles and role-specific benchmarks to support validity, reliability, and fairness.",
  },
  {
    icon: UserCheckIcon,
    title: "Human review and audit trails",
    text: "Every recommendation is reviewed by humans. Decisions are documented with clear rationale and traceable audit trails.",
  },
  {
    icon: GraduationCapIcon,
    title: "Early pilot pathways",
    text: "Start small, learn fast, and scale with confidence through facilitator training, customer support, and junior analyst workflows.",
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
  return (
    <Button nativeButton={false} render={<Link href={href} />} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}

function GoldIcon({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex size-12 items-center justify-center rounded-full border border-[#a86d1d]/55 bg-[#0a0602] text-[#f6a93b] shadow-[0_0_28px_rgba(246,169,59,0.18)]">
      <Icon className="size-5" />
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-7 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c27a22]">
      {children}
    </div>
  );
}

function FrontierCard({
  icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <Card className="border-[#5d3510]/80 bg-[#070504]/78 text-[#f3e9d8] shadow-[0_0_50px_rgba(207,118,23,0.06)]">
      <CardHeader>
        <GoldIcon icon={icon} />
        <CardTitle className="font-serif text-2xl font-normal text-[#f7efe3]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-[#a89c8b]">{text}</p>
      </CardContent>
    </Card>
  );
}

export function FrontierLabLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020100] text-[#f6efe7]">
      <section className="relative min-h-screen border-b border-[#3b2209] px-6 py-6 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(247,145,30,0.22),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(255,185,96,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(207,118,23,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(207,118,23,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6" aria-label="Main navigation">
          <Link className="flex items-center gap-3" href="/concepts">
            <span className="size-8 rounded-full border border-[#e8912e] shadow-[0_0_24px_rgba(232,145,46,0.35)]" />
            <span className="font-serif text-lg text-[#f4eadf]">AI-Ready Workforce</span>
          </Link>
          <div className="hidden items-center gap-10 text-xs font-medium text-[#b2a797] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <CtaButton className="bg-[#ffbd68] text-[#130904] shadow-[0_0_28px_rgba(255,189,104,0.28)] hover:bg-[#ffd192]" href="mailto:hello@example.com">
            Book a Demo
            <ArrowRightIcon data-icon="inline-end" />
          </CtaButton>
        </nav>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center pb-20 pt-20 text-center lg:pt-16">
          <div className="relative flex min-h-[360px] w-full max-w-5xl items-center justify-center">
            <div className="absolute left-0 top-14 hidden max-w-[250px] text-left lg:block">
              <FeatureCallout icon={HexagonIcon} title="Simulation Assessment" text="Realistic tasks. Real outcomes." />
            </div>
            <div className="absolute bottom-14 left-1 hidden max-w-[230px] text-left lg:block">
              <FeatureCallout icon={UserCheckIcon} title="Human Review" text="Expert feedback. Fair decisions." />
            </div>
            <div className="absolute right-0 top-28 hidden max-w-[250px] text-left lg:block">
              <FeatureCallout icon={SparklesIcon} title="AI Guidance" text="Context-aware support that builds capability." />
            </div>

            <div className="relative flex size-[280px] items-center justify-center rounded-full border border-[#ff982d]/50 bg-[radial-gradient(circle,rgba(255,194,113,0.38),rgba(214,104,12,0.1)_42%,transparent_70%)] shadow-[0_0_90px_rgba(255,145,38,0.55)] sm:size-[390px]">
              <div className="absolute inset-4 rounded-full border border-[#ffae52]/30" />
              <div className="absolute inset-12 rounded-full border border-dashed border-[#ffc174]/30" />
              <div className="absolute h-px w-[78%] rotate-12 bg-[#ffae52]/35" />
              <div className="absolute h-px w-[72%] -rotate-[32deg] bg-[#ffae52]/30" />
              <div className="absolute h-px w-[62%] rotate-[55deg] bg-[#ffae52]/25" />
              <div className="size-4 rounded-full bg-[#ffe2a9] shadow-[0_0_35px_12px_rgba(255,172,62,0.7)]" />
            </div>
          </div>

          <h1 className="mt-3 max-w-5xl font-serif text-5xl font-normal tracking-[-0.04em] text-[#f7efe8] sm:text-7xl lg:text-8xl">
            Build the AI-ready workforce.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#b5aa9d] sm:text-lg">
            Simulation-based assessment, structured AI guidance, and human review for
            hiring, upskilling, and mobility.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton className="bg-[#ffbd68] text-[#130904] shadow-[0_0_28px_rgba(255,189,104,0.22)] hover:bg-[#ffd192]" href="#platform" size="lg">
              See the Platform
              <ArrowRightIcon data-icon="inline-end" />
            </CtaButton>
            <CtaButton className="border-[#6d3e13] bg-transparent text-[#f1dcc2] hover:bg-[#160b03]" href="mailto:hello@example.com" size="lg" variant="outline">
              Book a Demo
            </CtaButton>
          </div>
        </div>
      </section>

      <SectionShell id="problem">
        <SectionLabel>01 / The Problem</SectionLabel>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] sm:text-6xl">
            The labor market is full of noisy signals.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#9f9488]">
            Employers struggle to define AI-era skills. Workers lack fair ways to show what
            they can do. Traditional credentials, resumes, and generic assessments create
            low-trust signals.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {problemCards.map((card) => (
            <FrontierCard key={card.title} {...card} />
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>02 / How It Works</SectionLabel>
        <h2 className="text-center font-serif text-4xl font-normal tracking-[-0.035em] sm:text-6xl">
          From real work to measurable evidence.
        </h2>
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-transparent via-[#b66a1b] to-transparent md:block" />
          {workflowSteps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-5 w-fit">
                <GoldIcon icon={step.icon} />
              </div>
              <h3 className="text-lg font-semibold text-[#e3a04c]">
                {index + 1}. {step.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[210px] text-sm leading-6 text-[#9f9488]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="platform">
        <SectionLabel>03 / The Platform</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] sm:text-6xl">
              One platform for hiring, upskilling, and mobility.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {platformFeatures.map((feature) => (
                <Card key={feature.title} className="border-[#5d3510]/80 bg-[#070504]/78 text-[#f3e9d8]">
                  <CardHeader className="gap-4">
                    <GoldIcon icon={feature.icon} />
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                    <CardDescription className="text-xs leading-5 text-[#9f9488]">
                      {feature.text}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px]">
            <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-[#f28c28]/20 blur-2xl" />
            {[0, 1, 2].map((layer) => (
              <div
                key={layer}
                className="absolute rounded-xl border border-[#6d3e13] bg-[#120b06]/80 p-5 shadow-[0_0_55px_rgba(255,146,42,0.12)]"
                style={{
                  inset: `${34 + layer * 22}px ${30 - layer * 10}px ${20 - layer * 18}px ${70 - layer * 34}px`,
                  transform: `translate(${layer * 12}px, ${layer * -14}px) rotate(${layer * -2}deg)`,
                }}
              >
                <div className="mb-5 h-3 w-28 rounded-full bg-[#f0a64f]/40" />
                <div className="grid gap-3">
                  <div className="h-7 rounded bg-[#f6efe7]/10" />
                  <div className="h-7 rounded bg-[#f6efe7]/8" />
                  <div className="h-20 rounded border border-[#6d3e13]/70 bg-[#080503]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div>
            <SectionLabel>04 / The Platform</SectionLabel>
            <h2 className="font-serif text-5xl font-normal tracking-[-0.04em] sm:text-6xl">
              What we measure.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#9f9488]">
              Six dimensions reveal AI-readiness and predict real-world performance.
            </p>
            <CtaButton className="mt-8 border-[#6d3e13] bg-transparent text-[#f1dcc2] hover:bg-[#160b03]" href="#science" variant="outline">
              Learn More
              <ArrowRightIcon data-icon="inline-end" />
            </CtaButton>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {dimensions.map((dimension) => (
              <div key={dimension.title} className="flex gap-4">
                <GoldIcon icon={dimension.icon} />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#e3a04c]">
                    {dimension.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#9f9488]">{dimension.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionLabel>05 / Outcomes</SectionLabel>
        <h2 className="text-center font-serif text-4xl font-normal tracking-[-0.035em] sm:text-6xl">
          Built for the people shaping the AI-ready workforce.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <Card key={outcome.title} className="border-[#5d3510]/80 bg-[#070504]/78 text-[#f3e9d8]">
              <CardHeader>
                <GoldIcon icon={outcome.icon} />
                <CardTitle className="font-serif text-2xl font-normal">{outcome.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm text-[#b5aa9d]">
                  {outcome.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckIcon className="size-4 text-[#ffbd68]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="science">
        <SectionLabel>06 / Science & Governance</SectionLabel>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] sm:text-6xl">
            Grounded in science. Built with human review.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#9f9488]">
            Our platform combines validated assessment design, transparent governance,
            and controlled pilots to earn trust early and continuously.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {scienceCards.map((card) => (
            <FrontierCard key={card.title} {...card} />
          ))}
        </div>
        <Badge className="mx-auto mt-9 flex h-auto w-fit max-w-full whitespace-normal border-[#6d3e13] bg-[#0a0602] px-4 py-2 text-center leading-5 text-[#e7b16d]" variant="outline">
          Built for fairness. Designed for accountability. Earned through evidence.
        </Badge>
      </SectionShell>

      <section className="relative border-t border-[#3b2209] px-6 py-24 text-center sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(232,145,46,0.22),transparent_62%)]" />
        <SectionLabel>07 / Get Started</SectionLabel>
        <h2 className="font-serif text-4xl font-normal tracking-[-0.035em] sm:text-6xl">
          Build the AI-ready workforce.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#9f9488]">
          See how our platform can help you hire better, develop talent, and unlock
          new opportunities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaButton className="bg-[#ffbd68] text-[#130904] hover:bg-[#ffd192]" href="mailto:hello@example.com" size="lg">
            Book a Demo
            <ArrowRightIcon data-icon="inline-end" />
          </CtaButton>
          <CtaButton className="border-[#6d3e13] bg-transparent text-[#f1dcc2] hover:bg-[#160b03]" href="#platform" size="lg" variant="outline">
            See the Platform
          </CtaButton>
        </div>
      </section>

      <footer className="border-t border-[#3b2209] px-6 py-8 text-xs text-[#887d70] sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Link className="font-serif text-lg text-[#f4eadf]" href="/concepts">
            AI-Ready Workforce
          </Link>
          <div className="flex flex-wrap gap-7">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <p>© 2026 AI-Ready Workforce.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCallout({
  icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 text-[#d4c8ba]">
      <GoldIcon icon={icon} />
      <div>
        <p className="text-sm font-semibold text-[#f4eadf]">{title}</p>
        <p className="mt-1 text-xs leading-5 text-[#a99d90]">{text}</p>
      </div>
    </div>
  );
}

function SectionShell({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl border-b border-[#3b2209] px-6 py-20 sm:px-10 lg:px-14">
      {children}
      <Separator className="mt-16 bg-[#3b2209]/60" />
    </section>
  );
}
