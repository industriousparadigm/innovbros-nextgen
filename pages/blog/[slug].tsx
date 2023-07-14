import Layout from "@/components/layout"
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.scss"
import { workItems } from "@/content/work"
import { slugify } from "@/utils/slugify"
import Image from "next/image"
import Link from "next/link"

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
          {item.content.map((block, i) => {
            switch (block.type) {
              case "Image": {
                return (
                  <div key={i}>
                    <div style={{ position: "relative", height: "400px" }}>
                      <Image
                        src={
                          block.image ? `/${block.image}` : "/mystery-box.png"
                        }
                        alt="Foo"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <br />
                  </div>
                )
              }
              case "Paragraph":
              default: {
                return (
                  <div key={i}>
                    {block.url ? (
                      <p className={styles.description}>
                        <Link href={block.url}>
                          <a className={styles.description}>{block.text}</a>
                        </Link>
                        </p>
                    ) : (
                    <p className={styles.description}>{block.text}</p>
                    )}
                    <br />
                  </div>
                )
                return null
              }
            }
          })}
        </div>
      </div>
    </Layout>
  )
}

export default WorkItem
