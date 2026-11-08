document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.getElementById('menu');
const navlinks = document.getElementById('navlinks');

menu.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('#navlinks a').forEach(a => {
    a.addEventListener('click', () => {
        navlinks.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
    });
});

// Journal filters
const filters = document.querySelectorAll('.filter');
filters.forEach(b => b.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('.jcard').forEach(c => {
        c.hidden = b.dataset.category !== 'all' && c.dataset.category !== b.dataset.category;
    });
}));

// Set minimum booking date to today
const dateInput = document.getElementById('date');

if (dateInput) {
    const today = new Date();
    const localDate = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0')
    ].join('-');

    dateInput.min = localDate;
}

// Handle booking form with FormSubmit.
// The recipient is read from the form's action in index.html, so there is only one email to maintain.
const bookingForm = document.querySelector('form[name="booking-enquiry"]');

if (bookingForm) {
    bookingForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitButton = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = 'Sending enquiry...';

        try {
            const formData = new FormData(bookingForm);
            const endpoint = bookingForm.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            const result = await response.json();
            console.log('FormSubmit response:', result);

            if (!response.ok || String(result.success) !== 'true') {
                throw new Error(result.message || 'Form submission failed');
            }

            // Redirect after successful submission
            window.location.href = 'thank-you.html';

        } catch (error) {
            console.error('Booking form error:', error);

            alert(
                'Sorry, your enquiry could not be sent. Please try again or contact us directly.'
            );

            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}


// Reviews carousel: auto-advance, manual controls, and mobile swipe.
(() => {
    const track = document.getElementById('reviews-track');
    const viewport = document.getElementById('reviews-viewport');
    const dotsContainer = document.getElementById('reviews-dots');
    const prev = document.getElementById('review-prev');
    const next = document.getElementById('review-next');
    if (!track || !viewport || !dotsContainer || !prev || !next) return;

    const cards = Array.from(track.querySelectorAll('.review-card'));
    if (!cards.length) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0;
    let timer;
    let touchStartX = null;

    const dots = cards.map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'review-dot';
        dot.setAttribute('aria-label', `Show review ${i + 1}`);
        dot.addEventListener('click', () => { show(i); restart(); });
        dotsContainer.appendChild(dot);
        return dot;
    });

    function show(i) {
        index = (i + cards.length) % cards.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, j) => {
            dot.classList.toggle('active', j === index);
            dot.setAttribute('aria-current', String(j === index));
        });
        cards.forEach((card, j) => {
            card.setAttribute('aria-hidden', String(j !== index));
        });
    }
    function stop() { clearInterval(timer); }
    function start() {
        if (!reduceMotion.matches && !document.hidden && cards.length > 1) {
            timer = setInterval(() => show(index + 1), 5000);
        }
    }
    function restart() { stop(); start(); }

    prev.addEventListener('click', () => { show(index - 1); restart(); });
    next.addEventListener('click', () => { show(index + 1); restart(); });
    viewport.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    viewport.addEventListener('touchend', e => {
        if (touchStartX === null) return;
        const delta = e.changedTouches[0].screenX - touchStartX;
        touchStartX = null;
        if (Math.abs(delta) > 45) { show(index + (delta < 0 ? 1 : -1)); restart(); }
    }, { passive: true });
    viewport.addEventListener('mouseenter', stop);
    viewport.addEventListener('mouseleave', restart);
    viewport.addEventListener('focusin', stop);
    viewport.addEventListener('focusout', restart);
    document.addEventListener('visibilitychange', restart);
    reduceMotion.addEventListener('change', restart);
    show(0);
    start();
})();
