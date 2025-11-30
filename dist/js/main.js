/* ВИМОГА: обробка JavaScript (мініфікація) */

(function() {
    // Проста функція для перевірки роботи мініфікатора
    function showWelcomeMessage(name, isSuccess) {
        if (isSuccess) {
            console.log("Успіх! Gulp мініфікував цей скрипт. Ласкаво просимо, " + name + "!");
        } else {
            console.error("Помилка!");
        }
    }

    // Виклик функції
    showWelcomeMessage("Розробник", true);

    // Перевірка роботи BrowserSync
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('.main-header');
        if (header) {
            header.style.textAlign = 'center';
        }
    });

})();