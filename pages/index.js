import Head from 'next/head'
import { useState } from 'react'

const [FROWN_EMOJI, SMILE_EMOJI, BOOM_EMOJI] = ['😕', '🙂', '💥']

export default function Home() {
  const [currentEmoji, setCurrentEmoji] = useState(FROWN_EMOJI)

  const frown = () => {
    return setCurrentEmoji(FROWN_EMOJI)
  }
  const upsideDown = () => {
    return setCurrentEmoji(SMILE_EMOJI)
  }
  const boom = () => {
    return setCurrentEmoji(BOOM_EMOJI)
  }

  return (
    <div className="container">
      <Head>
        <title>Turn that frown upside down!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="card">
          <h1 className="title">Turn that frown upside down!</h1>

          <h2 onClick={() => upsideDown()} className="emoji">
            {currentEmoji}
          </h2>

          <p className="buttons">
            Don't <button onClick={() => frown()}>frown</button> turn it{' '}
            <button onClick={() => upsideDown()}>upside down!</button>{' '}
            <button onClick={() => boom()}>Boom!</button>
          </p>
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: #333333;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #111111;
          border-color: #111111;
        }

        .emoji {
          font-size: 10em;
          line-height: 0;
        }

        .emoji,
        button {
          cursor: pointer;
        }

        .title,
        .emoji,
        .buttons {
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
