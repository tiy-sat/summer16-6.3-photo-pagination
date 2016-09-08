import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      currentImageIndex: 0
    }
  },
  render() {
    let currentPhoto = this.props.currentAlbumData[this.state.currentImageIndex];
    return (
      <div className={`modal ${this.props.modalOpenClass}`}>
        <a href="#prev"
           className="modal__arrow">
           previous
        </a>
        <img src={`./assets/images/${currentPhoto.src}`}
             alt={currentPhoto.alt}
             className="modal__image"/>
         <a href="#prev"
            className="modal__arrow">
           next
         </a>
      </div>
    )
  }
})
