document.addEventListener('DOMContentLoaded', () => {
    // Анимация при загрузке страницы
    const timeline = gsap.timeline();
    timeline
        .from('.hero h1', { duration: 1, y: -50, opacity: 0, ease: 'power1.out' })
        .from('.hero p', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power1.out' })
        .from('.cta-button', { duration: 1, scale: 0, opacity: 0, delay: 0.5, ease: 'back.out(1.7)' })
        .from('.hero img', { duration: 1, scale: 0, opacity: 0, delay: 1.5, ease: 'power1.out' });

    // Анимация для features при прокрутке
    gsap.utils.toArray('.feature').forEach(feature => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
                onEnter: () => feature.classList.add('active'), // Подсветка активного элемента
                onLeave: () => feature.classList.remove('active'),
                onEnterBack: () => feature.classList.add('active'),
                onLeaveBack: () => feature.classList.remove('active')
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power1.out'
        });
    });

    // Анимация для изображений в features
    gsap.utils.toArray('.feature img').forEach(img => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            scale: 0.9,
            opacity: 0,
            ease: 'power1.out'
        });
    });

    // Получаем кнопку и добавляем обработчик клика
    const button = document.querySelector('.cta-button');

    if (button && button.href) {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            // Анимация при клике
            gsap.to(button, {
                scale: 0.9, // Уменьшаем кнопку при нажатии
                backgroundColor: '#ff4081', // Изменяем цвет кнопки при нажатии
                duration: 0.2,
                onComplete: () => {
                    gsap.to(button, { // Возвращаем цвет кнопки
                        backgroundColor: '',
                        duration: 0.2
                    });
                    // Переход по ссылке после завершения анимации
                    window.location.href = button.href;
                }
            });
        });

        // Добавляем анимацию при наведении на кнопку
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        // Анимация при фокусе на кнопке
        button.addEventListener('focus', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        button.addEventListener('blur', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power1.out'
            });
        });
    } else {
        console.warn('CTA button is missing or has no href attribute.');
    }
});



