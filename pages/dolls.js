// components
import { Topbar, Main, Footer } from '../components'
// images
import { DollsBanner, DollsContent } from '../static/images'
// css
import styles from '../static/styles/pages/dolls.module.css'

const Dolls = props => {
	return (
		<div className="container background">
			<Topbar page="Collector - About" />
			<Main>
				<div className="banner-wrapper">
					<img src={DollsBanner} alt="Dolls Banner" width="100%"/>
				</div>
				<div className={styles.content_1}>
					<div className={styles.content_1_image}>
						<img src={DollsContent.image1} alt="Doll Image 1" width="100%"/>
					</div>
					<div className={styles.content_1_text}>
						<h2 className={styles.content_1_h2}>ตุ๊กตาญี่ปุ่น <b style={{fontFamily: "hiragano"}}>(日本人形)</b></h2>
						<p className={styles.content_1_p}>
							เป็นสิ่งที่มีความสัมพันธ์กับชาวญี่ปุ่นมาตั้งแต่สมัยโบราณ เป็นงานฝีมือขั้นสูงที่มีความละเอียดอ่อน 
							สะท้อนให้เห็นถึงขนบธรรมเนียมประเพณีอันงดงามของญี่ปุ่น
						</p>
						<p className={styles.content_1_p}>
							ตุ๊กตาแต่ละตัวก็จะแสดงถึงลักษณะเฉพาะของท้องถิ่นต่างๆไม่ว่าจะเป็น รูปทรง ลวดลายหรือการแกะสลัก 
							รวมทั้งการตกแต่งด้วยผ้านานาชนิดที่วิจิรบรรจง ความเป็นมาของตุ๊กตาแต่ละยุคแต่ละสมัยก็ยังมีความหลากหลาย
						</p>
					</div>
				</div>
				<div className={styles.content_2}>
					<div className={styles.content_2_image}>
						<img src={DollsContent.image2} alt="Dolls Image" width="100%" height="100%"/>
					</div>
					<div className={styles.content_2_image}>
						<img src={DollsContent.image3} alt="Dolls Image" width="100%" height="100%"/>
					</div>
					<div className={styles.content_2_image}>
						<img src={DollsContent.image4} alt="Dolls Image" width="100%" height="100%"/>
					</div>
				</div>
				<div className={styles.content_3}>
					<img src={DollsContent.image5} alt="Dolls Image" width="100%" height="100%"/>
					<p className={styles.content_3_text}>
						ที่บ้านชอบซื้อตุ๊กตาญี่ปุ่นมาก เริ่มสะสมตั้งแต่ที่ไปญี่ปุ่นครั้งแรกด้วยความสวยงามของตัวตุ๊กตา และสื่อถึงจนบธรรมเนียมดั้งเดิมของญี่ปุ่น และ ความละเอียดอ่อนของคนญี่ปุ่น 
						ที่ใส่ใจในทุกอย่างในการทำ ทั้งการปั้น การเย็บชุด การแกะไม้ ล้วนตั้งใจทุกขั้นตอน ทำให้ผู้คนที่พบเห็น เป็นต้องหลงรักเข้ากับตุ๊กตาญ๊่ปุ่น อย่างแน่นอน
					</p>
				</div>
				<div className={styles.content_4}>
					<img src={DollsContent.image6} alt="Dolls Image" width="100%" height="100%"/>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Dolls