import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">// learn.cs.with.cats</div>
          <h1>Some of my favorite CS concepts,<br />explained by <em> in terms of cats! </em></h1>
          <p>This website will consist of topics such as algorithms, logic, networking, & LeetCode, and will either have it explained in terms of cats, my personal input/why I'm interested in the matter, or both! These are some of my favorite things I learned throughout college. </p>
          <button className="hero-btn">Explore Here ^-^ →</button>
        </div>
        <div className="hero-cat">
          <svg viewBox="0 0 160 180" width="160" height="180" xmlns="http://www.w3.org/2000/svg">
            <g className="cat-tail">
              <path d="M72 145 Q30 160 18 140 Q8 122 28 110 Q48 100 72 120" fill="none" stroke="#7A4F2E" strokeWidth="10" strokeLinecap="round"/>
            </g>
            <ellipse cx="88" cy="130" rx="46" ry="38" fill="#D4A96A"/>
            <ellipse cx="88" cy="138" rx="26" ry="22" fill="#FBF0E0" opacity="0.7"/>
            <ellipse cx="90" cy="72" rx="42" ry="38" fill="#D4A96A"/>
            <polygon points="58,46 50,18 74,40" fill="#D4A96A"/>
            <polygon points="62,44 56,24 72,40" fill="#E8A090"/>
            <polygon points="112,44 122,18 100,40" fill="#D4A96A"/>
            <polygon points="108,43 118,24 102,40" fill="#E8A090"/>
            <g className="cat-eye-l">
              <ellipse cx="78" cy="70" rx="9" ry="10" fill="#3B2A1A"/>
              <ellipse cx="80" cy="68" rx="3" ry="3" fill="white" opacity="0.6"/>
            </g>
            <g className="cat-eye-r">
              <ellipse cx="102" cy="70" rx="9" ry="10" fill="#3B2A1A"/>
              <ellipse cx="104" cy="68" rx="3" ry="3" fill="white" opacity="0.6"/>
            </g>
            <polygon points="90,83 86,89 94,89" fill="#E07B3A"/>
            <path d="M86 89 Q90 95 94 89" fill="none" stroke="#7A4F2E" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="48" y1="80" x2="78" y2="84" stroke="#3B2A1A" strokeWidth="1" opacity="0.5"/>
            <line x1="48" y1="87" x2="78" y2="87" stroke="#3B2A1A" strokeWidth="1" opacity="0.5"/>
            <line x1="102" y1="84" x2="132" y2="80" stroke="#3B2A1A" strokeWidth="1" opacity="0.5"/>
            <line x1="102" y1="87" x2="132" y2="87" stroke="#3B2A1A" strokeWidth="1" opacity="0.5"/>
            <rect x="56" y="152" width="72" height="8" rx="3" fill="#3B2A1A" opacity="0.75"/>
            <rect x="60" y="136" width="64" height="18" rx="3" fill="#3B2A1A" opacity="0.75"/>
            <rect x="62" y="138" width="60" height="14" rx="2" fill="#F5C97A" opacity="0.9"/>
            <text x="92" y="149" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#3B2A1A">&gt;_ meow()</text>
          </svg>
        </div>
      </div>

      <div className="topics-section">
        <div className="section-label">// topics</div>
        <h2>Pick a topic!</h2>
        <div className="cards">
          <div className="card" style={{'--card-accent':'#E07B3A'}}>
            <div className="card-icon">🧩</div>
            <h3>LeetCode</h3>
            <p>TwoSum and more explained :3</p>
            <span className="card-tag">// problems</span>
          </div>
          <div className="card" style={{'--card-accent':'#C05A20'}}>
            <div className="card-icon">⚙️</div>
            <h3>Algorithms</h3>
            <p>Sorting, searching, graphs and more!</p>
            <span className="card-tag" style={{color:'#C05A20',background:'rgba(192,90,32,0.08)'}}>// logic</span>
          </div>
          <div className="card" style={{'--card-accent':'#7A4F2E'}}>
            <div className="card-icon">📐</div>
            <h3>Formal Methods & Logic</h3>
            <p>Proofs, predicates, state machines :3!</p>
            <span className="card-tag" style={{color:'#7A4F2E',background:'rgba(122,79,46,0.08)'}}>// proofs</span>
          </div>
          <div className="card" style={{'--card-accent':'#5A8A6A'}}>
            <div className="card-icon">🌐</div>
            <h3>Networking</h3>
            <p>TCP/IP, DNS, HTTP — how the internet actually works, with cat-packet analogies to help remember!</p>
            <span className="card-tag" style={{color:'#5A8A6A',background:'rgba(90,138,106,0.08)'}}>// packets</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home