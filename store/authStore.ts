import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  initLogin: (isLoggedIn: boolean) => void;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  initLogin: (isLoggedIn: boolean) => {
    set({ isLoggedIn });
  },
  login: () => {
    localStorage.setItem("isLoggedIn", "true");
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("isLoggedIn");
    set({ isLoggedIn: false });
  },
}));
