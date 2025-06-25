export function formatPhoneNumber(phoneNumber: string): string | null {
  let digits;

  try {
    digits = phoneNumber.replace(/\D/g, "").replace(/^1/, "");
  } catch (e) {
    console.warn("Error formatting phone number", e);
    return null;
  }

  return digits.length === 10 ? digits : null;
}
