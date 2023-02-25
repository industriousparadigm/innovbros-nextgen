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
          <h1>Creating a better future together</h1>
          <Spacer size={64} />
          <RandomQuote />
        </div>
      </div>
    </Layout>
  )
}
