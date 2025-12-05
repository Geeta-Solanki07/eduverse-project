// src/utils/validateEnv.ts
export function validateEnv(required: string[]) {
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length) {
    throw new Error(`Missing env vars: ${missing.join(", ")}`);
  }
}
