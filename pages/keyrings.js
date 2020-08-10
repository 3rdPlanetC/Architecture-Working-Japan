// components
import { Topbar, Main, Footer } from '../components'
// images
import { KeyringsBanner, KeyringsContent } from '../static/images'
// css
import styles from '../static/styles/pages/keyrings.module.css'

const Keyrings = props => {
	return (
		<div className="container background">
			<Topbar page="Collector - About" />
			<Main>
				<div className="banner-wrapper">
					<img src={KeyringsBanner} alt="Keyrings Banner" width="100%"/>
				</div>
				<div className={styles.content_1}>
					<div className={styles.content_1_image}>
						<img src={KeyringsContent.image1} alt="Keyrings Image" width="100%" />
					</div>
					<div className={styles.content_1_text}>
						<h2 className={styles.content_1_h2}>พวงกุญแจ <b style={{fontFamily: "hiragano"}}>(ネックストラップ)</b></h2>
						<p className={styles.content_1_p}>
							พวงกุญแจ แม้ว่าจะฟังดูธรรมดา แต่ของบอกว่ามีความพิเศษเพราะ ญ๊่ปุ่นนับเป็นดินแดนแห่งความ
							คิดสร้างสรรค์ พวงกุญแจสไตล์ญี่ปุ่น
							จึงมีความหลากหลายให้เลือกได้
							อย่างตรงใจ ทั้งพวงกุญแจที่มีความ
							เป็นเอกลักษณ์ความเป็นญี่ปุ่นหรือ
							พวงกุญแจ ตีมต่างๆ ที่มีความน่าซื้อ มาสะสมอย่างยิ่ง
							แจกเป็นของฝาก ก็สะดวก ถูกใจคนรับแน่นอน
						</p>
					</div>
				</div>
				<div className={styles.content_2}>
					<div className={styles.content_2_image}>
						<img src={KeyringsContent.image2} alt="Dolls Image" width="100%" height="100%"/>
					</div>
					<div className={styles.content_2_image}>
						<img src={KeyringsContent.image3} alt="Dolls Image" width="100%" height="100%"/>
					</div>
				</div>
				<div className={styles.content_3}>
					<img src={KeyringsContent.image3} alt="Dolls Image" width="100%" height="100%"/>
					<p className={styles.content_3_text}>
						ด้วยความที่ สถานที่ต่างๆในประเทศญี่ปุ่น ทุกร้าน ทุกที่ท่องเที่ยวที่สำคัญ จะต้องมีพวงกุญแจ ที่ระลึกประจำสถานที่นั้นๆขาย ทำให้ที่บ้านตอนนี้มีพวงกุญแจ 
						เยอะมากๆ เมื่อซื้อกลับบ้านมา ก็จะทำให้เรานึกถึงสถานที่ต่างๆ ที่เราได้ไปมา และได้รู้เรื่องราวผ่าน พวงกุญแจในแต่ละอันอีกด้วย
					</p>
				</div>
				<div className={styles.content_4}>
					<img src={KeyringsContent.image5} alt="Dolls Image" width="100%" height="100%"/>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Keyrings