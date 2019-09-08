import React from 'react';
import * as classes from './Landing.module.css';

const landing = props => {
     return (
       <div className={classes.LandingMain}>
            <h3 className={classes.TitleBlock}>SURVEYBUDDY</h3>
            <div className={classes.LandingCurve}>
            <div className={classes.ItemBlock}></div>
            <div className={classes.LandingCircle2}>

               <div className={classes.LandingTextBox}>
                 <h2>A simple & powerful online survey tool</h2>
                 <p>
                    Sign up now for free unlimited surveys, questions & responses.
                 </p>
                 <a href="#" className={classes.HomeButton}>Get Started</a>
              </div>

            </div>
                 <p className={classes.Item1}>Sign up and get free credits</p>
                 <p className={classes.Item2}>Create custom surveys and send to your users</p>

                 <p className={classes.Item3}>Get Feedback and analyze your data</p>
                {/*  <h3>Write Customized Surveys and Send Out to Your Users</h3>
                  <div className={classes.ShortLine}></div> */}
                  {/* <h2>Get Feedback as Soon they Respond</h2>
                  <h2>Review and Analyze Data</h2> */}
            </div>
            <div className={classes.ImageBox}>
               <img className={classes.CartoonImage} alt='vector' src={require('../../images/cartoons/cartoonman_standing.jpg')}/>
            </div>

      </div>
     )
}

export default landing;
