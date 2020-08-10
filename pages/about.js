// components
import { Topbar, Main, Footer } from '../components'
// images
import { AboutBanner, AmuletIconLeft, AmuletIconRight, AboutContent } from '../static/images'
// css
import styles from '../static/styles/pages/about.module.css'

const About = props => {
	return (
		<div className="container background">
			<Topbar page="Collector - About" />
			<Main>
				<div className="banner-wrapper">
					<img src={AboutBanner} alt="About Banner" width="100%"/>
				</div>
				<div className={styles.content_1}>
					<div className={styles.iconLeft}>
						<img src={AmuletIconRight} alt="Icon About Content" width="100%"/>
					</div>
					<div className={styles.text}>
						<h2>"แฟนพันธุ์แท้ญี่ปุ่น กันทั้งครอบครัว"</h2>
						<p>
							เรื่องราวของสะสม ของฉันมันเริ่มมาจาก ครอบครัวของฉันชอบไปเที่ยวญี่ปุ่นมากๆ ฉันไปครั้งแรกตอนอยู่ประถม 
							จนตอนนี้ไปมาทั้งหมด 5 ครั้งแล้ว เรียกได้ว่า เป็นแฟนพันธุ์แท้ญี่ปุ่น กันทั้งครอบครัวเลยทีเดียว
						</p>
						<p>
							ตั้งแต่ได้ไปครั้งแรก ก็หลงรักกับประเทศนี้เข้าซะแล้วไม่ว่าจะเป็นสถานที่ท่องเที่ยว 
							ผู้คน ของกิน และ ของขายที่แสนน่ารัก ทำให้อดใจไม่ไหว จนต้องซื้อกลับมาทุกครั้ง
						</p>
					</div>
					<div className={styles.iconRight}>
						<img src={AmuletIconLeft} alt="Icon About Content" width="100%"/>
					</div>
				</div>
				<div className={styles.content_2}>
					<div>
						<img src={AboutContent.image1} width="100%"/>
					</div>
					<div>
						<img src={AboutContent.image2} width="100%"/>
					</div>
					<div>
						<img src={AboutContent.image3} width="100%"/>
					</div>
					<div>
						<img src={AboutContent.image4} width="100%"/>
					</div>
				</div>
				<div className={styles.content_3}>
					<img src={AboutContent.image5} width="100%"/>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default About