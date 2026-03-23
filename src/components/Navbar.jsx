import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h1><Link to="/">MeowCode</Link></h1>
          </div>
          <nav className="main-nav">
            <Link to="/leetcode" className="btn">LeetCode</Link>
            <Link to="/algorithms" className="btn">Algorithms</Link>
            <Link to="/formal-methods" className="btn">Formal Methods & Logic</Link>
            <Link to="/networking" className="btn">Networking</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
