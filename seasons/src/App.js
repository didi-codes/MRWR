import React from 'react'
// import 'bulma.css'
import ProfileCard from './PDAS/ProfileCard'
import Alexa from './PDAS/images/alexa.png'
import Cortana from './PDAS/images/cortana.png'
import Siri from './PDAS/images/siri.png'

function App() {
  return (
    <div>
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title='Alexa' handle='@alexa99' image={Alexa}/>
            <ProfileCard title='Cortana' handle='@cortana32'image={Cortana} />
            <ProfileCard title='Siri' handle='@siri01' image={Siri}/>
        </div>
    </div>
  )
}

export default App