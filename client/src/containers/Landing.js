import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { navbarOn } from '../actions/site'
import { navbarOff } from '../actions/site'

import shaker from '../shaker.png'


class Landing extends React.Component {
  componentWillMount() {
    this.props.navbarOff()
  }

  componentWillUnmount(){
    this.props.navbarOn()
  }

  render(){
    return (
      <div className="center-align">
        <br /><br />
        <h5>Welcome to</h5>
        <h1><strong>Concoctail</strong></h1>
        <a href="/mybar">
          <span>
            <img src={shaker} alt="Cocktail Shaker" height="300" /><br /><br />
            <h5>Let's make something!</h5>
          </span>
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    navbarOn: navbarOn,
    navbarOff: navbarOff
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing)