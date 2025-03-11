import Constants from "expo-constants";

export const country = Constants.expoConfig?.extra?.country ?? "default";

export const config = {
  ge: {
    backgroundColor: "#e74c3c",
    message: "გამარჯობა საქართველოდან 🇬🇪",
  },
  ua: {
    backgroundColor: "#3498db",
    message: "Привіт з України 🇺🇦",
  },
  uz: {
    backgroundColor: "#27ae60",
    message: "Salom Oʻzbekistondan 🇺🇿",
  },
  default: {
    backgroundColor: "#7f8c8d",
    message: "Hello from Default Version",
  },
}[country];
