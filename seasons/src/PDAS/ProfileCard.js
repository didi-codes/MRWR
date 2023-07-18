import React from 'react'

function ProfileCard({title, handle, image}) {
  return (
    <div>
        <img src={image} alt=''/>
        <div>{title}</div>
        <div>{handle}</div>
    </div>
  )
}

export default ProfileCard