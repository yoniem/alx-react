// src/CourseList/CourseList.js
import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = () => (
  <table id="CourseList">
    <thead>
      <CourseListRow isHeader={true} textFirstCell="Available courses" />
      <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
    </thead>
    <tbody>
      <CourseListRow textFirstCell="ES6" textSecondCell="60" />
      <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
      <CourseListRow textFirstCell="React" textSecondCell="40" />
    </tbody>
  </table>
);

export default CourseList;
