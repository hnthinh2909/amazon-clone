import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Home.css';
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FlipMove from 'react-flip-move';
import Popover from '@material-ui/core/Popover';

// Import Swiper styles
import 'swiper/swiper.scss';
import { useStateValue } from './StateProvider';

function Home() {

    const [{basket}, dispatch] = useStateValue();


    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="home">
            <div className="home__container">
                <Slider {...settings} className="home__image">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/Yjc3NGZmOTkt/Yjc3NGZmOTkt-MjNlMGQ5MzAt-w1500._CB406219195_.jpg" alt="banner"/> 
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg" alt="banner"/> 
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg" alt="banner"/> 
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/WeeklyBuild/US-EN_080820_Woodstock_ACQ_GW_Hero_D_1500x600_CV1._CB406589956_.jpg" alt="banner"/> 
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/comic/cu60days/Amazon_GRD_DesktopHero_TheBoys_1500x600._CB407151277_.jpg" alt="banner"/> 
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
                </Slider>   
            </div>
            <FlipMove
                appearAnimation="elevator"
                enterAnimation="elevator"
                leaveAnimation="elevator"
                delay={200}
            >
                <div className="home__row">
                    <Product 
                        key="232414"
                        id="232414"
                        title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones" 
                        price={56.63} 
                        image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg" 
                        rating={4}
                        quantity={0}
                    />
                    <Product 
                        key="1235175"
                        id="1235175"
                        title="Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black" 
                        price={11.98} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41ziKxGAbnL._AC_.jpg" 
                        rating={4}
                        quantity={0}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        key="756756"
                        id="756756"
                        title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality (Wireless Charging Case included), Black – US Version" 
                        price={11.98} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81ilNbqaGWL._AC_SL1500_.jpg" 
                        rating={2}
                        quantity={0}
                    />
                    <Product 
                        key="23241423"
                        id="23241423"
                        title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call and Alexa Voice Control - Industry Leading Active Noise " 
                        price={129.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/514Y7g-JQDL._AC_SL1000_.jpg" 
                        rating={4}
                        quantity={0}
                    />
                    <Product 
                        key="345345"
                        id="345345"
                        title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones" 
                        price={89.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81JbokPAeiL._AC_SL1500_.jpg" 
                        rating={3}
                        quantity={0}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        key="1823918"
                        id="1823918"
                        title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC" 
                        price={1169.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/514QDB7aEsL._AC_.jpg" 
                        rating={5}
                        quantity={0}
                    />
                </div>        
            </FlipMove>
        </div>
    )
}

export default Home
