////////////////// THE PROBLEM /////////////////

/* Complete the function compareTriplets in the editor below. It must return an 
array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):
    a: an array of integers representing Alice's challenge rating
    b: an array of integers representing Bob's challenge rating */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function compareTriplets(a, b) {
    return (a || []).reduce((target, item, index) => {
        (item !== b[index]) && target[item > b[index] ? 0 : 1]++;

        return target;
    }, [0, 0]);
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

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

///////////////////////////////////////////////