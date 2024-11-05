import { useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [selectedLevel, setSelectedLevel] = useState("Level 1");

  const handleSelect = (level) => {
    setSelectedLevel(level);
  };

  return (
    <DropdownMenu>
      <DropdownItem onClick={() => handleSelect("Level 1")}>
        Level 1
      </DropdownItem>
      <DropdownItem onClick={() => handleSelect("Level 2")}>
        Level 2
      </DropdownItem>
      <DropdownItem onClick={() => handleSelect("Level 3")}>
        Level 3
      </DropdownItem>
    </DropdownMenu>
  );
};

const DropdownMenu = styled.select`
  width: 10rem;
  border-radius: 10px;
  padding: 1rem;
`;

const DropdownItem = styled.option``;

export default Dropdown;
