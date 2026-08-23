function parseArguments(argumentText, target) {
  if (!argumentText.trim()) return [];
  return argumentText.split(',').map((argument) => {
    const value = argument.trim();
    if (value === 'this') return target;
    if (/^['"].*['"]$/.test(value)) return value.slice(1, -1);
    if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
    return value;
  });
}

export function executeInlineAction(action, event) {
  const target = event.currentTarget;
  const calls = action.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^)]*)\)/g);

  for (const [, name, argumentText] of calls) {
    const handler = window[name];
    if (typeof handler === 'function') {
      handler(...parseArguments(argumentText, target));
    }
  }
}
