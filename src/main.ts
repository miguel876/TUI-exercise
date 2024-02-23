import { factory } from './factory';
import { isNumber } from './utils/helpers';

let count = factory(0, 1);

function updateCountAndResetCounter() {
  const startAtControl = document.getElementById(
    'start_at'
  ) as HTMLInputElement;
  const stepControl = document.getElementById('step') as HTMLInputElement;
  const startValue = parseInt(startAtControl.value);
  const stepValue = parseInt(stepControl.value);

  if (!isNaN(startValue) && !isNaN(stepValue)) {
    count = factory(startValue, stepValue);
  }
}

function updateCount() {
  const currentCount = document.querySelector(
    '.current_count'
  ) as HTMLSpanElement;
  const nextNumber = count();
  currentCount.textContent = nextNumber.toString();
}

document.addEventListener('DOMContentLoaded', () => {
  const startAtControl = document.getElementById(
    'start_at'
  ) as HTMLInputElement;
  const stepControl = document.getElementById('step') as HTMLInputElement;
  const countButton = document.querySelector(
    '.count_button'
  ) as HTMLButtonElement;

  startAtControl.addEventListener('change', updateCountAndResetCounter);
  stepControl.addEventListener('change', updateCountAndResetCounter);
  countButton.addEventListener('click', updateCount);

  // Check if both inputs are numbers
  startAtControl.addEventListener('input', isNumber);
  stepControl.addEventListener('input', isNumber);
});

export { updateCountAndResetCounter, updateCount };
