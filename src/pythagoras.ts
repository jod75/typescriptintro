function calculateHypotenuse(adjacent: number, opposite: number): number {
    // Using the Pythagorean theorem: c^2 = a^2 + b^2
    const hypotenuse = Math.sqrt(adjacent ** 2 + opposite ** 2);
    return hypotenuse;
}

const adjacentSide = 3;
const oppositeSide = 4;
const hypotenuseLength = calculateHypotenuse(adjacentSide, oppositeSide);
console.log(`Hypotenuse length: ${hypotenuseLength}`);
