// components
import { Topbar, Main, Footer } from '../components'
// images
import { HomeBanner } from '../static/images'
// css
import styles from '../static/styles/pages/index.module.css'

const Homepage = props => {
	return (
		<div className="container background">
			<Topbar page="Collector - Homepage" />
			<Main>
				<div className="banner-wrapper">
					<img src={HomeBanner} alt="Home Banner" width="100%"/>
				</div>
			</Main>
			<Footer />
		</div>
	)
}

export default Homepage