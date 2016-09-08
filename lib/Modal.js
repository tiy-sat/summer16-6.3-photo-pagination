import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      currentImageIndex: 0
    }
  },
  onArrowDownClickHandler(e){
    e.preventDefault();
    var newIndex = this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: newIndex
    });
  },
  onArrowUpClickHandler(e){
    e.preventDefault();
    var newIndex = this.state.currentImageIndex + 1;
    this.setState({
      currentImageIndex: newIndex
    });
  },
  render() {
    console.log(this.state.currentImageIndex);
    let currentPhoto = this.props.currentAlbumData[this.state.currentImageIndex];
    console.log(this.props.currentAlbumData, currentPhoto);
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
