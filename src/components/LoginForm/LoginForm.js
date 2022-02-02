import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './LoginForm.css'
import { InputGroup } from 'react-bootstrap';

const LoginForm = () => {


    return (
        <div className="loginForm"> 
        <h1> Iniciá sesión </h1>
                <div className="btnCont">
                    <button className="btn1"> <img src="/assets/google.png" alt="google"/>Ingresar con Google </button>
                    <button className="btn2"> <img src="/assets/meta.png" alt="meta" /> Ingresar con Meta </button>
                </div>
                <img src="/assets/line.png" alt="line"/> 
         <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-Mail o nombre de usuario </Form.Label>
                    <InputGroup> 
                    <InputGroup.Text> <img src="/assets/person.png" alt="user"/> </InputGroup.Text>
                    <Form.Control type="email"  />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup> 
                    <InputGroup.Text> <img src="/assets/key.png" alt="user"/> </InputGroup.Text>
                    <Form.Control type="password"/> <img src="/assets/visibility.png" alt="visibility"/>
                    </InputGroup>
                    <Form.Text className="forgot">
                    ¡Olvidé mi contraseña!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 checkbox" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>

            <Form.Group className="btn-submit"> 
                <Button variant="custom" className="submit" type="submit" disabled>
                    Ingresar
                </Button>
                <div className="register"> 
                <p> ¿No tenés una cuenta? </p> <p className="violet"> Registrate </p>
                </div>

            </Form.Group>
         </Form>
        </div>
    )
}

export default LoginForm;