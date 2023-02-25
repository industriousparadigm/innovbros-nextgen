import styles from "@/styles/Home.module.scss"
import Link from "next/link"

type Props = {
  mobile?: boolean
}

export default function Menu({ mobile = false }: Props) {
  return (
    <>
      <div className={mobile ? undefined : styles.menu}>
        <Link className={styles.menuItem} href="/about">
          <h2>About</h2>
          {/* <p >Who we are</p> */}
        </Link>

        <Link className={styles.menuItem} href="/work">
          <h2>Work</h2>
          {/* <p >Our projects</p> */}
        </Link>

        <Link className={styles.menuItem} href="/contact">
          <h2>Contact</h2>
        </Link>
      </div>
    </>
  )
}
