import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import Client from './Client'
import Social from './Social'
import Contact from './Contact'
import Footer from './Footer'
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
          <Client />
          <Social />
          <Contact />
          <Footer />
        </main>
      </div>
    </React.StrictMode>
  )
}

export default App
