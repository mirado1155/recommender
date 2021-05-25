import React, {useState} from 'react'
import styles from '../styles/Home.module.css'

const Recommender = items => {

    const [selection, setSelection] = useState("")

    const randomNumber = max => {
        return Math.floor(Math.random() * max)
    }

    const choose = () => {
        let list = items.items
        console.log(list)
        setSelection("Choosing...")
        list.length ? 
                setTimeout(() => {
                    setSelection(list[randomNumber(list.length)])
                }, 618) 
                : setSelection("There doesn't seem to be anything to recommend. Add items to get recommendations!")
                
        
    }

    const outputArea = value => {
        let output
        return !value ? <p className={styles.recOutput}>Click button to get recommendation</p>
                : <p className={styles.recOutput}>{value}</p>
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.recTitle}>Recommender</h2>
            {outputArea(selection)}
            <div className={styles.buttonContainer}>
            <button className={styles.recommendButton} onClick={choose}>Recommend!</button>
            </div>
        </section>
    )
}

export default Recommender