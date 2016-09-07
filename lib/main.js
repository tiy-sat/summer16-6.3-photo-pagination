import React from 'react'
import Modal from './Modal'

export default React.createClass({
  getDefaultProps(){
    return {
      albums: {
        "Birds with arms": [
          {
            src: "roost.jpg",
            alt: "maxiumus rooster"
          }
        ],
        "Birds without arms": [
          {
            src: "rooster-noArms.jpg",
            alt: "rooster just chilling at farm"
          }
        ]
      }
    }
  },
  getInitialState(){
    return {
      modalOpenClass: "",
      modalImageSrc: "",
      modalImageAlt: "",
      currentAlbumName: "Choose an album"
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
    let albumNamesArray = Object.keys(this.props.albums);
    return (
      <section>
        <ul>
          {
            albumNamesArray.map((albumName, i)=>{
            return <li key={i}>{albumName}</li>
            })
          }
        </ul>
        <h2>{this.state.currentAlbumName}</h2>
        <img src={`./assets/images/${this.props.albums["Birds with arms"][0].src}`}
             alt={this.props.albums["Birds with arms"][0].alt}
             className="image"
             onClick={this.onImageClickHandler} />
         <Modal modalOpenClass={this.state.modalOpenClass}
                src={this.state.modalImageSrc}
                alt={this.state.modalImageAlt}/>
      </section>
    )
  }
})
