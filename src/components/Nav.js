import React, { Component } from 'react';

export default class Nav extends Component {
  render(){
    var brandLink="http://terriblytinytales.com/";
    return (
      <div>
        <nav className="navbar navbar-default" style={{fontWeight: 'bold', fontSize: '18px'}}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#dbmaster-navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href={brandLink} target="_blank"> ttt </a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
