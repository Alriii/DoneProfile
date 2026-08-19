import "./Journey.css";

const journey = [
  {
    number: "01",
    title: "HTML & CSS",
    description: "Building the foundation of web development.",
  },
  {
    number: "02",
    title: "JavaScript",
    description: "Learning programming basics and DOM manipulation.",
  },
  {
    number: "03",
    title: "React",
    description:
      "Exploring components, state, props, and modern UI development.",
  },
  {
    number: "04",
    title: "The Future",
    description: "Building real-world projects and growing everyday.",
  },
];

function Journey() {
  return (
    <section className="journey" id="journey">
      <h2 className="section-title section-title--center">My Learning Journey</h2>
      <div className="journey-container">
        <div className="journey-line"></div>
        {journey.map((step) => (
          <div className="journey-step" key={step.number}>
            <div className="journey-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
