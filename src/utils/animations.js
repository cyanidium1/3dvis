export function observeIntersection() {
    if (typeof window !== 'undefined') {
        const square = document.querySelector('.square');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                    return;
                }

                if (entry.isIntersecting) {
                    entry.target.classList.add('square-animation');
                }
            });
        });

        observer.observe(square);
    }
}
