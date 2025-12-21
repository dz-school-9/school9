// ВАРИАНТ № 2
function createSnow() {
    const container = document.querySelector('.snow-container');
    const snowflakeCount = 60; // Можно чуть больше, так как они медленные

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Случайные размеры
        const size = Math.random() * 4 + 2 + 'px';
        const left = Math.random() * 100 + '%';
        
        // --- НАСТРОЙКИ СКОРОСТИ ---
        // Падение: от 7 до 15 секунд (медленно)
        const fallDuration = Math.random() * 8 + 7 + 's'; 
        // Покачивание: от 2 до 4 секунд
        const swayDuration = Math.random() * 2 + 2 + 's';
        // Задержка начала: чтобы снег не пошел весь сразу
        const delay = Math.random() * 10 + 's';

        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.left = left;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;

        // Применяем сразу две анимации: падение и покачивание
        snowflake.style.animation = `
            fall ${fallDuration} linear infinite ${delay},
            sway ${swayDuration} ease-in-out infinite alternate
        `;

        container.appendChild(snowflake);
    }
}

createSnow();



// ВАРИАНТ № 1

// function createSnow() {
//     const container = document.querySelector('.snow-container');
//     const snowflakeCount = 50; // Количество снежинок

//     for (let i = 0; i < snowflakeCount; i++) {
//         const snowflake = document.createElement('div');
//         snowflake.className = 'snowflake';
        
//         // Случайные параметры для каждой снежинки
//         const size = Math.random() * 5 + 2 + 'px'; // Размер от 2 до 7 пикселей
//         const left = Math.random() * 100 + '%'; // Позиция по горизонтали
//         const duration = Math.random() * 3 + 2 + 's'; // Скорость падения (2-5 сек)
//         const opacity = Math.random();

//         snowflake.style.width = size;
//         snowflake.style.height = size;
//         snowflake.style.left = left;
//         snowflake.style.animation = `fall ${duration} linear infinite`;
//         snowflake.style.opacity = opacity;
//         snowflake.style.animationDelay = Math.random() * 5 + 's';

//         container.appendChild(snowflake);
//     }
// }

// // Запускаем функцию после загрузки страницы
// createSnow();