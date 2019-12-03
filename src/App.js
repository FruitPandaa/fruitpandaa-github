import React from 'react'
import logo from './logo.svg'
import './App.css'

/////////////////////////////////////////////////////////////////// yarn
//
// yarn start
// Starts the development server.
//
// yarn build
// Bundles the app into static files for production.
//
// yarn test
// Starts the test runner.
//
// yarn eject
// Removes this tool and copies build dependencies, configuration files
// and scripts into the app directory. If you do this, you can’t go back!
//
/////////////////////////////////////////////////////////////////// git
//
// Create a directory to contain the project.
// Go into the new directory.
// Type git init.
// Write some code.
// Type git add . to add the files (see the typical use page).
// Type git commit.
//
/////////////////////////////////////////////////////////////////// npx
//
// Creating react app
// npx create-react-app app-name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
