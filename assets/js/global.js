document.addEventListener("DOMContentLoaded", () => {
    const joinWaitlistButtons = document.querySelectorAll('.start-building-btn');

    joinWaitlistButtons.forEach((button) => {
        button.addEventListener('click', function () {
            gtag('event', 'button_click', {
                event_category: 'engagement',
                event_laFel: 'join_waitlist_button',
            });
        });
     })
});