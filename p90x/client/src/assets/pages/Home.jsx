import react from 'react'
import Header from '../components/Header'
import CurrentWorkout from '../components/CurrentWorkout'
import CurrentPhase from '../components/CurrentPhase'
import styles from './Home.module.css'

export default function Home(props) {
    return(
        <>
            <Header name={props.user.name} avatar={props.user.avatar} />
            <main >
                <CurrentWorkout styles={styles} name={props.user.name} phase={props.user.phase} day={props.user.day} workout={props.user.currentWorkout}/>
                <CurrentPhase styles={styles} phase={props.user.phase} workout={props.user.currentWorkout} day={props.user.day}/>
            </main>
        </>
    )
}