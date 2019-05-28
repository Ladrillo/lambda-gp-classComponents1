import React from 'react';

export class ContainerClassy extends React.Component {
  render() {
    return (
      <div className='container'>
        classy!!!
      </div>
    );
  }
}

export function ContainerFunctional({ }) {
  return (
    <div className='container'>
      functional!!!
    </div>
  );
}
