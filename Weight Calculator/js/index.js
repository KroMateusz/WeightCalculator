class App {
    //parameters
    minWeight = 30;
    maxWeight = 140;
    minHeight = 120;
    maxHeight = 220;

    weightUnit = 'kg';
    heightUnit = 'cm';

    //element
    initialWeightInput = null;
    desiredWeightInput = null;
    heightInput = null;
    startDateInput = null;
    endDateInput = null;
    button = null;
    initialWeightResult = null;
    desiredWeightResult = null;
    heightResult = null;

    DOMElements = {
        initialWeightInput: 'weight-initial',
        desiredWeightInput: 'weight-desired',
        heightInput: 'height',
        startDateInput: 'start-date',
        endDateInput: 'end-date',
        button: '[data-button]',
        initialWeightResult: '[data-initial-weight-result]',
        desiredWeightResult: '[data-desired-weight-result]',
        heightResult: '[data-height-result]'
    }
    initializeApp() {
        this.handleElements();
        this.setInitialValues();

        this.addEventListeners();
    }
    addEventListeners() {

    }

    handleElements() {
        this.initialWeightInput = document.getElementById(this.DOMElements.initialWeightInput);
        this.desiredWeightInput = document.getElementById(this.DOMElements.desiredWeightInput);
        this.heightInput = document.getElementById(this.DOMElements.heightInput);
        this.startDateInput = document.getElementById(this.DOMElements.startDateInput);
        this.endDateInput = document.getElementById(this.DOMElements.endDateInput);
        this.button = document.querySelector(this.DOMElements.button);
        this.initialWeightResult = document.querySelector(this.DOMElements.initialWeightResult);
        this.desiredWeightResult = document.querySelector(this.DOMElements.desiredWeightResult);
        this.heightResult = document.querySelector(this.DOMElements.heightResult);
    }
    setInitialValues() {
        this.setInputValues(this.initialWeightInput, this.minWeight, this.maxWeight);
        this.setInputValues(this.desiredWeightInput, this.minWeight, this.maxWeight);
        this.setInputValues(this.heightInput, this.minHeight, this.maxHeight);
        this.startDateInput.valueAsDate = this.getCurrentDate();
        this.endDateInput.valueAsDate = this.getCurrentDate();
        this.startDateInput.min = this.getCurrentDate().toISOString().split('T')[0];
        this.endDateInput.min = this.getCurrentDate().toISOString().split('T')[0];

        this.initialWeightResult.textContent = this.getValueWithUnit(this.initialWeightInput.value, this.weightUnit);
        this.desiredWeightResult.textContent = this.getValueWithUnit(this.desiredWeightInput.value, this.weightUnit);
        this.heightResult.textContent = this.getValueWithUnit(this.heightInput.value, this.heightUnit);

    }

    setInputValues(element, minValue, maxValue) {
        element.min = minValue;
        element.max = maxValue;
        element.value = this.getAverage(minValue, maxValue);
    }

    getAverage(valueOne, valueTwo) {
        return Math.round((valueOne + valueTwo) / 2);
    }

    getValueWithUnit(value, unit) {
        return `${value} ${unit}`;
    }

    getCurrentDate() {
        return new Date();
    }
}