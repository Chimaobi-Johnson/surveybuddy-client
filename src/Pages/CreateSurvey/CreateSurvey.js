import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CreateSurveyWizard from '../../containers/Wizard/CreateSurveyWizard';
// import SideBar from '../containers/Navigation/SideBar';
import { connect } from  'react-redux';

class CreateSurvey extends Component {

  componentDidMount() {
    // if(!this.props.auth) {
    //   alert('error, you are not allowed to access this page');
    // }
  }

  render () {

    return (
      <div>
       {CreateSurveyWizard}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps)(CreateSurvey);
