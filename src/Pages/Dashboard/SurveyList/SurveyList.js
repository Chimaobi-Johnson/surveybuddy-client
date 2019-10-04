import React, { Component } from 'react';
import axios from 'axios';

import * as classes from './SurveyList.module.css';


class SurveyList extends Component {

  state = {
    surveys: null
  }

  componentDidMount() {
     axios.get('/api/surveys').then(result => {
       this.setState({ surveys: result.data.surveys });
       console.log(result);
     }).catch(err => {
       console.log(err);
     })
  }

  renderSurveyList() {
    if(this.state.surveys) {
      if(this.state.surveys.length !== 0) {
     return this.state.surveys.map(survey => {
      return (
        <tr key={this.state.surveys.indexOf(survey)}>
          <td>{this.state.surveys.indexOf(survey) + 1}</td>
          <td>{survey.surveyName}</td>
          <td>No</td>
          <td>{survey.emailRecipients.length}</td>
          <td>{survey.noOfRespondents}</td>
          <td>25/01/2020</td>
        </tr>
      )
    })
  } else {
    return <h3>You have not created any surveys, goto menu and start!</h3>
  }
} else {
  return <h3>Loading...</h3>
}
  }

  render () {

    console.log(this.state);

    return (
      <div className={classes.SurveyList}>
      <h2>LIST OF SURVEYS</h2>
      <table className={classes.SurveyTable}>
      <tbody>
      <tr>
       <th>S/N</th>
       <th>Survey Name</th>
       <th>Sent</th>
       <th>No of Recipients</th>
       <th>No of Respondents</th>
       <th>Date Sent</th>
      </tr>
        {this.renderSurveyList()}
       </tbody>
      </table>
      </div>
    )
  }
}

export default SurveyList;
