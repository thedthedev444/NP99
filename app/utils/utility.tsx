export function saveLoginSession(token: string) {
  if (typeof document !== 'undefined') {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 1 * 60 * 60 * 1000); // 1 hour

    document.cookie = `auth_token=${token}; path=/; expires=${expiryDate.toUTCString()}; secure; SameSite=Lax`;
  }
}

export function isUserLoggedIn(): boolean {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("auth_token="));
    return !!tokenCookie;
  }
  return false;
}

export function getAuthToken(): string | null {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("auth_token="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
  }
  return null;
}

export function logout() {
  if (typeof document !== 'undefined') {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }
}

export const utcFormatTime = (date: Date): string => {
  const timeZone = "Asia/Singapore"; // GMT+8

  const dateTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
  });

  const formattedDateTime = dateTimeFormatter.format(date);
  const formattedOffset = "+8";

  return `(GMT ${formattedOffset}) ${formattedDateTime} `;
};
