let howMoney = prompt('Ваш бюджет на месяц?');
let dayBirthday = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
    money: howMoney,
    timeData: dayBirthday,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let first = prompt('Введите обязательную статью расходов в этом месяце');
let second = prompt('Во сколько обойдется');
appData.expenses.first = second;
let a = appData.money / 30;
alert(a);