import React from 'react';

import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
          <div className="card mx-4 mt-4 p-3 bg-dark text-light studentCard">
            <div className="thumbnail"><img src={student.imgUrl} alt="Student" /></div>
            <p>{student.firstName}<br/>{student.lastName}</p>
          </div>
    );
  }
}

export default LiveStudent;
