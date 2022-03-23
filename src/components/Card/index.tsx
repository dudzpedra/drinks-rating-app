import React from 'react'
import Details from '../Details'
import Avatar from '../ui/Avatar'
import styles from './Card.module.css'

const Card: React.FC = () => {
    return (
        <div className={styles.card}>
            <Avatar />
            <Details />
        </div>
    )
}

export default Card