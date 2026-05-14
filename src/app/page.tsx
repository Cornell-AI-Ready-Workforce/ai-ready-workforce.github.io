import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = ["About", "Framework", "Platform", "Research", "Resources"];

const principles = [
  {
    label: "Plan",
    text: "How people decompose ambiguous work into a useful path.",
  },
  {
    label: "Prompt",
    text: "How they collaborate with AI systems without outsourcing judgment.",
  },
  {
    label: "Produce",
    text: "Whether their final work meets real stakeholder expectations.",
  },
  {
    label: "Prove",
    text: "How they verify, revise, and explain their output.",
  },
];

const sections = [
  {
    id: "about",
    title: "Built for assessment design, not generic AI literacy claims",
    text: "The project turns AI-ready work into concrete tasks, observable signals, and reviewer-ready evidence packages.",
  },
  {
    id: "platform",
    title: "A simulation platform for realistic work samples",
    text: "Role-grounded cases, AI collaboration traces, artifact review, and structured scoring stay connected from design to debrief.",
  },
  {
    id: "research",
    title: "Research-backed and human-reviewed",
    text: "The framework keeps human reviewers in consequential loops while using AI to surface evidence, not to make final decisions.",
  },
  {
    id: "resources",
    title: "Resources for pilots and stakeholder review",
    text: "The site will collect pilot briefs, framework explainers, and implementation notes as the project moves from prototype to external-facing work.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="brand" href="#">
            AI-Ready Workforce
          </a>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <a className={cn(buttonVariants(), "nav-cta")} href="mailto:hello@example.com">
            Request a Demo
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Measure the work people do with AI, not just what they say about it.</h1>
            <p>
              AI-Ready Workforce helps teams design evidence-rich simulations that show how
              people frame problems, collaborate with AI, verify outputs, and communicate
              decisions under real-world constraints.
            </p>
            <div className="hero-actions">
              <a className={cn(buttonVariants({ size: "lg" }), "primary-action")} href="mailto:hello@example.com">
                Request a Demo
              </a>
              <a className={cn(buttonVariants({ variant: "outline", size: "lg" }), "secondary-action")} href="#framework">
                Explore the Framework
              </a>
            </div>
          </div>

          <div className="signal-panel" aria-label="Evidence map preview">
            <div className="panel-header">
              <span>Evidence Map</span>
              <span>6P Framework</span>
            </div>
            <div className="orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <dl className="metric-grid">
              <div>
                <dt>Signals</dt>
                <dd>42</dd>
              </div>
              <div>
                <dt>Reviewers</dt>
                <dd>Human-led</dd>
              </div>
              <div>
                <dt>Output</dt>
                <dd>Decision support</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="framework" className="content-section">
        <div className="section-heading">
          <h2>A practical framework for AI-era work</h2>
          <p>
            The assessment surface is built around observable behavior, work artifacts,
            and reviewer calibration instead of self-reported fluency.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article key={principle.label}>
              <span>{principle.label}</span>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-grid">
          {sections.map((section) => (
            <article id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
