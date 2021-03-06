import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryItem from '../components/CategoryItem'
import React, {useState} from 'react'
import config from '../config.json'

export async function getStaticProps() {
  const res = await fetch(config.baseURL);
  const categories = await res.json();
  return {
    props: {
      categories
    }
  }
}


export default function Home({ categories }) {

  const [cats, setCats] = useState()
  const [toAdd, setToAdd] = useState("")

  !cats ? setCats(categories) : null

  const handleClick = event => {

    let name = event.target.name
    let action = event.target.type

    console.log(name + " " + action)
    manageCategories(name, action)
  }

  const handleKeyup = event => {
    let name = event.target.value
    let action = "POST"
    event.keyCode == 13 ? manageCategories(name, action) : null
  }

  const updateAdd = event => {
    setToAdd(event.target.value)
  }
  console.log(toAdd)


  const updateCategoriesList = (name, action) => {
    console.log(cats[name])
    let categoriesToUpdate = cats
    
    action == "POST" ? categoriesToUpdate[name] = [] : null 
    action == "DELETE" ? delete categoriesToUpdate[name] : null
    setCats(categoriesToUpdate)
    setToAdd("")
    window.location.reload()
  }


  const manageCategories = async (name, action) => {
    const res = await fetch (config.baseURL, {
            method: action,
            body: JSON.stringify({
              name: `${name}`
            }),
            headers: {
                'Content-type': 'application/json'
            }
    })
    const confirmation = await res.json()
    console.log(confirmation)
    res.status < 300 ? updateCategoriesList(name, action) : console.error("Could not fulfill request")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rob's Recommender</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/mirado1155">Recommender</a>
        </h1>

        <p className={styles.description}>
          Click a category below to view, or add a new one here:
          <input className={styles.addInput} type="text" onChange={updateAdd} onKeyUp={handleKeyup} name={toAdd} value={toAdd}></input>
          <a className={styles.catAdd} name={toAdd} type="POST" onClick={handleClick} title='Add Category?'>Add Category</a>
        </p>
        <p>Click the x next to a category to delete it</p>

        <div className={styles.grid}>
          {Object.keys(categories).map((category) => (
            <CategoryItem category={category} handler={handleClick}></CategoryItem>
          ))}
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a href="#">&copy; Robert Adams 2021</a>
      </footer>
    </div>
  )
}
