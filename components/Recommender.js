import React, {useState} from 'react'

const Recommender = items => {

    const [selection, setSelection] = useState("")

    const randomNumber = max => {
        return Math.floor(Math.random() * max)
    }

    const choose = () => {
        let list = items.items
        setSelection("Choosing...")
        setTimeout(() => {
            setSelection(list[randomNumber(list.length)])
        }, 618)
        
    }

    const outputArea = value => {
        return <textarea value={value}></textarea>
    }

    return (
        <div>
            <h2>coming soon...</h2>
            {outputArea(selection)}
            <button onClick={choose}>Recommend!</button>
        </div>
    )
}

export default Recommender