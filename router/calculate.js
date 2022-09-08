const Router = require('express').Router;
const mathM = require('../math');

const calculate = Router();

const handleCalculation = (bodyObject) => {
    const { action, num1, num2 } = bodyObject

    let result;

    if (action === 'sum') {
        result = mathM.add(num1, num2)
    } else if (action === 'subtract') {
        result = mathM.subtract(num1, num2)
    } else if (action === 'divide') {
        result = mathM.divide(num1, num2)
    } else if (action === 'multiply') {
        result = mathM.multiply(num1, num2)
    }

    return result;
}


calculate.post('/', (req, res) => {
    const result = handleCalculation(req.body);
    return res.status(200).json({ result })
})

module.exports = calculate;
