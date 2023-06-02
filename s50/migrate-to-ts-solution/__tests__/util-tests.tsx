import { hypotenuse } from "../util";

describe('testing hypotenuse', () => {
    test('simple test', () => {
        expect(hypotenuse(3, 4)).toBe(5);
    });
});