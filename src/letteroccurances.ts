function countLetterOccurrences(inputString: string): void {
    const letterCountMap: Map<string, number> = new Map();

    // Remove non-alphabetic characters and convert the string to lowercase
    const cleanString = inputString.replace(/[^a-z]/gi, '').toLowerCase();

    for (const letter of cleanString) {
        if (letterCountMap.has(letter)) {
            letterCountMap.set(letter, letterCountMap.get(letter)! + 1);
        } else {
            letterCountMap.set(letter, 1);
        }
    }

    // Output the results
    for (const [letter, count] of letterCountMap.entries()) {
        console.log(`${letter} - ${count}`);
    }
}

const inputString = "Hellooo";
countLetterOccurrences(inputString);