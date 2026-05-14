import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import {
  ArrowRightIcon,
  BarChart3Icon,
  BrainIcon,
  BriefcaseBusinessIcon,
  CheckCircle2Icon,
  CirclePlayIcon,
  GraduationCapIcon,
  HandshakeIcon,
  LinkIcon,
  MailIcon,
  NetworkIcon,
  OrbitIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = ["Our Mission", "Platform", "Solutions", "Science", "Resources", "About Us"];

const partnerLogos = ["Wegmans", "M&T Bank", "paychex", "Cornell University", "Strada", "eCornell"];

const stats = [
  {
    icon: BarChart3Icon,
    value: "70%",
    label: "of employers say it is hard to find AI-ready talent.",
    source: "IBM Institute",
  },
  {
    icon: UsersIcon,
    value: "2/3",
    label: "of workers lack clear pathways to the next role.",
    source: "McKinsey",
  },
  {
    icon: ShieldCheckIcon,
    value: "Millions",
    label: "of credentials, resumes, and scores provide little signal.",
    source: "Leadership deck",
  },
  {
    icon: BrainIcon,
    value: "AI",
    label: "is reshaping work, but recognition has not caught up.",
    source: "AI-Ready Workforce",
  },
];

const solutionBullets = [
  "Clarify AI-era work through employer co-design",
  "Evaluate real-world skills with transparent assessments",
  "Reveal skill adjacencies to unlock mobility",
  "Equip training programs with actionable insights",
];

const solutionLoop = [
  {
    icon: BriefcaseBusinessIcon,
    title: "Employers",
    text: "Define real tasks and success",
    position: "left-[45%] top-0",
  },
  {
    icon: SparklesIcon,
    title: "Assess",
    text: "Simulate work, measure what matters",
    position: "right-0 top-[40%]",
  },
  {
    icon: GraduationCapIcon,
    title: "Develop",
    text: "Practice with feedback and build confidence",
    position: "bottom-0 left-[45%]",
  },
  {
    icon: ShieldCheckIcon,
    title: "Mobilize",
    text: "Match skills to new opportunities",
    position: "left-0 top-[40%]",
  },
];

const platformFeatures = [
  {
    icon: BarChart3Icon,
    title: "Skill & Task Intelligence",
    text: "Extract and model the skills and tasks that drive impact.",
  },
  {
    icon: SparklesIcon,
    title: "AI-Powered Assessments",
    text: "Generate role-relevant tasks and rubrics with transparency.",
  },
  {
    icon: OrbitIcon,
    title: "Practice & Feedback",
    text: "Safe environments to learn, practice, and improve.",
  },
  {
    icon: NetworkIcon,
    title: "Insights & Mobility",
    text: "Reveal adjacencies and guide reskilling pathways.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trust & Governance",
    text: "Fair, auditable, and built on rigorous science.",
  },
];

const impactItems = [
  {
    icon: BriefcaseBusinessIcon,
    title: "For Employers",
    text: "Higher-quality hires and stronger, more agile teams.",
  },
  {
    icon: UsersIcon,
    title: "For Workers",
    text: "Clear pathways to grow skills and advance careers.",
  },
  {
    icon: HandshakeIcon,
    title: "For Communities",
    text: "Stronger local economies and more inclusive opportunity.",
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
  return (
    <Button nativeButton={false} render={<Link href={href} />} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}

function LogoGlyph({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-7 shrink-0", className)}>
      <div className="absolute left-0 top-1.5 h-4 w-5 skew-x-[-18deg] rounded-[4px] bg-[#3155e7]" />
      <div className="absolute left-2.5 top-0 h-6 w-3 skew-x-[22deg] rounded-[4px] bg-[#6d8cff]" />
      <div className="absolute bottom-0 right-0 size-2.5 rounded-sm bg-[#2237bf]" />
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2.5">
      <LogoGlyph />
      <span className="text-[10px] font-extrabold leading-[0.95] tracking-tight text-[#0b1028]">
        AI-READY
        <br />
        WORKFORCE
      </span>
    </div>
  );
}

function PartnerLogo({ partner }: { partner: string }) {
  if (partner === "Wegmans") {
    return <span className="font-serif text-[12px] font-bold italic tracking-[-0.06em]">Wegmans</span>;
  }

  if (partner === "M&T Bank") {
    return <span className="font-serif text-[12px] font-bold tracking-[-0.04em]">M&amp;TBank</span>;
  }

  if (partner === "paychex") {
    return <span className="text-[13px] font-extrabold tracking-[-0.05em]">paychex</span>;
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
        <span className="text-[13px] font-extrabold tracking-[-0.07em]">Strada</span>
        <span className="text-[4px] font-semibold uppercase tracking-[0.16em]">Education Network</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="size-4 rounded-[2px] border-2 border-[#111827]" />
      <span className="text-[11px] font-semibold tracking-[-0.04em]">eCornell</span>
    </span>
  );
}

function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[360px] overflow-visible", className)}>
      <div className="absolute inset-y-0 left-[-64px] right-0 [mask-image:radial-gradient(ellipse_at_66%_58%,black_0%,black_65%,transparent_91%)]">
        <Image
          alt=""
          className="pointer-events-none -translate-x-12 scale-105 select-none object-cover object-[58%_52%]"
          fill
          priority
          sizes="(min-width: 1024px) 620px, 100vw"
          src="/images/aiw-hero-portal-v2.png"
        />
        <div className="absolute inset-y-0 left-0 w-36 bg-[linear-gradient(90deg,#f8fbff,rgba(248,251,255,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(180deg,rgba(248,251,255,0),#f8fbff)]" />
      </div>

      <Card className="absolute left-[48px] top-[54px] hidden w-[88px] rounded-lg border-white/70 bg-white/70 py-0 shadow-[0_16px_50px_rgba(43,84,160,0.1)] backdrop-blur-xl sm:block">
        <CardContent className="p-3">
          <p className="text-[8px] font-semibold leading-3 text-[#111936]">Skill & Task Intelligence</p>
          <p className="mt-1.5 text-[7px] leading-3 text-[#66708b]">Identify the skills AI-era jobs actually require.</p>
          <div className="mt-3 h-7 rounded-md bg-[linear-gradient(135deg,rgba(49,85,231,0.08),rgba(99,190,255,0.28))]" />
        </CardContent>
      </Card>
      <Card className="absolute right-[66px] top-[54px] hidden w-[100px] rounded-lg border-white/70 bg-white/72 py-0 shadow-[0_16px_50px_rgba(43,84,160,0.1)] backdrop-blur-xl sm:block">
        <CardContent className="p-3">
          <p className="text-[8px] font-semibold leading-3 text-[#111936]">AI-Generated Assessments</p>
          <p className="mt-1.5 text-[7px] leading-3 text-[#66708b]">Realistic tasks. Transparent rubrics. Validated outcomes.</p>
          <div className="mt-3 flex size-7 items-center justify-center rounded-full bg-[#edf5ff]">
            <SparklesIcon className="size-3 text-[#3155e7]" />
          </div>
        </CardContent>
      </Card>
      <Card className="absolute bottom-[72px] right-[62px] hidden w-[102px] rounded-lg border-white/70 bg-white/76 py-0 shadow-[0_16px_50px_rgba(43,84,160,0.1)] backdrop-blur-xl sm:block">
        <CardContent className="p-3">
          <p className="text-[8px] font-semibold leading-3 text-[#111936]">Human Review & Fairness</p>
          <p className="mt-1.5 text-[7px] leading-3 text-[#66708b]">Expert feedback. Bias audits. Trusted decisions.</p>
          <div className="mt-3 flex gap-1 text-[#8fb2ff]">
            <UsersIcon className="size-3" />
            <CheckCircle2Icon className="size-3" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function LightReferenceLandingPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#0b1028]">
      <section className="relative overflow-hidden border-b border-[#e4ecf7] bg-[radial-gradient(circle_at_59%_24%,rgba(194,228,255,0.62),transparent_28%),radial-gradient(circle_at_96%_12%,rgba(255,230,205,0.72),transparent_24%),linear-gradient(180deg,#ffffff,#f8fbff)] lg:h-[455px]">
        <div className="mx-auto h-full max-w-[932px] px-6 py-5 lg:px-0">
          <nav className="flex h-[36px] items-center justify-between gap-5" aria-label="Main navigation">
            <Link href="/concepts">
              <LogoMark />
            </Link>
            <NavigationMenu className="hidden flex-none lg:flex">
              <NavigationMenuList className="gap-3">
              {navItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    className="px-2 py-1 text-[8px] font-medium text-[#18223c] hover:bg-[#eef4ff] focus:bg-[#eef4ff]"
                    href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  >
                    {item}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <Button
                className="hidden h-auto px-0 text-[8px] font-medium text-[#18223c] hover:bg-transparent hover:text-[#3155e7] sm:inline-flex"
                nativeButton={false}
                render={<Link href="#signin" />}
                variant="ghost"
              >
                Sign in
              </Button>
              <CtaButton className="h-[34px] rounded-md bg-[#3155e7] px-4 text-[10px] text-white shadow-[0_12px_28px_rgba(49,85,231,0.22)] hover:bg-[#2647d6]" href="mailto:hello@example.com">
                Book a Demo
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
            </div>
          </nav>

          <div className="relative z-10 pt-7 lg:w-[460px]">
            <Badge className="rounded-full border-0 bg-[#e9f1ff] px-3 py-1 text-[8px] text-[#3155e7]">
              Institute for Human Advancement in the AI Economy
            </Badge>
            <h1 className="mt-5 max-w-[460px] text-[48px] font-semibold leading-[1.05] tracking-[-0.055em] text-balance">
              <span className="block">Build an</span>
              <span className="block">
                <span className="text-[#3155e7]">AI-ready</span> workforce.
              </span>
            </h1>
            <p className="mt-5 max-w-[410px] text-[13px] leading-[1.5] text-[#34405d]">
              Evidence-based assessments and AI-powered tools that help employers find talent,
              help workers grow, and help communities thrive.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton className="h-[30px] rounded-md bg-[#3155e7] px-4 text-[10px] text-white hover:bg-[#2647d6]" href="#platform" size="lg">
                See the Platform
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
              <CtaButton className="h-[30px] rounded-md border-[#b8c8ee] bg-white/70 px-4 text-[10px] text-[#3155e7] hover:bg-white" href="#science" size="lg" variant="outline">
                <CirclePlayIcon data-icon="inline-start" />
                Watch Overview
              </CtaButton>
            </div>
            <div className="mt-9">
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8791a8]">
                Trusted by forward-thinking partners
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[#151b2e] opacity-90 lg:w-[520px] lg:flex-nowrap">
                {partnerLogos.map((partner) => (
                  <PartnerLogo key={partner} partner={partner} />
                ))}
              </div>
            </div>
            <HeroVisual className="mt-8 lg:hidden" />
          </div>
          <HeroVisual className="absolute right-[-6px] top-[66px] z-0 hidden w-[520px] lg:block" />
        </div>
      </section>

      <section className="border-b border-[#e4ecf7] bg-white px-6 py-8 lg:h-[218px] lg:px-0">
        <div className="mx-auto max-w-[932px]">
          <h2 className="text-center text-[21px] font-semibold tracking-[-0.035em]">
            The workforce is changing faster than our systems.
          </h2>
          <div className="mt-7 grid gap-px bg-[#dce5f2] md:grid-cols-4 lg:h-[116px]">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.value} className="overflow-hidden rounded-none border-0 bg-white px-5 py-7 text-center shadow-none ring-0 lg:h-full lg:gap-0 lg:py-0">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#eef4ff] lg:size-9">
                    <Icon className="size-5 text-[#3155e7] lg:size-4" />
                  </div>
                  <p className="mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] lg:mt-2 lg:text-[25px]">{stat.value}</p>
                  <p className="mx-auto mt-2 max-w-[190px] text-sm leading-5 text-[#35415d] lg:mt-1.5 lg:max-w-[150px] lg:text-[9px] lg:leading-3">{stat.label}</p>
                  <p className="mt-2 text-xs text-[#8992a6] lg:mt-1 lg:text-[8px]">- {stat.source}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="our-mission" className="border-b border-[#e4ecf7] bg-[#fbfdff] px-6 py-9 lg:h-[280px] lg:px-0">
        <div className="mx-auto grid max-w-[880px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-semibold text-[#3155e7]">Our solution</p>
            <h2 className="mt-2 max-w-[330px] text-[22px] font-semibold leading-[1.18] tracking-[-0.04em]">
              A new public good for skill, mobility, and opportunity.
            </h2>
            <p className="mt-4 max-w-[345px] text-[10px] leading-4 text-[#35415d]">
              We combine human-AI co-design, generative assessments, and rigorous science to
              create trusted signals of ability and potential.
            </p>
            <ul className="mt-5 grid gap-2.5">
              {solutionBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-[10px] text-[#27334f]">
                  <CheckCircle2Icon className="mt-0.5 size-3.5 shrink-0 fill-[#3155e7] text-white" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="rounded-[14px] border-[#d8e3f4] bg-white shadow-[0_18px_50px_rgba(57,88,132,0.1)] lg:h-[250px]">
            <CardContent className="p-6">
              <div className="grid gap-5 sm:hidden">
                {solutionLoop.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-xl border border-[#e4ecf7] bg-[#fbfdff] p-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#eef4ff]">
                        <Icon className="size-5 text-[#3155e7]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[#66708b]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative mx-auto hidden h-[202px] max-w-[430px] sm:block">
                <div className="absolute inset-x-[70px] inset-y-[34px] rounded-full border border-[#b9c9eb]" />
                <div className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <LogoGlyph className="scale-[1.35]" />
                </div>
                {solutionLoop.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={cn("absolute w-32", item.position)}>
                      <div className="flex items-start gap-2.5">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eef4ff]">
                          <Icon className="size-4 text-[#3155e7]" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold">{item.title}</p>
                          <p className="mt-1 text-[9px] leading-3 text-[#66708b]">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="platform" className="border-b border-[#e4ecf7] bg-white px-6 py-7 lg:h-[180px] lg:px-0">
        <div className="mx-auto max-w-[880px]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#3155e7]">
            The AI-Ready Workforce Platform
          </p>
          <h2 className="mt-2 max-w-[330px] text-[22px] font-semibold leading-[1.16] tracking-[-0.04em]">
            End-to-end infrastructure for workforce transformation.
          </h2>
          <div className="mt-4 grid gap-px bg-[#dce5f2] lg:h-[54px] lg:grid-cols-5">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="overflow-hidden rounded-none border-0 bg-white p-5 shadow-none ring-0 lg:h-full lg:gap-0 lg:p-0 lg:px-3">
                  <Icon className="size-6 text-[#3155e7] lg:size-4" />
                  <CardHeader className="px-0 pt-3 pb-0 lg:pt-1">
                    <CardTitle className="text-sm font-semibold lg:text-[9px]">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pt-1 pb-0">
                    <p className="text-sm leading-6 text-[#59647d] lg:text-[8px] lg:leading-3">{feature.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#edf6ff,#ffffff_48%,#eef5ff)] px-6 py-6 lg:h-[148px] lg:px-0">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#3155e7]">Our impact</p>
          <h2 className="mt-2 text-[23px] font-semibold leading-tight tracking-[-0.04em]">
            Better signals. Better decisions. Better futures.
          </h2>
          <div className="mt-5 grid text-left md:grid-cols-3 md:divide-x md:divide-[#cbd9ef]">
            {impactItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-none border-0 bg-transparent px-7 py-0 shadow-none ring-0">
                  <CardContent className="flex gap-4 p-0">
                  <Icon className="size-5 shrink-0 text-[#3155e7]" />
                  <div>
                    <h3 className="text-[11px] font-semibold">{item.title}</h3>
                    <p className="mt-1 text-[10px] leading-4 text-[#35415d]">{item.text}</p>
                  </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="science" className="border-b border-[#e4ecf7] bg-white px-6 py-7 lg:h-[142px] lg:px-0">
        <div className="mx-auto grid max-w-[880px] gap-10 lg:grid-cols-[0.9fr_170px_0.9fr]">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#3155e7]">
              Rooted in science
            </p>
            <h2 className="mt-3 text-[23px] font-semibold leading-tight tracking-[-0.035em]">Rigor you can trust.</h2>
            <p className="mt-3 max-w-[300px] text-[10px] leading-4 text-[#35415d]">
              Our research program tests what works reliably, fairly, and at scale.
            </p>
            <Link className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-[#3155e7]" href="#science">
              Explore our science
              <ArrowRightIcon className="size-3" />
            </Link>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <div className="grid grid-cols-14 gap-1.5 [clip-path:polygon(0_0,78%_0,100%_50%,78%_100%,0_100%,12%_50%)]">
              {Array.from({ length: 126 }).map((_, index) => (
                <span
                  key={index}
                  className={cn("size-1.5 rounded-full bg-[#3155e7]", dotOpacities[index % dotOpacities.length])}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#3155e7]">
              Built with partners
            </p>
            <h2 className="mt-3 text-[23px] font-semibold leading-tight tracking-[-0.035em]">Together, we go further.</h2>
            <p className="mt-3 max-w-[310px] text-[10px] leading-4 text-[#35415d]">
              We collaborate with employers, educators, researchers, and workforce leaders to
              create lasting change.
            </p>
            <Link className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-[#3155e7]" href="#partners">
              See our partners
              <ArrowRightIcon className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white px-6 py-6 lg:h-[113px] lg:px-0">
        <div className="mx-auto max-w-[880px]">
          <div className="grid items-center gap-6 pb-1 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-[23px] font-semibold leading-tight tracking-[-0.04em] text-[#3155e7]">
                Let&apos;s build the future of work, together.
              </h2>
              <p className="mt-1 text-[10px] text-[#59647d]">
                Join leading organizations advancing the AI-ready workforce.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CtaButton className="h-[32px] rounded-md bg-[#3155e7] px-9 text-[10px] text-white hover:bg-[#2647d6]" href="mailto:hello@example.com" size="lg">
                Book a Demo
                <ArrowRightIcon data-icon="inline-end" />
              </CtaButton>
              <CtaButton className="h-[32px] rounded-md border-[#b8c8ee] px-9 text-[10px] text-[#3155e7]" href="mailto:hello@example.com" size="lg" variant="outline">
                Contact Us
              </CtaButton>
            </div>
          </div>
          <Separator className="bg-[#e4ecf7]" />
          <div className="flex flex-col gap-5 pt-1 md:flex-row md:items-center md:justify-between">
            <div className="origin-left scale-[0.86]">
              <LogoMark />
            </div>
            <div className="flex flex-wrap gap-8 text-[10px] text-[#59647d]">
              <a href="#platform">Platform</a>
              <a href="#our-mission">Solutions</a>
              <a href="#resources">Resources</a>
              <a href="#science">Science</a>
              <a href="#about-us">About Us</a>
            </div>
            <div className="flex items-center gap-5 text-[#59647d]">
              <span className="text-[9px]">© 2026 AI-Ready Workforce Institute.</span>
              <LinkIcon className="size-3.5" />
              <MailIcon className="size-3.5" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
