import { Link } from "react-router-dom";
import { courses, platformStats } from "../data/educationData";
import "./Home.css";

const learningHighlights = [
  {
    number: "01",
    title: "Build practical skills",
    detail:
      "Hands-on activities help you move from understanding a concept to using it with confidence.",
  },
  {
    number: "02",
    title: "Follow a clear pathway",
    detail:
      "Explore connected learning in cybersecurity, networking, cloud, programming, and digital literacy.",
  },
  {
    number: "03",
    title: "Prepare for what is next",
    detail:
      "Develop relevant skills and evidence of progress for your next role, project, or career step.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="home-eyebrow">Academy | Learn what is next</div>
          <h1 className="SectionTitle">
            Build your skills.
            <br />
            Build your future.
          </h1>
          <p className="Psextion">
            Free online courses and certification-aligned pathways designed to
            help you stand out in the job market. From AI and cybersecurity to
            networking and digital literacy, it is all here.
          </p>
          <p className="home-supporting-copy">
            Start where you are, learn at your pace, and gain the confidence to
            take your next step in technology.
          </p>
          <div className="BtnContain">
            <Link className="btn BtnSec1" to="/cources">
              Start learning
            </Link>
            <Link className="btn BtnSec2" to="/about">
              Explore Academy
            </Link>
          </div>
        </div>
        <div className="home-hero-image">
          <img
            src="https://www.netacad.com/sfa-assets/images/png/landingBannerImage.png"
            alt="Learners building technology skills together"
          />
        </div>
      </section>

      <section className="home-stats" aria-label="Academy statistics">
        {platformStats.map((stat) => (
          <div className="home-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="home-section">
        <div className="home-section-heading">
          <div className="home-eyebrow">A practical way to learn</div>
          <h2>Skills that keep you moving forward</h2>
          <p>
            Whether you are beginning your technology journey or strengthening
            experience you already have, Academy gives you a clear place to
            learn, practise, and grow.
          </p>
        </div>
        <div className="home-highlights">
          {learningHighlights.map((highlight) => (
            <article className="home-highlight" key={highlight.number}>
              <span className="home-highlight-number">{highlight.number}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-course-section">
        <div className="home-section-heading home-course-heading">
          <div>
            <div className="home-eyebrow">Start exploring</div>
            <h2>Popular learning pathways</h2>
          </div>
          <Link className="home-text-link" to="/cources">
            View all courses <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
        <div className="home-course-grid">
          {courses.slice(0, 3).map((course) => (
            <article className="home-course-card" key={course.title}>
              <span className="home-course-category">{course.category}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="home-course-meta">
                {course.level} <span aria-hidden="true">|</span>{" "}
                {course.duration}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
