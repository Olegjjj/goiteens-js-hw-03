const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const email = "plaksinoleg53@gmail.com";
console.log(email.length);
console.log(email.includes("@"));

const firstPartOfWord = "My";
const secondPartOfWord = "name";
const thirdPartOfWord = "is";
const fullName = `${firstPartOfWord} ${secondPartOfWord} ${thirdPartOfWord} Viktor`
console.log(fullName);

const userName = "Oleg";
const payment = 300;
alert(`Дякуємо, ${userName} ! До сплати ${payment}`)

                                              





                                        //  Експериментування та перероблення 4 завдання //
            // Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt(). 
            // Створіть змінну paymentAlt з сумою до оплати. 
            // За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».
            // Створити скрипт який виводить спливаюче підтвердження за допомогою confirm().
            // Якщо користувач підтверджує дію, вивести повідомлення "Дякую за покупку!".
            // Якщо користувач відмовляється, вивести повідомлення "Покупка відмінена!".

const userNameAlt = prompt("Будь ласка введіть своє ім'я");
const paymentAlt = 500;
const thanksUserName = alert(`Дякуємо, ${userNameAlt} ! До сплати ${paymentAlt}`)
const confirmationUserName = confirm("Ви бажаєте підтвердити покупку?")
if (confirmationUserName === true) { alert("Дякую за покупку!");}
else { alert("Покупка відмінена!");}

