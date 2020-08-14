import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;
    const studentCards = students.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));
    return (
      <div>
        <div className="d-flex justify-content-center flex-wrap">
        { studentCards }
        </div>
      </div>
    );
  }
}

export default SharkTank;
