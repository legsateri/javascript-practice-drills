////////////////// THE PROBLEM /////////////////

/* Complete the plusMinus function in the editor below. It should print out 
the ratio of positive, negative and zero items in the array, each on a separate 
line rounded to six decimals.

plusMinus has the following parameter(s):
    arr: an array of integers */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    const len = arr.length || 0;

    if (len > 0 && len <= 100) {
        arr.map((elem, key) => {
            if (elem > 0) {
                positives++;
            } else if (elem < 0) {
                negatives++;
            } else {
                zeros++;
            }

            return elem;
        });
    }

    console.log(positives / len);
    console.log(negatives / len);
    console.log(zeros / len);
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
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

///////////////////////////////////////////////