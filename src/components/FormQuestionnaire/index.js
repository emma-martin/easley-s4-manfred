import React, { Component } from "react";
import PropTypes from "prop-types";
//import FormInput from '../FormInput';
import Button from "../Button";
import FormQuestionnaireItem from "../FormQuestionnaireItem";
import FormTextarea from "../FormTextarea";

class FormQuestionnaire extends Component {
  render() {
    const {
      questionnaire,
      questionDefault,
      answerDefault,
      handleDefaultInputChange,
      handleAddQuestion,
      handleRemoveQuestion,
      handleQuestionInputChange
    } = this.props;
    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Questionnaire</legend>

        <p className="form__section-description">
          List of questions to help understanding if your motivations match with
          those of your potential employer
        </p>

        {questionnaire && !!questionnaire.length && questionnaire.map((item, index) => {
          return (
            <FormQuestionnaireItem
              key={index}
              ind={index}
              item={item}
              questionnaire={questionnaire}
              handleRemoveQuestion={handleRemoveQuestion}
              handleQuestionInputChange={handleQuestionInputChange}
            />
          );
        })}

        <div className="form__container">
          <p className="form__container-title">More questions</p>

          {/* <FormInput
          labelContent="Question"
          styles="form__input"
          inputType="text"
          inputName="questionDefault"
          inputValue={questionDefault}
          example="Ex: What JS frameworks do you use?"
          handleInputChange={handleDefaultInputChange}
        /> */}

          {/* <FormInput
          labelContent="Answer"
          styles="form__input"
          inputType="text"
          inputName="answerDefault"
          inputValue={answerDefault}
          example="Ex: React"
          handleInputChange={handleDefaultInputChange}
        /> */}

          <FormTextarea
            labelContent="Question"
            textAreaStyles="textarea"
            textAreaLabelStyles="label"
            textName="questionDefault"
            textValue={questionDefault}
            example="Ex: What JS frameworks do you use?"
            handleTextChange={handleDefaultInputChange}
          />

          <FormTextarea
            labelContent="Answer"
            textAreaStyles="textarea"
            textAreaLabelStyles="label"
            textName="answerDefault"
            textValue={answerDefault}
            example="Ex: React"
            handleTextChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddQuestion}
          >
            Add
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormQuestionnaire.propTypes = {
  questionnaire: PropTypes.array.isRequired,
  questionDefault: PropTypes.string.isRequired,
  answerDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  handleQuestionInputChange: PropTypes.func.isRequired
};

export default FormQuestionnaire;
