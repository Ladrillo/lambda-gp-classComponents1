import React, { Component, useState } from 'react';
import uuid from 'uuid';

const initialFriendsList = [
  { id: '8d8e46e1-bee1-4ad0-b51d-c2704764fccd', name: 'Delba', fav: false },
  { id: '11e03a93-77be-4d81-ae91-5c2960b670f8', name: 'Matt', fav: true },
  { id: '21973c2d-e74d-4ef9-bccb-d3af78a7f0f0', name: 'Sorin', fav: false },
];

// let's display a counter along with buttons to increment and decrement
export class ContainerClassy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: initialFriendsList,
      friendName: '',
    };
  }

  changeHandler = (event) => {
    // we need to "mutate" this.state.friendName to reflect what the user types
    // I need to get the value, which is buried in event.target.value
    this.setState({
      friendName: event.target.value,
    });
  }

  addFriend = () => {
    const newFriend = {
      id: uuid(),
      name: this.state.friendName,
      fav: false,
    };

    const newFriendsList = this.state.friendsList.concat(newFriend);

    this.setState({
      friendsList: newFriendsList,
      friendName: '',
    });
  }

  render() {
    return (
      <div>
        <h3>My friends:</h3>
        {
          this.state.friendsList.map(friendObj => (
            <div key={friendObj.id}>{friendObj.name}</div>
          ))
        }
        <FriendAdder
          friendName={this.state.friendName}
          changeHandler={this.changeHandler}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

function FriendAdder({ friendName, changeHandler, addFriend }) {
  return (
    <div>
      <input
        value={friendName}
        onChange={changeHandler}
        type="text"
      />
      <button onClick={addFriend}>Add friend!!</button>
    </div>
  );
}

export function ContainerFunctional() {
  return null;
}
