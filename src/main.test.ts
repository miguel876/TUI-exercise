import { updateCountAndResetCounter, updateCount } from './main';
import { beforeAll, describe, expect, it } from 'vitest';

describe('Main tests', () => {
  let startAtControl: HTMLInputElement;
  let stepControl: HTMLInputElement;
  let currentCount: HTMLSpanElement;

  beforeAll(() => {
    document.body.innerHTML = `
      <div class="wrapper">
        <div class="controls">
          <div class="control">
            <label for="start_at">Start at</label>
            <input type="text" name="start_at" value="0" id="start_at" />
          </div>
          <div class="control">
            <label for="step">Step</label>
            <input type="text" name="step" value="1" id="step" />
          </div>
        </div>
        <button class="count_button" type="button">
          <span class="current_count"> 0 </span>
        </button>
      </div>
    `;
    startAtControl = document.getElementById('start_at') as HTMLInputElement;
    stepControl = document.getElementById('step') as HTMLInputElement;
    currentCount = document.querySelector('.current_count') as HTMLSpanElement;
  });

  it('should count and reset counter', () => {
    startAtControl.value = '5';
    stepControl.value = '2';

    updateCountAndResetCounter();

    expect(startAtControl.value).toBe('5');
    expect(stepControl.value).toBe('2');
  });

  it('should update count', () => {
    updateCount();

    expect(currentCount.textContent).toBe('7');
  });
});
