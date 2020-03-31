////////////////// THE PROBLEM /////////////////

/* Complete the simpleArraySum function in the editor below. It must return the 
sum of the array elements as an integer.

simpleArraySum has the following parameter(s):
    ar: an array of integers */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function simpleArraySum(ar) {
    return ar.reduce((acc, current) => acc += current, 0)
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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = simpleArraySum(ar);

    ws.write(result + "\n");

    ws.end();
}

///////////////////////////////////////////////