import { create } from 'zustand';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const getApiUrl = () => {
  // Use env variable in production (set by Render)
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;
  if (typeof window === 'undefined') return 'http://localhost:3002';
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:3002';
  // Localtunnel fallback (dev)
  return 'https://shiny-lamps-pump.loca.lt';
};

const API_URL = getApiUrl();

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/auth/login`, 
        { email, password },
        { headers: { 'bypass-tunnel-reminder': 'true' } }
      );
      const { access_token, user } = response.data;
      
      set({ 
        user, 
        token: access_token, 
        isLoading: false 
      });
      
      localStorage.setItem('auth_token', access_token);
      return true;
    } catch (error: any) {
      console.error('Login error:', error);
      let message = 'Login failed';
      if (error.code === 'ERR_NETWORK') {
        message = 'Cannot reach server. Please ensure the backend is running and you have bypassed the tunnel warning.';
      } else if (error.response?.data?.message) {
        message = error.response.data.message;
      }
      set({ error: message, isLoading: false });
      return false;
    }
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem('auth_token');
  },
}));
