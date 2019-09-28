import React, { Component } from 'react';
import * as classes from './SurveyList.module.css';


class SurveyList extends Component {

  render () {

    return (
      <div className={classes.SurveyList}>
      <h2>LIST OF SURVEYS</h2>
      <table className={classes.SurveyTable}>
       <tbody>
       <th>
         <td>S/N</td>
       </th>
       <th>
         <td>Survey Name</td>
       </th>
       <th>
         <td>Sent</td>
       </th>
       <th>
         <td>No of Recipients</td>
       </th>
       <th>
         <td>No of Respondents</td>
       </th>
       <th>
         <td>Date Sent</td>
       </th>
       <tr>
         <td>1</td>
         <td>WHITE CUBE PICTURES</td>
         <td>No</td>
         <td>200</td>
         <td>158</td>
         <td>25/01/2020</td>
       </tr>
       <tr>
         <td>2</td>
         <td>WHITE CUBE PICTURES</td>
         <td>No</td>
         <td>200</td>
         <td>158</td>
         <td>25/01/2020</td>
       </tr>
       <tr>
         <td>3</td>
         <td>SANTOS CREATIONS</td>
         <td>No</td>
         <td>115</td>
         <td>25</td>
         <td>25/01/2020</td>
       </tr>
       <tr>
         <td>4</td>
         <td>WEBTECH</td>
         <td>No</td>
         <td>400</td>
         <td>158</td>
         <td>25/01/2020</td>
       </tr>
       </tbody>
      </table>
      </div>
    )
  }
}

export default SurveyList;
