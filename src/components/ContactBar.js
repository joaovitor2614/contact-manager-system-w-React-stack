import React from 'react'

const ContactBar = ({ fakeUser }) => {
  console.log(fakeUser)

  return (
    <div className='contact-bar'>
      <div className='contact-bar__item'>
        <img className='contact-bar__item-img' src={fakeUser.data[0].picture} alt="uploaded pic"
        />
        <h3>{fakeUser.data[0].firstName} {fakeUser.data[0].lastName}</h3>
      </div>
      <div className='contact-bar__item'>
        <img className='contact-bar__item-img' src={fakeUser.data[0].picture} alt="uploaded pic"
        />
        <h3>{fakeUser.data[0].firstName} {fakeUser.data[0].lastName}</h3>
      </div>
      <div>
        Item 3
              </div>
      <div>
        Item 4
              </div>
    </div>
  )
}
export default ContactBar