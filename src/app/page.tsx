import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolio';

export default function Home() {
  const { header, profile, projects, education, technicalLedger, focusAreas, socials, copyright, footerTags } = PORTFOLIO_DATA;

  return (
    <>
      <header className="bg-surface docked full-width top-0 border-b border-primary py-6 flex flex-col items-center justify-center w-full px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center justify-between w-full mb-4">
          <span className="font-label-caps text-label-caps text-secondary">ESTABLISHED {header.established}</span>
          <div className="flex gap-4">
            <button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">share</button>
            <button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">print</button>
          </div>
        </div>
        <h1 className="font-display-lg text-display-lg text-primary uppercase tracking-tighter text-center">{header.title}</h1>
        <div className="w-full border-y border-primary py-2 mt-4 flex justify-between items-center px-4">
          <span className="font-label-caps text-label-caps text-primary">{header.edition}</span>
          <span className="font-label-caps text-label-caps text-primary">{header.volume}</span>
          <span className="font-label-caps text-label-caps text-primary">{header.location}</span>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg">
        <div className="newspaper-grid">
          {/* Left Column: Profile & About */}
          <div className="col-span-12 lg:col-span-8 space-y-gutter">
            <section className="border-b border-primary pb-stack-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="relative group">
                  <img alt={profile.name} className="w-full h-auto border border-primary grayscale hover:grayscale-0 transition-all duration-500" src={profile.imageSrc} />
                  <p className="font-label-caps text-[10px] mt-2 italic uppercase">{profile.imageCaption}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-label-caps text-label-caps text-primary bg-primary text-on-primary px-2 py-1 inline-block mb-4 w-fit">{profile.breakingText}</span>
                  <h2 className="font-display-lg text-[48px] leading-tight mb-4">{profile.name}</h2>
                  <p className="font-headline-md text-headline-md leading-snug border-t border-primary pt-4">{profile.title}</p>
                </div>
              </div>
            </section>

            <section className="columns-1 md:columns-2 gap-stack-md space-y-gutter border-b border-primary pb-stack-lg">
              {profile.paragraphs.map((p, idx) => (
                <p key={idx} className={`${idx === 0 ? 'drop-cap ' : ''}font-body-lg text-body-lg text-justify leading-relaxed`}>
                  {p}
                </p>
              ))}
              <blockquote className="font-quote text-quote italic border-l-4 border-primary pl-4 my-6">
                "{profile.quote}"
              </blockquote>
            </section>

            {/* Featured Projects */}
            <section>
              <div className="flex items-center gap-4 mb-stack-md">
                <h3 className="font-label-caps text-label-caps bg-primary text-on-primary px-4 py-2">LATEST DISPATCHES: FEATURED PROJECTS</h3>
                <div className="flex-grow border-t border-primary"></div>
              </div>

              <div className="space-y-gutter">
                {projects.map((project, idx) => (
                  <div key={project.id} className={`newspaper-grid border-b ${idx === projects.length - 1 ? 'border-primary' : 'border-outline-variant'} pb-stack-md group ${project.highlight ? 'bg-surface-container-low p-4' : ''}`}>
                    
                    {/* Render Image or Highlight block differently based on reverseLayout flag */}
                    {project.reverseLayout ? (
                      <>
                        <div className="col-span-12 md:col-span-6 flex flex-col justify-between order-2 md:order-1">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-headline-md text-headline-md">{project.title}</h4>
                              <span className="font-label-caps text-[10px] border border-primary px-2">{project.tag}</span>
                            </div>
                            <p className="mt-2 font-body-md text-on-surface-variant">{project.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.skills.map(skill => (
                              <span key={skill} className="font-mono text-[11px] bg-surface-container px-2 py-0.5 border border-outline-variant">{skill}</span>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 order-1 md:order-2 flex items-start">
                          <img alt={project.title} className={`border border-primary grayscale group-hover:grayscale-0 transition-all ${project.imageClass || 'w-full aspect-[4/3] object-cover object-center'}`} src={project.imageSrc || ""} />
                        </div>
                      </>
                    ) : project.highlight ? (
                      <>
                        <div className="col-span-12 md:col-span-4">
                          <div className="bg-primary aspect-video flex items-center justify-center text-on-primary font-display-lg text-4xl border border-primary">{project.initial}</div>
                          <p className="font-label-caps text-[9px] mt-2 italic text-center">{project.badge}</p>
                        </div>
                        <div className="col-span-12 md:col-span-8 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-headline-md text-headline-md">{project.title}</h4>
                              <span className="font-label-caps text-[10px] border border-primary px-2 bg-primary text-on-primary">{project.tag}</span>
                            </div>
                            <p className="mt-2 font-body-md text-on-surface-variant">{project.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.skills.map(skill => (
                              <span key={skill} className="font-mono text-[11px] bg-surface-container px-2 py-0.5 border border-outline-variant">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-span-12 md:col-span-6 flex items-start">
                          <img alt={project.title} className={`border border-primary grayscale group-hover:grayscale-0 transition-all ${project.imageClass || 'w-full aspect-[4/3] object-cover object-center'}`} src={project.imageSrc || ""} />
                        </div>
                        <div className="col-span-12 md:col-span-6 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-headline-md text-headline-md">{project.title}</h4>
                              <span className="font-label-caps text-[10px] border border-primary px-2">{project.tag}</span>
                            </div>
                            <p className="mt-2 font-body-md text-on-surface-variant">{project.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.skills.map(skill => (
                              <span key={skill} className="font-mono text-[11px] bg-surface-container px-2 py-0.5 border border-outline-variant">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Skills & Education */}
          <aside className="col-span-12 lg:col-span-4 lg:rule-left lg:pl-gutter space-y-stack-lg">
            {/* Education Box */}
            <section className="border border-primary p-4 bg-surface-container">
              <h3 className="font-label-caps text-label-caps border-b border-primary mb-4 pb-1">ACADEMIC RECORD</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-label-caps text-[10px] text-on-secondary-container">INSTITUTION</p>
                  <p className="font-headline-md text-lg font-bold uppercase">{education.institution}</p>
                  <p className="font-body-md italic">{education.location}</p>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-on-secondary-container">DEGREE</p>
                  <p className="font-body-lg">{education.degree}</p>
                </div>
              </div>
            </section>

            {/* Technical Ledger */}
            <section>
              <h3 className="font-label-caps text-label-caps bg-primary text-on-primary px-2 py-1 mb-4 inline-block">TECHNICAL LEDGER</h3>
              <div className="space-y-6">
                {technicalLedger.map((item, idx) => (
                  <div key={idx} className="border-b border-outline pb-2">
                    <p className="font-label-caps text-[10px] mb-2">{item.category}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.skills.map(skill => (
                        <span key={skill} className="border border-primary px-2 py-0.5 font-label-caps text-[10px]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Focus Areas Bulletin */}
            <section className="border-t-2 border-primary pt-4">
              <h3 className="font-headline-md text-xl mb-4 italic">Editor's Focus</h3>
              <ul className="space-y-4">
                {focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="font-display-lg text-2xl leading-none">{area.number}</span>
                    <div>
                      <h5 className="font-label-caps text-[11px]">{area.title}</h5>
                      <p className="text-sm font-body-md">{area.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Snippet Accent */}
            <div className="bg-primary-container p-4 text-on-primary-container font-mono text-[10px] leading-relaxed">
              <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-on-tertiary-container">{'// BARAQEX_CORE.ts'}</p>
              <p className="text-primary-fixed">export const reactive = (target) =&gt; {'{'}</p>
              <p className="pl-4">return new Proxy(target, {'{'}</p>
              <p className="pl-8">set(obj, prop, val) {'{'}</p>
              <p className="pl-12">const result = Reflect.set(...arguments);</p>
              <p className="pl-12">triggerReRender();</p>
              <p className="pl-12">return result;</p>
              <p className="pl-8">{'}'}</p>
              <p className="pl-4">{'}'});</p>
              <p className="text-primary-fixed">{'}'};</p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-surface full-width bottom-0 border-t border-primary mt-stack-lg py-12 flex flex-col items-center gap-stack-md w-full px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="flex gap-stack-md mb-4 border-b border-outline-variant pb-4 w-full justify-center">
          {socials.map((social, idx) => (
            <a key={idx} className="font-label-caps text-label-caps text-primary hover:underline decoration-1" href={social.url}>{social.name}</a>
          ))}
        </div>
        <p className="font-label-caps text-label-caps font-bold">{copyright}</p>
        <div className="flex gap-6 mt-2">
          {footerTags.map((tag, idx) => (
            <span key={idx} className="font-body-md text-sm text-secondary">{tag}</span>
          ))}
        </div>
        <div className="mt-8 opacity-50">
          <span className="material-symbols-outlined text-[48px]">newspaper</span>
        </div>
      </footer>
    </>
  );
}