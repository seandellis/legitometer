import React, { Component } from 'react';
import './App.css';
import Login from './components/Shared/Login'
import StudentForm from './components/Reviewer/StudentForm';
import TeacherDashboard from './components/Admin/Dashboard';
import StudentDashboard from './components/Reviewer/Dashboard';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teacherLoggedIn: true,
      studentLoggedIn: false,
    }
  }

  render() {
    const teacher = this.state.teacherLoggedIn;
    const student = this.state.studentLoggedIn;
    let display = <Login />;
    if (teacher) {
      display = <TeacherDashboard />;
     } else if (student){
      display = <StudentDashboard />;
    }
    return (
      <div className="App">
        {display}
      </div>

    );
  }
}

export default App;
