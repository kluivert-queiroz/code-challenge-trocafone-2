const fuelSpent = require('../src/fuelSpent');

test("fuelSpent function", () => {
	expect(fuelSpent(10, 85)).toBe(71);
	expect(fuelSpent(2, 92)).toBe(16);
});