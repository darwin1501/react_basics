import { useState } from 'react';

function SelectionComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Select an Option:</h2>
      <select value={selectedOption} onChange={handleSelectionChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div>
          <p>You have selected: {selectedOption}</p>
      </div>
    </div>
  );
}

export default SelectionComponent;
