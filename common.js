const board = document.querySelector('#board');
const container = document.querySelector('.container');
const images = [
    'https://a.d-cd.net/-yAAAgGmweA-1920.jpg',
    'https://i.imgflip.com/ws5e2.jpg',
    'https://avatars.mds.yandex.net/get-zen_doc/29317/pub_5b86659d96fe8d00a9b56692_5b866615c00b4400a91093ef/scale_1200',
];
const SQUARES_COUNTER = 400;
let activeSquaresCount = 0;
let imgCounter = 0;

for (let i = 0; i < SQUARES_COUNTER; i++) {

    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', () => {
        openBackgroundImage(square, container, images);
    });

}

function openBackgroundImage(square, container, images) {
    if (!square.className.includes('active')) {
        if (activeSquaresCount === SQUARES_COUNTER - 1) {
            closeAllSquares();
            setTimeout(() => {
                container.style.backgroundImage = `url("${images[imgCounter]}")`;
                imgCounter++;
                activeSquaresCount = 0;
            }, 0);
        } else {
            activeSquaresCount++;
            square.classList.add('active');
        }
    }
}

function closeAllSquares() {
    const squares  = document.querySelectorAll('.square');
    for (let el of squares) {
        el.classList.remove('active');
    }
    return;
}