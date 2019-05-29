import React, { Component, useState } from 'react';
import uuid from 'uuid';

const initialFriendsList = [
  { id: '8d8e46e1-bee1-4ad0-b51d-c2704764fccd', name: 'Delba', fav: false },
  { id: '11e03a93-77be-4d81-ae91-5c2960b670f8', name: 'Matt', fav: true },
  { id: '21973c2d-e74d-4ef9-bccb-d3af78a7f0f0', name: 'Sorin', fav: false },
];

// let's display a counter along with buttons to increment and decrement
export class ContainerClassy extends Component {
  render() {
    return (
      <div>I am classy!!</div>
    );
  }
}

export function ContainerFunctional() {
  return (
    <div>I am functional!!!</div>
  );
}
