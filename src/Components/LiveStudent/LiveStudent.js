import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
          <div className="card w-25 bg-dark text-light studentCard">
            <h5>{student.firstName}</h5>
            <p>{student.lastName}</p>
          </div>
    );
  }
}

export default LiveStudent;
