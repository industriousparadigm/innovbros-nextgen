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
            <Link href="../portfolio">
            <a className={styles.gridItem}>
              <h3>Portfolio</h3>
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/idea-lamp-01.png"
                  alt="Idea Lamp"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>A collection of projects we have worked over the years.</p>
              <br />
              <h5>
                Read more <span>-&gt;</span>
              </h5>
            </a>
            </Link>

            {/* Second section */}
            <Link href="../blog">
            <a className={styles.gridItem}>
              <h3>Blog</h3>
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/writing-01.png"
                  alt="Writing"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>Our writings about innovation, design, creativity and technology.</p>
              <br />
              <h5>
                Read more <span>-&gt;</span>
              </h5>
            </a>
          </Link>

            {/* Third section */}
            <Link href="../toolkit">
            <a className={styles.gridItem}>
              <h3>Toolkit</h3>
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src="/innov-toolkit-01.png"
                  alt="Toolkit"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p>A collection of our methods, tools and frameworks for innovation.</p>
              <br />
              <h5>
                Read more <span>-&gt;</span>
              </h5>
            </a>
          </Link>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
