// components
import { Topbar, Main, Footer } from '../components'
// images
import { PhotosBanner, PhotosContent } from '../static/images'
// css
import styles from '../static/styles/pages/photos.module.css'

const Photos = props => {
	return (
		<div className="container background">
			<Topbar page="Collector - About" />
			<Main>
				<div className="banner-wrapper">
					<img src={PhotosBanner} alt="Photos Banner" width="100%"/>
				</div>
				<div className={styles.content_1}>
					<span>
						รวมรูปภาพของสะสมอย่างอื่น ที่แปลกและน่าสนใจ<br />
						ด้วยความสวยงามของสินค้าญี่ปุ่น ที่เป็นเอกลักษณ์อย่างมาก<br />
						ทำให้ต้องซื้อมาเก็บสะสมไว้ หากทุกคนได้ลองมาสัมผัสกับประเทศนี้แล้ว<br />
						จะต้องหลงรักอย่างแน่นอน
					</span>
				</div>
				<div className={styles.content_2}>
					<div className={styles.content_2_image}>
						<img src={PhotosContent.image2} alt="Photos Image" height="100%" width="100%"/>
					</div>
					<div className={styles.content_2_image}>
						<img src={PhotosContent.image3} alt="Photos Image" height="100%" width="100%"/>
					</div>
				</div>
				<div className={styles.content_3}>
					<div className={styles.content_3_image}>
						<img src={PhotosContent.image4} alt="Photos Image" height="100%" width="100%"/>
					</div>
					<div className={styles.content_3_image}>
						<img src={PhotosContent.image5} alt="Photos Image" height="100%" width="100%"/>
					</div>
				</div>
				<div className={styles.content_4}>
					<div className={styles.content_4_image}>
						<img src={PhotosContent.image6} alt="Photos Image" height="100%" width="100%"/>
					</div>
					<div className={styles.content_4_image}>
						<img src={PhotosContent.image7} alt="Photos Image" height="100%" width="100%"/>
					</div>
				</div>
				<div className={styles.content_5}>
					<img src={PhotosContent.image8} alt="Photos Image" height="100%" width="100%"/>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Photos