import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../Components/SharkTank/SharkTank';
import GraveYard from '../Components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
    sharkAnimate: '',
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    const sharkAnimate = '';
    this.setState({ students, deadStudents, sharkAnimate });
  }

  killAStudent = () => {
    studentsData.followTheLight();
    const students = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ sharkAnimate: ' eatStudent' });
    setTimeout(() => this.setState({ students, deadStudents }), 2000);
    setTimeout(() => this.setState({ sharkAnimate: '' }), 7000);
  }

  render() {
    const { students } = this.state;
    const { deadStudents } = this.state;
    const { sharkAnimate } = this.state;
    return (
      <div className="App">
        <h1 className="text-left">Shark Attack</h1>
        <button className="btn btn-danger" onClick={this.killAStudent}>Shark Attack</button>
        <SharkTank students={students} sharkAnimate={sharkAnimate} />
        <GraveYard deadStudents={deadStudents}/>
      </div>
    );
  }
}

export default App;
