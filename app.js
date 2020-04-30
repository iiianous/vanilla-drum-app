const drumKit = (function() {
    const qs = (element, key) => {
        if (!key) return;
        return document.querySelector(`${element}[data-key="${key}"]`);
    }

    window.addEventListener('keydown', (e) => {
        const key = e.keyCode;
        const item = qs('div', key)
        const audio = qs('audio', key)

        if (!item) return;
        item.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    });

    window.addEventListener('keyup', (e) => {
        const key = e.keyCode;
        const item = qs('div', key);

        if (!item) return;
        item.classList.remove('active');
    })
})()