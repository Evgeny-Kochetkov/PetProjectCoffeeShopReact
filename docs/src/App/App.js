import { Component } from 'react';

import { PromoSection } from "../components/PromoSection";
import { AboutSection } from "../components/AboutSection";
import { OurBestSection } from "../components/OurBestSection";
import { Footer } from "../components/Footer";

import promoBgMain from './../assets/img/promo-bg.jpg';
import promoBgOurCoffee from './../assets/img/our-coffee-bg.jpg';
import promoBgForYour from './../assets/img/for-your-pleasure-bg.jpg';
import aboutImgBeans from './../assets/img/about-our-beans.png';
import aboutImgGoods from './../assets/img/about-our-goods.png';
import aboutItemCoffee from './../assets/img/about-item-coffee.png'

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			promoTitle: 'Everything You Love About Coffee',
			promoSrcImg: promoBgMain,
			aboutTitle: 'About Us',
			aboutSrcImg: false,
			aboutAltImg: '',
			aboutDescr: `
				Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
				Afraid at highly months do things on at. Situation recommend objection do intention
				so questions. As greatly removed calling pleased improve an. Last ask him cold feel
				met spot shy want. Children me laughing we prospect answered followed. At it went
				is song that held help face.
				
				Now residence dashwoods she excellent you. Shade being under his bed her, Much
				read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
				horrible but confined day end marriage. Eagerness furniture set preserved far
				recommend. Did even but nor are most gave hope. Secure active living depend son
				repair day ladies now.
			`,
			key: 'mainPage'
		}
	}

	refreshPage = (key) => {
		switch (key) {
            case 'mainPage':
                return this.setState({
					promoTitle: 'Everything You Love About Coffee',
					promoSrcImg: promoBgMain,
					aboutTitle: 'About Us',
					aboutSrcImg: false,
					aboutAltImg: '',
					aboutDescr: `
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						Afraid at highly months do things on at. Situation recommend objection do intention
						so questions. As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
						
						Now residence dashwoods she excellent you. Shade being under his bed her, Much
						read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
						horrible but confined day end marriage. Eagerness furniture set preserved far
						recommend. Did even but nor are most gave hope. Secure active living depend son
						repair day ladies now.
					`,
					key: 'mainPage'
				});

            case 'ourCoffeePage':
                return this.setState({
					promoTitle: 'Our Coffee',
					promoSrcImg: promoBgOurCoffee,
					aboutTitle: 'About our beans',
					aboutSrcImg: aboutImgBeans,
					aboutAltImg: 'Photo of a girl with a cup of coffee in her hands',
					aboutDescr: `
						Extremity sweetness difficult behaviour he of. On
						disposal of as landlord horrible.
		
						Afraid at highly months do things on at. Situation 
						recommend objection do intention so questions. 
						As greatly removed calling pleased improve an. 
						Last ask him cold feel
						met spot shy want. Children me laughing we
						prospect answered followed. At it went
						is song that held help face.
					`,
					key: 'ourCoffeePage'
				});
				
			case 'forYourPage':
				return this.setState({
					promoTitle: 'For your pleasure',
					promoSrcImg: promoBgForYour,
					aboutTitle: 'About our goods',
					aboutSrcImg: aboutImgGoods,
					aboutAltImg: 'Photo of coffee cup',
					aboutDescr: `
						Extremity sweetness difficult behaviour he of. On
						disposal of as landlord horrible.
		
						Afraid at highly months do things on at. Situation 
						recommend objection do intention so questions. 
						As greatly removed calling pleased improve an. 
						Last ask him cold feel
						met spot shy want. Children me laughing we
						prospect answered followed. At it went
						is song that held help face.
					`,
					key: 'forYourPage'
				});

			case 'itemPage':
				return this.setState({
					promoTitle: 'Our Coffee',
					promoSrcImg: promoBgOurCoffee,
					aboutTitle: 'About it',
					aboutSrcImg: {aboutItemCoffee},
					aboutAltImg: 'Photo coffee',
					aboutDescr: `
						Description: Lorem ipsum dolor sit amet, consectetur 
						adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua. Ut enim ad minim veniam, quis 
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
						commodo consequat.
					`,
					key: 'ourCoffeePage'
				});

            default:
                return null;
        }
	}

	render() {
		const { promoTitle, promoSrcImg, aboutTitle, aboutSrcImg, aboutAltImg, aboutDescr, key } = this.state;

		return (
			<>
				<PromoSection 
					promoTitle={promoTitle} 
					promoSrcImg={promoSrcImg}
					refreshPage={this.refreshPage}
					propKey={key} 
				/>
				<main>
					<AboutSection 
						aboutTitle={aboutTitle} 
						aboutSrcImg={aboutSrcImg} 
						aboutAltImg={aboutAltImg} 
						aboutDescr={aboutDescr}
						propKey={key} 
					/>
					<OurBestSection 
						propKey={key} />
				</main>
				<Footer 
					refreshPage={this.refreshPage}
					propKey={key} 
				/>
			</>
		)
	}
};
