import React from 'react'
import avatar from '../assets/images/avatar.svg'
import design from '../assets/images/design.png'
import illustration from '../assets/images/illustration.png'
import marketing from '../assets/images/marketing.png'
import programming from '../assets/images/programming.png'

import styles from './styles.module.css'

export default function Home () {
    return(
        <>
        <div className={styles.avatarContainer}>
            <img className={styles.illustration} src={illustration.src} alt="Illustration Icon" />
            <img className={styles.design} src={design.src} alt="Design Icon" />
            <img className={styles.marketing} src={marketing.src} alt="Marketing Icon" />
            <img className={styles.programming} src={programming.src} alt="programming Icon" />
            <img className={styles.avatar} src={avatar.src} alt="It's me, Brandon Aldred" />
        </div>
        <div className={styles.heroText}>
            <h3>Versatile. Innovative. Resourceful. Driven.</h3>
            <h1>Where strategic marketing, design, and technical proficiency converge.</h1>
        </div>
        </>
            
    )
}