import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../Components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    this.setState({ students });
  }

  killAStudent = () => {
    studentsData.followTheLight();
    const students = studentsData.livingStudents();
    this.setState({ students });
  }

  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <h2>Shark Tank</h2>
        <button className="btn btn-danger" onClick={this.killAStudent}>Shark Attack</button>
        <SharkTank students={students}/>
      </div>
    );
  }
}

export default App;
