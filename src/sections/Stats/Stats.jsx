const stats = [
  { value: '3x', label: 'faster team alignment' },
  { value: '87%', label: 'less context switching' },
  { value: '12+', label: 'project streams unified' },
  { value: '24/7', label: 'AI decision support' },
]

function Stats() {
  return (
    <section className="landing-section stats-section" aria-label="Key project stats">
      <div className="section-inner stats-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stats
