export function loadState(key) {
  try {
    const state = localStorage.getItem(key);
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state, key) {
  localStorage.setItem(key, JSON.stringify(state));
}
