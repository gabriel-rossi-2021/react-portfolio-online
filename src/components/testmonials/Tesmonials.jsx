import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Stéphanie Chapuis',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed recusandae rerum obcaecati blanditiis facilis fuga rem'
    },

    {
        avatar: AVTR2,
        name: 'Gabriel Rossi',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed recusandae rerum obcaecati blanditiis facilis fuga rem'
    },

    {
        avatar: AVTR3,
        name: 'Labinot Gashi',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed recusandae rerum obcaecati blanditiis facilis fuga rem'
    },

    {
        avatar: AVTR4,
        name: 'Francesca Durante',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed recusandae rerum obcaecati blanditiis facilis fuga rem'
    },
]


const Tesmonials = () => {
    return (

        <section id="testmonials">
            <h5>Review from client</h5>
            <h2>Commentaires</h2>

            <Swiper className="container testmonials__container" modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testmonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='clien__name'>{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Tesmonials