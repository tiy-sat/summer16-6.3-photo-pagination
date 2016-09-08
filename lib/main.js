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
          },
          {
            src: "rooster-noArms.jpg",
            alt: "rooster just chilling at farm"
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
      currentAlbumName: "Birds with arms"
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
  onAlbumNameClickHandler(e){
    var clickedAlbumName = e.target.innerHTML;
    this.setState({
      currentAlbumName: clickedAlbumName
    })
  },
  render() {
    let albumNamesArray = Object.keys(this.props.albums);
    let currentAlbumData = this.props.albums[this.state.currentAlbumName];
    return (
      <section>
        <ul>
          {
            albumNamesArray.map((albumName, i)=>{
            return <li key={i} onClick={this.onAlbumNameClickHandler}>{albumName}</li>
            })
          }
        </ul>
        <h2>{this.state.currentAlbumName}</h2>
        {
          currentAlbumData.map((imageData, i)=>{
            return <img src={`./assets/images/${imageData.src}`}
                       alt={imageData.alt}
                       className="image"
                       onClick={this.onImageClickHandler}
                       key={i} />
          })
        }

         <Modal modalOpenClass={this.state.modalOpenClass}
                src={this.state.modalImageSrc}
                alt={this.state.modalImageAlt}
                currentAlbumData={currentAlbumData}/>
      </section>
    )
  }
})
