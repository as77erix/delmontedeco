import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Galeria.css'

export default function Catalogo() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || 'todos')
  const [search, setSearch] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [tematicas, setTematicas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const [{ data: imgs }, { data: tems }] = await Promise.all([
        supabase.from('imagenes').select('*, tematicas(nombre, slug)').eq('activa', true).order('orden'),
        supabase.from('tematicas').select('id, nombre, slug').eq('activa', true).order('nombre'),
      ])
      setImagenes(imgs || [])
      setTematicas(tems || [])
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const handleCategory = (catSlug) => {
    setActiveCategory(catSlug)
    catSlug === 'todos' ? setSearchParams({}) : setSearchParams({ cat: catSlug })
  }

  const filtered = imagenes.filter(item => {
    const matchCat = activeCategory === 'todos' || item.tematicas?.slug === activeCategory
    const matchSearch = item.titulo.toLowerCase().includes(search.toLowerCase()) ||
      (item.descripcion || '').toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const allCategories = [{ id: 'todos', nombre: 'Todos', slug: 'todos' }, ...tematicas]

  return (
    <main className="galeria">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <span className="section-tag">Trabajos</span>
          <h1 className="section-title">Nuestro Catálogo</h1>
          <div className="divider" />
          <p className="section-subtitle">
            Cada pieza es única, hecha a mano con maderas nobles de Misiones. ¡Podemos personalizar cualquier diseño!
          </p>
        </div>
      </section>

      <section className="galeria__filters">
        <div className="container">
          <div className="galeria__search-wrap">
            <span className="galeria__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="galeria__search"
              id="catalog-search"
            />
          </div>
          <div className="galeria__categories">
            {allCategories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => handleCategory(cat.slug)}
                className={`galeria__cat-btn ${activeCategory === cat.slug ? 'active' : ''}`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="galeria__grid-section section-padding">
        <div className="container">
          {loading ? (
            <div className="galeria__empty"><span>🪵</span><p>Cargando productos...</p></div>
          ) : filtered.length === 0 ? (
            <div className="galeria__empty">
              <span>🪵</span>
              <p>No encontramos productos con esa búsqueda.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('todos') }} className="btn btn-secondary">
                Ver todos
              </button>
            </div>
          ) : (
            <div className="galeria__grid">
              {filtered.map(item => (
                <div key={item.id} className="galeria__card card">
                  <div className="galeria__card-img">
                    <img src={item.url} alt={item.titulo} loading="lazy" />
                    <div className="galeria__card-overlay">
                      <Link to="/hacer-pedido" className="btn btn-primary">
                        🛒 Pedir este producto
                      </Link>
                    </div>
                    {item.tag && (
                      <span className="badge badge-primary galeria__tag">{item.tag}</span>
                    )}
                  </div>
                  <div className="galeria__card-body">
                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="galeria__cta">
        <div className="container text-center">
          <p>¿No encontrás lo que buscás? ¡Contanos tu idea y lo hacemos!</p>
          <Link to="/hacer-pedido" className="btn btn-primary btn-large" style={{ marginTop: '1rem' }}>
            🔥 Pedido personalizado
          </Link>
        </div>
      </div>
    </main>
  )
}
