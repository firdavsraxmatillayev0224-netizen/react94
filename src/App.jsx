import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/settings'>Settings</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>

      <footer>
        <p>Mars IT school</p>
      </footer>
    </div>
  )
}

export default App