export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact me here!</h1>
      <div>
        <form action="" method="POST" className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-name"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="contact-email"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="contact-message"
          />
          <button type="button" className="contact-button">
            <strong>Work With Me</strong>
          </button>
        </form>
      </div>
    </div>
  );
}
