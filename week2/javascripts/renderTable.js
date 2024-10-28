import { getMemberData } from "./dataUtils.js";

export const renderTable = (data = getMemberData()) => {
  const tableBody = document.querySelector(".tableBody");
  tableBody.innerHTML = "";

  data.forEach((member) => {
    const row = document.createElement("tr");
    row.classList.add("bodyRow");
    row.setAttribute("memberId", member.id);
    row.innerHTML = `
      <td class="bodyCell"><input type="checkbox" class="deleteCheckbox" /></td>
      <td class="bodyCell">${member.name}</td>
      <td class="bodyCell">${member.englishName}</td>
      <td class="bodyCell">
        <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>
      </td>
      <td class="bodyCell">${member.gender === "male" ? "남자" : "여자"}</td>
      <td class="bodyCell">${member.role}</td>
      <td class="bodyCell">${member.firstWeekGroup}</td>
      <td class="bodyCell">${member.secondWeekGroup}</td>
    `;
    tableBody.appendChild(row);
  });
};

document.addEventListener("DOMContentLoaded", () => renderTable());
