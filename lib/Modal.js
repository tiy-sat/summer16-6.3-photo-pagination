import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      currentImageIndex: 0
    }
  },
  onArrowDownClickHandler(e){
    e.preventDefault();
    var currentIndex = this.state.currentImageIndex;
    var newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    this.setState({
      currentImageIndex: newIndex
    });
  },
  onArrowUpClickHandler(e){
    e.preventDefault();
    var currentIndex = this.state.currentImageIndex;
    var newIndex = currentIndex === (this.props.currentAlbumData.length - 1) ? currentIndex : currentIndex + 1;
    this.setState({
      currentImageIndex: newIndex
    });
  },
  render() {
    let currentPhoto = this.props.currentAlbumData[this.state.currentImageIndex];
    return (
      <div className={`modal ${this.props.modalOpenClass}`}>
        <a href="#prev"
           className="modal__arrow"
           onClick={this.onArrowDownClickHandler}>
           previous
        </a>
        <img src={`./assets/images/${currentPhoto.src}`}
             alt={currentPhoto.alt}
             className="modal__image"/>
         <a href="#prev"
            className="modal__arrow"
            onClick={this.onArrowUpClickHandler}>
           next
         </a>
      </div>
    )
  }
})
