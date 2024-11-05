import styled from "styled-components";

const Dropdown = ({ handleSelectLevel }) => {
  const handleChange = (event) => {
    const selectedValue = Number(event.target.value);
    handleSelectLevel(selectedValue);
  };

  return (
    <DropdownMenu onChange={handleChange}>
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
