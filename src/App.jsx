import { Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DestinationsPage from './pages/DestinationsPage'
import HomePage from './pages/HomePage'
import PackagesPage from './pages/PackagesPage'

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <Routes>
      <Route
        element={
          <Layout
            authOpen={authOpen}
            onAuthOpen={() => setAuthOpen(true)}
            onAuthClose={() => setAuthOpen(false)}
          />
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
