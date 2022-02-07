import './LoginForm.css'
import React, { useState, useEffect } from 'react'

const LoginForm = () => {

    const initialValues = { username: "", password: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
           console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!regex.test(values.username)){
            errors.username = "¡Ups! La dirección de E-Mail ingresada es inválida.";
        }
        if (!values.password) {
            errors.password = "¡Ups! La contraseña ingresada es incorrecta."
        }
        return errors;
    };


    return (
        <div className="loginForm"> 
        <h1> Iniciá sesión </h1>
                <div className="btnCont">
                    <button className="btn1"> <img src="/assets/google.png" alt="google"/>Ingresar con Google </button>
                    <button className="btn2"> <img src="/assets/meta.png" alt="meta" /> Ingresar con Meta </button>
                </div>
                <img src="/assets/line.png" alt="line"/> 

         <form onSubmit={handleSubmit} className='form'>
         
                    <label>Email o usuario   </label>
                    <input 
                        className="input"
                        type="email" 
                        name="username"
                        value={formValues.username} 
                        onChange={handleChange}
                        /> 

                    <label>Contraseña </label>
                    <div className="password">
                    <input
                        className="input"
                        type="password" 
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                         /> 
                    <img src="/assets/visibility.png" alt="visibility"/>
                    </div>
                    
                   
                    <p className="forgot">
                    ¡Olvidé mi contraseña!
                    </p>

                <p className='errorMessage'> {formErrors.username} </p>
                <p className='errorMessage'> {formErrors.password} </p>

                <div className="rememberMe"> 
                <input type="checkbox" value="recordarme"></input> <label> Recordarme</label>
                </div>
                <div className='LabelLogin'>
                    <button type='submit' className='btn-submit'> Ingresar </button>
                    <div className="register"> 
                    <p> ¿No tenés una cuenta? </p> <p className="violet"> Registrate </p>
                    </div>
                </div>
         </form>
        </div>
    )
}

export default LoginForm;