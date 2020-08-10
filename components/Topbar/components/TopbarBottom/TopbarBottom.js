// core
import Link from 'next/link'

export default function TopbarBottom(props) {
    // props
    const { className } = props
    return (
        <div className={className.topbarBottom}>
            <ul className={className.menu}>
                <li>
                    <Link href="/">
                        <a>HOME</a>
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
                <li>
                    <Link href="/amulets">
                        <a>AMULETS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/photos">
                        <a>PHOTOS</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}