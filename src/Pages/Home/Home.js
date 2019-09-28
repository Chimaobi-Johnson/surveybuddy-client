import React, { Component } from 'react';
import TopNav from '../../containers/Navigation/TopNav';
import Landing from '../../containers/Landing/Landing';

class Home extends Component {

  render() {
    return (
      <div>
         <TopNav />
         <Landing />
      </div>
    )
  }
}

export default Home;
