import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Apprendre à me connaître</h5>
            <h2>A propos de moi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3 ans d'apprentissage</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide </small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projets </h5>
                            <small>20+</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt aut doloribus, itaque quod praesentium, ut quae earum
                        tempore accusamus labore quia adipisci possimus consequatur alias eaque mollitia. Natus sit laudantium in sequi ea, neque
                        sunt necessitatibus deserunt officia rem! Iste provident maxime recusandae cumque autem? Facere, optio aliquid deserunt aut
                    </p>

                    <a href="#contact" className='btn btn-primary'>Contactez moi</a>
                </div>
            </div>
        </section>
    );
};

export default About;