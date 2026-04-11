import { Link } from 'react-router-dom'
import './ComoPedir.css'

const steps = [
  {
    num: '01',
    icon: '🪵',
    title: 'Explorá el catálogo',
    desc: 'Navegá por nuestros productos y encontrá lo que más te gusta. También podés enviarnos una foto de referencia con tu idea.',
    tips: ['Podés combinar elementos de distintos productos', 'Si no encontrás lo que buscás, contanos tu idea', 'Miranos en Instagram para ver más trabajos'],
  },
  {
    num: '02',
    icon: '📋',
    title: 'Completá el formulario',
    desc: 'Completá el formulario de pedido con todos los detalles: producto, cantidad, personalización deseada y fecha de entrega.',
    tips: ['Cuantos más detalles, mejor resultado', 'Indicá nombre, frase o fecha para grabar', 'Podés adjuntar referencias por WhatsApp'],
  },
  {
    num: '03',
    icon: '💬',
    title: 'Nos ponemos en contacto',
    desc: 'En menos de 24hs te contactamos por WhatsApp para confirmar los detalles, el precio final y coordinar la entrega o envío.',
    tips: ['Confirmamos disponibilidad', 'Acordamos precio según complejidad', 'Coordinamos forma de pago'],
  },
  {
    num: '04',
    icon: '💳',
    title: 'Seña y confirmación',
    desc: 'Para confirmar el pedido se abona una seña del 50%. El saldo restante se abona al retirar o al momento del envío.',
    tips: ['Transferencia bancaria / MercadoPago', 'El pedido queda reservado con la seña', 'Emitimos comprobante de pago'],
  },
  {
    num: '05',
    icon: '📦',
    title: '¡Recibís tu pedido!',
    desc: 'Elaboramos cada pieza con dedicación y los mejores materiales. Llega perfecta, lista para regalar o decorar.',
    tips: ['Retiro en Misiones', 'Envíos a todo el país', 'Embalaje protector incluido'],
  },
]

const faqs = [
  {
    q: '¿Con cuánta anticipación debo hacer el pedido?',
    a: 'Generalmente 7 a 15 días según el producto. Para pedidos grandes o con mucha personalización, consultanos disponibilidad.',
  },
  {
    q: '¿Cuántas piezas puedo pedir?',
    a: 'No hay mínimo ni máximo. Hacemos desde una sola pieza hasta pedidos corporativos de grandes cantidades.',
  },
  {
    q: '¿Puedo elegir el diseño o traer mi propia idea?',
    a: 'Absolutamente. Podés elegir algo del catálogo o traer tu propia idea. ¡Nos encanta crear diseños únicos!',
  },
  {
    q: '¿Qué tipo de maderas usan?',
    a: 'Trabajamos con maderas nobles de la región como lapacho, cedro y pino selecto. Cada madera tiene su propia textura y veta única.',
  },
  {
    q: '¿Hacen envíos al interior del país?',
    a: 'Sí, enviamos a todo el país por correo o encomienda. El costo del envío corre por cuenta del cliente y se coordina al confirmar el pedido.',
  },
  {
    q: '¿Puedo cancelar un pedido?',
    a: 'Sí, con más de 5 días de anticipación podés cancelar y devolvemos la seña. Con menos tiempo no se realizan devoluciones ya que el trabajo ya comenzó.',
  },
]

export default function ComoPedir() {
  return (
    <main className="como-pedir">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-tag">Proceso de compra</span>
          <h1 className="section-title">¿Cómo hacer tu pedido?</h1>
          <div className="divider" />
          <p className="section-subtitle">
            Es muy simple. Seguí estos pasos y en poco tiempo tenés tu pieza artesanal lista.
          </p>
        </div>
      </section>

      <div className="como-pedir__notice">
        <div className="container">
          <div className="como-pedir__notice-inner">
            <span className="como-pedir__notice-icon">🪵</span>
            <div>
              <strong>Cada pieza es hecha completamente a mano</strong>
              <p>Trabajamos con maderas nobles y técnicas artesanales. Por eso cada trabajo requiere tiempo y dedicación para garantizar la calidad.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="como-pedir__steps">
            {steps.map((step, i) => (
              <div key={step.num} className={`como-pedir__step ${i % 2 !== 0 ? 'como-pedir__step--reverse' : ''}`}>
                <div className="como-pedir__step-visual">
                  <div className="como-pedir__step-circle">
                    <span>{step.icon}</span>
                    <div className="como-pedir__step-num">{step.num}</div>
                  </div>
                  {i < steps.length - 1 && <div className="como-pedir__step-line" />}
                </div>
                <div className="como-pedir__step-content card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  <ul className="como-pedir__tips">
                    {step.tips.map((tip, ti) => (
                      <li key={ti}>✓ {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/hacer-pedido" className="btn btn-primary btn-large">
              🛒 Hacer mi pedido ahora
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding como-pedir__faq">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Preguntas frecuentes</span>
            <h2 className="section-title">Todo lo que necesitás saber</h2>
            <div className="divider" />
          </div>
          <div className="faq__grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq__item card">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
