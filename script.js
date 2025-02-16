const expenses = [
  { id: 1, title: "Groceries", money: 150 },
  { id: 2, title: "Utilities", money: 80 },
  { id: 3, title: "Dining Out", money: 120 },
  { id: 4, title: "Transportation", money: 50 },
];

const expenseListContainer = document.querySelector("#expenseList");
const totalCostContainer = document.querySelector("#totalCost");
const filterCheckbox = document.querySelector("#filterCheckbox");

function renderExpenses(filterByAmount) {
  const filteredExpenses = filterByAmount
    ? expenses.filter((expense) => expense.money > 100)
    : expenses;

  let totalMoney = 0;

  expenseListContainer.innerHTML = filteredExpenses
    .map((expense) => {
      totalMoney += expense.money;
      return `
          <li>
            <strong>Expense:</strong> ${expense.title} <br>
            <strong>Amount:</strong> $${expense.money.toFixed(2)}
          </li>
          <hr>`;
    })
    .join("");

  totalCostContainer.textContent = totalMoney.toFixed(2);
}

// Initial render
renderExpenses(false);

// Add event listener for checkbox
filterCheckbox.addEventListener("change", function () {
  renderExpenses(filterCheckbox.checked);
});
