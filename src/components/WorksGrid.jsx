function WorksGrid({ works, onSelect, animate = true }) {
  return (
    <div className="works-grid">
      {works.map((work, index) => (
        <article
          key={index}
          className={`work-card ${
            animate ? `fade-in fade-delay-${index + 1}` : 'no-anim'
          }`}
          onClick={() => onSelect(work)}
        >
          <div className="work-img-wrapper">
            <img src={work.image} alt={work.title} className="work-img" />
          </div>
          <h3 className="work-title">{work.title}</h3>
          <p className="work-desc">{work.desc}</p>
        </article>
      ))}
    </div>
  );
}
export default WorksGrid;