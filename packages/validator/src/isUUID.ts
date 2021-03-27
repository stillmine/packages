import { validate, version } from 'uuid';

import { isNil } from './isNil';

export enum UUIDVersion {
  v1 = 1,
  v2 = 2,
  v3 = 3,
  v4 = 4,
  v5 = 5,
}

export function isUUID(uuidVersion: keyof typeof UUIDVersion, value?: string | null) {
  return !isNil(value) && validate(value) && version(value) === UUIDVersion[uuidVersion];
}
