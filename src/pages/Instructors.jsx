import "./EducationPages.css";
import { instructors } from "../data/educationData";

function Instructors() {
  return (
    <main className="education-page">
      <section className="education-hero">
        <div className="education-eyebrow">Meet the instructors</div>
        <h1>Learn from practitioners who know how the work gets done.</h1>
        <p>
          Our instructors bring technical experience, teaching skill, and a
          genuine commitment to helping learners turn knowledge into progress.
        </p>
      </section>
      <section className="education-section">
        <div className="education-section-heading">
          <h2>Guidance from people in the field</h2>
          <p>
            Ask better questions, learn proven approaches, and understand how
            classroom concepts show up in real technology teams.
          </p>
        </div>
        <div className="education-card-grid">
          {instructors.map((instructor) => (
            <article className="instructor-card" key={instructor.name}>
              <div className="instructor-heading">
                <div className="instructor-avatar" aria-hidden="true">
                  {instructor.initials}
                </div>
                <div>
                  <h3>{instructor.name}</h3>
                  <span className="instructor-role">{instructor.role}</span>
                </div>
              </div>
              <p>{instructor.bio}</p>
              <div className="instructor-detail">
                <strong>Expertise</strong>
                <div>{instructor.expertise}</div>
              </div>
              <div className="instructor-detail">
                <strong>Experience</strong>
                <div>{instructor.experience}</div>
              </div>
              <div className="instructor-courses">
                <strong>Teaches:</strong> {instructor.courses.join(", ")}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Instructors;
