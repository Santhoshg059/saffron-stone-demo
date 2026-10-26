import { useState } from 'react'
import './App.css'

const dishes = [
  {
    name: 'Smoked Burrata',
    description: 'Heirloom tomatoes, basil oil, toasted sourdough.',
    price: '₹690',
    image:
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Signature Pasta',
    description: 'Slow-roasted tomato, parmesan, fresh herbs.',
    price: '₹890',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Chocolate Indulgence',
    description: 'Dark chocolate, vanilla cream, seasonal berries.',
    price: '₹590',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85',
  },
]

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
    alt: 'Warm restaurant dining interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85',
    alt: 'Elegant dining table arrangement',
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    alt: 'Freshly prepared seasonal food',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="concept-banner">
        Portfolio concept by CloudOptimix — fictional restaurant
      </div>

      <header className="site-header">
        <div className="container nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            SAFFRON <span>&</span> STONE
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <nav
            id="primary-navigation"
            className={menuOpen ? 'nav-links open' : 'nav-links'}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>Our Story</a>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />

          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow">
              A CELEBRATION OF FOOD & CULTURE
            </span>

            <h1>
              Where Every
              <br />
              Flavor Tells
              <br />
              a Story.
            </h1>

            <p>
              Thoughtfully crafted cuisine, beautiful spaces, and
              unforgettable dining moments.
            </p>

            <a href="#menu" className="button button-gold">
              Explore Our Menu <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span>CRAFTED WITH PASSION</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                alt="Beautifully arranged restaurant dining table"
                loading="lazy"
              />
              <div className="image-label">THE ART OF DINING</div>
            </div>

            <div className="about-content">
              <span className="eyebrow">OUR PHILOSOPHY</span>
              <h2>
                More Than a Meal.
                <br />
                <em>An Experience.</em>
              </h2>

              <p>
                At Saffron & Stone, we imagine a place where
                timeless culinary traditions meet contemporary
                creativity.
              </p>

              <p>
                Every detail is considered — from thoughtfully
                selected ingredients to the atmosphere surrounding
                each table.
              </p>

              <a href="#contact" className="text-link">
                Discover the Experience <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section menu-section" id="menu">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">CURATED WITH CARE</span>
              <h2>Signature Creations</h2>
              <p>
                A sample menu showcasing how beautifully food
                and storytelling can come together.
              </p>
            </div>

            <div className="dish-grid">
              {dishes.map((dish) => (
                <article className="dish-card" key={dish.name}>
                  <div className="dish-image">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                    />
                  </div>

                  <div className="dish-info">
                    <div className="dish-title-row">
                      <h3>{dish.name}</h3>
                      <span>{dish.price}</span>
                    </div>
                    <p>{dish.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="demo-note">
              Illustrative dishes and prices for this concept project.
            </p>
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-overlay" />

          <div className="container experience-content">
            <span className="eyebrow">THE SAFFRON & STONE EXPERIENCE</span>
            <h2>
              Beautiful Moments.
              <br />
              Lasting Memories.
            </h2>
            <p>
              An imagined dining destination where ambiance,
              hospitality, and flavor come together.
            </p>
            <a href="#gallery" className="button button-outline">
              Explore the Gallery
            </a>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A GLIMPSE INSIDE</span>
              <h2>The Gallery</h2>
              <p>
                A visual exploration of food, atmosphere,
                and thoughtful design.
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map((item) => (
                <div className="gallery-item" key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-content">
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Inspired by This Experience?</h2>
            <p>
              Saffron & Stone is a fictional restaurant website
              created to demonstrate premium web design.
              Looking for something similar for your business?
            </p>

            <a
              href="https://cloudoptimix-web.pages.dev/#contact"
              className="button button-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact CloudOptimix <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-brand">SAFFRON & STONE</div>
            <p>A fictional restaurant concept by CloudOptimix.</p>
          </div>

          <div className="footer-right">
            <a
              href="https://cloudoptimix-web.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built by CloudOptimix ↗
            </a>
            <span>© {new Date().getFullYear()} Saffron & Stone Concept</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App