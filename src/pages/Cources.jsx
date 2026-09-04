import "./EducationPages.css";
import { courses } from "../data/educationData";

function Cources() {
  return (
    <main className="education-page">
      <section className="education-hero">
        <div className="education-eyebrow">Explore courses</div>
        <h1>Choose a pathway that moves your career forward.</h1>
        <p>
          Build foundational confidence or deepen your technical expertise with
          practical courses designed around the skills modern teams need.
        </p>
      </section>
      <section className="education-section">
        <div className="education-section-heading">
          <h2>Learn skills employers value</h2>
          <p>
            Every course combines clear instruction, useful practice, and a
            defined outcome so you always know what you are working towards.
          </p>
        </div>
        <div className="education-card-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className="course-category">{course.category}</div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>
                  <strong>Instructor:</strong> {course.instructor}
                </span>
                <span>
                  <strong>Level:</strong> {course.level}
                </span>
                <span>
                  <strong>Duration:</strong> {course.duration}
                </span>
                <span>
                  <strong>Format:</strong> {course.format}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Cources;
