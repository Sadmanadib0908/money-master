

document.getElementById('submit-btn').addEventListener('click', function () {
    const incomeAmount = document.getElementById('income-amount')
    const incomeAmountFloat = parseFloat(incomeAmount.value)

    const foodAmount = document.getElementById('food-amount')
    const foodAmountFloat = parseFloat(foodAmount.value)

    const rentAmount = document.getElementById('rent-amount')
    const rentAmountFloat = parseFloat(rentAmount.value)

    const clothesAmount = document.getElementById('clothes-amount')
    const clothesAmountFloat = parseFloat(clothesAmount.value)

    const totalExpense = (foodAmountFloat) + (rentAmountFloat) + (clothesAmountFloat)
    const newBalance = incomeAmountFloat - totalExpense

    if ((foodAmountFloat || rentAmountFloat || clothesAmountFloat) > incomeAmountFloat) {
        alert('You do not have enough income')
    }
    else if (incomeAmountFloat <= 0) {
        alert('Please give the income amount')
    }
    else if (isNaN(incomeAmountFloat) || isNaN(foodAmountFloat) || isNaN(rentAmountFloat) || isNaN(clothesAmountFloat)) {
        alert('every section must be filled!')
    }
    else if ((foodAmountFloat < 0) || (rentAmountFloat < 0) || (clothesAmountFloat < 0)){
        alert('give the amount in positive')
    }
    else if (newBalance < 0){
        alert('Your Expense is more than your income!!')
    }
    else {
        const expenseAmount = document.getElementById('expense-amount')
        const expenseAmountFloat = parseFloat(expenseAmount.innerText)

        const balanceAmount = document.getElementById('balance-amount')
        const balanceAmountFloat = parseFloat(balanceAmount.innerText)

        const totalExpense = (foodAmountFloat) + (rentAmountFloat) + (clothesAmountFloat)
        const newBalance = incomeAmountFloat - totalExpense

        expenseAmount.innerText = totalExpense
        balanceAmount.innerText = newBalance
    }

    // incomeAmount.value = ''
    // foodAmount.value = ''
    // rentAmount.value = ''
    // clothesAmount.value = ''





})

document.getElementById('refresh-btn').addEventListener('click', function () {
    const expenseAmount = document.getElementById('expense-amount')
    const expenseAmountFloat = parseFloat(expenseAmount.innerText)

    const balanceAmount = document.getElementById('balance-amount')
    const balanceAmountFloat = parseFloat(balanceAmount.innerText)

    expenseAmount.innerText = 0;
    balanceAmount.innerText = 0;

    const incomeAmount = document.getElementById('income-amount')
    const incomeAmountFloat = parseFloat(incomeAmount.value)

    const foodAmount = document.getElementById('food-amount')
    const foodAmountFloat = parseFloat(foodAmount.value)

    const rentAmount = document.getElementById('rent-amount')
    const rentAmountFloat = parseFloat(rentAmount.value)

    const clothesAmount = document.getElementById('clothes-amount')
    const clothesAmountFloat = parseFloat(clothesAmount.value)

    incomeAmount.value = ''
    foodAmount.value = ''
    rentAmount.value = ''
    clothesAmount.value = ''
})