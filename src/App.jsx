import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Utbar from './components/Utbar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import PageLoader from './components/PageLoader.jsx'
import { useLang } from './i18n.jsx'

// Lazy-load all routes — initial bundle stays small, each page loads on demand.
// Crucial for LCP/TBT optimisation.
const Home          = lazy(() => import('./pages/Home.jsx'))
const About         = lazy(() => import('./pages/About.jsx'))
const Products      = lazy(() => import('./pages/Products.jsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'))
const Services      = lazy(() => import('./pages/Services.jsx'))
const Projects      = lazy(() => import('./pages/Projects.jsx'))
const ProjectCategory = lazy(() => import('./pages/ProjectCategory.jsx'))
const Sectors       = lazy(() => import('./pages/Sectors.jsx'))
const Quality       = lazy(() => import('./pages/Quality.jsx'))
const News          = lazy(() => import('./pages/News.jsx'))
const Contact       = lazy(() => import('./pages/Contact.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Legacy /ar link — switch the whole site to Arabic, then send home.
function ArRedirect() {
  const { setLang } = useLang()
  useEffect(() => { setLang('ar') }, [setLang])
  return <Navigate to="/" replace />
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageLoader />
      <Utbar />
      <Header />
      <Suspense fallback={<div style={{minHeight:'60vh'}}></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectCategory />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ar" element={<ArRedirect />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingActions />
    </>
  )
}
