import  React , {Component, useState} from 'react';
import { connect } from 'react-redux';
import { default as Home }  from "./pages/Home";
import {default as usersFetched } from './redux/actions.js';

const ENDPOINT = 'http://localhost:3000/data/users.json';


export default class App extends Component {
  componentsWillMount() {

  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { users, getUsers } = useState({users:{id:[""]},});
  

    if (users === null) {
      getUsers();
    };
    
  
 
   
    <Home />
    
    return (
     
      <div>
       
        {

          users && users.length > 0 && users.map(
            ({ id, first_name: firstName, last_name: lastName }) => <p key={ id }>{ `${ firstName} ${ lastName }` }</p>
          )
        }
      </div>
    );
  }
}

export const ConnectedApp = connect( 
  
  dispatch =>
  {
    
      return ({
        fetchUsers: async () => dispatch(usersFetched(await (await fetch(ENDPOINT)).json()))
      });
    }
)(App);