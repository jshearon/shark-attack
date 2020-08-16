import React from 'react';

import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';
import bubble from '../../Assets/Images/bubble.png';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    const randMarginLR = Math.floor(Math.random() * (5 - 1) + 1);
    const randMarginT = Math.floor(Math.random() * (5 - 1) + 1);
    return (
          <div className={ `mx-${randMarginLR} mt-${randMarginT} text-light student floatDelay-${randMarginT}`}>
            <img src={student.imgUrl} alt="Student" className="thumbnail" />
            <img src={bubble} alt="bubble" className="bubble" />
          </div>
    );
  }
}

export default LiveStudent;
