import { getMemberData } from "./dataUtils.js";
import { renderTable } from "./renderTable.js";

const filterMembers = () => {
  const nameFilter = document.querySelector(".filterName").value.trim();
  const englishNameFilter = document
    .querySelector(".filterEngName")
    .value.trim();
  const githubFilter = document.querySelector(".filterGit").value.trim();
  const genderFilter = document.querySelector(".filterGender").value;
  const roleFilter = document.querySelector(".filterRole").value;
  const firstWeekGroupFilter = document.querySelector(".filterWeek1").value;
  const secondWeekGroupFilter = document.querySelector(".filterWeek2").value;

  const memberData = getMemberData();

  const filteredMembers = memberData.filter((member) => {
    return (
      (nameFilter === "" || member.name.includes(nameFilter)) &&
      (englishNameFilter === "" ||
        member.englishName.includes(englishNameFilter)) &&
      (githubFilter === "" || member.github.includes(githubFilter)) &&
      (genderFilter === "성별 선택" || member.gender === genderFilter) &&
      (roleFilter === "YB / OB 선택" || member.role === roleFilter) &&
      (firstWeekGroupFilter === "" ||
        member.firstWeekGroup == firstWeekGroupFilter) &&
      (secondWeekGroupFilter === "" ||
        member.secondWeekGroup == secondWeekGroupFilter)
    );
  });

  renderTable(filteredMembers);
};

const resetFilters = () => {
  document.querySelector(".filterName").value = "";
  document.querySelector(".filterEngName").value = "";
  document.querySelector(".filterGit").value = "";
  document.querySelector(".filterGender").value = "성별 선택";
  document.querySelector(".filterRole").value = "YB / OB 선택";
  document.querySelector(".filterWeek1").value = "";
  document.querySelector(".filterWeek2").value = "";

  renderTable();
};

const searchButton = document.querySelector(".searchBtn");
const resetButton = document.querySelector(".resetBtn");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  filterMembers();
});

resetButton.addEventListener("click", resetFilters);
