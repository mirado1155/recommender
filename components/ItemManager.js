import React, {useState} from 'react'
import IndividualItem from '../components/IndividualItem'
import styles from '../styles/Home.module.css'
import config from '../config.json'

const ItemManager = ({categoryItems, cat, updatePageItems}) => {
    const [items, setItems] = useState()
    const [toAdd, setToAdd] = useState("")

    //Handles a click for either adding or removing an item
    const handleClick = event => {
        let name = event.target.name
        let action = event.target.type
        manageItem(name, action)
    }

    //Handles a keyup specifically for adding an item
    const handleKeyup = event => {
        let name = event.target.value
        let action = "add"
        event.keyCode == 13 ? manageItem(name, action) : null
    }

    //updates state with form input content so that it can be removed after 'submission'
    const updateAdd = event => {
        setToAdd(event.target.value)
    }

    //Deals with adding and removing item from server
    const manageItem = async (name, action) => {

        // const res = await fetch (`http://192.168.0.103:3000/categories/${cat}`, {
        const res = await fetch (config.baseURL + cat, {
            method: 'PUT',
            body: JSON.stringify({
                name: `${name}`,
                action: `${action}`
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const confirmation = await res.json()
        console.log(confirmation)
        res.status < 300 ? updateItemsList(name, action) : console.error("Could not fulfill request")
        
    }

    const updateItemsList = (name, action) => {
        let itemsToUpdate = items
        action == "add" ? itemsToUpdate.push(name) : null 
        action == "remove" ? itemsToUpdate.splice(itemsToUpdate.indexOf(name), 1) : null
        setItems([...itemsToUpdate])
        updatePageItems([...itemsToUpdate])
        setToAdd("")
    }


    let itemsList


    !items ? setItems(categoryItems) : itemsList = items.map(item => {
        return <IndividualItem item={item} removeItem={handleClick} />
    });

    return (
        <section id="itemManager" className={styles.section}>
            <h2 className={styles.recTitle}>Items</h2>

            <div className={styles.addForm}>
                <input type="text" id="toAdd" name={toAdd} value={toAdd} onChange={updateAdd} onKeyUp={handleKeyup}></input>
                <button className={styles.addButton} onClick={handleClick} type="add" name={toAdd}>Add Item</button>
            </div>
            <div className="itemViewer">

                    {items ? itemsList.map(item => {
                        return item;
                    }) : null}

            </div>
        </section>

    )
}

export default ItemManager