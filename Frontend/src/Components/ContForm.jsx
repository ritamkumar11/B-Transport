 import React from 'react'
import { useState } from 'react'

const ContForm = () => {
    const [formData, setformData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (res.ok) {
                alert('Message sent successfully!');
                setformData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('Something went wrong:' + data.error)
            }
        }
        catch (error) {
            alert('Failed to send data. Make sure server is running.');
            console.error(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='cForm'>
            <label>Name*</label>
            <input type="text"
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
                className='input' />

            <label>Phone*</label>
            <input type="tel"
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                required
                className='input' />

            <label>Email*</label>
            <input type="email"
                name='email'
                placeholder='Enter your Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='input' />

            <label>Message*</label>
            <textarea name="message"
                placeholder='Say Something for us...'
                value={formData.message}
                onChange={handleChange}
                className='tArea'
                rows="4" />

            <button
                type='submit' className='sbmtBtn'>
                Send Message
            </button>
        </form>
    )
}

export default ContForm