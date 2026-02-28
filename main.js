document.addEventListener('mousemove', e => {
    const profileCard = document.querySelector('.profile-card');
    const { clientX: x, clientY: y } = e;
    const { left, top, width, height } = profileCard.getBoundingClientRect();

    const rotateX = (y - (top + height / 2)) / 20;
    const rotateY = -(x - (left + width / 2)) / 20;

    profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});