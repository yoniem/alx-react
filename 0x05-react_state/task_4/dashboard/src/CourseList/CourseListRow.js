import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const rowStyle = isChecked ? { backgroundColor: '#e6e4e4' } : {};

  return (
    <tr style={rowStyle}>
      <td>
        {!isHeader && <input type="checkbox" onChange={handleCheck} />}
        {textFirstCell}
      </td>
      {textSecondCell && <td>{textSecondCell}</td>}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;
