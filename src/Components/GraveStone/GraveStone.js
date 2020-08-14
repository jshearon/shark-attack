import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
          <div className="card mx-4 mt-4 p-3 bg-danger text-light graveStone">
            <div className="thumbnail"><img src={student.imgUrl} alt="Student" /></div>
            <p>{student.firstName}<br/>{student.lastName}</p>
          </div>
    );
  }
}

export default GraveStone;
