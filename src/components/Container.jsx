import React, { useState } from 'react';
import uuid from 'uuid';

const initialFriendsList = [
  { id: '8d8e46e1-bee1-4ad0-b51d-c2704764fccd', name: 'Delba', fav: false },
  { id: '11e03a93-77be-4d81-ae91-5c2960b670f8', name: 'Matt', fav: true },
  { id: '21973c2d-e74d-4ef9-bccb-d3af78a7f0f0', name: 'Sorin', fav: false },
];

function Friend({ info, fav }) {
  return (
    <div>
      {info.name}
      {info.fav && <span>&#x2661;</span>}
      <button onClick={() => fav(info.id)}>fav</button>
    </div>
  );
}

export class ContainerClassy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: initialFriendsList,
      inputValue: '',
    };
  }

  fav = (id) => {
    this.setState(st => {
      const updatedFriends = st.friends.map(friend => {
        if (friend.id === id) {
          friend.fav = !friend.fav;
        }
        return friend;
      });
      return { friends: updatedFriends };
    });
  }

  onChange = evt => this.setState({ inputValue: evt.target.value })

  addFriend = () => {
    const newFriend = {
      name: this.state.inputValue,
      id: uuid(),
      fav: false,
    };
    this.setState({
      friends: this.state.friends.concat(newFriend),
      inputValue: '',
    });
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.friends.map(fr => (
            <Friend key={fr.id} info={fr} fav={this.fav} />
          ))
        }
        <AddFriend
          name={this.state.inputValue}
          onChange={this.onChange}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}

function AddFriend({ name, onChange, addFriend }) {
  return (
    <div>
      <input value={name} onChange={onChange} type="text" />
      <button disabled={!name} onClick={addFriend}>Add Friend</button>
    </div>
  );
}

export function ContainerFunctional() {
  return <div></div>;
}
