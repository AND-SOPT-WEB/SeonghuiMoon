const modal = document.querySelector(".addModal");
const modalBackground = document.querySelector(".modalBackground");

const openModal = () => {
  modal.style.display = "block";
  modalBackground.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  modalBackground.style.display = "none";
};

const addButton = document.querySelector(".addBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");

addButton.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);
