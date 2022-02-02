import './Login.css';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {


    return (
        <div className="contLogin">
         
       
            <div className="leftSide"> 
                <img src="/assets/logo.png" alt="fashionLogo" className="logo" />

                <LoginForm/>

                <p className='footer'> ©2022 Fashion Like · Términos y Condiciones · Política de privacidad </p>

            </div>

            <div className="rightSide">  
                <img src="/assets/bigImg.png" alt="bigImg"/>
                <div className="subtitle">
                    <h2> Nuevas ideas, nuevas modas</h2>
                    <p> Podés dar feedback en los nuevos lanzamientos para <br/> ayudarnos a generar nuevas ideas indumentarias</p>
                </div>
            </div>
        </div>
    )
}


export default Login