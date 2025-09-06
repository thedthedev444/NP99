export function saveLoginSession(token: string) {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + 1 * 60 * 60 * 1000); // 1 hour

  document.cookie = `auth_token=${token}; path=/; expires=${expiryDate.toUTCString()}; secure; SameSite=Lax`;
}

export function isUserLoggedIn(): boolean {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("auth_token="));
  return !!tokenCookie;
}

export function getAuthToken(): string | null {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("auth_token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
}

export function logout() {
  document.cookie =
    "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

export const utcFormatTime = (date: Date): string => {
  const timeZone = "Asia/Singapore"; // Explicitly set to GMT+8

  // Format the date and time in GMT+8
  const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    // year: "numeric",
    // month: "2-digit",
    // day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
  });

  const formattedDateTime = dateTimeFormatter.format(date);

  // Manually set the timezone offset to GMT+8
  const formattedOffset = "+8";

  return `(GMT ${formattedOffset}) ${formattedDateTime} `;
};
