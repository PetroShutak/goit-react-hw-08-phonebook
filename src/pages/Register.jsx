import { useState } from 'react';

const Register = () => {
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    
    const handleChange = e => {
        const { name, value } = e.target;
    
        switch (name) {
        case 'name':
            setName(value);
            break;
        case 'number':
            setNumber(value);
            break;
        case 'email':
            setEmail(value);
            break;
        default:
            return;
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();
    
        // dispatch(authOperations.register({ name, number, email }));
    
        setName('');
        setNumber('');
        setEmail('');
    };
    
    return (
        <div>
        <h1>Register</h1>
    
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
            Name
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter name"
            />
            </label>
    
            <label>
            Number
            <input
                type="text"
                name="number"
                value={number}
                onChange={handleChange}
                placeholder="Enter number"
            />
            </label>

            <label>
            Email
            <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter email"
            />
            </label>

            <button type="submit">Register</button>
        </form>
        </div>
    );
    };

export default Register;