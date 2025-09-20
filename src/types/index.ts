export interface User {
  id: string;
  username: string;
  password: string;
  role: 'admin' | 'user';
  name: string;
}

export interface WasteRecord {
  id: string;
  type: string;
  location: string;
  weight: number;
  date: string;
  time: string;
  notes?: string;
  createdBy: string;
}

export interface EmailConfig {
  id: string;
  email: string;
  name: string;
  active: boolean;
}

export interface ReportFilter {
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  period: 'daily' | 'weekly' | 'monthly' | 'custom';
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}