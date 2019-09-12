import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from  'react-redux';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import isEmpty from 'lodash/isEmpty';
import SurveyName from './SurveyName/SurveyName';
import RenderTitleModal from './Title/RenderTitleModal';
import RenderDescriptionModal from './Description/RenderDescriptionModal';
import RenderImageModal from './Image/RenderImageModal';
import RenderInputModal from './Input/RenderInputModal';
import RenderCheckboxModal from './Checkbox/RenderCheckboxModal';

import * as classes from './CreateSurveyWizard.module.css';


class CreateSurveyWizard extends Component {

  state = {
    surveyPage: null,
    surveyNameEditingMode: false,
    surveyNameText: '',
    surveyTitleDialog: false,
    surveyDescrDialog: false,
    surveyImageDialog: false,
    surveyInputDialog: false,
    surveyCheckboxDialog: false,
    surveyCheckboxes: {
      checkboxOne: {
        surveyCheckboxQuestion: '',
        surveyCheckboxNames: {},
        isDisplayed: false
      },
      checkboxTwo: {
        surveyCheckboxQuestion: '',
        surveyCheckboxNames: {},
        isDisplayed: false
      },
      checkboxThree: {
        surveyCheckboxQuestion: '',
        surveyCheckboxNames: {},
        isDisplayed: false
      }
    },
    surveyCheckboxInitValues: {
      checkboxOne: {
        value: '',
        editingMode: false
      },
      checkboxTwo: {
        value: ''
      },
      checkboxThree: {
        value: ''
      },
      checkboxFour: {
        value: ''
      },
      checkboxFive: {
        value: ''
      },
    },
    surveyCheckboxTempQuestion: '',
    surveyCheckboxNumber: 0,
    surveyCheckboxTempValue: '',
    surveyTitleText: '',
    surveyDescrText: '',
    surveyInputLabelName: '',
    surveyInputs: {},
    imagePreviewUrl: '',
    file: ''
  }

  componentDidMount() {

  }

  removeDialog = (dialogName) => {
    this.setState({[dialogName]: false});
  }

  saveSurveyName = () => {
    this.setState({surveyNameEditingMode: false});
  }

  editSurveyName = () => {
    this.setState({surveyNameEditingMode: true});
  }

  surveyNameChange = (event) => {
    this.setState({surveyNameText: event.target.value});
  }

  changeSurveyTitle = (event) => {
      this.setState({surveyTitleText: event.target.value});
  }

  initSurveyTitleDialog = () => {
    this.setState({surveyTitleDialog: true});
  }

  changeSurveyDescr = (event) => {
    this.setState({surveyDescrText: event.target.value});
  }

  initSurveyDescrDialog = () => {
    this.setState({surveyDescrDialog: true});
  }

  initSurveyImageDialog = () => {
    this.setState({surveyImageDialog: true});
  }

  changeSurveyImage = (event) => {
    event.preventDefault();

      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
      }

