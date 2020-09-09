import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="banner"/>
            </div>

            <div className="home__row">
                <Product 
                    id="232414"
                    title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones" 
                    price={56.63} 
                    image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg" 
                    rating={4}
                />
                <Product 
                    id="1235175"
                    title="Bose A20 Aviation Headset with Bluetooth Dual Plug Cable, Black" 
                    price={11.98} 
                    image="https://images-na.ssl-images-amazon.com/images/I/41ziKxGAbnL._AC_.jpg" 
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="756756"
                    title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality (Wireless Charging Case included), Black – US Version" 
                    price={11.98} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81ilNbqaGWL._AC_SL1500_.jpg" 
                    rating={2}
                />
                <Product 
                    id="232414"
                    title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call and Alexa Voice Control - Industry Leading Active Noise " 
                    price={129.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/514Y7g-JQDL._AC_SL1000_.jpg" 
                    rating={4}
                />
                <Product 
                    id="345345"
                    title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones" 
                    price={89.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81JbokPAeiL._AC_SL1500_.jpg" 
                    rating={3}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="1823918"
                    title="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC" 
                    price={1169.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/514QDB7aEsL._AC_.jpg" 
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
