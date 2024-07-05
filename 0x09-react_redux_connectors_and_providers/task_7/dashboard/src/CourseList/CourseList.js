// CourseList.js

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCourse, unselectCourse } from '../actions/courseActionCreators';

class CourseList extends React.Component {
  handleSelectCourse = (id) => {
    this.props.selectCourse(id);
  };

  handleUnselectCourse = (id) => {
    this.props.unselectCourse(id);
  };

  render() {
    const { courses } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Credit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.credit}</td>
              <td>
                <button onClick={() => this.handleSelectCourse(course.id)}>Select</button>
                <button onClick={() => this.handleUnselectCourse(course.id)}>Unselect</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      credit: PropTypes.number,
    })
  ).isRequired,
  selectCourse: PropTypes.func.isRequired,
  unselectCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = {
  selectCourse,
  unselectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
