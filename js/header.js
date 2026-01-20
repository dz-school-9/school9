// =========================================================
// === 1. ФУНКЦІЯ АКТИВАЦІЇ МЕНЮ ===
// =========================================================

/**
 * Автоматично визначає поточний URL сторінки та встановлює 
 * клас 'active' для відповідного пункту в меню.
 */
function setActiveMenuItem() {
    // Отримуємо останню частину шляху (наприклад, 'about-school.html')
    // Або 'index.html', якщо знаходимося на кореневій сторінці (path === '/')
    const path = window.location.pathname;
    const currentUrl = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    // Знаходимо всі посилання в десктопному та мобільному меню
    const links = document.querySelectorAll('.main-menu a, .main-menu-mobile a');
    
    links.forEach(link => {
        // Отримуємо батьківський <li>
        const listItem = link.closest('li');

        // 1. Спочатку видаляємо клас 'active' з усіх елементів для чистоти
        if (listItem) {
            listItem.classList.remove('active');
        }

        // Отримуємо URL посилання в меню
        const menuUrl = link.getAttribute('href').substring(link.getAttribute('href').lastIndexOf('/') + 1);

        // 2. Порівнюємо URL
        if (menuUrl === currentUrl || (currentUrl === '' && menuUrl === 'index.html')) {
            
            // Активуємо сам пункт
            if (listItem) {
                listItem.classList.add('active');
            }

            // Якщо це елемент підменю, активуємо і його батьківський 'menu-children'
            const parentMenuChildren = link.closest('.menu-children');
            if (parentMenuChildren) {
                parentMenuChildren.classList.add('active');
            }
        }
    });
}


// =========================================================
// === 2. HTML ШАБЛОН HEADER ===
// =========================================================

