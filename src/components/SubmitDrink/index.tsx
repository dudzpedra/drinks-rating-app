import SubmitForm from "../SubmitForm"
import styles from './SubmitDrink.module.css'

const SubmitDrink = () => {
    return (
        <div className={styles.container}>
            <h2>Submit a new drink:</h2>
            <SubmitForm />
        </div>
    )
}

export default SubmitDrink