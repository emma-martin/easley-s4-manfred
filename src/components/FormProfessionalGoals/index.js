import React, { Component, Fragment } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import PropTypes from 'prop-types';
import FormProfessionalGoalsItem from '../FormProfessionalGoalsItem';

class FormProfessionalGoals extends Component {
  render() {
    const { professionalGoals, goal, handleAddGoal, handleRemoveGoal, handleGoalsInput, handleGoalChange } = this.props;
    return (
      <Fragment>
      {professionalGoals.map((item, index) => {
        return (
        <FormProfessionalGoalsItem goal={item} ind={index} handleRemoveGoal={handleRemoveGoal} handleGoalsInput={handleGoalsInput} />
      )})}
        <div>
        <FormInput
          labelContent="more goals:"
          styles="form__input"
          inputType="text"
          inputName="professional goals"
          inputValue={goal}
          example="Brand Manager"
          handleDefaultInputChange={handleGoalChange}

        />
        <Button
          buttonType="button"
          styles="add-btn"
          handleButtonClick={handleAddGoal}
        >
          Añadir
          </Button>
          </div>
      </Fragment>
    );
  }
}

FormProfessionalGoals.propTypes = {
  professionalGoals: PropTypes.array.isRequired,
  handleProfessionalGoals: PropTypes.func.isRequired,
  handleAddGoal: PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired
};

export default FormProfessionalGoals;
