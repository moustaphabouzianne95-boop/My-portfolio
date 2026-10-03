import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { Terminal } from "@/components/Terminal";
import {
  aboutParagraphs,
  engineeringFocus,
  experienceItems,
  highlights,
  principles,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

function SectionHeading({ id, label, title, description }: { id: string; label: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const email = socialLinks.find((item) => item.id === "email");

  return (
    <>
      <a className="skip-link sr-only focus:not-sr-only" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="min-h-screen">
        <section className="shell hero" id="home" aria-labelledby="hero-title">
          <Reveal className="hero-copy">
            <p className="hero-kicker">SOFTWARE ENGINEER <span className="accent">/</span> FULL-STACK &amp; SYSTEMS</p>
            <h1 id="hero-title">{profile.name.split(" ")[0]}<br />{profile.name.split(" ").slice(1).join(" ")}<span className="accent">.</span></h1>
            <p className="hero-role">
              <span>Software Engineer</span>
              <span>Full-Stack &amp; Systems Developer</span>
            </p>
            <p className="hero-headline">I build reliable web systems that turn complex problems into simple experiences.</p>
            <p className="hero-description">
              I design and develop software across the stack, combining strong computer science fundamentals with modern technologies to solve complex engineering problems.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">View Projects <ArrowRight size={15} aria-hidden="true" /></a>
              <a className="button button--secondary" href="#contact">Get In Touch <ArrowDownRight size={15} aria-hidden="true" /></a>
            </div>
            <div className="social-row" role="group" aria-label="Social profiles">
              <span className="social-label">FIND ME</span>
              <SocialLinks className="social-icons" />
            </div>
          </Reveal>
          <Reveal className="hero-terminal" delay={0.12}>
            <Terminal />
          </Reveal>
        </section>

        <section className="section section-rule" id="about" aria-labelledby="about-title">
          <div className="shell">
            <Reveal>
              <SectionHeading id="about-title" label="01 / About" title="Engineering with clarity and purpose." />
            </Reveal>
            <div className="grid-two">
              <Reveal>
                <div className="prose">
                  {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="highlights" aria-label="Engineering highlights">
                  {highlights.map((item) => <div className="highlight-card" key={item}>{item}</div>)}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section-rule" id="skills" aria-labelledby="skills-title">
          <div className="shell">
            <Reveal>
              <SectionHeading id="skills-title" label="02 / Technical Skills" title="A polyglot toolkit, chosen for the problem." description="Technologies and practices across the full software development lifecycle." />
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={(index % 3) * 0.035}>
                  <article className="skill-card">
                    <p className="card-kicker">{group.title}</p>
                    <div className="skill-list">
                      {group.skills.map((skill) => <span className="skill-badge" key={skill}>{skill}</span>)}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-rule" id="focus" aria-labelledby="focus-title">
          <div className="shell">
            <Reveal>
              <SectionHeading id="focus-title" label="03 / Engineering Focus" title="Where thoughtful engineering makes a difference." />
            </Reveal>
            <div className="focus-grid">
              {engineeringFocus.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={(index % 3) * 0.04}>
                    <article className="focus-card">
                      <span className="focus-icon"><Icon size={18} aria-hidden="true" /></span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-rule" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <Reveal>
              <SectionHeading id="projects-title" label="04 / Featured Projects" title="Selected work, built to solve real problems." />
            </Reveal>
            {projects.length > 0 ? <div className="project-grid">
              {projects.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.045}>
                  <article className="project-card">
                    <div className="project-topline">
                      <span className="project-index">0{index + 1} / PROJECT</span>
                      <span className="placeholder-tag">Independent concept</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-detail">
                      <h4>Problem</h4>
                      <p>{project.problem}</p>
                    </div>
                    <div className="project-detail">
                      <h4>Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div className="project-detail">
                      <h4>Scope &amp; disclaimer</h4>
                      <p>{project.context}</p>
                    </div>
                    <div className="project-detail">
                      <h4>Outcome</h4>
                      <p>{project.result}</p>
                    </div>
                    <div className="project-detail">
                      <h4>Technologies</h4>
                      <div className="skill-list">
                        {project.technologies.map((technology) => <span className="skill-badge" key={technology}>{technology}</span>)}
                      </div>
                    </div>
                    <div className="project-detail">
                      <h4>Key features</h4>
                      <div className="project-features">
                        {project.features.map((feature) => <span className="project-feature" key={feature}>{feature}</span>)}
                      </div>
                    </div>
                    <div className="project-actions">
                      <a className="project-action" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13} aria-hidden="true" /></a>
                      <a className="project-action" href={project.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} aria-hidden="true" /></a>
                      <a className="project-action" href={project.standalone} target="_blank" rel="noreferrer">Offline HTML <ExternalLink size={13} aria-hidden="true" /></a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div> : <p className="prose">Project details will appear here once verified project descriptions and links are available.</p>}
          </div>
        </section>

        <section className="section section-rule" id="philosophy" aria-labelledby="philosophy-title">
          <div className="shell">
            <Reveal>
              <SectionHeading id="philosophy-title" label="05 / Engineering Philosophy" title="How I Think About Software" />
            </Reveal>
            <div className="philosophy-grid">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 0.04}>
                  <article className="principle-card">
                    <span className="principle-number">0{index + 1}</span>
                    <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-rule" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <Reveal>
              <SectionHeading id="experience-title" label="06 / Education" title="Education" />
            </Reveal>
            <div className="timeline">
              {experienceItems.map((item) => (
                <Reveal key={item.title}>
                  <article className="timeline-item">
                    <span className="timeline-node" aria-hidden="true" />
                    <div className="timeline-card">
                      <div className="timeline-meta"><h3>{item.title}</h3>{item.date ? <span className="timeline-date">{item.date}</span> : null}</div>
                      <p>{item.organization}</p>
                      <p>{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-rule section--compact" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <Reveal>
              <div className="contact-panel">
                <div>
                  <p className="eyebrow">07 / Contact</p>
                  <h2 id="contact-title">Let&apos;s Build Something</h2>
                  <p>Have a project, an idea, or an interesting problem to solve? I&apos;d be happy to connect and discuss how we can turn it into a practical software solution.</p>
                  <div className="contact-meta">
                    <div className="contact-line">
                      <Mail size={16} aria-hidden="true" />
                      {email?.href ? <a href={email.href}>{email.href.replace(/^mailto:/, "")}</a> : <span className="contact-unset">Add email address in src/data/portfolio.ts</span>}
                    </div>
                    <div className="contact-social-group" role="group" aria-label="GitHub and LinkedIn profiles">
                      <SocialLinks className="contact-social" />
                      <span>GitHub &amp; LinkedIn</span>
                    </div>
                  </div>
                </div>
                {email?.href ? (
                  <a className="button button--primary contact-action" href={email.href}>Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
                ) : (
                  <span className="button button--secondary contact-action" aria-disabled="true" title="Add a real email address in src/data/portfolio.ts">Add contact details <ArrowRight size={15} aria-hidden="true" /></span>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">Software Engineer · Full-Stack &amp; Systems Developer</p>
          </div>
          <div className="footer-right">
            <span className="footer-copy">© 2026 {profile.name}</span>
            <SocialLinks className="footer-social" />
          </div>
        </div>
      </footer>
    </>
  );
}
