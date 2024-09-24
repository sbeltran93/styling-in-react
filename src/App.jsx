import { useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Click To Count</h1>
      <div className={styles.card}>
        <button className={styles.button} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App