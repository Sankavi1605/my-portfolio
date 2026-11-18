import { FiDownload, FiMapPin } from 'react-icons/fi';
import Reveal from './Reveal';
import { about, certifications, education, experience, profile } from '../data/content';
import sheetTop from '../assets/canva/sheet-top.webp';
import laptop from '../assets/canva/laptop.webp';

export default function About() {
  return (
    <section id="about" className="about">
      <img src={sheetTop} alt="" className="about__edge" />

      <div className="about__body">
        <div className="about__top">
          <Reveal className="about__laptop" from={{ x: -90, y: 0, rotate: -7 }} duration={0.9} aria-hidden="true">
            <img src={laptop} alt="" className="jitter jitter--b" />
          </Reveal>

          <div className="about__copy">
            <Reveal from={{ y: 20, rotate: -10 }} spring>
              <span className="about__kicker script">hey there</span>
            </Reveal>
            <Reveal as="h2" className="about__title serif" delay={0.05}>
              About me
            </Reveal>
            <Reveal as="p" delay={0.12}>
              {about.intro}
            </Reveal>
            <Reveal as="p" delay={0.2}>
              {about.detail}
            </Reveal>
            <Reveal as="ul" className="about__facts" delay={0.28}>
              {about.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </Reveal>
            <Reveal className="about__meta" delay={0.36}>
              <span>
                <FiMapPin aria-hidden="true" /> {profile.location}
              </span>
              <span>• {profile.status}</span>
            </Reveal>
            <Reveal delay={0.42}>
              <a className="btn-ink" href={profile.cv} target="_blank" rel="noreferrer">
                Download CV <FiDownload aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="about__grid">
          <div>
            <Reveal as="h3" className="about__col-title serif">
              Experience
            </Reveal>
            <div>
              {experience.map((job, i) => (
                <Reveal as="article" className="scrap" key={job.place} delay={0.1 + i * 0.12} from={{ y: 40, rotate: i % 2 ? 4 : -4 }}>
                  <span className="scrap__tape" aria-hidden="true" />
                  <span className="scrap__date">{job.date}</span>
                  <h4>
                    {job.role} @ {job.place}
                  </h4>
                  <p className="scrap__body">{job.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal as="h3" className="about__col-title serif">
              Education
            </Reveal>
            <div>
              {education.map((item, i) => (
                <Reveal as="article" className="scrap" key={item.degree} delay={0.16 + i * 0.12} from={{ y: 40, rotate: i % 2 ? -4 : 4 }}>
                  <span className="scrap__tape" aria-hidden="true" />
                  <span className="scrap__date">{item.year}</span>
                  <h4>{item.degree}</h4>
                  <p className="scrap__sub">{item.institution}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal as="h3" className="about__col-title serif">
              Certifications
            </Reveal>
            <ul className="certs">
              {certifications.map((c, i) => (
                <Reveal as="li" key={c.title} delay={0.2 + i * 0.08} from={{ x: 30, y: 0 }}>
                  <strong>{c.title}</strong>
                  <span>{c.issuer}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <img src={sheetTop} alt="" className="about__edge about__edge--bottom" />
    </section>
  );
}
