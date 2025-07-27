import { useState } from "react";

function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (event)=> {
        const {name, value} = event.target;
        if (name === 'name') {
            setName(value);
        }
        else if (name === 'number') {
            setNumber(value)
        }
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        onSubmit({name, number, id: Math.round(Math.random()*10000)});
        setName('');
        setNumber('');
    };
    
    // Рендеринг контента субкомпонента
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Phone Number:
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Add Contact</button>
        </form>
    );
}

export default ContactForm;