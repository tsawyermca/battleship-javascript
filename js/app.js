const spaces = document.querySelectorAll('.boardSpace');
const battleshipSpace = Math.floor(Math.random() * 9);

spaces.forEach(boardSpace => {
    boardSpace.addEventListener('click', () => {
        const index = parseInt(boardSpace.getAttribute('data-index'));
        if (boardSpace.classList.contains('correct') || boardSpace.classList.contains('incorrect')) {
            return;
        }
        if (index === battleshipSpace) {
            boardSpace.classList.add('correct');
            alert('You sank the battleship');
        } else {
            boardSpace.classList.add('incorrect');
        }
    });
});