import React, { useState } from 'react'

const BookTransportationVehicle = () => {
  const [formData, setformData] = useState({
    from: '',
    to: '',
    vehicles: '',
    weight: '',
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
      const res = await fetch('http://localhost:4000/api/booktransportation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        alert('Transportation Vehicle Enquiry registered successfully!');
        setformData({
          from: '',
          to: '',
          vehicles: '',
          weight: '',
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
      <div className='heading' id='contact'><h1>Book Transportaion Vehicle...</h1></div>
      <div className='mainCont'>
        <form onSubmit={handleSubmit} className='bTVForm'>
          <label>From*</label>
          <input type="datetime-local"
            name='from'
            placeholder='Select Date-Time'
            value={formData.from}
            onChange={handleChange}
            required
            className='input' />

          <label>To*</label>
          <input type="datetime-local"
            name='to'
            placeholder='Select Date-Time'
            value={formData.to}
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
            <option value="Tempo">Tempo</option>
            <option value="Truck">Truck</option>
            <option value="Container">Container</option>
          </select>

          <label>Approx Weight*</label>
          <input type="text"
            name='weight'
            placeholder='Approx Weight in ton'
            value={formData.weight}
            onChange={handleChange}
            required
            className='input' />

          <label>Message*</label>
          <textarea name="message"
            placeholder='Any Special Request...'
            value={formData.message}
            onChange={handleChange}
            className='tArea'
            rows="2" />

          <button
            type='submit' className='sbmtBtn'>
            Book Transportation Vehicle
          </button>
        </form>
      </div>
    </>
  )
}

export default BookTransportationVehicle