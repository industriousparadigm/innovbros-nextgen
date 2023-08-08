import { quotes } from "@/content/quotes"
import randomElement from "@/utils/random-element"
import { useState } from "react"
import styles from "@/styles/Home.module.scss"

const RandomQuote = () => {
  const [quote, setQuote] = useState(randomElement(quotes))

  const getNewQuote = () => {
    const newQuote = randomElement(quotes)
    newQuote._id === quote._id ? getNewQuote() : setQuote(newQuote)
  }

  return (
    // <div className="m-12 md:px-12 lg:px-32 text-center">
    <div className={styles.quotesBox}>
      <p className={styles.description} key={quote._id}>{`${quote.quote}`}</p>
      <br />
      <p className={styles.description}>
        <em className={styles.centered}>- {quote.author}</em>
      </p>
      <br />
      /*
      <div className={styles.quoteRefreshButton} onClick={getNewQuote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clipRule="evenodd"
          />
        </svg>
        */
     <div className={styles.quoteRefreshButton} onClick={getNewQuote}>
        <Image src="/random-icon.svg" alt="Click Here" width={100} height={100} />
      </div>
    </div>
  )
}

export default RandomQuote
