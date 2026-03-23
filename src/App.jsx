import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LeetCode from './pages/LeetCode'
import Algorithms from './pages/Algorithms'
import FormalMethods from './pages/FormalMethods'
import Networking from './pages/Networking'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leetcode" element={<LeetCode />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/formal-methods" element={<FormalMethods />} />
          <Route path="/networking" element={<Networking />} />
        </Routes>
      </main>
    </>
  )
}

export default App