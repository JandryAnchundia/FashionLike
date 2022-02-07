import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/Form';


const LoginInput = ({state, changeState, type, label, name, regularExpression, icon}) => {

    const onChange = (e) => {
        changeState({...state, field: e.target.value}) 
   }

   const validation = () => {
    if(regularExpression){
        if(regularExpression.test(state.field)){
            changeState({...state, valid: 'true'})
        }else {
            changeState({...state, valid: 'false'})
        }
    }
   }



    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label} </Form.Label>
                    <InputGroup> 
                    <InputGroup.Text> {icon} </InputGroup.Text>
                    <Form.Control 
                    type={type}
                    value={state.field}
                    onChange={onChange}
                    onSubmit={validation} />
                    <Form.Control.Feedback ></Form.Control.Feedback>
                    </InputGroup>
        </Form.Group>
    )
}

export default LoginInput;