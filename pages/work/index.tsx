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
              <Link key={item.title} href={`/work/${slugify(item.title)}`}>
                <div className={styles.gridItem}>
                  <h3>{item.title}</h3>
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image
                      src={
                        item.coverImage
                          ? `/${item.coverImage}`
                          : "/mystery-box.png"
                      }
                      alt="Foo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p>{item.description}</p>
                  <br />
                  <h5>
                    Read more <span>-&gt;</span>
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
