const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

document.getElementById('click-element').addEventListener('click', playClickSound);

function playClickSound() {
    var audio = document.getElementById('click-sound');
    audio.play();
}
