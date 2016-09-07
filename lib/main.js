import React from 'react'
import Modal from './Modal'

export default React.createClass({
  getInitialState(){
    return {
      modalOpenClass: "",
      modalImageSrc: "",
      modalImageAlt: ""
    }
  },
  onImageClickHandler(e){
    var clickedImageEl = e.target;
    this.setState({
      modalOpenClass: "modal--show",
      modalImageSrc: clickedImageEl.src,
      modalImageAlt: clickedImageEl.alt
    });
  },
  render() {
    return (
      <section>
        <img src="./assets/images/roost.jpg"
           alt="maxiumus rooster"
           className="image"
           onClick={this.onImageClickHandler} />
         <Modal modalOpenClass={this.state.modalOpenClass}
                src={this.state.modalImageSrc}
                alt={this.state.modalImageAlt}/>
      </section>
    )
  }
})
