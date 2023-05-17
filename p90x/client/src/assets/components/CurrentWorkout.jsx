export default function CurrentWorkout(props) {
    const styles = props.styles
    const name = props.name
    const workoutType = props.workout.type
    const workout = props.workout.workout

    return(
        <div className={styles.currentWorkoutContainer}>
            <div className={styles.date}>
                <p>Phase {props.phase}</p>
                <p>Day {props.day}</p>
            </div>
            <div data-background={workoutType} className={styles.currentWorkoutCardContainer}>
                <h2 data-color="black">{name}, here's your<br/>next workout </h2>
                <img className={styles.currentWorkoutImg} data-background={workoutType} src={`/src/assets/images/${workoutType}.svg`} alt={workout} />
                <div className={styles.currentWorkoutCard}>
                    <h2 data-color={workoutType}>{workout}</h2>
                    <a href="/workout">Start workout</a>
                </div>
            </div>
        </div>
    )
}