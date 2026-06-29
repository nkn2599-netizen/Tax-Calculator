// index.js

function calculateTax(income) {
    const taxRate = 0.15; // 15% tax rate
    if (income < 0) return 0;
    return income * taxRate;
}

// Simple test/usage
const annualIncome = 75000;
const taxLiability = calculateTax(annualIncome);

console.log(`Annual Income: $${annualIncome}`);
console.log(`Estimated Tax Liability: $${taxLiability.toFixed(2)}`);

module.exports = { calculateTax };
