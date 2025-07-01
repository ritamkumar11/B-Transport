import React from 'react'
import { useState } from 'react'

const ContForm = () => {
    const [formData, setformData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData)
        alert('Message Sent Successfully')

        setformData({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }
    return (
        <form onSubmit={handleSubmit} className='cForm'>
            <h2>Name*</h2>
            <input type="text"
                name='name'
                placeholder='Name'
                value={formData.firstName}
                onChange={handleChange}
                required
                className='input' />

            <h2>Phone*</h2>
            <input type="phone"
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                required
                className='input' />

            <h2>Email*</h2>
            <input type="email"
                name='email'
                placeholder='Enter your Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='input' />

            <h2>Message*</h2>
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