import styles from './DrinkList.module.css'
import Card from "../Card"

const DrinkList = () => {
    return (
        <div className={styles.grid}>
            {[0, 1, 2, 3, 4, 5].map(item => (
                <Card key={item} />
            ))}
        </div>
    )
}

export default DrinkList