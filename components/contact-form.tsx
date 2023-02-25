export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
      <style jsx>{`
        label {
          font-size: 0.8rem;
        }
        input,
        textarea {
          width: 100%;
          height: 40px;
          border: none;
          border-bottom: 1px solid #d6d6d6;
          font-size: 1.3rem;
        }
        input:focus,
        textarea:focus {
          outline: 1px dotted #d6d6d6;
        }
        button {
          padding: 20px;
          background: black;
          color: white;
          border-radius: 10px;
          font-size: 1.3rem;
        }
      `}</style>
    </form>
  )
}
