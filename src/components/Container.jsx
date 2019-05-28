import React, { useState } from 'react';
import uuid from 'uuid';

const initialFriendsList = [
  { id: '8d8e46e1-bee1-4ad0-b51d-c2704764fccd', name: 'Delba' },
  { id: '11e03a93-77be-4d81-ae91-5c2960b670f8', name: 'Matt' },
  { id: '21973c2d-e74d-4ef9-bccb-d3af78a7f0f0', name: 'Sorin' },
];

export class ContainerClassy extends React.Component {
  render() {
    return (
      <div>Classy</div>
    );
  }
}

export function ContainerFunctional() {
  return <div>Functional</div>;
}