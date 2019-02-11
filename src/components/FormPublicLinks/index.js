import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormPublicLinksItem from "../FormPublicLinksItem";

class FormPublicLinks extends Component {
  render() {
    const {
      publicLinks,
      publicLinkDefault,
      handleAddLinkItem,
      handleDefaultInputChange,
      handleRemoveLinkItem,
      handleLinkChange
    } = this.props;
    return (
      <div>
        <p>Public links</p>

        <p>
          List the links to code repositories, social media, professional
          networks or any other worthy public profile
        </p>

        {publicLinks.map((item, index) => {
          return (
            <FormPublicLinksItem
              key={index}
              ind={index}
              item={item}
              handleRemoveLinkItem={handleRemoveLinkItem}
              handleLinkChange={handleLinkChange}
            />
          );
        })}

        <FormInput
          labelContent="Link"
          styles="form__input"
          inputType="string"
          inputName="publicLinkDefault"
          inputValue={publicLinkDefault}
          example="https://www.twitter.com/janedoe"
          handleInputChange={handleDefaultInputChange}
        />

        <Button
          buttonType="button"
          styles="add-btn"
          handleButtonClick={handleAddLinkItem}
        >
          Add item
        </Button>
      </div>
    );
  }
}

FormPublicLinks.propTypes = {
  publicLinks: PropTypes.array.isRequired,
  publicLinkDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired
};

export default FormPublicLinks;
