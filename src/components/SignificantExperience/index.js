import React, { Component } from 'react';
import PropTypes from "prop-types";
class SignificantExperience extends Component {
  render() {
    const {sampleSigExperience} = this.props;
    return (
      <div className="significant-exp__wrapper wrapper">
        <h3 className="significant-exp__title title">
          Significant Experience
        </h3>
        <ul className="significant-exp__list list">
        {sampleSigExperience.map((item, index)=>{
          return (
            <li className="significant-exp__item paragraph" key={index}>
              {item}
            </li>
          );
        })}
        </ul>
      </div>

    );
  }
}


SignificantExperience.propTypes = {
  sampleSigExperience: PropTypes.array.isRequired
};

export default SignificantExperience;
