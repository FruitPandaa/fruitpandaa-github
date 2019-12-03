import React from 'react'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

/////////////////////////////////////////////////////////////////// ⚛️ yarn
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
/////////////////////////////////////////////////////////////////// ⚛️ git
//
// Create a directory to contain the project.
// Go into the new directory.
// Type git init.
// Write some code.
// Type git add . to add the files (see the typical use page).
// Type git commit.
//
/////////////////////////////////////////////////////////////////// ⚛️ npx
//
// Creating react app
// npx create-react-app app-name

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
    </div>
  )
}

export default App
