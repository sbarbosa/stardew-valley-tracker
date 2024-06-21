export function load<T>(key: string, defaultValue: T) {
  try {
    const data = localStorage.getItem(key);
    if (data === null) {
      return defaultValue;
    }
    return JSON.parse(data) as T;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error loading value from local storage;", err);
    return defaultValue;
  }
}

export function store<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Error storing value to local storage", err);
  }
}

export function destroy(key: string) {
  localStorage.removeItem(key);
}
