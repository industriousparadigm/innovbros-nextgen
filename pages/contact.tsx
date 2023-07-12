import styles from "@/styles/Home.module.scss"
import Layout from "@/components/layout"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <p className={styles.description}>
            Feel free to contact us.
          </p>
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
