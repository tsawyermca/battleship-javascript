const spaces = document.querySelectorAll('.boardSpace');
let battleshipSpace = Math.floor(Math.random() * 9);

spaces.forEach(boardSpace => {
    boardSpace.addEventListener('click', () => {
        const index = parseInt(boardSpace.getAttribute('data-index'));
        if (boardSpace.classList.contains('correct') || boardSpace.classList.contains('incorrect')) {
            return;
        }
        if (index === battleshipSpace) {
            boardSpace.classList.add('correct');
            alert('You sank the battleship');
            playAgainButton.classList.remove('hidden');
        } else {
            boardSpace.classList.add('incorrect');
        }
    });
});

const playAgainButton = document.getElementById('playAgain');

function resetGame() {
    spaces.forEach(space => {
        space.classList.remove('correct', 'incorrect');
        space.style.cursor = 'pointer';
    });
    battleshipSpace = Math.floor(Math.random() * 9);
    playAgainButton.classList.add('hidden');
}

playAgainButton.addEventListener('click', resetGame);