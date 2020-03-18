import React from 'react'
import s from './Form.module.css'

const Form = (props: { name: string }) => {
    return (
        <div className={s.form_button}>
            <input type="text" />
            <button>{props.name}</button>
        </div>
    )
}

export default Form