import { describe, expect, it } from 'vitest';
import { isNumber } from './helpers';

describe('isNumber function', () => {
  it('should only allow number', () => {
    const input = document.createElement('input');
    input.value = 'abc10';

    isNumber({ target: input } as any);

    expect(input.value).toBe('10');
  });
});
