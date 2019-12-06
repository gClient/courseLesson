let howMoney, dayBirthday;

function start() {
    howMoney = +prompt('Ваш бюджет на месяц?');
    dayBirthday = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(howMoney) || howMoney == "" || howMoney == null) {
        howMoney = +prompt('Ваш бюджет на месяц?');
    }
}

start();

const appData = {
    money: howMoney,
    timeData: dayBirthday,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце');
        let b = prompt('Во сколько обойдется');

        if ((typeof(a) === 'string') && (typeof(a) != null) && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.money / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function chooseOptExpenses() {
    let a1 = prompt("Статья необязательных расходов");
    let a2 = prompt("Статья необязательных расходов");
    let a3 = prompt("Статья необязательных расходов");
    appData.optionalExpenses[1] = a1;
    appData.optionalExpenses[2] = a2;
    appData.optionalExpenses[3] = a3;
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();