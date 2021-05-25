import React, {useState} from 'react'

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
        return !value ? <p>Click button to get recommendation</p>
                : <p>{value}</p>
    }

    return (
        <div>
            <h2>Recommender</h2>
            {outputArea(selection)}
            <button onClick={choose}>Recommend!</button>
        </div>
    )
}

export default Recommender