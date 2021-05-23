import Link from 'next/link'
import styles from '../styles/Home.module.css'

const CategoryViewer =({category, items}) => {
    console.log(items);
    return (
        <Link href="/recommender/[category]" as={`recommender/${category}`}>
            <a className={styles.card}>
                <h2>{category}</h2>
            </a>
        </Link>
    )
}

export default CategoryViewer