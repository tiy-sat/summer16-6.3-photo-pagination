import React from 'react'
import Modal from './Modal'

export default React.createClass({
  render() {
    return (
      <section>
        <img src="./assets/images/roost.jpg"
           alt="maxiumus rooster"
           className="image" />
         <Modal />
      </section>
    )
  }
})
