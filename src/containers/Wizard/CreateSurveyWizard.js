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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import isEmpty from 'lodash/isEmpty';
import SurveyName from './SurveyName/SurveyName';
import RenderTitleModal from './Title/RenderTitleModal';
import RenderDescriptionModal from './Description/RenderDescriptionModal';
import RenderImageModal from './Image/RenderImageModal';
import RenderInputModal from './Input/RenderInputModal';
import RenderCheckboxModal from './Checkbox/RenderCheckboxModal';
import RenderRadioModal from './Radio/RenderRadioModal';
import RenderFooterModal from './Footer/RenderFooterModal';
import TitleRoundedIcon from '@material-ui/icons/TitleRounded';
import IconButton from '@material-ui/core/IconButton';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import InputRoundedIcon from '@material-ui/icons/InputRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import TextFieldsRoundedIcon from '@material-ui/icons/TextFieldsRounded';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import SideBar from '../Navigation/SideBar';

import * as actions from '../../store/actions';


import * as classes from './CreateSurveyWizard.module.css';


class CreateSurveyWizard extends Component {

  state = {
    surveyPage: null,
    surveyNameEditingMode: false,
    surveyNameText: 'my survey 1',
    surveyTitleDialog: false,
    surveyDescrDialog: false,
    surveyImageDialog: false,
    surveyInputDialog: false,
    surveyCheckboxDialog: false,
    surveyRadioDialog: false,
    surveyFooterDialog: false,
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
    surveyRadioOptions: {
      radioOne: {
        surveyRadioQuestion: '',
        surveyRadioOptionNames: [],
        surveyRadioAnswer: '',
        isDisplayed: false
      },
      radioTwo: {
        surveyRadioQuestion: '',
        surveyRadioOptionNames: [],
        surveyRadioAnswer: '',
        isDisplayed: false
      },
      radioThree: {
        surveyRadioQuestion: '',
        surveyRadioOptionNames: [],
        surveyRadioAnswer: '',
        isDisplayed: false
      }
    },
    surveyRadioInitValues: {
      optionOne: {
        value: 'Option 1',
        editingMode: false
      },
      optionTwo: {
        value: 'Option 2',
        editingMode: false
      }
    },
    surveyCheckboxTempQuestion: '',
    surveyRadioTempQuestion: '',
    surveyCheckboxNumber: 0,
    surveyCheckboxTempValue: '',
    surveyTitleText: '',
    surveyDescrText: '',
    surveyFooterText: '',
    surveyInputLabelName: '',
    surveyInputs: {},
    imagePreviewUrl: '',
    file: null
  }

  componentDidMount() {
     if(this.props.customSurvey) {
       this.setState({
         surveyNameText: this.props.customSurvey.surveyName,
         surveyTitleText: this.props.customSurvey.surveyTitleText,
         surveyDescrText: this.props.customSurvey.surveyDescrText,
         surveyFooterText: this.props.customSurvey.surveyFooterText,
         imagePreviewUrl: this.props.customSurvey.imagePreviewUrl,
         file: this.props.customSurvey.file,
         surveyInputs: { ...this.props.customSurvey.surveyInputs },
         surveyCheckboxes: { ...this.props.customSurvey.surveyCheckboxes },
         surveyRadioOptions: { ...this.props.customSurvey.surveyRadioOptions }
       })
     }
  }

  storeCustomSurveyFormHandler = () => {
    // prompt('Please cross check your form very well because once you proceed you cant edit form again');
     const userCustomSurveyForm = {
       surveyName: this.state.surveyNameText,
       surveyTitleText: this.state.surveyTitleText,
       surveyDescrText: this.state.surveyDescrText,
       surveyFooterText: this.state.surveyFooterText,
       imagePreviewUrl: this.state.imagePreviewUrl,
       file: this.state.file,
       surveyInputs: {...this.state.surveyInputs},
       surveyCheckboxes: {...this.state.surveyCheckboxes},
       surveyRadioOptions: {...this.state.surveyRadioOptions}
     }
     // console.log(userCustomSurveyForm);
     this.props.storeCustomSurveyForm(userCustomSurveyForm);
     this.props.history.push('/surveys/confirm');
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
         this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: '', surveyCheckboxInitValues: surveyCheckboxInitValues, surveyCheckboxDialog: false});
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
        this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: '', surveyCheckboxDialog: false });
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
        this.setState({surveyCheckboxes: surveyCheckbox, surveyCheckboxTempQuestion: '', surveyCheckboxDialog: false });
       break;
      default:
        return alert('You cant add more than 3 checkbox questions'); //issue here
    }
  }

  deleteSurveyCheckBoxHandler = (checkboxObj) => {
    // checkbox is an Object
    // surveyCheckboxes is spread out here and the surveyCheckboxQuestion is used as
    // a unique identifier to compare and get the current checkbox the user wants to delete
    const surveyCheckboxes = {...this.state.surveyCheckboxes};
    Object.values(surveyCheckboxes).map(checkbox => {
      if(checkbox.surveyCheckboxQuestion === checkboxObj.surveyCheckboxQuestion) {
        checkbox.surveyCheckboxQuestion = '';
        checkbox.surveyCheckboxNames = {};
        checkbox.isDisplayed = false;
      }
    });
    this.setState({ surveyCheckboxes });
  }

  // if(!isEmpty(checkboxObj.surveyCheckboxNames)) {
  //   checkboxDeleteBtn = <Button onClick={(checkboxObj) => this.deleteSurveyCheckBoxHandler(checkboxObj)}>Delete</Button>;
  // }


  renderSurveyCheckbox() {
    let checkboxItems, checkboxDeleteBtn;
     return Object.values(this.state.surveyCheckboxes).map(checkboxObj => {
       if(checkboxObj.surveyCheckboxNames) {
         // To render checkbox items
         checkboxItems = Object.keys(checkboxObj.surveyCheckboxNames)
         .map(checkbox => {
           return <FormControlLabel
            control={<Checkbox checked={false} value="checkedB" color="primary" />}
            label={checkbox}/>
         });
       }
       return (
         <>
           <h4>{checkboxObj.surveyCheckboxQuestion}</h4>
           {checkboxItems}
           {checkboxObj.surveyCheckboxQuestion ? <Button onClick={(checkbox) => this.deleteSurveyCheckBoxHandler(checkboxObj)}>Delete</Button> : null}
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

  initSurveyRadioDialog = () => {
    this.setState({surveyRadioDialog: true});
  }

  changeSurveyRadioQuestion = event => {
    this.setState({ surveyRadioTempQuestion: event.target.value });
  }

  saveSurveyRadioHandler = () => {

    const surveyRadioOptions = {...this.state.surveyRadioOptions};
    const surveyRadioInitValues = {...this.state.surveyRadioInitValues};
    let radioOptions = {};
    // loop each checkbox from one to three and transfer it from the initial state which is surveyCheckboxInitValues
    // to the permanent state which is either in checkbox one, two or three depending on how many the users wants
    switch (false) {
      case surveyRadioOptions.radioOne.isDisplayed:
         surveyRadioOptions.radioOne.surveyRadioQuestion = this.state.surveyRadioTempQuestion;
         surveyRadioOptions.radioOne.isDisplayed = true;
         Object.values(surveyRadioInitValues).map(radioObj => {
           surveyRadioOptions.radioOne.surveyRadioOptionNames.push(radioObj.value);
         });
         this.setState({surveyRadioOptions: surveyRadioOptions, surveyRadioTempQuestion: '', surveyRadioDialog: false });
        break;
      case surveyRadioOptions.radioTwo.isDisplayed:
         surveyRadioOptions.radioTwo.surveyRadioQuestion = this.state.surveyRadioTempQuestion;
         surveyRadioOptions.radioTwo.isDisplayed = true;
         Object.values(surveyRadioInitValues).map(radioObj => {
           surveyRadioOptions.radioTwo.surveyRadioOptionNames.push(radioObj.value);
         });
         this.setState({surveyRadioOptions: surveyRadioOptions, surveyRadioTempQuestion: '', surveyRadioDialog: false });
        break;
      case surveyRadioOptions.radioThree.isDisplayed:
         surveyRadioOptions.radioThree.surveyRadioQuestion = this.state.surveyRadioTempQuestion;
         surveyRadioOptions.radioThree.isDisplayed = true;
         Object.values(surveyRadioInitValues).map(radioObj => {
           surveyRadioOptions.radioThree.surveyRadioOptionNames.push(radioObj.value);
         });
         this.setState({surveyRadioOptions: surveyRadioOptions, surveyRadioTempQuestion: '', surveyRadioDialog: false });
        break;
      default:
        return alert('You cant add more than 3 Radio Options'); //issue here
    }

  }

  deleteSurveyRadioOptionHandler = (radio) => {
    // radio is an Object
    // surveyRadioOptions is spread out here and the surveyRadioQuestion is used as
    // a unique identifier to compare and get the current radio the user wants to delete
    // const surveyRadioOptions = {...this.state.surveyRadioOptions};
    // Object.values(surveyRadioOptions).map(radioObj => {
    //   if(radioObj.surveyRadioQuestion === radio.surveyRadioQuestion) {
    //     radioObj.surveyRadioQuestion = '';
    //     radioObj.surveyRadioOptionNames.length = 0;
    //     radioObj.isDisplayed = false;
    //   }
    // });
    // this.setState({ surveyRadioOptions });
    console.log(radio);
  }

  renderSurveyRadioOptions() {
      return Object.values(this.state.surveyRadioOptions).map(radioObj => {
        if(radioObj.surveyRadioOptionNames.length !== 0) {
          return (
            <>
            <h3>{radioObj.surveyRadioQuestion}</h3>
            <FormLabel component="legend"></FormLabel>
            <RadioGroup style={{display: 'block'}} row aria-label="" name="" value=''>
              <FormControlLabel value={radioObj.surveyRadioOptionNames[0]} control={<Radio />} label={radioObj.surveyRadioOptionNames[0]} />
              <FormControlLabel value={radioObj.surveyRadioOptionNames[1]} control={<Radio />} label={radioObj.surveyRadioOptionNames[1]} />
            </RadioGroup>
            <Button onClick={(radio) => this.deleteSurveyRadioOptionHandler(radioObj)}>Delete</Button>
            </>)
        }
      });
    }

  initSurveyFooterDialog = () => {
    this.setState({ surveyFooterDialog: true });
  }

  changeSurveyFooterText = event => {
    this.setState({ surveyFooterText: event.target.value });
  }

  changeSurveyRadioName = (event, option) => {
    const surveyRadioInitValues = {...this.state.surveyRadioInitValues};
    surveyRadioInitValues[option].value = event.target.value;
    this.setState({ surveyRadioInitValues });
  }

  editRadioNamesHandler = () => {
    const surveyRadioInitValues = {...this.state.surveyRadioInitValues};
    surveyRadioInitValues.optionOne.editingMode = true;
    this.setState({ surveyRadioInitValues });
  }

  saveRadioNamesHandler = () => {
    const surveyRadioInitValues = {...this.state.surveyRadioInitValues};
    surveyRadioInitValues.optionOne.editingMode = false;
    this.setState({ surveyRadioInitValues });
  }

  renderDashboardContent() {
    return (
      <div className={classes.DashboardContent}>
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
          {this.renderSurveyRadioOptions()}
        </div>
        <div className={classes.SurveyFooterText}>{this.state.surveyFooterText ? this.state.surveyFooterText : null}</div>
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
          <RenderRadioModal surveyRadioDialog={this.state.surveyRadioDialog} removeDialog={(mode) => this.removeDialog('surveyRadioDialog')}
          surveyRadioTempQuestion={this.state.surveyRadioTempQuestion} changeSurveyRadioQuestion={this.changeSurveyRadioQuestion} saveSurveyRadioHandler={this.saveSurveyRadioHandler}
          optionOne={this.state.surveyRadioInitValues.optionOne.value} optionTwo={this.state.surveyRadioInitValues.optionTwo.value}
          editingMode={this.state.surveyRadioInitValues.optionOne.editingMode} changeSurveyRadioName={this.changeSurveyRadioName}
          editRadioNamesHandler={this.editRadioNamesHandler} saveRadioNamesHandler={this.saveRadioNamesHandler}/>
          <RenderFooterModal surveyFooterDialog={this.state.surveyFooterDialog} surveyFooterText={this.state.surveyFooterText} changeSurveyFooterText={this.changeSurveyFooterText} removeDialog={(mode) => this.removeDialog('surveyFooterDialog')}/>

         <Grid item md={3} xs={0} sm={0}>
            <SideBar>
                <Button onClick={this.cancelNewSurvey} style={{color: '#fff', backgroundColor: '#ff9800', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} btntype='secondary'>Go Back</Button>
                <div style={{textAlign: 'center'}}>
                    <p>SurveyName</p>
                    <ArrowDownwardIcon />
                    <SurveyName surveyNameEditingMode={this.state.surveyNameEditingMode} surveyNameText={this.state.surveyNameText} surveyNameChange={this.surveyNameChange} saveSurveyName={this.saveSurveyName} editSurveyName={this.editSurveyName}/>
                </div>
                <h3>INSERT</h3>
                <div className={classes.ActionButtons}>
                    <Fab variant="extended"  onClick={this.initSurveyTitleDialog}>
                    <TitleRoundedIcon />
                      Title
                    </Fab>
                    <Fab variant="extended" onClick={this.initSurveyDescrDialog}>
                     <DescriptionRoundedIcon />
                     Description
                    </Fab>
                    <Fab variant="extended" onClick={this.initSurveyImageDialog}>
                    <ImageRoundedIcon />
                    Logo/Image
                    </Fab>
                    <Fab variant="extended" onClick={this.initSurveyInputDialog}>
                    <InputRoundedIcon />
                    Input
                    </Fab>
                    <Fab onClick={this.initSurveyCheckboxDialog}>
                    <CheckBoxRoundedIcon />
                    Checkbox
                    </Fab>
                    <Fab onClick={this.initSurveyFooterDialog}>
                    <TextFieldsRoundedIcon />
                    Footer text
                    </Fab>
                    <Fab onClick={this.initSurveyRadioDialog}>
                    <RadioButtonCheckedRoundedIcon />
                    Radio Options
                    </Fab>
                <p className={classes.Copyright}></p>
                </div>
            </SideBar>

            </Grid>

            <Grid item md={9} xs={12} sm={12}>
                <div className={classes.DashboardMain}>
                 <h3 className={classes.MobileHeading}>Click options to start editing your form</h3>
                 <div className={classes.OptionBtnBox}>
                   <Button>Options</Button>
                 </div>
                <a href="#" onClick={this.storeCustomSurveyFormHandler} className={classes.NextBtn}>Next <Icon><NavigateNextIcon /></Icon></a>
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
    auth: state.authReducer,
    customSurvey: state.surveysReducer.surveyFormData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeCustomSurveyForm: (userCustomSurveyForm) => dispatch(actions.storeCustomSurveyForm(userCustomSurveyForm)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSurveyWizard);
