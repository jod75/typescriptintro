function displayNumbersWithInterval(start: number, end: number, interval: number): void {
    if (start > end || interval <= 0) {
        console.log("Invalid input. Please ensure that start is less than or equal to end and interval is greater than 0.");
        return;
    }

    for (let number = start; number <= end; number += interval) {
        console.log(number);
    }
}

const startValue = 0;
const endValue = 10;
const displayInterval = 3;
displayNumbersWithInterval(startValue, endValue, displayInterval);
