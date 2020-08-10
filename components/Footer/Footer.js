// css
import styles from './styles/index.module.css'

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerParagraph}>เว็บไซต์นี้ เป็นผลงานของนักศึกษา ในวิชาออกแบบเว็ปไซต์</p>
            <p className={styles.footerParagraph}>ภาควิชานิเทศศิลป์ คณะสถาปัตยกรรมศาสตร์</p>
            <p className={styles.footerParagraph}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
        </footer>
    )
}