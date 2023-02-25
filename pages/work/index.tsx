import styles from "@/styles/Home.module.scss"
import Layout from "@/components/layout"
import { workItems } from "@/content/work"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"
import { slugify } from "@/utils/slugify"

export default function Work() {
  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <div className={styles.itemsGrid}>
            {workItems.map((item) => (
              <div className={styles.gridItem} key={item.title}>
                <h3>{item.title}</h3>
                <div style={{ position: "relative", height: "100px" }}>
                  <Image
                    src="/mystery-box.png"
                    alt="Foo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{item.description}</p>
                <br />
                <Link href={`/work/${slugify(item.title)}`}>
                  <h5>
                    Read more <span>-&gt;</span>
                  </h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
