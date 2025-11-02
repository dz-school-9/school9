// =========================================================
// === 1. Логика Часов (сохранен ваш код и внесены исправления) ===
// =========================================================

// Расширяем Number.prototype для добавления ведущих нулей
Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

// Функция обновления времени
function updateClock() {
    var now = new Date();
    var sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours(),
        mo = now.getMonth(),
        dy = now.getDate(),
        yr = now.getFullYear();
    
    var months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    var tags = ["mon", "d", "y", "h", "m", "s"],
        corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
    
    // Используем .textContent для безопасного обновления
    for (var i = 0; i < tags.length; i++) {
        const element = document.getElementById(tags[i]);
        if (element) {
            element.textContent = corr[i]; 
        }
    }
}

// Инициализация часов
function initClock() {
    updateClock();
    // Интервал изменен на 1000 мс (1 секунда) для корректной работы
    window.setInterval(updateClock, 1000); 
}

// =========================================================
// === 2. Генерация DOM и Запуск ===
// =========================================================

// Шаблонная строка (Template Literal) для хранения всего HTML-кода футера
const footerHTML = `
    <div class="container container-footer">
        <div class="footer-address-social">
            <div class="footer-address">
                <address>
                    <ul class="list">
                        <li><a href="https://maps.app.goo.gl/gST5fDPq2s1Da5to8" target="_blank" rel="noopener nooferrer" class="link text-addres">Україна, Донецька обл., м. Торецьк, вул. Центральна, 61</a></li>
                        <li><a href="mailto:dz-school-9@ukr.net" class="link mail-tel-footer">dz-school-9@ukr.net</a></li>
                    </ul>
                </address>
            </div> 
            <div class="margin-footer">
                <h2 class="footer-add">Наші сторінки в соціальних мережах</h2>
                <ul class="list social-list-footer">
                    <li class="social-list-icons-footer"><a href="https://www.instagram.com/zzso_9official/?igsh=MWdwN3Y2dTh5OW1wMA%3D%3D" target="_blank" class="social-list-link-footer"><svg class="social-icon-size-footer"><use href="./images/icons.svg#icon-social-instagram"></use></svg></a>
                    </li>
                    <li class="social-list-icons-footer"><a href="https://www.facebook.com/people/%D0%97%D0%B0%D0%BA%D0%BB%D0%B0%D0%B4-%D0%9E%D1%81%D0%B2%D1%96%D1%82%D0%B8/pfbid02yitYxZrChjCuytakzG78BrofXpn263k9XJHfXAuM9khVfcA9uLYND2zMD7jXkCLml/" class="social-list-link-footer" target="_blank"><svg class="social-icon-size-footer"><use href="./images/icons.svg#icon-social-facebook"></use></svg></a></li>
                    <li class="social-list-icons-footer"><a href="https://www.youtube.com/@ЗЗСОІ-ІІІст.9" class="social-list-link-footer" target="_blank"><svg class="social-icon-size-footer"><use href="./images/icons.svg#icon-youtube"></use></svg></a></li>
                </ul>
            </div>
            <div class="clock">
                <div id="timedate">
                    <a id="mon"></a>
                    <a id="d"></a>,
                    <a id="y"></a><br>
                    <a id="h"></a> :
                    <a id="m"></a> :
                    <a id="s"></a>
                </div>
            </div>
        </div>
    </div>
`;

// Находим контейнер
const appFooter = document.getElementById('app-footer');

// Проверяем, существует ли контейнер, и вставляем содержимое
if (appFooter) {
    // Вставляем весь HTML-код футера
    appFooter.innerHTML = footerHTML;
    
    // Запускаем часы, так как элементы с ID уже в DOM
    initClock();
}