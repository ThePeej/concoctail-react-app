import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { navbar } from '../actions/site'

import shaker from '../shaker.png'

class Landing extends React.Component {
  componentWillMount() {
    this.props.navbar(false)
  }

  componentWillUnmount(){
    this.props.navbar(true)
  }

  render(){
    return (
      <div>
        <div className="center-align">
          <br /><br />
          <h1><strong>Concoctail</strong></h1>
          <h5>Find recipes based off your home bar</h5>
          <br /><br />
          <a href="/mybar">
            <span>
              <img src={shaker} alt="Cocktail Shaker" height="300" /><br /><br />
              <h5>Shake it up!</h5>
            </span>
          </a>
        </div>
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
    navbar: navbar,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing)