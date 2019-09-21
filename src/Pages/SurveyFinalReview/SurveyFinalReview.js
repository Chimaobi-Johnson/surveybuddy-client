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
import SideBar from '../../containers/Navigation/SideBar';

import * as classes from './SurveyFinalReview.module.css';


class SurveyFinalReview extends Component {

  render () {
    return (
           <div>
              <Grid className={classes.Dashboard} container spacing={0}>
              <Grid item md={3} xs={12} sm={12}>
               <SideBar>
                 <Button style={{color: '#fff', backgroundColor: '#ff9800', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} btntype='secondary'>Go Back</Button>
                 <div style={{textAlign: 'center'}}>
                     <p>SurveyName</p>
                     <ArrowDownwardIcon />
                     <h3>SurveyName</h3>
                 <div className={classes.EmailData}>
                   <h3>EMAIL SUBJECT</h3>
                   <div>WHITE CUBE PICTURES</div>
                   <h3>EMAIL BODY</h3>
                   <div>Please Follow the link below to fill in our survey. Thank You! <a href="#">this is the link</a></div>
                   <h3>EMAIL RECIPIENTS</h3>
                   <div>woguchimaobi@gmail.com, chimaobi.dev@gmail.com, cjswags@yahoo.com, codelife2553@gmail.com, swiftthegenius@gmail.com, woguchimaobi@gmail.com,
                    chimaobi.dev@gmail.com, cjswags@yahoo.com, codelife2553@gmail.com, swiftthegenius@gmail.com,woguchimaobi@gmail.com,
                    chimaobi.dev@gmail.com, cjswags@yahoo.com, codelife2553@gmail.com, swiftthegenius@gmail.com
                    woguchimaobi@gmail.com, chimaobi.dev@gmail.com, cjswags@yahoo.com, codelife2553@gmail.com, swiftthegenius@gmail.com, woguchimaobi@gmail.com,
                     chimaobi.dev@gmail.com, cjswags@yahoo.com, codelife2553@gmail.com, swiftthegenius@gmail.com,woguchimaobi@gmail.com,
                     chimaobi.dev@gmail.com, cjswags@yahoo.com, codelife2553@gmail.com, swiftthegenius@gmail.com</div>
                   </div>
                 </div>
               </SideBar>
                 </Grid>

                 <Grid item md={9} xs={12} sm={12}>
                     <div className={classes.DashboardMain}>
                     <a href="#" className={classes.NextBtn}>SEND OUT SURVEY</a>
                       <div className={classes.DashboardInnerBox}>

                       </div>
                     </div>
                 </Grid>
              </Grid>
           </div>
    )
  }
}

export default SurveyFinalReview;
