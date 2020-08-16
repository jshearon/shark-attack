import React from 'react';

import studentShape from '../../helpers/propz/studentShape';
import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
          <div className="text-light graveStone d-flex flex-column justify-content-start text-light">
            <img src={student.imgUrl} alt="Student" className="thumbnail" />
            <p className="hereLies">Here Lies<br/>{student.firstName}<br/>{student.lastName}</p>
          </div>
    );
  }
}

export default GraveStone;
