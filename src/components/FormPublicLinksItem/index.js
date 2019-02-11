import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from "../FormInput";
import Button from "../Button";

class FormPublicLinksItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveLinkItem, ind } = this.props;
    handleRemoveLinkItem(ind);
  }

  handleChange(event) {
    const { value } = event.currentTarget;
    const { handleLinkChange, ind } = this.props;
    handleLinkChange(value, ind);
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <FormInput
          labelContent="Link"
          styles="form__input"
          inputType="string"
          inputName="publicLinks"
          inputValue={item}
          example="https://www.twitter.com/janedoe"
          handleInputChange={this.handleChange}
        />

        <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.handleRemoveBtn}
        >
          Remove
        </Button>
      </div>
    );
  }
}

FormPublicLinksItem.propTypes = {
  item: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired
}

export default FormPublicLinksItem;
