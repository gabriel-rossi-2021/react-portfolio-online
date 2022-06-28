import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>Mes compétences</h5>
            <h2>Experiences</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Language de programmation</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>HTML/CSS</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>Java Swing</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Logiciels / Autres</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>Outils d'adminstration</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>Microsoft office</h4>
                                <small className='text-light'>intérmédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>EasyVista</h4>
                                <small className='text-light'>intérmédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>Dépannage</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>Réception téléphonique</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill classeName='experience__details-icon' />
                            <div>
                                <h4>FollowMe</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience