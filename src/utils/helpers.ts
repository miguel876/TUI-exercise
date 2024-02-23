export function isNumber(evt: Event) {
  const input = evt.target as HTMLInputElement;
  input.value = input.value.replace(/\D/g, '');
}
