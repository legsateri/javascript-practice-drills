////////////////// THE PROBLEM /////////////////

/* Complete the countingValleys function in the editor below. It must return an 
integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):
    n: the number of steps Gary takes
    s: a string describing his path */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function countingValleys(n, s) {
    const min = 2;
    const max = 1000000;
    let valleys = 0;
    let isInValley = false;

    s = (typeof s === "string") ? s.split('') : s;

    if (s.length >= min
        && s.length <= max
        && n === parseInt(n, 0)
        && n >= min
        && n <= max
        && n === s.length) {
        s.map(steps => ((steps === "U") ? 1 : -1))
            .reduce((prev, next) => {
                if (prev < 0 && !isInValley) {
                    isInValley = true;
                }
                if ((prev + next) === 0 && isInValley) {
                    valleys++;
                    isInValley = false;
                }
                return prev + next;
            });
    }

    return valleys;
}

////////////////////////////////////////////////



/////////////// BOILERPLATE CODE ///////////////

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}

///////////////////////////////////////////////