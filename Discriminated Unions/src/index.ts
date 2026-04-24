/**
 * A discriminated union is a union of multiple object types
 * that share a common property (called the "discriminant").
 *
 * This property has a fixed literal value in each type,
 * allowing TypeScript to automatically narrow the type
 * and safely access the correct properties.
 */

/**
 *
 * EXAMPLE 1 — Problem: All properties are required
 *
 */

/**
 * This type forces all properties even when not needed.
 */
type PaymentV1 = {
  /** Current payment status */
  status: "Initiated" | "Processing" | "Failed" | "Success";

  /** Number of attempts */
  attempt: number;

  /** Failure reason */
  reason: string;

  /** Transaction ID */
  txnId: number;
};

/**
 * @param payment - Payment object
 */
function processPaymentV1(payment: PaymentV1): void {
  console.log(payment);
}

// Error: Missing required properties
// processPaymentV1({ status: "Initiated" });

/**
 *
 * EXAMPLE 2 — Problem: Optional properties (unsafe)
 *
 */

/**
 * Making fields optional removes TypeScript errors,
 * but introduces runtime risks.
 */
type PaymentV2 = {
  status: "Initiated" | "Processing" | "Failed" | "Success";
  attempts?: number;
  reason?: string;
  txnId?: number;
};

/**
 * @param payment - Payment object
 */
function processPaymentV2(payment: PaymentV2): void {
  if (payment.status === "Initiated") {
    console.log("Payment Initiated");
  }

  // Problem: attempts may be undefined
  if (payment.status === "Processing") {
    console.log("Attempts:", payment.attempts + 1);
  }

  // Problem: reason may be undefined
  if (payment.status === "Failed") {
    console.log("Reason:", payment.reason.toUpperCase());
  }

  // Problem: txnId may be undefined
  if (payment.status === "Success") {
    console.log("Transaction Id:", payment.txnId.toFixed());
  }
}

// No TypeScript error, but unsafe
processPaymentV2({ status: "Initiated" });

/**
 *
 * EXAMPLE 3 — Temporary Fix (Non-null & Optional chaining)
 *
 */

/**
 * Still unsafe because correctness is not enforced.
 */
type PaymentV3 = {
  status: "Initiated" | "Processing" | "Failed" | "Success";
  attempts?: number;
  reason?: string;
  txnId?: number;
};

/**
 * @param payment - Payment object
 */
function processPaymentV3(payment: PaymentV3): void {
  if (payment.status === "Initiated") {
    console.log("Payment Initiated");
  }

  // Non-null assertion
  if (payment.status === "Processing") {
    console.log("Attempts:", payment.attempts! + 1);
  }

  // Optional chaining
  if (payment.status === "Failed") {
    console.log("Reason:", payment.reason?.toUpperCase());
  }

  if (payment.status === "Success") {
    console.log("Transaction Id:", payment.txnId?.toFixed());
  }
}

// Problem: Missing attempts but no TypeScript error
processPaymentV3({ status: "Processing" });

/**
 *
 * EXAMPLE 4 — Solution: Discriminated Union
 *
 */

/**
 * Each status has its own required properties.
 */
type PaymentV4 =
  | { status: "Initiated" }
  | { status: "Processing"; attempts: number }
  | { status: "Failed"; reason: string }
  | { status: "Success"; txnId: number };

/**
 * Safe processing using type narrowing
 *
 * @param payment - Strictly typed payment object
 */
function processPaymentV4(payment: PaymentV4): void {
  if (payment.status === "Initiated") {
    console.log("Payment Initiated");
  }

  if (payment.status === "Processing") {
    console.log("Attempts:", payment.attempts + 1);
  }

  if (payment.status === "Failed") {
    console.log("Reason:", payment.reason.toUpperCase());
  }

  if (payment.status === "Success") {
    console.log("Transaction Id:", payment.txnId.toFixed());
  }
}

// Valid usage
processPaymentV4({ status: "Initiated" });
processPaymentV4({ status: "Processing", attempts: 0 });
processPaymentV4({ status: "Failed", reason: "Something Went Wrong" });
processPaymentV4({ status: "Success", txnId: 1 });

// Invalid (TypeScript will show error)
// processPaymentV4({ status: "Processing" });

/**
 *
 * SUMMARY
 *
 *
 * V1: Too strict (forces all properties)
 * V2: Too loose (runtime errors possible)
 * V3: Temporary workaround (non-null and optional chaining)
 * V4: Correct approach (Discriminated Union)
 */
