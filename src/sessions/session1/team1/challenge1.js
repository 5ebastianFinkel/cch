// Challenge Number 1
//
// Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 9ˆ2 is 81 and 1ˆ2 is 1.

// 34 = 3^2 4^2  = 916
//
// Note: The function accepts an integer and returns an integer
//
// noinspection DuplicatedCode

function squareDigits(num) {
    let result = num.toString()
        .split('')
        .map(value => Number(value)**2)
        .join('')

    return Number(result)
}

// in-source test suites
if (import.meta.vitest) {
    const {it, expect} = import.meta.vitest

    it("squareDigits(0) should equal 0", () => {
        expect(squareDigits(0)).toBe(0);
    });

    it("squareDigits(2) should equal 4", () => {
        expect(squareDigits(2)).toBe(4);
    })

    it("squareDigits(23) should equal 49", () => {
        expect(squareDigits(23)).toBe(49);
    })

    it("squareDigits(3212) should equal 9414", () => {
        expect(squareDigits(3212)).toBe(9414);
    })

    it("squareDigits(2112) should equal 4114", () => {
        expect(squareDigits(2112)).toBe(4114);
    });

}
