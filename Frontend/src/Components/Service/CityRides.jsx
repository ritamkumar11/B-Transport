import React, { useState } from 'react'

const CityRides = () => {
  const [formData, setformData] = useState({
    origin: '',
    destination: '',
    vehicles: '',
    contact: '',
    message: ''

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/cityrides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        alert('Ride Enquiry registered successfully!');
        setformData({
          origin: '',
          destination: '',
          vehicles: '',
          contact: '',
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
    <>
      <div className='heading' id='contact'><h1>Book Your Ride...</h1></div>
      <div className='mainCont'>
        <form onSubmit={handleSubmit} className='cRForm'>
          <label>Origin*</label>
          <input type="text"
            name='origin'
            placeholder='Origin'
            value={formData.origin}
            onChange={handleChange}
            required
            className='input' />

          <label>Destination*</label>
          <input type="tel"
            name='destination'
            placeholder='Destination'
            value={formData.destination}
            onChange={handleChange}
            required
            className='input' />

          <label>Contact*</label>
          <input type="tel"
            name='contact'
            placeholder='Phone Number'
            value={formData.contact}
            onChange={handleChange}
            required
            className='input' />

          <label>Select type of Vehicles*</label>
          <select name="vehicles" className='input' value={formData.vehicles} onChange={handleChange} required>
            <option value="Select">Select Vehicle</option>
            <option value="Bike">Bike</option>
            <option value="Auto Rickshaw">Auto Rickshaw</option>
            <option value="5-Seater">5-Seater</option>
            <option value="7-Seater">7-Seater</option>
          </select>


          <label>Message*</label>
          <textarea name="message"
            placeholder='Any Special Request...'
            value={formData.message}
            onChange={handleChange}
            className='tArea'
            rows="2" />

          <button
            type='submit' className='sbmtBtn'>
            Book Ride
          </button>
        </form>
      </div >
    </>
  )
}

export default CityRides