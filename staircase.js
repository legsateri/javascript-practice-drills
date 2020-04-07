////////////////// THE PROBLEM /////////////////

/* Complete the staircase function in the editor below. It should print a 
staircase as described above.

staircase has the following parameter(s):
    n: an integer */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function staircase(n) {
    if (n > 0 && n <= 100 && typeof n === "number" && n === parseInt(n, 0)) {
        for (let r = 1; r <= n; r++) {
            let blanks = [...[], ...Array(n - r)].map(i => ' ');
            let hashes = [...[], ...Array(n - (n - r))].map(i => '#');
            console.log([
                ...blanks,
                ...hashes
            ].join(''));
        }
    }
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

    staircase(n);
}

///////////////////////////////////////////////