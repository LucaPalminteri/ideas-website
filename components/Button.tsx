import styles from '../styles/Home.module.css'

type ButtonProps = {
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
    return <button className={styles.button} onClick={props.handleClick}>Submit</button>
}