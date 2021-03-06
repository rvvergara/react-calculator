import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { handleClick } = props;
  const firstrowChars = ['AC', '+/-', '%', '/'];
  const secondRowChars = [7, 8, 9, 'X'];
  const thirdRowChars = [4, 5, 6, '-'];
  const fourthRowChars = [1, 2, 3, '+'];
  const fifthRowChars = [0, '.', '='];
  const rows = [firstrowChars, secondRowChars, thirdRowChars, fourthRowChars, fifthRowChars];

  return (
    <div id="button-panel">
      {rows.map(row => (
        <div className="row" key={row}>
          {row.map(char => (
            <Button
              key={char}
              name={String(char)}
              color={['+', '-', 'X', '/', '='].includes(char)}
              wide={char === 0}
              handleClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
