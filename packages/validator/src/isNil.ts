export function isNil(value?: string | null): value is null | undefined {
  return value == null;
}
