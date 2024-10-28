const selectAllCheckbox = document.getElementById("selectAll");

if (selectAllCheckbox) {
  selectAllCheckbox.addEventListener("change", () => {
    const isChecked = selectAllCheckbox.checked;
    const checkboxes = document.querySelectorAll(".deleteCheckbox");

    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });
}
