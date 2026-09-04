import "./EducationPages.css";
import { platformStats } from "../data/educationData";

const learningPrinciples = [
  {
    title: "Learn by doing",
    description:
      "Interactive lessons, guided labs, and realistic scenarios help learners turn concepts into skills they can use immediately.",
  },
  {
    title: "Build career confidence",
    description:
      "Clear pathways connect digital foundations to in-demand areas such as networking, cybersecurity, cloud, and programming.",
  },
  {
    title: "Progress at your pace",
    description:
      "Flexible, accessible learning lets students fit development around work, family, and the next step in their career.",
  },
];

function About() {
  return (
    <main className="education-page">
      <section className="education-hero">
        <div className="education-eyebrow">About Academy</div>
        <h1>Practical learning for the people building what comes next.</h1>
        <p>
          Academy is an online learning platform focused on helping people gain
          the technical and digital skills that open doors. We combine
          industry-informed content with hands-on practice so every learner can
          move forward with confidence.
        </p>
      </section>
      <section className="education-section">
        <div className="education-stat-grid">
          {platformStats.map((stat) => (
            <div className="education-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="education-section">
        <div className="education-section-heading">
          <h2>Learning that connects ambition to action</h2>
          <p>
            From a first step into technology to a focused career change,
            Academy gives learners a structured way to explore, practise, and
            demonstrate new capabilities.
          </p>
        </div>
        <div className="education-info-grid">
          <article className="education-info-block">
            <h3>Our mission</h3>
            <p>
              To make high-quality technology education approachable, practical,
              and relevant for learners from every background.
            </p>
          </article>
          <article className="education-info-block">
            <h3>Our vision</h3>
            <p>
              A future where anyone with curiosity and commitment can access the
              skills needed to participate in the digital economy.
            </p>
          </article>
          <article className="education-info-block">
            <h3>Our promise</h3>
            <p>
              We keep learning focused on useful outcomes: stronger skills,
              visible progress, and better opportunities for work and growth.
            </p>
          </article>
        </div>
      </section>
      <section className="education-section">
        <div className="education-section-heading">
          <h2>How Academy helps you learn</h2>
        </div>
        <div className="education-card-grid">
          {learningPrinciples.map((principle) => (
            <article className="education-info-block" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
