document.querySelector(".budget-btn").onclick = () => {
  document.querySelector(".detail-2 article span").innerHTML =
    document.querySelector(".detail-1 article input").value;
};

document.querySelector(".expense-btn").onclick = () => {
  document.querySelector(".detail-2 article table td").innerHTML =
    document.querySelector(".detail-1 .part-2 input").value;
};
