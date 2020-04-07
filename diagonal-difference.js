////////////////// THE PROBLEM /////////////////

/* Complete the diagonalDifference function in the editor below. It must return 
an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:
    arr: an array of integers */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function diagonalDifference(arr) {
    let { first, second } = (arr || []).reduce((target, item, index) => {
        target['first'] += arr[index][index];
        target['second'] += arr[index][arr.length - index - 1];

        return target;
    }, { first: 0, second: 0 });

    return Math.abs(first - second);
}

////////////////////////////////////////////////



/////////////// BOILERPLATE CODE ///////////////

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

///////////////////////////////////////////////