import { Link } from 'react-router-dom'
import './Home.css'

const featuredProducts = [
  {
    id: 1,
    title: 'Tabla de Asado Personalizada',
    desc: 'Con nombre y decoración grabada a fuego. Madera de lapacho.',
    tag: '🔥 Más vendido',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
  },
  {
    id: 2,
    title: 'Set de Porta Mates',
    desc: 'Porta mate con yerbera y bombilla. Grabado a fuego con tu diseño.',
    tag: '🧉 Artesanal',
    img: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600&q=80',
  },
  {
    id: 3,
    title: 'Cuadro Decorativo',
    desc: 'Diseño rústico con texto personalizado. Ideal para regalar.',
    tag: '🎁 Regalo',
    img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80',
  },
  {
    id: 4,
    title: 'Set Corporativo',
    desc: 'Productos con logo de tu empresa. Ideal para regalos empresariales.',
    tag: '🏢 Corporativo',
    img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80',
  },
  {
    id: 5,
    title: 'Tabla Rústica para Picadas',
    desc: 'Grande, resistente y con acabado natural. Para los amantes del asado.',
    tag: '⭐ Premium',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  },
  {
    id: 6,
    title: 'Señalética de Madera',
    desc: 'Carteles personalizados para hogar, eventos o comercios.',
    tag: '✏️ Custom',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80',
  },
]

const categorias = [
  { icon: '🔥', title: 'Tablas de Asado', desc: 'Personalizadas con nombre, iniciales o diseños únicos. El regalo perfecto para el asador.', slug: 'tablas' },
  { icon: '🪵', title: 'Decoración Hogar', desc: 'Cuadros, porta-retratos, señaléticas y decoración rústica para tu espacio.', slug: 'decoracion' },
  { icon: '🧉', title: 'Porta Mates', desc: 'Porta mates artesanales con detalles personalizados y grabados a fuego.', slug: 'porta-mates' },
  { icon: '🎁', title: 'Regalos Especiales', desc: 'Sets únicos para bodas, cumpleaños y eventos corporativos. Con packaging especial.', slug: 'regalos' },
]

const pasos = [
  { n: '01', title: 'Elegís tu producto', desc: 'Explorá el catálogo y seleccioná lo que más te guste.' },
  { n: '02', title: 'Nos contactás', desc: 'Por WhatsApp o completando el formulario de pedido.' },
  { n: '03', title: 'Lo personalizamos', desc: 'Trabajamos cada pieza a mano con el diseño que elijas.' },
  { n: '04', title: 'Lo recibís', desc: 'Envíos a todo el país o retiro en Misiones.' },
]

export default function Home() {
  return (
    <main className="home">

      {/* ===== STICKY CTA MOBILE ===== */}
      <div className="home__sticky-cta">
        <Link to="/hacer-pedido" className="home__sticky-cta__pedido">
          <span className="home__sticky-cta__icon">🛒</span>
          Hacer Pedido
        </Link>
        <a
          href="https://wa.me/5493764000000"
          target="_blank"
          rel="noreferrer"
          className="home__sticky-cta__whatsapp"
        >
          <span className="home__sticky-cta__icon">💬</span>
          WhatsApp
        </a>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__inner">
          <div className="hero__content animate-fadeInUp">
            <span className="section-tag">Artesanías en Madera · Misiones</span>
            <h1 className="hero__title">
              Piezas únicas<br />
              <em>hechas a mano</em>
            </h1>
            <p className="hero__subtitle">
              Tablas de asado, decoración y artesanías personalizadas.<br />
              Cada pieza lleva el alma del monte misionero.
            </p>
            <div className="hero__actions">
              <Link to="/catalogo" className="btn btn-primary btn-large">
                🪵 Ver Catálogo
              </Link>
              <Link to="/hacer-pedido" className="btn btn-outline-white btn-large">
                🛒 Hacer Pedido
              </Link>
            </div>
          </div>
          <div className="hero__badge float">
            <div className="hero__badge-icon">🪚</div>
            <p>100%<br/>Artesanal</p>
          </div>
        </div>
        <div className="hero__wave">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-cream)"/>
          </svg>
        </div>
      </section>

      {/* ===== PRODUCTOS DESTACADOS ===== */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Trabajos recientes</span>
            <h2 className="section-title">Algunos de nuestros productos</h2>
            <div className="divider" />
          </div>
          <div className="home__featured">
            {featuredProducts.map(p => (
              <Link to="/catalogo" key={p.id} className="home__featured-card card">
                <div className="home__featured-img">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="badge badge-primary home__featured-tag">{p.tag}</span>
                </div>
                <div className="home__featured-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/catalogo" className="btn btn-secondary btn-large">
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CATEGORÍAS ===== */}
      <section className="section-padding" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Nuestros productos</span>
            <h2 className="section-title">¿Qué hacemos?</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Todo tallado y decorado a mano, con maderas nobles de la región y técnicas artesanales.
            </p>
          </div>
          <div className="home__cats">
            {categorias.map(cat => (
              <Link to={`/catalogo?cat=${cat.slug}`} key={cat.slug} className="home__cat-card card">
                <div className="home__cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="home__cat-link">Ver productos →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BANNER PERSONALIZACIÓN ===== */}
      <section className="home__banner">
        <div className="home__banner__bg" />
        <div className="container home__banner__inner">
          <div className="home__banner__text">
            <span className="section-tag" style={{ color: 'var(--color-accent-light)' }}>¿Tenés una idea?</span>
            <h2 className="section-title" style={{ color: 'white' }}>Personalizamos<br/>lo que imagines</h2>
            <p className="home__banner__desc">
              Nombres, frases, logos, fechas especiales. Grabamos a fuego y pirograbado sobre maderas seleccionadas.
            </p>
            <Link to="/hacer-pedido" className="btn btn-accent btn-large">
              🔥 Quiero un diseño personalizado
            </Link>
          </div>
          <div className="home__banner__icons">
            <div className="home__banner__icon float">🪵</div>
            <div className="home__banner__icon float" style={{ animationDelay: '1s' }}>🔥</div>
            <div className="home__banner__icon float" style={{ animationDelay: '2s' }}>🪚</div>
          </div>
        </div>
      </section>

      {/* ===== CÓMO FUNCIONA ===== */}
      <section className="section-padding" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Proceso</span>
            <h2 className="section-title">¿Cómo hacemos tu pedido?</h2>
            <div className="divider" />
          </div>
          <div className="home__steps">
            {pasos.map(p => (
              <div key={p.n} className="home__step">
                <div className="home__step-n">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="home__cta">
        <div className="container text-center">
          <span className="section-tag">¿Listo?</span>
          <h2 className="section-title">Hacé tu pedido hoy</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Cada pieza es única. Hacemos envíos a todo el país o retiro en Misiones.
          </p>
          <div className="home__cta-actions">
            <Link to="/hacer-pedido" className="btn btn-primary btn-large">
              🛒 Hacer mi pedido
            </Link>
            <a
              href="https://wa.me/5493764000000"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent btn-large"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
