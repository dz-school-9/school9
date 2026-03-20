function createSpringFlowers() {
    const container = document.querySelector('.spring-holyday');
    if (!container) return;

    // 1. Налаштування контейнера та шарів
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    
    const content = container.querySelector('.container');
    if (content) {
        content.style.position = 'relative';
        content.style.zIndex = '2'; 
    }

    const flowerEmojis = ['🌸', '🏵️', '🌻', '🌼', '🌷'];

    // 2. Додаємо стилі анімації
    if (!document.getElementById('spring-flower-style')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'spring-flower-style';
        styleSheet.innerText = `
            @keyframes flowerFade {
                0% { opacity: 0; transform: scale(0.2) rotate(-15deg); }
                20% { opacity: 0.8; transform: scale(1) rotate(0deg); }
                80% { opacity: 0.8; transform: scale(1) rotate(0deg); }
                100% { opacity: 0; transform: scale(0.5) rotate(15deg); }
            }
            .emoji-flower {
                position: absolute;
                user-select: none;
                pointer-events: none;
                z-index: 1;
                animation: flowerFade ease-in-out forwards;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // 3. Функція створення однієї квітки
    function addOneFlower() {
        const flower = document.createElement('div');
        flower.className = 'emoji-flower';
        flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

        const size = Math.random() * 15 + 25; // Розмір 25-40px
        const left = Math.random() * 90 + 5 + '%';
        const top = Math.random() * 75 + 10 + '%';
        const duration = Math.random() * 2 + 6 + 's'; // Живе 6-8 секунд

        flower.style.fontSize = size + 'px';
        flower.style.left = left;
        flower.style.top = top;
        flower.style.animationDuration = duration;

        container.appendChild(flower);

        // Видаляємо квітку після завершення її анімації
        setTimeout(() => {
            flower.remove();
        }, parseFloat(duration) * 1000);
    }

    // 4. ЛОГІКА "ПІДТРИМКИ 9 КВІТІВ"
    // Запускаємо перевірку кожну секунду
    setInterval(() => {
        const currentFlowers = container.querySelectorAll('.emoji-flower').length;
        
        // Якщо квітів менше 9 — додаємо нову
        if (currentFlowers < 15) {
            addOneFlower();
        }
    }, 1000); // Перевірка щосекунди
}

// Запуск
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSpringFlowers);
} else {
    createSpringFlowers();
}