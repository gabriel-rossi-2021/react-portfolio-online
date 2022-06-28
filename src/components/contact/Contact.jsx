import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contactez moi</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>gabir2004@gmail.com</h5>
                        <a href="mailto:gabir2004@gmail.com" target="_blank">Envoyer un mail</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>gabir2004</h5>
                        <a href="https://m.me/gabir2004" target="_blank">Envoyer un message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>078 823 78 18</h5>
                        <a href="https://api.whatsapp.com/send?phone=+41788237818" target="_blank">Envoyer un message</a>
                    </article>
                </div>

                <form action="">
                    <input type="text" name='name' placeholder='Prenom et Nom' required />
                    <input type="email" name='email' placeholder='Votre email' required />
                    <textarea name="message" rows="7" placeholder="Votre message" required></textarea>
                    <button type='submit' className='btn btn-primary'>Envoyer le message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact