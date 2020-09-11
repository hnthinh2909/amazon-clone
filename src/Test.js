import React, { useEffect } from 'react';
// Import Swiper React components
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FlipMove from 'react-flip-move';
import { db } from './firebase';
import { useStateValue } from './StateProvider';


// Import Swiper styles
import 'swiper/swiper.scss';

function Test() {

    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() =>{
        if(user) {
            if(user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                console.log(snapshot)
            ))
        } 
        }
    }, [])
    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Test
