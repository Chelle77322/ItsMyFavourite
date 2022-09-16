import React , {Component} from 'react';
//import ReactDOM, {hydrate} from 'react-dom';
import { connect } from 'react-redux';
import { Home }  from "./pages/Home";

import { getUsers } from './redux/selectors.js';
import {usersFetched } from './redux/actions.js';

const ENDPOINT = 'http://localhost:3000/data/users.json';

export default class App extends Component {
  componentWillMount() {
    const { users, fetchUsers } = this.props;

    if (users === null ){
      fetchUsers();
    }
  }
  hydrate() {
    <Home />
    const { users } = this.props;
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
  state => ({ users: getUsers(state) }), dispatch =>
  ({
    fetchUsers: async () => dispatch(usersFetched (await (await fetch(ENDPOINT)).json()))
  })
)(App);



