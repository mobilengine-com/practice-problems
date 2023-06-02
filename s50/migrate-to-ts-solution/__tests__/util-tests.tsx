import { hypotenuse } from "../solution/util";

describe('testing hypotenuse', () => {
    test('simple test', () => {
        expect(hypotenuse(3, 4)).toBe(5);
    });
});