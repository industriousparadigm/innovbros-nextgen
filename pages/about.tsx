import styles from "@/styles/Home.module.scss"
import Layout from "@/components/layout"

export default function About() {
  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <p className={styles.description}>
            We’re a team of innovators, passionate about what we do, on a mission to create groundbreaking concepts and improve your innovation output.
          </p>
          <br />
          <p className={styles.description}>
            With our ingenuity and systematic approach to creativity, and our complementary design and engineering experience, we ensure innovative solutions don’t happen by chance.
          </p>
        </div>
      </div>
    </Layout>
  )
}
