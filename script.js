document.getElementById('calculate-btn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const totalInterest = (monthlyPayment * numberOfPayments) - loanAmount;
    const totalRepayment = loanAmount + totalInterest;
    const monthlyInterestPercentage = (totalInterest / numberOfPayments / loanAmount) * 100;

    document.getElementById('monthlyPayment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('totalInterest').textContent = totalInterest.toFixed(2);
    document.getElementById('totalRepayment').textContent = totalRepayment.toFixed(2);
    document.getElementById('monthlyInterestRate').textContent = monthlyInterestPercentage.toFixed(4);
});
