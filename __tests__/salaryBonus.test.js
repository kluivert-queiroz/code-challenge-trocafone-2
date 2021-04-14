const salaryBonus = require('../src/salaryBonus');
test("salaryBonus function", () => {
	expect(salaryBonus(500.00, 1230.30)).toBe(684.54);
	expect(salaryBonus(700.00, 0.00)).toBe(700.00);
	expect(salaryBonus(1700.00, 1230.50)).toBe(1884.58);
})