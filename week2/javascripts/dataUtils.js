export const getMemberData = () => {
  return JSON.parse(localStorage.getItem("membersData")) || [];
};

export const setMemberData = (data) => {
  localStorage.setItem("membersData", JSON.stringify(data));
};
