import React from 'react'
import { useForm } from '../../hooks/useForm'
import Loader from '../Loader/Loader';
import Message from '../Message/Message';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
}

const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
const regexComments = /^.{1,255}$/;

const validations = (form) => {
    let errors = {}
    if (!form.name.trim())
        errors.name = `El campo nombre es requerido`
    else if (!regexName.test(form.name.trim())) {
        errors.name = `El campo nombre solo acepta letras y espacios`
    }

    if (!form.email.trim())
        errors.email = `El campo email es requerido`
    else if (!regexEmail.test(form.email.trim())) {
        errors.email = `El campo email es incorrecto`
    }

    if (!form.subject.trim())
        errors.subject = `El campo subject es requerido`

    if (!form.comments.trim())
        errors.comments = `El campo comments es requerido`
    else if (!regexComments.test(form.comments.trim())) {
        errors.comments = `El campo comments no debe exceder de los 255 caracteres`
    }

    return errors
}

const myStyle = {
    color: "#dc3545",
    fontWeight: "bold",
}

const ContactForm = () => {

    const { form, error, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validations) 
    
    return (
        <>
            <h2>ContactForm</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Escribe el nombre" onBlur={handleBlur}
                    onChange={handleChange} value={form.value} required />
                {error.name && <p style={myStyle}>{error.name}</p>}
                <input type="email" name="email" placeholder="Escribe el email" onBlur={handleBlur}
                    onChange={handleChange} value={form.email} required />
                {error.email && <p style={myStyle}>{error.email}</p>}
                <input type="text" name="subject" placeholder="Asunto a tratar" onBlur={handleBlur}
                    onChange={handleChange} value={form.subject} required />
                {error.subject && <p style={myStyle}>{error.subject}</p>}
                <textarea name="comments" cols="50" rows="5" placeholder="Escribe el comentario" onBlur={handleBlur}
                    onChange={handleChange} value={form.comments} />
                {error.comments && <p style={myStyle}>{error.comments}</p>}
                <input type="submit" value="Enviar" />
            </form>
            {loading && <Loader />}
            {response && <Message msg="Los datos han sido enviados" bgColor="#198754" />}

        </>
    )
}

export default ContactForm