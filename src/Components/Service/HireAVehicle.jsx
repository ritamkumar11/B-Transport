import React, { useState } from 'react'

const HireAVehicle = () => {
  const [formData, setformData] = useState({
    from: '',
    to: '',
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
      const res = await fetch('http://localhost:5000/api/hirevehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        alert('Vehicle Enquiry registered successfully!');
        setformData({
          from: '',
          to: '',
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
      <div className='heading' id='contact'><h1>Hire Your Vehicle...</h1></div>
      <div className='mainCont'>
        <form onSubmit={handleSubmit} className='hVForm'>
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
            Hire Vehicle
          </button>
        </form>
      </div>
    </>
  )
}

export default HireAVehicle