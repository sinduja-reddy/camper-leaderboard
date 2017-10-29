import React, { Component } from 'react';
import { Table } from 'reactstrap';


class Board extends Component {
  constructor(props){
		super(props);
		this.state={
			response:[]
		}
	}
 componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent', {
      method: 'get'
    }).then(function(response) {
      return response.json()
    }).then(function(response) {
    	this.setState({ response : response
      })
    }.bind(this));
  }
  
  render() {
    return (
      <Table bordered>
      	<thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th className='text'>Points in past 30 days</th>
            <th className='text'>All time points</th>
          </tr>
        </thead>
        <tbody>
		{
      	this.state.response.map((res,i)=>{
    			return (
    				<tr>
    				    <th scope="row">{i+1}</th>
    				    <td><img src={res.img} alt='pic'/><span>{res.username}</span></td>
            			<td className='text'>{res.recent}</td>
           				<td className='text'>{res.alltime}</td>
          			</tr>
    			)
    	})
      }
      </tbody>
      </Table>
    );
  }
}

export default Board;