import Layout from "@/components/layout"
import styles from "@/styles/Home.module.scss"
import dynamic from "next/dynamic"
import Spacer from "@/components/spacer"

const RandomQuote = dynamic(() => import("@/components/random-quote"), {
  ssr: false,
})

export default function Home() {
  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <h1 className={styles.centered}>Creating a better future together</h1>
          {/* <br />
          <p>Innovative solutions don’t happen by chance.</p>
          <br />
          <p>
            We are on a mission to create groundbreaking concepts and make a
            positive impact on your world.
          </p>
          <br />
          <p>Together, we can invent a better future.</p> */}
          <Spacer size={64} />
          <RandomQuote />
        </div>
      </div>
    </Layout>
  )
}
