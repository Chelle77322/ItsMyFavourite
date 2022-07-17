import React from 'react';
import {connect} from 'react-redux';
import {Routes} from '../client/Routes.cjs'

import {getUsers} from '../.././build/client/redux/selectors.cjs';
import {usersFetched} from '../.././build/client/redux/actions.cjs';

const ENDPOINT = "http://localhost:3000/data/users.json";

class App extends React.Component {
  componentWillMount() {
    const { users, fetchUsers} = this.props;

    if (users === null) {
      fetchUsers();
    }
  }
  render () {
    const {users} = this.props;
    return (
      <div>
        {
          users && users.length > 0 && users.map(({id,first_name: firstName, last_name: lastName}) => <p key = {id}> {`${firstName} ${ lastName}`}</p>
          )
         
        }
         console.log(users);
      </div>
    );
  }
}
const ConnectedApp = connect(
  state => ({ users: getUsers(state)}),
  dispatch => ({
    fetchUsers: async () => {
      return dispatch(usersFetched(await (await fetch(ENDPOINT)).json()))
    }
  })
)(App);
export default ConnectedApp;