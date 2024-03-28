export default function Contact() {
  return (
    <div className="contact">
      <div>
        <form
          action="https://getform.io/slug"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" rows="10" />
          <button type="button">Work With Me</button>
        </form>
      </div>
    </div>
  );
}
