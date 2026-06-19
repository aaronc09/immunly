import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: async () => ({ ok: false }),
  register: async () => ({ ok: false }),
  logout: () => {},
});

const STORAGE_KEY = 'immunly_user';
const ACCOUNTS_KEY = 'immunly_accounts';

interface StoredAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // In production use real hashing; here we base64 as a placeholder
}

function encode(s: string) {
  return btoa(s);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  function getAccounts(): StoredAccount[] {
    try {
      const raw = localStorage.getItem(ACCOUNTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveAccounts(accounts: StoredAccount[]) {
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  }

  async function login(email: string, password: string) {
    const accounts = getAccounts();
    const account = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
    if (!account) {
      return { ok: false, error: 'No account found with that email.' };
    }
    if (account.passwordHash !== encode(password)) {
      return { ok: false, error: 'Incorrect password.' };
    }
    const u: User = { id: account.id, name: account.name, email: account.email };
    setUser(u);
    return { ok: true };
  }

  async function register(name: string, email: string, password: string) {
    const accounts = getAccounts();
    if (accounts.find(a => a.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'An account with that email already exists.' };
    }
    const newAccount: StoredAccount = {
      id: crypto.randomUUID(),
      name,
      email,
      passwordHash: encode(password),
    };
    saveAccounts([...accounts, newAccount]);
    const u: User = { id: newAccount.id, name, email };
    setUser(u);
    return { ok: true };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
