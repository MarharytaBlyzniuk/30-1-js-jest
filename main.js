console.log('#11. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */



function isValidEmail(email) {
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

/*  ^(https?:\/\/)?- Мhttp://или `hthttps://в начале
([\w-]+\.)+- Вместе сwww.тотexample..
[\w-]{2,}- Мcom, этоnet, и
(:\d+)?- Вместе с
(\/[\w\-\.~!$&'()*+,;=:@%]*)*- Вместе с
$/i- Э  */
function isValidUrl(url) {
    const emailRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(:\d+)?(\/[\w\-\.~!$&'()*+,;=:@%]*)*$/i;

    /*
     const emailRegex = /^(https?:\/\/)?([^\s$.?#].[^\s]*)$/i;
    Регулярное выражение ^(https?:\/\/)?([^\s$.?#].[^\s]*)$проверяет:
Необязательный http://префикс https://( ^(https?:\/\/)?).
За которыми следуют любые символы, кроме пробелов, $, ., ?или #( [^\s$.?#].[^\s]*).
Он соответствует структуре URL-адреса и допускает варианты с ним www.или без него.*/


    return emailRegex.test(url);
}
/*
console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url')) //     */       // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl }
