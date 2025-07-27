import styles from "@/styles/ContactForm.module.scss"

export default function ContactForm() {
  return (
    <form
      className={styles.cf}
      name="contact"
      action="/success"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* <div className={`${styles.half} ${styles.left} ${styles.cf}`}>
        <input type="email" id="input-email" placeholder="Email address" />
        <input type="text" id="input-subject" placeholder="Subject" />
      </div> */}
      <div className="half right cf">
        <input type="text" id="input-name" placeholder="Email address" />
        <textarea
          name="message"
          id="input-message"
          placeholder="Message"
        ></textarea>
      </div>
      <input type="submit" value="Submit" id="input-submit" />
    </form>
  )
}
