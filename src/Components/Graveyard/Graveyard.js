import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import GraveStone from '../GraveStone/GraveStone';
import './GraveYard.scss';

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
        <div className="graveYard d-flex justify-space-around mx-2">
          { graveStones }
        </div>
    </div>
    );
  }
}

export default GraveYard;
