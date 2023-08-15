import { useState } from "react";
import Form from 'react-bootstrap/Form';
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <Form onSubmit={handleConfirm} className="form">
                <Form.Group>
                <Form.Label>
                    Nombre:
                    <Form.Control className="input" type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </Form.Label>
                </Form.Group>

                <Form.Group >
                <Form.Label>
                    Teléfono:
                    <Form.Control className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)}/>
                </Form.Label>
                </Form.Group>

                <Form.Group >
                <Form.Label>
                    E-mail:
                    <Form.Control className="input" type="text" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </Form.Label>
                </Form.Group>
                <div>
              <button className="button" type="submit" variant="solid"> Crear Orden</button> 
                </div>
            </Form>
        </div>
    )
}
export default CheckoutForm