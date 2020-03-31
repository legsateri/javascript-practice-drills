////////////////// THE PROBLEM /////////////////

/* Complete the sockMerchant function in the editor below. It must return an integer 
representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):
    n: the number of socks in the pile
    ar: the colors of each sock */

////////////////////////////////////////////////



/////////////////// SOLUTION ///////////////////

function sockMerchant(n, ar) {
    const colors = {}
    let pairs = 0;

    for (const color of ar)
        if (colors[color]) {
            colors[color] = 0;
            pairs += 1;
        } else {
            colors[color] = 1;
        }

    return pairs;
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

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}

///////////////////////////////////////////////