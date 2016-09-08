import React from 'react'

export default React.createClass({
  render() {
    console.log(this.props.currentAlbumData);
    return (
      <div className={`modal ${this.props.modalOpenClass}`}>
        <a href="#prev"
           className="modal__arrow">
           previous
        </a>
        <img src={this.props.src}
             alt={this.props.alt}
             className="modal__image"/>
         <a href="#prev"
            className="modal__arrow">
           next
         </a>
      </div>
    )
  }
})