     reader.readAsDataURL(file);
     document.getElementById('removeImageBtn').style.display = 'block';
  }

  removeSurveyImageHandler = () => {
    document.getElementById('removeImageBtn').style.display = 'none';
    this.setState({imagePreviewUrl: ''});
  }

  initSurveyInputDialog = () => {
    const surveyInputsData = {...this.state.surveyInputs};
    const surveyInputLength = Object.keys(surveyInputsData).length
    if(surveyInputLength <= 4) {
      this.setState({surveyInputDialog: true});
    } else {
      alert('You have reached the maximum number of inputs');
    }
  }

  changeSurveyInputLabelName = (event) => {
    this.setState({surveyInputLabelName: event.target.value});
  }

  surveyInputChangeHandler = (event, inputLabel) => {
    alert('You cant write on this form now');
  }

  addInputHandler = () => {
    let inputLabel = this.state.surveyInputLabelName;
    const surveyInputs = {...this.state.surveyInputs};
    surveyInputs[inputLabel] = '';
    this.setState({surveyInputs: surveyInputs, surveyInputDialog: false});
  }

  deleteSurveyInputHandler = (key) => {
    const currentSurveyInputObj = {...this.state.surveyInputs};
    delete currentSurveyInputObj[key];
    this.setState({surveyInputs: currentSurveyInputObj});
  }

  initSurveyCheckboxDialog = () => {
    const surveyCheckboxes = {...this.state.surveyCheckboxes};
    this.setState({surveyCheckboxDialog: true});
  }

  changeSurveyCheckboxQuestion = event => {
    this.setState({ surveyCheckboxTempQuestion: event.target.value });
  }

  changeCheckboxNumber = (event) => {
     this.setState({surveyCheckboxNumber: event.target.value});
  }

  surveyCheckboxNameChangeHandler = (event, checkbox) => {
    const checkboxInitValues = {...this.state.surveyCheckboxInitValues};
    checkboxInitValues[checkbox].value = event.target.value;
    this.setState({surveyCheckboxInitValues: checkboxInitValues});
  }

  saveSurveyCheckboxHandler = () => {
    const surveyCheckbox = {...this.state.surveyCheckboxes};
    const surveyCheckboxInitValues = {...this.state.surveyCheckboxInitValues};
    let checkboxNames = {};
    // loop each checkbox from one to three and transfer it from the initial state which is surveyCheckboxInitValues
    // to the permanent state which is either in checkbox one, two or three depending on how many the users wants
    switch (false) {
      case !isEmpty(surveyCheckboxInitValues.checkboxOne.value):
        alert('Please Edit Survey Form Checkbox Names');
        break;
      case surveyCheckbox.checkboxOne.isDisplayed:
         surveyCheckbox.checkboxOne.surveyCheckboxQuestion = this.state.surveyCheckboxTempQuestion;
         surveyCheckbox.checkboxOne.isDisplayed = true;
         Object.values(surveyCheckboxInitValues).map(checkboxObj => {
           if(checkboxObj.value === '') {
             return  // this is to prevent a checkbox with an empty name from being displayed in the form
           }
            // transfer object to as its been looped to checkboxNames obj using Object.assign method
             return Object.assign(checkboxNames, {[checkboxObj.value]: false});
         });
         // Clear the values so as to prevent the old state from displaying on the UI
         Object.values(surveyCheckboxInitValues).map(checkboxObj => {
             checkboxObj.value = '';
         });
         surveyCheckbox.checkboxOne.surveyCheckboxNames = checkboxNames
         this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: '', surveyCheckboxInitValues: surveyCheckboxInitValues});
        break;
      case surveyCheckbox.checkboxTwo.isDisplayed:
        surveyCheckbox.checkboxTwo.surveyCheckboxQuestion = this.state.surveyCheckboxTempQuestion;
        surveyCheckbox.checkboxTwo.isDisplayed = true;
        Object.values(surveyCheckboxInitValues).map(checkboxObj => {
          if(checkboxObj.value === '') {
            return  // this is to prevent a checkbox with an empty name from being displayed in the form
          }
             return Object.assign(checkboxNames, {[checkboxObj.value]: false});
        });
        // Clear the values so as to prevent the old state from displaying on the UI
        Object.values(surveyCheckboxInitValues).map(checkboxObj => {
            checkboxObj.value = '';
        });
        surveyCheckbox.checkboxTwo.surveyCheckboxNames = checkboxNames
        this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: ''});
        break;
      case surveyCheckbox.checkboxThree.isDisplayed:
        surveyCheckbox.checkboxThree.surveyCheckboxQuestion = this.state.surveyCheckboxTempQuestion;
        surveyCheckbox.checkboxThree.isDisplayed = true;
        Object.values(surveyCheckboxInitValues).map(checkboxObj => {
          if(checkboxObj.value === '') {
            return  // this is to prevent a checkbox with an empty name from being displayed in the form
          }
             return Object.assign(checkboxNames, {[checkboxObj.value]: false});
        });
        // Clear the values so as to prevent the old state from displaying on the UI
        Object.values(surveyCheckboxInitValues).map(checkboxObj => {
            checkboxObj.value = '';
        });
        surveyCheckbox.checkboxThree.surveyCheckboxNames = checkboxNames
        this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: ''});
       break;
      default:
        return alert('You cant add more than 3 checkbox questions'); //issue here
    }
  }

  deleteSurveyCheckBoxHandler = (checkboxObj) => {
      console.log(checkboxObj);
  }

  renderSurveyCheckbox() {
    let checkboxItems, checkboxDeleteBtn;
     return Object.values(this.state.surveyCheckboxes).map(checkboxObj => {
       if(checkboxObj.surveyCheckboxNames) {
         if(!isEmpty(checkboxObj.surveyCheckboxNames)) {
           checkboxDeleteBtn = <Button onClick={(checkboxObj) => this.deleteSurveyCheckBoxHandler(checkboxObj)}>Delete</Button>;
         }
         // To render checkbox items
         checkboxItems = Object.keys(checkboxObj.surveyCheckboxNames)
         .map(checkbox => {
           return <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={checkbox}/>
         });
       }
       return (
         <>
           <h4>{checkboxObj.surveyCheckboxQuestion}</h4>
           {checkboxItems}
           {checkboxDeleteBtn}
         </>
       )
     })
  }
  saveCheckboxNameHandler = () => {
    const checkboxInitValues = {...this.state.surveyCheckboxInitValues};
    checkboxInitValues.checkboxOne.editingMode = false;
    this.setState({surveyCheckboxInitValues: checkboxInitValues});
  }

  editCheckboxNameHandler = () => {
    const checkboxInitValues = {...this.state.surveyCheckboxInitValues};
    checkboxInitValues.checkboxOne.editingMode = true;
    this.setState({surveyCheckboxInitValues: checkboxInitValues});
  }

  renderDashboardContent() {
    return (
      <div className={classes.DashboardContent}>
        <h2>Create Your Survey Form</h2>
        <h2 style={{textAlign: 'center'}}>{this.state.surveyTitleText}</h2>
        <p style={{textAlign: 'center'}}>{this.state.surveyDescrText}</p>
        <div className={classes.SurveyImageBox}>
           {!this.state.imagePreviewUrl ? null : <img src={this.state.imagePreviewUrl} />}
           <br />
           <Button style={{display: 'none', margin: '0 auto'}} id="removeImageBtn" onClick={this.removeSurveyImageHandler}>Remove Image</Button>
        </div>
        <div id="inputArea" className={classes.InputArea}>
        {
          Object.keys(this.state.surveyInputs).map(key => {
                 return (<><TextField
                    key={key + new Date().getMilliseconds()}
                    margin="dense"
                    id={key}
                    type="text"
                    label={key}
                    value={this.state.surveyInputs[key]}
                    onChange={(event, key) => this.surveyInputChangeHandler(event, {key})}
                    fullWidth
                  />
                  <Button key={key + 'btn' + new Date().getSeconds()} onClick={(identifier) => this.editSurveyInputHandler(`${key}`)}>Edit</Button><Button key={key + 'btn' + new Date().getMilliseconds()} onClick={(identifier) => this.deleteSurveyInputHandler(`${key}`)}>Delete</Button></>)
        })
        }
        </div>
        <div style={{textAlign: 'center'}}>
          {this.renderSurveyCheckbox()}
        </div>
      </div>
    )
  }

  render () {

  console.log(this.state);
    return (
      <div>
        <Grid className={classes.Dashboard} container spacing={0}>
         <RenderTitleModal surveyTitleDialog={this.state.surveyTitleDialog} surveyTitleText={this.state.surveyTitleText} changeSurveyTitle={this.changeSurveyTitle} removeDialog={(mode) => this.removeDialog('surveyTitleDialog')}/>
         <RenderDescriptionModal surveyDescrDialog={this.state.surveyDescrDialog} removeDialog={(mode) => this.removeDialog('surveyDescrDialog')} surveyDescrText={this.state.surveyDescrText} changeSurveyDescr={this.changeSurveyDescr} />
         <RenderImageModal surveyImageDialog={this.state.surveyImageDialog} removeDialog={(mode) => this.removeDialog('surveyImageDialog')} surveyImagePath={this.state.surveyImagePath} changeSurveyImage={this.changeSurveyImage} imagePreviewUrl={this.state.imagePreviewUrl}/>
         <RenderInputModal surveyInputDialog={this.state.surveyInputDialog} removeDialog={(mode) => this.removeDialog('surveyInputDialog')} surveyInputLabelName={this.state.surveyInputLabelName} changeSurveyInputLabelName={this.changeSurveyInputLabelName} addInputHandler={this.addInputHandler}/>
         <RenderCheckboxModal surveyCheckboxDialog={this.state.surveyCheckboxDialog} removeDialog={(mode) => this.removeDialog('surveyCheckboxDialog')}
          surveyCheckboxTempQuestion={this.state.surveyCheckboxTempQuestion} changeSurveyCheckboxQuestion={this.changeSurveyCheckboxQuestion} surveyCheckboxNumber={this.state.surveyCheckboxNumber}
          changeCheckboxNumber={this.changeCheckboxNumber} saveSurveyCheckboxHandler={this.saveSurveyCheckboxHandler} saveCheckboxNameHandler={this.saveCheckboxNameHandler} surveyCheckboxNameChangeHandler={this.surveyCheckboxNameChangeHandler}
          surveyCheckboxInitValues={this.state.surveyCheckboxInitValues.checkboxOne.editingMode} editCheckboxNameHandler={this.editCheckboxNameHandler}
          checkboxOneInitValue={this.state.surveyCheckboxInitValues.checkboxOne.value}
          checkboxTwoInitValue={this.state.surveyCheckboxInitValues.checkboxTwo.value}
          checkboxThreeInitValue={this.state.surveyCheckboxInitValues.checkboxThree.value}
          checkboxFourInitValue={this.state.surveyCheckboxInitValues.checkboxFour.value}
          checkboxFiveInitValue={this.state.surveyCheckboxInitValues.checkboxFive.value}
          surveyCheckboxNumber={this.state.surveyCheckboxNumber}/>
         <Grid item md={3}>
            <div className={classes.SideBar}>
                <h1>SURVEYBUDDY</h1>
                <div style={{width: '7rem', height: '7rem', backgroundColor: '#ccc', borderRadius: '100%', margin: '0 auto'}}></div>
                <p>Chimaobi</p>
                <h3>Wizard</h3>
                <Button onClick={this.cancelNewSurvey} style={{color: '#fff', backgroundColor: '#000', }} btntype='secondary'>Go Back</Button>
                <div style={{textAlign: 'center'}}>
                    <p>SurveyName</p>
                    <SurveyName surveyNameEditingMode={this.state.surveyNameEditingMode} surveyNameText={this.state.surveyNameText} surveyNameChange={this.surveyNameChange} saveSurveyName={this.saveSurveyName} editSurveyName={this.editSurveyName}/>
                </div>
                <h3>INSERT</h3>
                <Button onClick={this.initSurveyTitleDialog}>Title</Button>
                <Button onClick={this.initSurveyDescrDialog}>Description</Button>
                <Button onClick={this.initSurveyImageDialog}>Logo/Image</Button>
                <Button onClick={this.initSurveyInputDialog}>Input</Button>
                <Button onClick={this.initSurveyCheckboxDialog}>Checkbox</Button>
                <Button>Radio Options</Button>
                <Button>Footer text</Button>
                <p className={classes.Copyright}>CopyrightcMarvisConcepts</p>
             </div>)
            </Grid>

            <Grid item md={9}>
                <div className={classes.DashboardMain}>
                  <div className={classes.DashboardInnerBox}>
                    {this.renderDashboardContent()}
                  </div>
                </div>
            </Grid>
         </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps)(CreateSurveyWizard);
