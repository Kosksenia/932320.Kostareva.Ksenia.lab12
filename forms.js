// Form handling and real-time calculations
function calculateRealTime() {
    const form = document.getElementById('calcForm');
    const first = parseInt(form.firstNumber.value) || 0;
    const second = parseInt(form.secondNumber.value) || 0;
    const operation = form.operation.value;

    let result;
    let error = null;

    try {
        switch(operation) {
            case '+':
                result = first + second;
                break;
            case '-':
                result = first - second;
                break;
            case '*':
                result = first * second;
                break;
            case '/':
                if (second === 0) throw new Error('Division by zero');
                result = first / second;
                break;
            default:
                throw new Error('Invalid operation');
        }

        document.getElementById('realTimeResult').innerHTML = 
            `<strong>${first} ${operation} ${second} = ${result}</strong>`;
        document.getElementById('realTimeResult').className = 'text-success';

    } catch (e) {
        document.getElementById('realTimeResult').innerHTML = 
            `<strong>Error: ${e.message}</strong>`;
        document.getElementById('realTimeResult').className = 'text-danger';
    }
}

function generateRandom() {
    const first = Math.floor(Math.random() * 20) + 1;
    const second = Math.floor(Math.random() * 10) + 1;
    
    document.querySelector('input[name="firstNumber"]').value = first;
    document.querySelector('input[name="secondNumber"]').value = second;
    
    calculateRealTime();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#calcForm input, #calcForm select');
    inputs.forEach(input => {
        input.addEventListener('input', calculateRealTime);
        input.addEventListener('change', calculateRealTime);
    });

    calculateRealTime(); // Initial calculation
});