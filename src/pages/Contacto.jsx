import { Link } from 'react-router-dom'
import './Contacto.css'

const WHATSAPP_NUMBER = '5493764000000'
const INSTAGRAM_URL = 'https://www.instagram.com/del_monte_deco/'

const contactItems = [
  {
    icon: '📱',
    title: 'WhatsApp',
    desc: 'La forma más rápida de comunicarse',
    action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'),
    label: 'Escribir por WhatsApp',
    color: '#25D366',
  },
  {
    icon: '📸',
    title: 'Instagram',
    desc: '@del_monte_deco — Seguinos para ver todas las novedades',
    action: () => window.open(INSTAGRAM_URL, '_blank'),
    label: 'Ver Instagram',
    color: '#E4405F',
  },
  {
    icon: '📧',
    title: 'Email',
    desc: 'contacto@delmontedeco.com.ar',
    action: () => window.location.href = 'mailto:contacto@delmontedeco.com.ar',
    label: 'Enviar email',
    color: '#6B4226',
  },
]

export default function Contacto() {
  return (
    <main className="contacto">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-tag">Estamos aquí</span>
          <h1 className="section-title">Contacto</h1>
          <div className="divider" />
          <p className="section-subtitle">
            ¿Tenés alguna consulta? ¡Con mucho gusto te respondemos!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contacto__grid">
            {contactItems.map((item, i) => (
              <div key={i} className="contacto__card card">
                <div className="contacto__card-icon" style={{ background: item.color + '20', color: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button
                  onClick={item.action}
                  className="btn btn-primary"
                  style={{ background: item.color, borderColor: item.color }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          <div className="contacto__info">
            <div className="contacto__info-card card">
              <div className="contacto__info-icon">📍</div>
              <div>
                <h3>Ubicación</h3>
                <p>Misiones, Argentina</p>
                <p className="text-muted" style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                  Envíos a todo el país.
                </p>
              </div>
            </div>
            <div className="contacto__info-card card">
              <div className="contacto__info-icon">🕐</div>
              <div>
                <h3>Horarios de atención</h3>
                <p>Lunes a viernes: 9:00 – 18:00</p>
                <p className="text-muted" style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                  Respondemos consultas en menos de 24hs.
                </p>
              </div>
            </div>
            <div className="contacto__info-card card">
              <div className="contacto__info-icon">🪵</div>
              <div>
                <h3>Tiempo de elaboración</h3>
                <p>7 a 15 días según el producto</p>
                <p className="text-muted" style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                  Para pedidos grandes, consultanos disponibilidad.
                </p>
              </div>
            </div>
          </div>

          <div className="contacto__cta text-center">
            <div className="contacto__cta-inner card">
              <span style={{ fontSize: '3rem' }}>🪵</span>
              <h3>¿Ya sabés qué querés?</h3>
              <p>Completá el formulario y en 24hs te contactamos para confirmar todos los detalles.</p>
              <Link to="/hacer-pedido" className="btn btn-primary btn-large" style={{ marginTop: '0.5rem' }}>
                🛒 Hacer mi pedido
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
