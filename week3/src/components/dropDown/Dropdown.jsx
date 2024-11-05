import styled from "styled-components";

const Dropdown = ({ handleSelectLevel }) => {
  return (
    <DropdownMenu onChange={handleSelectLevel}>
      <DropdownItem value={1}>Level 1</DropdownItem>
      <DropdownItem value={2}>Level 2</DropdownItem>
      <DropdownItem value={3}>Level 3</DropdownItem>
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
