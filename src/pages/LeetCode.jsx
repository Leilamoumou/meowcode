import { useState } from "react";
const posts = [
  {
    id: 1,
    number: "#001",
    title: "Two Sum",
    difficulty: "easy",
    topics: ["explained in terms of cats","array", "hash map"],
    sections: [
      { heading: "The Problem", content: "Problem explained in terms of cats" },
      { heading: "My Approach", content: "actual solution!" },
      { heading: "The Code", isCode: true },
      { heading: "Time & Space Complexity", content: "might explain in terms of cats" },
    ],
  },
  {
    id: 2,
    number: "#021",
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    topics: ["linked list", "recursion"],
    sections: [
      { heading: "The Problem", content: "Problem explained in terms of cats" },
      { heading: "My Approach", content: "actual solution!" },
      { heading: "The Code", isCode: true },
      { heading: "Time & Space Complexity", content: "might explain in terms of cats" },
    ],
  }
  ];
  //difficulty organization
  const difficultyColor = {
  easy: "#5cb85c",
  medium: "#f5a623",
  hard: "#e85d75",
};
 //styling START
 const styles = {
  root: {
    fontFamily: "'Space Mono', monospace",
    background: "#0f0e0d",
    color: "#e8e4dc",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    borderBottom: "1px solid #2e2c28",
    padding: "18px 32px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: { fontSize: "1.1rem", fontWeight: 700 },
  logoAccent: { color: "#f5a623" },
  tagline: {
    fontSize: "0.65rem",
    color: "#7a7570",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginLeft: "auto",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    flex: 1,
  },
  sidebar: {
    borderRight: "1px solid #2e2c28",
    overflowY: "auto",
    padding: "20px 0",
  },
  sidebarLabel: {
    fontSize: "0.6rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#7a7570",
    padding: "0 20px 12px",
  },
  postItem: (active) => ({
    padding: "14px 20px",
    cursor: "pointer",
    borderLeft: `3px solid ${active ? "#f5a623" : "transparent"}`,
    borderBottom: "1px solid #2e2c28",
    background: active ? "#1a1916" : "transparent",
    transition: "all 0.15s ease",
  }),
  postNumber: { fontSize: "0.6rem", color: "#f5a623", letterSpacing: "1px", marginBottom: "4px" },
  postTitle: { fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "6px" },
  postMeta: { display: "flex", gap: "6px", flexWrap: "wrap" },
  tag: (difficulty) => ({
    fontSize: "0.55rem",
    padding: "2px 6px",
    borderRadius: "2px",
    background: "#252320",
    color: difficulty ? difficultyColor[difficulty] : "#7a7570",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  }),
  main: { overflowY: "auto", padding: "40px 48px", maxWidth: "760px" },
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: "12px",
    color: "#7a7570",
  },
  postHeader: {
    marginBottom: "32px",
    paddingBottom: "24px",
    borderBottom: "1px solid #2e2c28",
  },
  postNum: { fontSize: "0.65rem", color: "#f5a623", letterSpacing: "2px", marginBottom: "10px" },
  postH1: {
    fontFamily: "'Crimson Pro', serif",
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: "14px",
  },
  sectionHeading: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.75rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#f5a623",
    margin: "28px 0 12px",
  },
  placeholder: {
    background: "#1a1916",
    border: "1px dashed #2e2c28",
    borderRadius: "4px",
    padding: "20px",
    color: "#7a7570",
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.7rem",
    fontStyle: "italic",
    textAlign: "center",
  },
  pre: {
    background: "#1a1916",
    border: "1px solid #2e2c28",
    borderLeft: "3px solid #f5a623",
    padding: "16px 20px",
    margin: "16px 0",
    borderRadius: "0 4px 4px 0",
    overflowX: "auto",
    fontSize: "0.78rem",
    lineHeight: 1.6,
    color: "#e8e4dc",
  },
};
 //end style

/*
function LeetCode() {
  return <div><h2>LeetCode Problems Explained🐱</h2></div>
}*/

function PostList({ posts, activeId, onSelect }) {
  return (
    //sidebar for related posts
    <aside style={styles.sidebar}>
      <div style={styles.sidebarLabel}>Posts</div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={styles.postItem(activeId === post.id)}
          onClick={() => onSelect(post)}
        >
          <div style={styles.postNumber}>{post.number}</div>
          <div style={styles.postTitle}>{post.title}</div>
          <div style={styles.postMeta}>
            <span style={styles.tag(post.difficulty)}>{post.difficulty}</span>
            {post.topics.map((t) => (
              <span key={t} style={styles.tag(null)}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
 function PostView({ post }) {
  if (!post) {
    return (
      <main style={{ ...styles.main, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={styles.emptyState}>
          <span style={{ fontSize: "3rem" }}>🐾</span>
          <p style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>Select a post!</p>
        </div>
      </main>
    );
  }
 return (
    <main style={styles.main}>
      <div style={styles.postHeader}>
        <div style={styles.postNum}>{post.number}</div>
        <h1 style={styles.postH1}>{post.title}</h1>
        <div style={styles.postMeta}>
          <span style={styles.tag(post.difficulty)}>{post.difficulty}</span>
          {post.topics.map((t) => (
            <span key={t} style={styles.tag(null)}>{t}</span>
          ))}
        </div>
      </div>
 
      {post.sections.map((section, i) => (
        <div key={i}>
          <h3 style={styles.sectionHeading}>{section.heading}</h3>
          {section.isCode
            ? <pre style={styles.pre}>{"code solution"}</pre>
            : <div style={styles.placeholder}>{section.content}</div>
          }
        </div>
      ))}
    </main>
  );
 }
//end && export

export default function LeetCode() {
  const [activePost, setActivePost] = useState(null);
 
  return (
    <div style={styles.root}>
      <header style={styles.header}>
        <span style={{ fontSize: "1.3rem" }}>🐱</span>
        <div style={styles.logo}>
        Leet<span style={styles.logoAccent}>Code</span>
        </div>
        <div style={styles.tagline}>LeetCode Problems Explained</div>
      </header>
 
      <div style={styles.layout}>
        <PostList
          posts={posts}
          activeId={activePost?.id}
          onSelect={setActivePost}
        />
        <PostView post={activePost} />
      </div>
    </div>
  );
}