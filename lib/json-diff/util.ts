export function extendedTypeOf(obj: unknown) {
  const result = typeof obj;
  if (obj == null) {
    return "null";
  } else if (Array.isArray(obj)) {
    return "array";
  } else if (result === "object" && obj instanceof Date) {
    return "date";
  } else {
    return result;
  }
}

export function roundObj<T>(data: T, precision: number): T {
  if (Array.isArray(data)) {
    return data.map((x) => roundObj(x, precision)) as T;
  } else if (typeof data === "object") {
    for (const key in data) {
      data[key] = roundObj(data[key], precision);
    }
    return data;
  } else if (typeof data === "number" && Number.isFinite(data) && !Number.isInteger(data)) {
    return Number(data.toFixed(precision)) as T;
  } else {
    return data;
  }
}
