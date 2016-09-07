import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className={`modal ${this.props.modalOpenClass}`}>
        <img src="./assets/images/roost.jpg"
             alt="maxiumus rooster"
             className="modal__image"/>
      </div>
    )
  }
})
