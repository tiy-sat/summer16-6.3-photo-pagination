import React from 'react'
import Modal from './Modal'

export default React.createClass({
  getInitialState(){
    return {
      modalOpenClass: ""
    }
  },
  onImageClickHandler(e){
    this.setState({
      modalOpenClass: "modal--show"
    });
  },
  render() {
    return (
      <section>
        <img src="./assets/images/roost.jpg"
           alt="maxiumus rooster"
           className="image"
           onClick={this.onImageClickHandler}/>
         <Modal modalOpenClass={this.state.modalOpenClass} />
      </section>
    )
  }
})
