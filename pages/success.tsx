import styles from "@/styles/Home.module.scss"
import Layout from "@/components/layout"

export default function Success() {
  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <h3>We will be in touch!</h3>
        </div>
      </div>
    </Layout>
  )
}
