import React, {useState} from 'react'

const Recommender = items => {

    const [selection, setSelection] = useState("")

    const randomNumber = max => {
        return Math.floor(Math.random() * max)
    }

    const choose = () => {
        let list = items.items

        console.log(list[randomNumber(list.length)])
    }

    const outputArea = value => {
        return <textarea value={value}></textarea>
    }

    const handleClick = event => {
        return null
    }

    return (
        <div>
            <h2>coming soon...</h2>
            {outputArea(selection)}
            <button onClick={handleClick}>Recommend!</button>
        </div>
    )
}

export default Recommender