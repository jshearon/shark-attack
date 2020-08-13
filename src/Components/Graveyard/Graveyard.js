import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class GraveYard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { student } = this.props;
    return (
          <div className="card mx-4 mt-4 p-3 bg-dark text-light studentCard">
            <p>{student.firstName}<br/>{student.lastName}</p>
          </div>
    );
  }
}

export default GraveYard;
