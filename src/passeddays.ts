function daysPassedSince(date: Date): number {
    const currentDate = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    // Calculate the difference in milliseconds between the two dates
    const timeDiff = currentDate.getTime() - date.getTime();

    // Calculate the number of days, considering leap years
    const daysPassed = Math.floor(timeDiff / millisecondsPerDay);

    return daysPassed;
}

// Example usage:
const givenDate = new Date("1975-01-09");
const days = daysPassedSince(givenDate);
console.log(`Days passed since ${givenDate.toDateString()}: ${days} days`);