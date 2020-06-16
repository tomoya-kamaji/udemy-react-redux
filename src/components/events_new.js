import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

// import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      // React.Fragmentはdivの代わりjsxは1つのタグで囲わなくてはいけない
      <React.Fragment>
        <div>new</div>
      </React.Fragment>
    )
  }
}

export default connect(null, null)(EventsNew)