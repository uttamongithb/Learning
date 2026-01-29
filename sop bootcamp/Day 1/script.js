const calculate = document.querySelector('#calculate');
const tip_per_person = document.querySelector('#tip_per_person');
const bill = document.querySelector('#bill');
const tip_percentage = document.querySelector('#tip_percentage');
const total_person = document.querySelector('#total_person');
const reset = document.querySelector('#reset');
const toaster = document.querySelector('.toaster')

const calculateTip = () => {
    if (Number(bill.value) > 0) {
        tip_per_person.innerHTML = (Number(bill.value) * Number(tip_percentage.value)) / (100 * Number(total_person.value));
    } else {
        toaster.style.display = 'initial';

        setTimeout(() => {
            toaster.style.display = 'none';
        }, 2000);
    }
}

const res = () => {
    bill.value = '';
    tip_percentage.value = '';
    total_person.value = '';
    toaster.style.display = 'none'
}