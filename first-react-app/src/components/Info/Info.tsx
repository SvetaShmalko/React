import React from 'react'
import s from './Info.module.css'
import Form from './Form/Form'

const Info = () => {

    return (
        <div className={s.content}>
            <div>
                <img src="https://images.ua.prom.st/1991687358_1991687358.jpg" alt="" />
            </div>

            <div className={s.comp}>
                we offer
                <ul>
                    <li>materials and equipment for manicure</li>
                    <li>starter kits</li>
                </ul>

            </div>
            <Form name='Sveta' />


        </div>
    )
}

export default Info