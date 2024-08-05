import { setCourses } from './courseActionCreators';

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  };
};
