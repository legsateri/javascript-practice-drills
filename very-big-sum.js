////////////////// THE PROBLEM /////////////////

/* Complete the aVeryBigSum function in the editor below. It must return the sum 
of all array elements. 

aVeryBigSum has the following parameter(s):
    ar: an array of integers */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function aVeryBigSum(ar) {
    let totalSum = 0;
    for (let i = 0; i < ar.length; i++) {
        totalSum += ar[i];
    }
    return totalSum;
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

function aVeryBigSum(ar) {
    let totalSum = 0;
    for (let i = 0; i < ar.length; i++) {
        totalSum += ar[i];
    }
    return totalSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(ar);

    ws.write(result + "\n");

    ws.end();
}

///////////////////////////////////////////////