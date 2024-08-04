function solve(n) {
    let sum = 0;
    let counter = 1;
    let isFinish = false;
    for (let i = 1; i < Number.MAX_SAFE_INTEGER; i += 2) {
        sum += i;
        console.log(i);
        if (counter === n) {
            isFinish = true;
            break;
        }
        counter++;
    }
    console.log(`Sum: ${sum}`);
}
solve(5);