import React from "react";
import ReactModal from 'react-modal';
import ExportCode from "../ExportCode";
import Button from "../Button";

class ModalHtml extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal : false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    const {cvRef, handleHTML} = this.props;
    return(
      <div>
        <Button
          buttonType="button"
          styles="preview__html-btn"
          handleButtonClick={this.handleOpenModal}
        >
        </Button>
        <ReactModal
          appElement={document.getElementById('App')}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >

        <Button
          buttonType="button"
          styles=""
          handleButtonClick={this.handleCloseModal}
        >Close
        </Button>

          <ExportCode cvRef={cvRef} handleHTML={handleHTML}/>
        </ReactModal>
      </div>
    );
  }

};

export default ModalHtml;