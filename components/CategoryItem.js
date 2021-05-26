import Link from 'next/link'
import styles from '../styles/Home.module.css'

const CategoryItem =({category, handler}) => {
    return (
        <div className={styles.card}>
            <Link href="/recommender/[category]" as={`recommender/${category}`}>
                    <h2>{category}</h2>
            </Link>
            <a className={styles.catRemove} name={category} type="DELETE" onClick={handler} title='Remove category?'>X</a>
        </div>
    )
}

export default CategoryItem