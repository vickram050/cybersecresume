import { Fragment } from 'react'
import {
  profile,
  skills,
  certifications,
  projects,
  tools,
  experiences,
  education,
  achievements,
} from './data.ts'

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-blue-900/50 border border-cyan-400 p-3">
      <div className="text-2xl font-semibold text-cyan-300">{value}</div>
      <div className="text-xs text-cyan-200">{label}</div>
    </div>
  )
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-5xl px-4 py-8">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-cyan-300 border-b border-cyan-500 pb-2">{title}</h2>
      <div className="rounded-xl border border-cyan-500/50 bg-slate-900/80 p-6 backdrop-blur-sm">
        {children}
      </div>
    </section>
  )
}

function App() {
  return (
    <Fragment>
      <header className="border-b border-cyan-500/30 bg-slate-950/95 backdrop-blur print:hidden">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="h-12 w-12 rounded-full object-cover border border-cyan-400" />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
              )}
              <div>
                <div className="text-sm font-medium text-cyan-200">{profile.title}</div>
                <div className="text-lg font-semibold text-cyan-300">{profile.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="#resume" className="rounded-lg border border-cyan-500/50 px-3 py-2 text-xs sm:text-sm font-medium text-cyan-300 hover:bg-cyan-500/10 transition-colors">
                Resume
              </a>
              <button onClick={() => window.print()} className="rounded-lg border border-cyan-500/50 px-3 py-2 text-xs sm:text-sm text-cyan-300 hover:bg-cyan-500/10 transition-colors">
                Print
              </button>
            </div>
          </div>
          <nav className="mt-3 flex flex-wrap gap-3 text-xs text-cyan-200">
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#achievements" className="hover:text-cyan-300">Achievements</a>
            <a href="#certs" className="hover:text-cyan-300">Certifications</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#experience" className="hover:text-cyan-300">Experience</a>
            <a href="#education" className="hover:text-cyan-300">Education</a>
            <a href="#tools" className="hover:text-cyan-300">Tools</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main className="bg-slate-950 text-cyan-50">
        <section className="relative mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="rounded-xl border border-cyan-500/50 bg-slate-900/80 p-6 backdrop-blur-sm">
              <h1 className="text-2xl font-semibold text-cyan-300">{profile.headline}</h1>
              <p className="mt-3 text-sm leading-relaxed text-cyan-100">{profile.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-cyan-500/50 px-3 py-1 text-xs text-cyan-200 bg-cyan-500/10">
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Stat label="Years Experience" value={profile.stats.years} />
              <Stat label="Incidents Resolved" value={profile.stats.incidents} />
              <Stat label="Certifications" value={String(certifications.length)} />
              <Stat label="Projects" value={String(projects.length)} />
            </div>
          </div>
        </section>

        <Section id="skills" title="Core Competencies">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((s) => (
              <div key={s} className="rounded-lg border border-cyan-500/50 bg-blue-900/30 px-3 py-2 text-sm text-cyan-200 hover:bg-cyan-500/20 transition-colors">
                {s}
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="🏆 Achievements & Recognitions">
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((a) => (
              <div key={a.title} className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4 overflow-hidden hover:border-cyan-400 hover:bg-blue-900/50 transition-all">
                {a.image && (
                  <img src={a.image} alt={a.title} className="w-full h-40 object-cover rounded-md mb-3 opacity-80 hover:opacity-100 transition-opacity" />
                )}
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-cyan-300">{a.title}</div>
                    <div className="text-xs text-cyan-200">{a.company}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-cyan-100">{a.description}</div>
                <div className="mt-2 text-xs text-cyan-300/70">{a.date}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certs" title="Certifications">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4 overflow-hidden hover:border-cyan-400 hover:bg-blue-900/50 transition-all">
                {c.image && (
                  <img src={c.image} alt={c.name} className="w-full h-40 object-cover rounded-md mb-3 opacity-80 hover:opacity-100 transition-opacity" />
                )}
                <div className="text-sm font-semibold text-cyan-300">{c.name}</div>
                <div className="mt-1 text-xs text-cyan-200">{c.issuer}</div>
                <div className="mt-2 text-xs text-cyan-300/70">{c.year}</div>
              </div>
            ))}
          </div>
        </Section>

  <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.title} className="rounded-xl border border-cyan-500/50 bg-blue-900/30 p-5 hover:border-cyan-400 hover:bg-blue-900/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-cyan-300">{p.title}</div>
                  <div className="text-xs text-cyan-300/70">{p.year}</div>
                </div>
                <div className="mt-2 text-sm text-cyan-100">{p.summary}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-cyan-500/50 px-2 py-1 text-xs text-cyan-200 bg-cyan-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-blue-950/80 border border-cyan-500/30 p-2 text-center">
                      <div className="text-sm font-semibold text-cyan-300">{m.value}</div>
                      <div className="text-[11px] text-cyan-200">{m.label}</div>
                    </div>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    className="mt-4 inline-block text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View details →
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((e) => (
              <div key={e.company + e.role} className="rounded-xl border border-cyan-500/50 bg-blue-900/30 p-5 hover:border-cyan-400 hover:bg-blue-900/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-cyan-300">{e.role}</div>
                  <div className="text-xs text-cyan-300/70">{e.period}</div>
                </div>
                <div className="mt-1 text-sm text-cyan-200">{e.company}</div>
                <ul className="mt-3 list-disc pl-5 text-sm text-cyan-100">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-3 sm:grid-cols-2">
            {education.map((ed) => (
              <div key={ed.program} className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4 hover:bg-blue-900/50 transition-all">
                <div className="text-sm font-semibold text-cyan-300">{ed.program}</div>
                <div className="mt-1 text-xs text-cyan-200">{ed.institution}</div>
                <div className="mt-1 text-xs text-cyan-300/70">{ed.period}</div>
                {ed.details && (
                  <div className="mt-2 text-xs text-cyan-100">{ed.details}</div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="tools" title="Tools">
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="rounded-full border border-cyan-500/50 px-3 py-1 text-xs text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section id="resume" title="📄 Resume">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-cyan-100 text-center">Download my complete resume in PDF format</p>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              📥 Download Resume (PDF)
            </a>
            {profile.photo && (
              <img src={profile.photo} alt={profile.name} className="mt-4 h-48 w-48 rounded-lg border-2 border-cyan-400 object-cover shadow-lg" />
            )}
          </div>
        </Section>

        <Section id="contact" title="📞 Contact">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4">
              <div className="text-xs text-cyan-300/70 font-semibold uppercase">Email</div>
              <a className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors break-all" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            {profile.phone && (
              <div className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4">
                <div className="text-xs text-cyan-300/70 font-semibold uppercase">Mobile</div>
                <a className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors" href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
            )}
            <div className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4">
              <div className="text-xs text-cyan-300/70 font-semibold uppercase">Location</div>
              <div className="mt-2 text-cyan-200">{profile.location}</div>
            </div>
            {profile.linkedin && (
              <div className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4">
                <div className="text-xs text-cyan-300/70 font-semibold uppercase">LinkedIn</div>
                <a className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors break-all" href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a>
              </div>
            )}
            {profile.github && (
              <div className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4">
                <div className="text-xs text-cyan-300/70 font-semibold uppercase">GitHub</div>
                <a className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors break-all" href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a>
              </div>
            )}
            {profile.website && (
              <div className="rounded-lg border border-cyan-500/50 bg-blue-900/30 p-4">
                <div className="text-xs text-cyan-300/70 font-semibold uppercase">Website</div>
                <a className="mt-2 text-cyan-400 hover:text-cyan-300 transition-colors break-all" href={profile.website} target="_blank" rel="noreferrer">{profile.website}</a>
              </div>
            )}
          </div>
        </Section>
      </main>

      <footer className="border-t border-cyan-500/30 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-cyan-300/70">
          © {new Date().getFullYear()} {profile.name} | Cybersecurity Professional
        </div>
      </footer>
    </Fragment>
  )
}

export default App