const headerHTML = `	
    <div class="container header-main">
        <div class="header-logo-main">
            <img loading="lazy" src="./images/logo-opacity.png" width="118" height="98" alt="school's logo">
            <h2 class="header-logo-text">Допоможемо дітям<br>стати успішними<br> та щасливими</h2>
        </div>
        <div>
            <div class="header-mail-social">
                <ul class="list header-contact">
                    <li class="list-item-nav">
                        <a href="mailto:dz-school-9@ukr.net" class="link nav-list-link mail-tel-text">
                            <svg width="16" height="12" class="nav-icon">
                                <use href="./images/icons.svg#icon-email"></use>
                            </svg>
                            dz-school-9@ukr.net
                        </a>
                    </li>
                    <li class="header-social-padding">
                        <ul class="list header-social-icon">
                            <li class="header-social-list-icon">
                                <a href="https://www.instagram.com/zzso_9official/?igsh=MWdwN3Y2dTh5OW1wMA%3D%3D" target="_blank" class="social-list-link-header">
                                    <svg class="social-icon-size-header">
                                        <use href="./images/icons.svg#icon-social-instagram"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="header-social-list-icon">
                                <a href="https://www.facebook.com/people/%D0%97%D0%B0%D0%BA%D0%BB%D0%B0%D0%B4-%D0%9E%D1%81%D0%B2%D1%96%D1%82%D0%B8/pfbid02yitYxZrChjCuytakzG78BrofXpn263k9XJHfXAuM9khVfcA9uLYND2zMD7jXkCLml/" class="social-list-link-header" target="_blank">
                                    <svg class="social-icon-size-header">
                                        <use href="./images/icons.svg#icon-social-facebook"></use>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@ЗЗСОІ-ІІІст.9" class="social-list-link-header" target="_blank">
                                    <svg class="social-icon-size-header">
                                        <use href="./images/icons.svg#icon-youtube"></use>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="header-menu">
                <nav>
                    <ul class="main-menu">
                        <li class=""><a href="./index.html">Головна</a></li>
                        <li><a href="./about-school.html">Про заклад</a></li>
                        <li class=""><a href="./informationopenness.html">Прозорість та<br>інформаційна відкритість</a></li>
                        <li class=""><a href="./orders.html">Накази</a></li>
                        <li class="menu-children">
                            <a href="./students.html">Учням</a>
                            <ul>
                                <li><a href="./mine-safety.html">Безпечне середовище</a></li>
                                <li><a href="./student-rules.html">Правила здобувачів освіти</a></li>
                                <li><a href="./smoking-prevention.html">Профілактика тютюнопаління</a></li>
                            </ul>
                        </li>
                        <li class="menu-children">
                            <a href="#">Батькам</a>
                            <ul>
                                <li><a href="./parentsresource.html">Ресурси для батьків</a></li>
                                <li><a href="./parentsteachers.html">Поради педагогів батькам</a></li>
                                <li><a href="./parentsfirstclass.html">Поради для батьків<br>першокласників</a></li>
                            </ul>
                        </li>
                        <li class="menu-children">
                            <a href="#">Інноваційна<br>діяльність</a>
                            <ul>
                                <li><a href="./mbox.html">M-box</a></li>
                            </ul>
                        </li> 
                        <li class=""><a href="./distancelaerning.html">Дистанційне<br>навчання</a></li>
                        <li class="menu-children">
                            <a href="#">Новини<br>закладу</a>
                            <ul>
                                <li><a href="./2026-01-january.html">Січень-2026</a></li>
								<li><a href="./2025-12-december.html">Грудень-2025</a></li>
                                <li><a href="./2025-11-november.html">Листопад-2025</a></li>
                                <li><a href="./2025-10-october.html">Жовтень-2025</a></li>
                                <li><a href="./2025-09-september.html">Вересень-2025</a></li>
                                <li class="menu-children">
                                    <a href="#">2025 рік</a>
                                    <ul>
                                        <li><a href="./2025-08-august.html">Серпень-2025</a></li>
                                        <li><a href="./2025-07-july.html">Липень-2025</a></li>
                                        <li><a href="./2025-06-june.html">Червень-2025</a></li>
                                        <li><a href="./2025-05-may.html">Травень-2025</a></li>
                                        <li><a href="./2025-04-april.html">Квітень-2025</a></li>
                                        <li><a href="./2025-03-march.html">Березень-2025</a></li>
                                        <li><a href="./2025-02-february.html">Лютий-2025</a></li>
                                        <li><a href="./2025-01-january.html">Січень-2025</a></li>
                                    </ul>
                                </li>
                                <li class="menu-children">
                                    <a href="#">2024 рік</a>
                                    <ul>
                                        <li><a href="./2024-12-december.html">Грудень-2024</a></li>
                                        <li><a href="./2024-11-november.html">Листопад-2024</a></li>
                                        <li><a href="./2024-10-october.html">Жовтень-2024</a></li>
                                        <li><a href="./2024-09-september.html">Вересень-2024</a></li>
                                    </ul>
                                </li> 
                            </ul>
                        </li>
                        <li class="menu-children">
                            <a href="#">Екстернат</a>
                            <ul>
                                <li><a href="./acceptance-of-documents.html">Прийом документів</a></li>
                                <li><a href="./road-map.html">Дорожня карта</a></li>
                            </ul>
                        </li>
                        <li class="menu-children">
                            <a href="./psychology.html">Сторінка<br>психолога</a>
                            <ul>
                                <li><a href="./bulling.html">Протидія булінгу</a></li>
                                <li><a href="./ty-yak.html">«Ти як?»</a></li>
                                <li><a href="./mental-health.html">Студія ментального здоров'я</a></li>
                                <li><a href="./trust-box.html">Скринька довіри</a></li>
                            </ul>
                        </li>
                        <li class="menu-children">
                            <a href="./graduate-2024-2025.html">Випускнику -<br>2025-2026</a>
                            <ul>
                                <li><a href="./nmt-ready.html">Готуємось до НМТ</a></li>
                                <li><a href="./nmt-all-about.html">Все про НМТ</a></li>
                                <li><a href="./actually-information.html">Актуальна інформація</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="dropdown-menu">
                    <p class="nav-base-text">Меню</p>
                    <nav class="dropdown-navigation-list">
                        <div class="vertical-menu">
                            <ul class="list main-menu-mobile">
                                <li class=""><a href="./index.html">Головна</a></li>
                                <li><a href="./about-school.html">Про заклад</a></li> 
                                <li class=""><a href="./informationopenness.html" class="main-submenu-mobile2">Прозорість та<br>інформаційна відкритість</a></li>
                                <li class=""><a href="./orders.html">Накази</a></li>
                                <li class="menu-children">
                                    <a href="./students.html">Учням</a>
                                    <ul>
                                        <li><a href="./mine-safety.html">Безпечне середовище</a></li>
                                        <li><a href="./student-rules.html">Правила здобувачів освіти</a></li>
                                        <li><a href="./smoking-prevention.html">Профілактика тютюнопаління</a></li>
                                    </ul>
                                </li>
                                <li class="menu-children">
                                    <a href="#" class="main-submenu-mobile">Батькам</a>
                                    <ul class="list main-menu-mobile main-submenu-mobile">
                                        <li><a href="./parentsresource.html">Ресурси для батьків</a></li>
                                        <li><a href="./parentsteachers.html">Поради педагогів батькам</a></li>
                                        <li><a href="./parentsfirstclass.html">Поради для батьків<br>першокласників</a></li>
                                    </ul>
                                </li>
                                <li class="menu-children">
                                    <a href="#">Інноваційна діяльність</a>
                                    <ul class="list main-menu-mobile main-submenu-mobile">
                                        <li><a href="./mbox.html">M-box</a></li>
                                    </ul>
                                </li> 
                                <li class=""><a href="./distancelaerning.html">Дистанційне навчання</a></li>
                                <li class="menu-children">
                                    <a href="#">Новини закладу</a>
                                    <ul class="list main-menu-mobile main-submenu-mobile">
                                        <li><a href="./2026-01-january.html">Січень-2026</a></li>
										<li><a href="./2025-12-december.html">Грудень-2025</a></li>
                                        <li><a href="./2025-11-november.html">Листопад-2025</a></li>
                                        <li><a href="./2025-10-october.html">Жовтень-2025</a></li>
                                        <li><a href="./2025-09-september.html">Вересень-2025</a></li>
                                        <li><a href="./2025-08-august.html">Серпень-2025</a></li>
                                        <li><a href="./2025-07-july.html">Липень-2025</a></li>
                                        <li><a href="./2025-06-june.html">Червень-2025</a></li>
                                        <li><a href="./2025-05-may.html">Травень-2025</a></li>
                                        <li><a href="./2025-04-april.html">Квітень-2025</a></li>
                                        <li><a href="./2025-03-march.html">Березень-2025</a></li>
                                        <li><a href="./2025-02-february.html">Лютий-2025</a></li>
                                        <li><a href="./2025-01-january.html">Січень-2025</a></li>
                                        <li><a href="./2024-12-december.html">Грудень-2024</a></li>
                                        <li><a href="./2024-11-november.html">Листопад-2024</a></li>
                                        <li><a href="./2024-10-october.html">Жовтень-2024</a></li>
                                        <li><a href="./2024-09-september.html">Вересень-2024</a></li>
                                    </ul>
                                </li> 
                                <li class="menu-children">
                                    <a href="#">Екстернат</a>
                                    <ul>
                                        <li><a href="./acceptance-of-documents.html">Прийом документів</a></li>
                                        <li><a href="./road-map.html">Дорожня карта</a></li>
                                    </ul>
                                </li>
                                <li class="menu-children">
                                    <a href="./psychology.html">Сторінка психолога</a>
                                    <ul>
                                        <li><a href="./bulling.html">Протидія булінгу</a></li>
                                        <li><a href="./ty-yak.html">«Ти як?»</a></li>
                                        <li><a href="./mental-health.html">Студія ментального здоров'я</a></li>
                                        <li><a href="./trust-box.html">Скринька довіри</a></li>
                                    </ul>
                                </li>
                                <li class="menu-children">
                                    <a href="./graduate-2024-2025.html">Випускнику - 2025-2026</a>
                                    <ul>
                                        <li><a href="./nmt-ready.html">Готуємось до НМТ</a></li>
                                        <li><a href="./nmt-all-about.html">Все про НМТ</a></li>
                                        <li><a href="./actually-information.html">Актуальна інформація</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
`;

// =========================================================
// === 3. ЗАПУСК HEADER ===
// =========================================================

// Знаходимо контейнер для шапки
const appHeader = document.getElementById('app-header');

// Вставляємо HTML і запускаємо функцію активації
if (appHeader) {
    // Вставляємо весь HTML-код шапки
    appHeader.innerHTML = headerHTML;
    
    // Запускаємо функцію активації меню
    setActiveMenuItem(); 

}

