import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import GraveStone from '../GraveStone/GraveStone';

class GraveYard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const graveStones = deadStudents.map((student) => (
      <GraveStone key={student.id} student={student}/>
    ));
    return (
      <div>
        <div className="d-flex justify-content-center flex-wrap">
          { graveStones }
        </div>
    </div>
    );
  }
}

export default GraveYard;
