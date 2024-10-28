import { renderTable } from "./renderTable.js";
import { closeModal } from "./modal.js";
import { getMemberData, setMemberData } from "./dataUtils.js";

const checkEmpty = (fields) => {
  return fields.some((field) => field.trim() === "");
};

const addMember = () => {
  const name = document.querySelector(".modalName").value;
  const englishName = document.querySelector(".modalEngName").value;
  const github = document.querySelector(".modalGit").value;
  const gender = document.querySelector(".modalGender").value;
  const role = document.querySelector(".modalRole").value;
  const firstWeekGroup = document.querySelector(".modalWeek1").value;
  const secondWeekGroup = document.querySelector(".modalWeek2").value;

  const fields = [
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  ];

  if (checkEmpty(fields)) {
    alert("모든 항목을 입력해 주세요..");
    return;
  }

  const newMember = {
    id: Date.now(),
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup: parseInt(firstWeekGroup, 10),
    secondWeekGroup: parseInt(secondWeekGroup, 10),
  };

  const memberData = getMemberData();
  memberData.push(newMember);
  setMemberData(memberData);

  renderTable();
  closeModal();
};

const submitButton = document.querySelector(".modalSubmitBtn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  addMember();
});
