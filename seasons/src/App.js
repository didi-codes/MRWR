import React from 'react'
import ProfileCard from './PDAS/ProfileCard'
import Alexa from './PDAS/images/alexa.png'
import Cortana from './PDAS/images/cortana.png'
import Siri from './PDAS/images/siri.png'

function App() {
  return (
    <div>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Personal Digital Assistants</p>
          </div>
        </section>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-3">
                <ProfileCard 
                title='Alexa' 
                handle='@alexa99' 
                description='Amazon'
                image={Alexa} />
              </div>

              <div className="column is-3">
                <ProfileCard 
                title='Cortana'
                 handle='@cortana32'
                 description=' Microsoft' 
                 image={Cortana} />
              </div>

              <div className="column is-3">
                <ProfileCard 
                title='Siri' 
                handle='@siri01'
                description='Apple' 
                image={Siri} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App