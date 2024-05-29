// task_3/dashboard/src/App/App.js

import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BodySectionWithMarginBottom title="Course list">
        <CourseList />
      </BodySectionWithMarginBottom>
      <BodySectionWithMarginBottom title="Log in to continue">
        <Login />
      </BodySectionWithMarginBottom>
      <BodySection title="News from the School">
        <p>Some random text here...</p>
      </BodySection>
    </div>
  );
};

export default App;
