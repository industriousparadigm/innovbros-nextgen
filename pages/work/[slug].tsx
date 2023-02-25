import Layout from "@/components/layout"
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.scss"
import { workItems } from "@/content/work"
import { slugify } from "@/utils/slugify"

const WorkItem = () => {
  const router = useRouter()
  const { slug } = router.query

  const item = workItems.find((item) => slug === slugify(item.title))

  if (!item) return <h1>OOPSIE DAISIE</h1>

  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <h2>{item.title}</h2>
          <br />
          {item.content.map((block, i) => (
            <div key={i}>
              <p className={styles.description}>{block.text}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default WorkItem
