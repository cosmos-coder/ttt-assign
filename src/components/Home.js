import React, {Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {API_URL} from '../config';
export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      n:0,
      data: []
    };
    this.getOccurence = this.getOccurence.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e){
    let {name, value} = e.target;
    this.setState({[name]: value});
  }
  getOccurence(e){
    e.preventDefault();
    let {n} = this.state;
    axios.get(`${API_URL}get-occurence?n=${n}`)
      .then(result=>{
        result = result.data;
        if(result.Status===1){
          this.setState({data: result.data});
        }else{
          swal({
            title: 'Oops',
            text: result.msg,
            type: 'error'
          });
        }
      })
      .catch(error=>{
        swal({
          title: 'Oops',
          text: (
            error.msg ||
            "Something went wrong, Please try again."
          ),
          type: 'error'
        });
      });
  }
  render(){
    let {data} = this.state;
    let row = <tr>
      <td colSpan="2">Nothing to show. Type n and click submit.</td>
    </tr>;
    if(data.length>0){
      row = data.map((item, index)=>{
        return (
          <tr key={index}>
          <td>{item[0]}</td>
          <td>{item[1]}</td>
          </tr>
        );
      });
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-3">
            <form action="" type="GET" onSubmit={this.getOccurence}>
              <input type="text" className="form-control"
                name="n" placeholder="Give an input N"
                onChange={this.handleInput}/><br />
              <input type="submit" className=" form-control btn btn-primary"
                value="Submit"/>
            </form>
          </div>
        </div><br /><br />
        <div className="row">
          <div className="col-md-6 col-md-push-3">
            <table className="table table-bordered table-striped">
              <thead className="text-center">
                <tr>
                  <th>Word</th>
                  <th>occurence</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {row}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
