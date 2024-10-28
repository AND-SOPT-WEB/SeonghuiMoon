const openModal = () => {
  modal.style.display = "block";
  modalBackground.style.display = "block";
};

export const closeModal = () => {
  modal.style.display = "none";
  modalBackground.style.display = "none";
};

const modal = document.querySelector(".addModal");
const modalBackground = document.querySelector(".modalBackground");
const addButton = document.querySelector(".addBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");

addButton.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);
