import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../Components/SharkTank/SharkTank';
import GraveYard from '../Components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  killAStudent = () => {
    studentsData.followTheLight();
    const students = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  render() {
    const { students } = this.state;
    const { deadStudents } = this.state;
    return (
      <div className="App">
        <h2>Shark Tank</h2>
        <button className="btn btn-danger" onClick={this.killAStudent}>Shark Attack</button>
        <SharkTank students={students}/>
        <GraveYard deadStudents={deadStudents}/>
      </div>
    );
  }
}

export default App;
