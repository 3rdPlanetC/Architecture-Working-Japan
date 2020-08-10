// css
import styles from './styles/index.module.css'

export default function Main(props) {
    // props
    const { children } = props
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}