import './Login.css'

const Login = () => {


    return (
        <div className="contLogin">
         
       
            <div className="leftSide"> 
                <img src="/assets/logo.png" alt="fashionLogo" />
                <h1> Iniciá sesión </h1>
                <div className="btnCont">
                    <button className="btn1"> <img src="/assets/google.png" alt="google"/>Ingresar con Google </button>
                    <button className="btn2"> <img src="/assets/meta.png" alt="meta" /> Ingresar con Meta </button>
                </div>
                <img src="/assets/line.png" alt="line"/> 

        

            </div>

            <div className="rightSide">  
                <img src="/assets/bigImg.png" alt="bigImg"/>
                <h2> Nuevas ideas, nuevas modas</h2>
                <p> Podés dar feedback en los nuevos lanzamientos para <br/> ayudarnos a generar nuevas ideas indumentarias</p>
            
            </div>
        </div>
    )
}


export default Login