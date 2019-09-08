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

import * as classes from './CreateSurveyWizard.module.css';

// const menuItems = {
//   CreateNew: 'Create New Survey',
//   MySurveys: 'My Surveys',
//   BuyCredits: 'Buy Credits',
//   HowItWorks: 'How it Works'
// }


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
        editingMode: false,
        value: ''
      },
      checkboxTwo: {
        editingMode: false,
        value: ''
      },
      checkboxThree: {
        editingMode: false,
        value: ''
      },
      checkboxFour: {
        editingMode: false,
        value: ''
      },
      checkboxFive: {
        editingMode: false,
        value: ''
      },
      editingMode: false
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
    // if(!this.props.auth) {
    //   alert('error, you are not allowed to access this page');
    // }
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
    // const oldSurveyInputState = {...this.state.surveyInputs}
    // console.log(inputLabel);
    // console.log(oldSurveyInputState);
    // oldSurveyInputState[inputLabel] = event.target.value;
    // this.setState({surveyInputs: oldSurveyInputState});
  }


  addInputHandler = () => {
    let inputLabel = this.state.surveyInputLabelName;
    const surveyInputs = {...this.state.surveyInputs};
    surveyInputs[inputLabel] = '';
    this.setState({surveyInputs: surveyInputs, surveyInputDialog: false});
  }

  deleteSurveyInputHandler = (key) => {
    // const currentSurveyInputObj = updateObject(this.state.surveyInputs, {
    //       [inputIdentifier]: updatedFormElement
    //   });
    const currentSurveyInputObj = {...this.state.surveyInputs};
    delete currentSurveyInputObj[key];
    console.log(key);
    console.log(currentSurveyInputObj);
    this.setState({surveyInputs: currentSurveyInputObj});
  }

  editSurveyInputHandler = (key) => {

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

  surveyCheckboxNameChangeHandler2 = () => {
    const checkboxValues = this.state.surveyCheckboxTempValue;
    const checkboxNames = {...this.state.surveyCheckboxNames};
    checkboxNames[checkboxValues] = false;
    this.setState({surveyCheckboxNames: checkboxNames});
  }

  saveSurveyCheckboxHandler = () => {
    const surveyCheckbox = {...this.state.surveyCheckboxes};
    const surveyCheckboxInitValues = {...this.state.surveyCheckboxInitValues};
    let checkboxNames = {};
    switch (false) {
      case surveyCheckbox.checkboxOne.isDisplayed:
         surveyCheckbox.checkboxOne.surveyCheckboxQuestion = this.state.surveyCheckboxTempQuestion;
         surveyCheckbox.checkboxOne.isDisplayed = true;
         Object.values(surveyCheckboxInitValues).map(checkboxObj => {
             return Object.assign(checkboxNames, {[checkboxObj.value]: false});
         });
         surveyCheckbox.checkboxOne.surveyCheckboxNames = checkboxNames
         this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: ''});
        break;
      case surveyCheckbox.checkboxTwo.isDisplayed:
        surveyCheckbox.checkboxTwo.surveyCheckboxQuestion = this.state.surveyCheckboxTempQuestion;
        surveyCheckbox.checkboxTwo.isDisplayed = true;
        Object.values(surveyCheckboxInitValues).map(checkboxObj => {
             return Object.assign(checkboxNames, {[checkboxObj.value]: false});
        });
        surveyCheckbox.checkboxTwo.surveyCheckboxNames = checkboxNames
        this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: ''});
        break;
      case surveyCheckbox.checkboxThree.isDisplayed:
        surveyCheckbox.checkboxThree.surveyCheckboxQuestion = this.state.surveyCheckboxTempQuestion;
        surveyCheckbox.checkboxThree.isDisplayed = true;
        Object.values(surveyCheckboxInitValues).map(checkboxObj => {
             return Object.assign(checkboxNames, {[checkboxObj.value]: false});
        });
        surveyCheckbox.checkboxThree.surveyCheckboxNames = checkboxNames
        this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: ''});
       break;
      default:
        return alert('You cant add more than 3 checkbox questions');
    }
  }
  renderSurveyCheckbox() {
     return Object.values(this.state.surveyCheckboxes).map(checkboxObj => {
       return (
         <>
           <h4>{checkboxObj.surveyCheckboxQuestion}</h4>
           <FormGroup row>
           {checkboxObj.surveyCheckboxNames ? Object.keys(checkboxObj.surveyCheckboxNames).map(checkbox => <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={checkbox}/>) : null }
           </FormGroup>
         </>
       )
     })
  }
  saveCheckboxNameHandler = (checkbox) => {
    const checkboxInitValues = {...this.state.surveyCheckboxInitValues};
    checkboxInitValues.editingMode = false;
    this.setState({surveyCheckboxInitValues: checkboxInitValues});
  }

  editCheckboxNameHandler = (checkbox) => {
    const checkboxInitValues = {...this.state.surveyCheckboxInitValues};
    checkboxInitValues.editingMode = true;
    this.setState({surveyCheckboxInitValues: checkboxInitValues});
  }

  renderCheckBoxesOnModal() {
    let checkboxOne, checkboxTwo, checkboxThree, checkboxFour, checkboxFive;
    if(this.state.surveyCheckboxInitValues.editingMode) {
      checkboxOne = (<>
        <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={this.state.surveyCheckboxInitValues.checkboxOne.value} fullWidth />
        <Button onClick={(checkbox) => this.saveCheckboxNameHandler('checkboxOne')}>Save Names</Button></>);
      checkboxTwo = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={this.state.surveyCheckboxInitValues.checkboxOne.value} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={this.state.surveyCheckboxInitValues.checkboxTwo.value} fullWidth />
          <Button onClick={(checkbox) => this.saveCheckboxNameHandler('checkboxTwo')}>Save Names</Button></>);
      checkboxThree = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={this.state.surveyCheckboxInitValues.checkboxOne.value} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={this.state.surveyCheckboxInitValues.checkboxTwo.value} fullWidth />
          <TextField type="text" label="Checkbox Three" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxThree')} value={this.state.surveyCheckboxInitValues.checkboxThree.value} fullWidth />
          <Button onClick={(checkbox) => this.saveCheckboxNameHandler('checkboxThree')}>Save Names</Button></>);
      checkboxFour = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={this.state.surveyCheckboxInitValues.checkboxOne.value} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={this.state.surveyCheckboxInitValues.checkboxTwo.value} fullWidth />
          <TextField type="text" label="Checkbox Three" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxThree')} value={this.state.surveyCheckboxInitValues.checkboxThree.value} fullWidth />
          <TextField type="text" label="Checkbox Four" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxFour')} value={this.state.surveyCheckboxInitValues.checkboxFour.value} fullWidth />
          <Button onClick={(checkbox) => this.saveCheckboxNameHandler('checkboxFour')}>Save Names</Button></>);
      checkboxFive = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={this.state.surveyCheckboxInitValues.checkboxOne.value} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={this.state.surveyCheckboxInitValues.checkboxTwo.value} fullWidth />
          <TextField type="text" label="Checkbox Three" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxThree')} value={this.state.surveyCheckboxInitValues.checkboxThree.value} fullWidth />
          <TextField type="text" label="Checkbox Four" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxFour')} value={this.state.surveyCheckboxInitValues.checkboxFour.value} fullWidth />
          <TextField type="text" label="Checkbox Five" onChange={(event, checkbox) => this.surveyCheckboxNameChangeHandler(event, 'checkboxFive')} value={this.state.surveyCheckboxInitValues.checkboxFive.value} fullWidth />
          <Button onClick={(checkbox) => this.saveCheckboxNameHandler('checkboxFive')}>Save Names</Button></>);
    } else {
      checkboxOne = (<>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <Button onClick={(checkbox) => this.editCheckboxNameHandler('checkboxOne')}>Edit Names</Button></>);
      checkboxTwo = (<>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <Button onClick={(checkbox) => this.editCheckboxNameHandler('checkboxTwo')}>Edit Names</Button></>);
      checkboxThree = (<>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <Button onClick={(checkbox) => this.editCheckboxNameHandler('checkboxThree')}>Edit Names</Button></>);
      checkboxFour = (<>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
        <Button onClick={(checkbox) => this.editCheckboxNameHandler('checkboxFour')}>Edit Names</Button></>);
      checkboxFive = (<>
         <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
         <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
         <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
         <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
         <FormControlLabel control={<Checkbox checked={true} value="checkedB" color="primary" />} label="Primary"/>
         <Button onClick={(checkbox) => this.editCheckboxNameHandler('checkboxFive')}>Edit Names</Button></>);
    }
    switch (this.state.surveyCheckboxNumber) {

     case 1:
        return checkboxOne;
     case 2:
        return checkboxTwo;
     case 3:
        return checkboxThree;
     case 4:
        return checkboxFour;
     case 5:
        return checkboxFive;
      default:
         return null;
    }
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
                    onChange={(event, key) => this.surveyInputChangeHandler(event, 'NAME')}
                    fullWidth
                  />
                  <Button key={key + 'btn' + new Date().getSeconds()} onClick={(identifier) => this.editSurveyInputHandler(`${key}`)}>Edit</Button><Button key={key + 'btn' + new Date().getMilliseconds()} onClick={(identifier) => this.deleteSurveyInputHandler(`${key}`)}>Delete</Button></>)
        })
        }
           <div>
             {this.renderSurveyCheckbox()}
           </div>

        </div>
      </div>
    )
  }



  renderTitleModal() {
    return (<Dialog open={this.state.surveyTitleDialog} onClose={(mode) => this.removeDialog('surveyTitleDialog')} aria-labelledby="form-dialog-title">
      <DialogContent>
        <h4>Add a Title</h4>
        <TextField
          autoFocus
          margin="dense"
          id="SurveyTitle"
          type="text"
          value={this.state.surveyTitleText}
          onChange={this.changeSurveyTitle}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={(mode) => this.removeDialog('surveyTitleDialog')}>Save</Button>
      </DialogActions>
    </Dialog>)
  }


  renderDescriptionModal() {
    return (<Dialog open={this.state.surveyDescrDialog} onClose={(mode) => this.removeDialog('surveyDescrDialog')} aria-labelledby="form-dialog-title">
      <DialogContent>
        <h4>Add a Description</h4>
        <TextField
          autoFocus
          margin="dense"
          id="SurveyName"
          type="text"
          value={this.state.surveyDescrText}
          onChange={this.changeSurveyDescr}
          fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={(mode) => this.removeDialog('surveyDescrDialog')}>Save</Button>
      </DialogActions>
    </Dialog>)
  }

  renderImageModal() {
    return (<Dialog open={this.state.surveyImageDialog} onClose={(mode) => this.removeDialog('surveyImageDialog')} aria-labelledby="form-dialog-title">
      <DialogContent>
        <h4>Add a Logo/Image</h4>
        <Input
          autoFocus
          margin="dense"
          id="SurveyImage"
          type="file"
          value={this.state.surveyImagePath}
          onChange={this.changeSurveyImage}
          fullWidth
          />
          <div className={classes.SurveyImageBox}>
             {!this.state.imagePreviewUrl ? null : <img style={{margin: '0'}} src={this.state.imagePreviewUrl} />}
          </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={(mode) => this.removeDialog('surveyImageDialog')}>Save</Button>
      </DialogActions>
    </Dialog>)
  }

  renderInputModal() {
    return (<Dialog open={this.state.surveyInputDialog} onClose={(mode) => this.removeDialog('surveyInputDialog')} aria-labelledby="form-dialog-title">
      <DialogContent>
        <h4>Input Label Name</h4>
        <TextField
          autoFocus
          margin="dense"
          id="SurveyInputLabelName"
          type="text"
          value={this.state.surveyInputLabelName}
          onChange={this.changeSurveyInputLabelName}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.addInputHandler}>Save</Button>
      </DialogActions>
    </Dialog>)
  }

  renderCheckboxModal() {
    return (<Dialog open={this.state.surveyCheckboxDialog} onClose={(mode) => this.removeDialog('surveyCheckboxDialog')} aria-labelledby="form-dialog-title">
      <DialogContent>
        <h4>Input Checkbox Question (If there is any)</h4>
        <TextField
            autoFocus
            margin="dense"
            id="SurveyCheckboxQuestion"
            type="text"
            value={this.state.surveyCheckboxTempQuestion}
            onChange={this.changeSurveyCheckboxQuestion}
            fullWidth
          />
          <h4>Input Number of Checkboxes</h4>
            <Select
            style={{marginRight: '1.5rem'}}
              value={this.state.surveyCheckboxNumber}
              onChange={this.changeCheckboxNumber}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            {this.renderCheckBoxesOnModal()}
      </DialogContent>
      <DialogActions>
        <Button onClick={this.saveSurveyCheckboxHandler}>Save</Button>
      </DialogActions>
    </Dialog>)
  }


  render () {

 let surveyName;
 if(this.state.surveyNameEditingMode) {
  surveyName = (
   <>
    <TextField
      autoFocus
      margin="dense"
      id="SurveyName"
      type="text"
      value={this.state.surveyNameText}
      onChange={this.surveyNameChange}
    />
    <Button onClick={this.saveSurveyName}>Save</Button>
    </>
  )
 } else {
     surveyName = (
      <>
     <h3>{this.state.surveyNameText}</h3>
     <Button onClick={this.editSurveyName}>Edit</Button>
     </>
    )
 }
 console.log(this.state);
    return (
      <div>
        <Grid className={classes.Dashboard} container spacing={0}>
         {this.renderTitleModal()}
         {this.renderDescriptionModal()}
         {this.renderImageModal()}
         {this.renderInputModal()}
         {this.renderCheckboxModal()}
         <Grid item md={3}>
            <div className={classes.SideBar}>
                <h1>SURVEYBUDDY</h1>
                <div style={{width: '7rem', height: '7rem', backgroundColor: '#ccc', borderRadius: '100%', margin: '0 auto'}}></div>
                <p>Chimaobi</p>
                <h3>Wizard</h3>
                <Button onClick={this.cancelNewSurvey} style={{color: '#fff', backgroundColor: '#000', }} btntype='secondary'>Go Back</Button>
                <div style={{textAlign: 'center'}}>
                    <p>SurveyName</p>
                    {surveyName}
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
