import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from '../../src/pages/Home'
import LeetCode from '../../src/pages/LeetCode'
import Algorithms from '../../src/pages/Algorithms'
import FormalMethods from '../../src/pages/FormalMethods'
import Networking from '../../src/pages/Networking'

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