import styles from './DrinkList.module.css'
import Card from "../Card"
import store from '../../store'
import Avatar from '../ui/Avatar'
import Details from '../Details'

const DrinkList = () => {
    const drinks = store.getState()
    console.log(drinks)
    return (
        <div className={styles.grid}>
            {drinks.map((drink) => (
                <Card key={drink.id}>
                    <Avatar />
                    <Details drink={drink} />
                </Card>
            ))}
        </div>
    )
}

export default DrinkList