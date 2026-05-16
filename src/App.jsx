import { useMemo, useState } from 'react'
import './App.css'
import {
  hero,
  about,
  services,
  skills,
  differentiators,
  projects,
  testimonials,
  faqs,
  contact,
  navLinks,
} from './content'

const projectFilters = ['Tous', 'Web', 'App Mobile', 'Projet Scolaire']

const SectionHeading = ({ eyebrow, title, description }) => (
  <header className="section-heading">
    {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </header>
)

const Popup = ({ status, onClose }) => {
  if (status === 'idle' || status === 'loading') return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <div className={`popup-icon ${status}`}>
          {status === 'success' ? '✓' : '!'}
        </div>
        <h3>{status === 'success' ? 'Message envoyé !' : 'Oups...'}</h3>
        <p>
          {status === 'success' 
            ? "Merci pour votre message. Je vous répondrai dans les plus brefs délais."
            : "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement par email."}
        </p>
        <button className="button primary" onClick={onClose}>
          {status === 'success' ? 'Super !' : 'Fermer'}
        </button>
      </div>
    </div>
  );
};

function App() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // idle, loading, success, error

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('loading')

    const formData = new FormData(e.target)
    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  const featuredProjects = useMemo(() => projects.filter(p => p.featured), [])
  
  const otherProjects = useMemo(() => {
    let filtered = projects.filter(p => !p.featured)
    if (activeFilter !== 'Tous') {
      filtered = filtered.filter((project) => project.category === activeFilter)
    }
    return filtered
  }, [activeFilter])

  return (
    <div className="app-shell">
      <Popup status={formStatus} onClose={() => setFormStatus('idle')} />
      <nav className="top-nav">
        <div className="nav-brand">LuCodes</div>
        <button
          type="button"
          className={`nav-toggle ${isNavOpen ? 'open' : ''}`}
          onClick={() => setIsNavOpen((prev) => !prev)}
          aria-expanded={isNavOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div id="primary-navigation" className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsNavOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta mobile" href="#contact" onClick={() => setIsNavOpen(false)}>
            Discutons
          </a>
        </div>
        <a className="nav-cta desktop" href="#contact">
          Discutons
        </a>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-copy">
            <span className="hero-eyebrow">{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p>{hero.intro}</p>
            <div className="hero-actions">
              {hero.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`button ${action.variant}`}
                  download={action.download}
                >
                  {action.label}
                </a>
              ))}
            </div>
            <div className="hero-stats">
              {hero.highlights.map((item) => (
                <div key={item.label} className="stat-card">
                  <span className="stat-label">{item.label}</span>
                  <span className="stat-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" aria-hidden />
            <figure className="hero-portrait">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                loading="eager"
              />
            </figure>
          </div>
        </section>

        <section id="about" className="about">
          <SectionHeading
            eyebrow="À propos"
            title={about.title}
            description="Comprendre ma vision et ma manière de transformer une idée en produit digital."
          />
          <div className="about-content">
            <div className="about-text">
              {about.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-highlights">
              {about.points.map((point) => (
                <div key={point} className="about-card">
                  <span className="about-icon" aria-hidden>
                    •
                  </span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <SectionHeading
            eyebrow="Services"
            title="Ce que je peux bâtir pour vous"
            description="Des solutions qui combinent design, performance et évolutivité pour répondre aux enjeux métiers."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-pill">Sur-mesure</span>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="why">
          <SectionHeading
            eyebrow="Valeur ajoutée"
            title="Pourquoi collaborer avec moi ?"
            description="Je construis des produits qui s'intègrent parfaitement à votre écosystème et évoluent avec vos besoins."
          />
          <div className="why-grid">
            {differentiators.map((item) => (
              <article key={item.title} className="why-card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <SectionHeading
            eyebrow="Compétences"
            title="Un socle technique solide"
            description="Je m'appuie sur une stack moderne et maîtrisée pour livrer rapidement des produits fiables."
          />
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="skill-bar">
                  <div style={{ width: `${skill.value}%` }} className="skill-progress" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects">
          <SectionHeading
            eyebrow="Portfolio"
            title="Mes réalisations"
            description="Une sélection de mes meilleurs projets et travaux académiques."
          />
          
          <div className="featured-projects">
            <h3 className="projects-subtitle">Projets Phares</h3>
            <div className="project-grid featured">
              {featuredProjects.map((project) => (
                <article key={project.title} className="project-card featured">
                  <div className="project-preview">
                    {project.image && (
                      <figure className="project-media">
                        <img src={project.image} alt={project.imageAlt ?? project.title} loading="lazy" />
                      </figure>
                    )}
                    <div className="project-badge">{project.category}</div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Voir le projet
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="other-projects">
            <div className="projects-header-flex">
              <h3 className="projects-subtitle">Plus de projets</h3>
              <div className="project-filters">
                {projectFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={filter === activeFilter ? 'active' : ''}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="project-grid compact">
              {otherProjects.map((project) => (
                <article key={project.title} className="project-card compact">
                  <div className="project-content">
                    <div className="project-header-compact">
                      <span className="project-badge-compact">{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Lien
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <SectionHeading
            eyebrow="Témoignages"
            title="Ce que disent mes mentors et collaborateurs"
          />
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="faq">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions fréquentes"
            description="Une collaboration fluide passe par une vision partagée. Voici les réponses aux demandes les plus courantes."
          />
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaqIndex === index
              return (
                <article
                  key={item.question}
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                >
                  <header>
                    <h3>{item.question}</h3>
                    <span>{isOpen ? '−' : '+'}</span>
                  </header>
                  <p>{item.answer}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="contact" className="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Discutons de votre projet"
            description="Décrivez votre idée et nous construirons ensemble une solution impactante."
          />
          <div className="contact-grid">
            <div className="contact-details">
              <div>
                <span className="contact-label">Adresse</span>
                <p>{contact.location}</p>
              </div>
              <div>
                <span className="contact-label">Téléphone</span>
                <p>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                </p>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
              <div>
                <span className="contact-label">LinkedIn</span>
                <p>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    Profil LinkedIn
                  </a>
                </p>
              </div>
              <div>
                <span className="contact-label">GitHub</span>
                <p>
                  <a href={contact.github} target="_blank" rel="noreferrer">
                    @Konou0luc
                  </a>
                </p>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/ajax/konouluc0@gmail.com"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <label htmlFor="name">Votre nom</label>
                <input id="name" name="name" type="text" placeholder="Nom et prénom" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Votre email</label>
                <input id="email" name="email" type="email" placeholder="contact@email.com" required />
              </div>
              <div className="form-row">
                <label htmlFor="subject">Sujet</label>
                <input id="subject" name="subject" type="text" placeholder="Sujet de votre message" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Décrivez votre projet, vos contraintes, vos objectifs..."
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`button primary ${formStatus === 'loading' ? 'loading' : ''}`}
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <nav className="footer-links" aria-label="Réseaux sociaux">
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
          <p>© {new Date().getFullYear()} Luc Konou — Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
