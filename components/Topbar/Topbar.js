// core
import Head from 'next/head'
// css
import styles from './styles/index.module.css'
// images
import { AmuletIconRight, TopbarLine } from '../../static/images/'
// components
import { TopbarTop, TopbarBottom, Line } from './components'

export default function Topbar(props) {
    // props
    const { page } = props
    return (
        <nav>
            <Head>
                <title>{page}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.topbar}>
                <TopbarTop className={styles} 
                    icon={AmuletIconRight}
                />
                <TopbarBottom className={styles} />
                <Line className={styles} 
                    TopbarLine={TopbarLine}
                />
            </div>
        </nav>
    )
}