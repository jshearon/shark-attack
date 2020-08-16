import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';
import shark from '../../Assets/Images/shark.png';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;
    const { sharkAnimate } = this.props;
    const studentCards = students.map((student) => (
      <LiveStudent key={student.id} student={student}/>
    ));
    return (
      <div className="d-flex justify-content-center flex-wrap mx-auto w-75 mt-5">
        <img src={shark} className={`shark${sharkAnimate}`} alt="shark" />
        { studentCards }
      </div>
    );
  }
}

export default SharkTank;
