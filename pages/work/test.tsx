import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.basicCenter}>
        <div className={styles.pageContent}>
          <div className={styles.itemsGrid}>
            {/* First section */}
            <div className={styles.gridItem}>
              <h3>Portfolio</h3>
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/mystery-box.png"
                  alt="Image 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>A collection of our work</p>
              <br />
              <h5>
                <Link href="../about">Link 1 -&gt;</Link>
              </h5>
            </div>

            {/* Second section */}
            <div className={styles.gridItem}>
              <h3>Blog</h3>
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/mystery-box.png"
                  alt="Image 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>Our writtings</p>
              <br />
              <h5>
                <Link href="../contact">Link 2 -&gt;</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
