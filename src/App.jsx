import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDataPlatforms from './pages/ServiceDataPlatforms'
import ServiceCompliance from './pages/ServiceCompliance'
import ServiceAISecurity from './pages/ServiceAISecurity'
import ServiceProfessional from './pages/ServiceProfessional'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/data-platforms" element={<ServiceDataPlatforms />} />
        <Route path="services/compliance" element={<ServiceCompliance />} />
        <Route path="services/ai-security" element={<ServiceAISecurity />} />
        <Route path="services/professional" element={<ServiceProfessional />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
