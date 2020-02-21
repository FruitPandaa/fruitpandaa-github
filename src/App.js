import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import Skills from './Skills'
import Clients from './Clients'
import Social from './Social'
import Contact from './Contact'
import Footer from './Footer'
import SimpleReactLightbox from 'simple-react-lightbox'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <main className="mt-2 py-5 darkgray">
          <Hero />
          <Skills />
          <SimpleReactLightbox>
            <Clients />
          </SimpleReactLightbox>
          <Social />
          <Contact />
          <Footer />
        </main>
      </div>
    </React.StrictMode>
  )
}

export default App
