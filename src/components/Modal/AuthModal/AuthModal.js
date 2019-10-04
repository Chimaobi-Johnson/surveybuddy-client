import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import GoogleButton from '../../Button/GoogleButton';
import FacebookButton from '../../Button/FacebookButton';
// import * as classes from './AuthModal.module.css';

function Modal (props) {
  const [isRegistering, changeToRegister] = useState(false);
  const [modalClose, handleClose] = useState(false);


    let renderAuthModal;

    if(isRegistering) {

      renderAuthModal = (
        <div>
        <h3 style={{paddingLeft: '2rem', fontWeight: 'bold'}} id="form-dialog-title">REGISTER</h3>
          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="fullname"
              label="Full Name"
              type="text"
              fullWidth
            />
          <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          <TextField
                autoFocus
                margin="dense"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
          />
          </DialogContent>
          <DialogContent>
            <Button style={{color: 'white', backgroundColor: '#ff9800', fontWeight: 'bold'}} color="secondary">
              Register
            </Button>
          </DialogContent>
          <DialogContent>
              <GoogleButton />
          </DialogContent>
          <DialogContent>
              <FacebookButton />
          </DialogContent>

          <DialogContent>
              <h5>Already have an account? <a onClick={() => changeToRegister(false)} href='#'>Sign in here</a></h5>
          </DialogContent>
        </div>
      )

    } else {

    renderAuthModal = (
       <div>
       <h3 style={{padding: '2rem', fontWeight: 'bold'}} id="form-dialog-title">LOGIN</h3>
         <DialogContent>
         <TextField
         autoFocus
         margin="dense"
         id="email"
         label="Email Address"
         type="email"
         fullWidth
       />
       <TextField
           autoFocus
           margin="dense"
           id="password"
           label="Password"
           type="password"
           fullWidth
         />
         </DialogContent>
         <DialogContent>
           <Button style={{color: 'white', backgroundColor: '#ff9800', fontWeight: 'bold'}} color="secondary">
             Login
           </Button>
         </DialogContent>
         <DialogContent>
             <GoogleButton />
         </DialogContent>
         <DialogContent>
             <FacebookButton />
         </DialogContent>

         <DialogContent>
             <h5>Don't have an account yet? <a onClick={() => changeToRegister(true)} href='#'>Sign Up</a> with us and get started!</h5>
         </DialogContent>
       </div>
     )
  }

  return (
    <div>
     {renderAuthModal}
    </div>
  );
}

export default Modal;
