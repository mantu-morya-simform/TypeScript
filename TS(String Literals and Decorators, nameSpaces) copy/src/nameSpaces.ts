/**
 * Namespace: groups related code to avoid global scope pollution.
 * Usage: access members via NamespaceName.member
 */
namespace MathUtils {
  /** Add two numbers */
  export function add(a: number, b: number): number {
    return a + b;
  }

  /** Subtract two numbers */
  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

// Usage
MathUtils.add(2, 3); // 5
MathUtils.subtract(5, 2); // 3
