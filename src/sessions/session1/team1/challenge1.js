// Challenge Number 1
//
// Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 9ˆ2 is 81 and 1ˆ2 is 1.
//
// Note: The function accepts an integer and returns an integer
//
// noinspection DuplicatedCode

function squareDigits(num) {
    return 0;
}

// in-source test suites
if (import.meta.vitest) {
    const {it, expect} = import.meta.vitest

        it("squareDigits(3212) should equal 9414", () => {
        expect(squareDigits(3212)).toBe(9414);
    })

    it("squareDigits(2112) should equal 4114", () => {
        expect(squareDigits(2112)).toBe(4114);
    });

    it("squareDigits(0) should equal 0", () => {
        expect(squareDigits(0)).toBe(0);
    });

}
