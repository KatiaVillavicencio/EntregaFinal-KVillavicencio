import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



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
        <div >
            <Form onSubmit={handleConfirm}>
                <Form.Group>
                <Form.Label>
                    Nombre
                    <Form.Control className="input" type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </Form.Label>
                </Form.Group>

                <Form.Group >
                <Form.Label>
                    Telefono
                    <Form.Control className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)}/>
                </Form.Label>
                </Form.Group>

                <Form.Group >
                <Form.Label>
                    Email
                    <Form.Control className="input" type="text" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </Form.Label>
                </Form.Group>
                <div>
                    <Button type="submit">Crear Orden</Button>
                </div>
            </Form>
        </div>
    )
}
export default CheckoutForm