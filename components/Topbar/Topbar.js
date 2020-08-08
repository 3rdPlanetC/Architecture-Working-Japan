// core
import Head from 'next/head'
import Link from 'next/link'
// css
import styles from './styles/index.module.css'
// images
import { ItemHeader } from '../../static/images/'

export default props => {
    // props
    const { page } = props
    return (
        <nav>
            <Head>
                <title>{page}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.topbar}>
                <div className={styles.topbarTop}>
                    <img src={ItemHeader}/>
                </div>
                <div className={styles.topbarBottom}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>ABOUT COLLECTOR</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dolls">
                                <a>DOLLS</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/keyrings">
                                <a>KEYRINGS</a>
                            </Link>
                        </li>
                        <li>AMULETS</li>
                        <li>PHOTOS</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}