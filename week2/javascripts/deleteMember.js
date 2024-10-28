import { getMemberData, setMemberData } from "./dataUtils.js";
import { renderTable } from "./renderTable.js";

const deleteSelectedRows = () => {
  let memberData = getMemberData();

  const checkboxes = document.querySelectorAll(".deleteCheckbox:checked");
  const idsToDelete = Array.from(checkboxes).map((checkbox) => {
    const row = checkbox.closest("tr");
    return parseInt(row.getAttribute("memberId"), 10);
  });

  memberData = memberData.filter((member) => !idsToDelete.includes(member.id));
  localStorage.setItem("membersData", JSON.stringify(memberData));

  setMemberData(memberData);
  renderTable();
};

const deleteButton = document.querySelector(".deleteBtn");
deleteButton.addEventListener("click", deleteSelectedRows);
