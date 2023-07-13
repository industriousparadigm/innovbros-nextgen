import styles from "@/styles/Home.module.scss"
import Layout from "@/components/layout"
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
            {workItems.map(() => (
              <Link key={item.Portfolio} href={`../pages/about`}>
                <div className={styles.gridItem}>
                  <h3>Portfolio</h3>
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image
                      src={
                        item.coverImage
                          
                          : "/mystery-box.png"
                      }
                      alt="Foo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p>A collection of our work.</p>
                  <br />
                  <h5>
                    Read more <span>-&gt;</span>
                  </h5> 
                </div>
              </Link>
            )
                           (
              <Link key={item.Blog} href={`../pages/work`}>
                <div className={styles.gridItem}>
                  <h3>Blog</h3>
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image
                      src={
                        item.coverImage
                          
                          : "/mystery-box.png"
                      }
                      alt="Foo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p>Written wiggle.</p>
                  <br />
                  <h5>
                    Read more <span>-&gt;</span>
                  </h5> 
                </div>
              </Link>
            )
                          )
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}
