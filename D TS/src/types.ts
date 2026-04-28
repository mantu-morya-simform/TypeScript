/**
 * .d.ts (Declaration File)
 *
 * .d.ts file is a TypeScript file that only describes types (like function signatures, object shapes) and does not contain any actual code implementation.
 * Provides type information only (no implementation).
 *
 * Why use:
 * - Add types to JavaScript code or libraries
 * - Share type contracts across modules
 * - Improve autocomplete and type safety
 *
 * Example:
 * // math.d.ts
 * export function add(a: number, b: number): number;
 *
 * // usage
 * import { add } from "math-lib";
 *
 * Notes:
 * - No function bodies or runtime code
 * - Not executed at runtime
 * - Prefer `import type` when importing from it
 */

/**
 * Arguments for basic arithmetic operations.
 */
export type basicOprArgs = {
  firstArguments: number;
  secondArguments: number;
};

/**
 * Single item structure.
 */
export type SomeItem = {
  weight: number;
};

/**
 * Storage containing multiple items.
 */
export type ItemStorage = {
  name: string;
  items: SomeItem[];
};
