import React from 'react'
import { Link } from 'react-router'
import Sidebar from '../components/Sidebar'

const Main = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="main-container col-md-3">
          <h1 className="text-center">Dashboard</h1>
            <Sidebar />
        </div>
        <div className="col-md-7"> {this.props.children}</div>
        <div className="col-md-2">Hi</div>
      </div>
    ) 
  }
});

export default Main