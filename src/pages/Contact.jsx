import "./EducationPages.css";

function Contact() {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <main className="education-page">
      <section className="education-hero">
        <div className="education-eyebrow">Contact Academy</div>
        <h1>We are here to help you keep learning.</h1>
        <p>
          Have a question about a course, your learning pathway, or platform
          support? Send our learner success team a message and we will help you
          find the right next step.
        </p>
      </section>
      <section className="education-section contact-layout">
        <aside className="contact-panel">
          <h2>Talk to our team</h2>
          <p>
            Our support team can help with enrolment, account access,
            certificates, course recommendations, and accessibility questions.
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email</strong>
              <a href="mailto:support@academy.example">
                support@academy.example
              </a>
            </li>
            <li>
              <strong>Phone</strong>
              <a href="tel:+18005550184">+1 (800) 555-0184</a>
            </li>
            <li>
              <strong>Learning support hours</strong>
              <span>Monday to Friday, 9:00 AM to 6:00 PM UTC</span>
            </li>
            <li>
              <strong>Academy learning centre</strong>
              <span>1200 Market Street, San Francisco, CA 94102</span>
            </li>
          </ul>
        </aside>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <div className="contact-form-grid">
            <div className="contact-field">
              <label htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="name" type="text" required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" required />
            </div>
            <div className="contact-field full-width">
              <label htmlFor="contact-topic">How can we help?</label>
              <select id="contact-topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="course">Course recommendation</option>
                <option value="account">Account or enrolment support</option>
                <option value="certificate">Certificate question</option>
                <option value="accessibility">Accessibility support</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="contact-field full-width">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" required />
            </div>
            <div className="contact-field full-width">
              <button className="contact-submit" type="submit">
                Send message
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
