//# server typescript program util for schedule * * * * * first run at 2100-01-01 00:00

export const myAddFunction = function (p1, p2) {
    return p1 + p2;
}

/**
 * Calculate the hypotenuse of a right triangle using Pythagoras' theorem.
 * 
 * @param a The length of one leg of the triangle.
 * @param b The length of the other leg of the triangle.
 * @returns The length of the hypotenuse.
 */
export function hypotenuse(a: number, b: number): number {
    return Math.sqrt(a * a + b * b);
}