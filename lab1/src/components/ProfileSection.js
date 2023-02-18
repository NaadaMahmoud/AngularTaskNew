import React from 'react'
import image from '../../src/girl.jpg'
function ProfileSection() {
  return(
    <div>
      <img src={image} alt='profile'    className='img-fluid' ></img>
    </div>
  )
}

export default ProfileSection
