import { User, WasteRecord, EmailConfig } from '../types';

// Default admin user
const DEFAULT_USER: User = {
  id: '1',
  username: 'admin',
  password: 'admin123',
  role: 'admin',
  name: 'Administrador del Sistema'
};

// Default operator user
const DEFAULT_OPERATOR: User = {
  id: '2',
  username: 'operador',
  password: 'op123',
  role: 'operator',
  name: 'Operador de Campo'
};
// Storage keys
const USERS_KEY = 'waste_management_users';
const WASTE_RECORDS_KEY = 'waste_management_records';
const EMAIL_CONFIG_KEY = 'waste_management_emails';
const AUTH_KEY = 'waste_management_auth';

// Initialize default data
export const initializeStorage = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([DEFAULT_USER, DEFAULT_OPERATOR]));
  }
  
  if (!localStorage.getItem(WASTE_RECORDS_KEY)) {
    localStorage.setItem(WASTE_RECORDS_KEY, JSON.stringify([]));
  }
  
  if (!localStorage.getItem(EMAIL_CONFIG_KEY)) {
    localStorage.setItem(EMAIL_CONFIG_KEY, JSON.stringify([]));
  }
};

// Users
export const getUsers = (): User[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [DEFAULT_USER, DEFAULT_OPERATOR];
};

export const authenticateUser = (username: string, password: string): User | null => {
  const users = getUsers();
  return users.find(user => user.username === username && user.password === password) || null;
};

// Waste Records
export const getWasteRecords = (): WasteRecord[] => {
  const records = localStorage.getItem(WASTE_RECORDS_KEY);
  return records ? JSON.parse(records) : [];
};

export const addWasteRecord = (record: Omit<WasteRecord, 'id'>): WasteRecord => {
  const records = getWasteRecords();
  const newRecord: WasteRecord = {
    ...record,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
  };
  
  records.push(newRecord);
  localStorage.setItem(WASTE_RECORDS_KEY, JSON.stringify(records));
  return newRecord;
};

export const deleteWasteRecord = (id: string): void => {
  const records = getWasteRecords().filter(record => record.id !== id);
  localStorage.setItem(WASTE_RECORDS_KEY, JSON.stringify(records));
};

// Email Configuration
export const getEmailConfigs = (): EmailConfig[] => {
  const emails = localStorage.getItem(EMAIL_CONFIG_KEY);
  return emails ? JSON.parse(emails) : [];
};

export const addEmailConfig = (email: Omit<EmailConfig, 'id'>): EmailConfig => {
  const emails = getEmailConfigs();
  const newEmail: EmailConfig = {
    ...email,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
  };
  
  emails.push(newEmail);
  localStorage.setItem(EMAIL_CONFIG_KEY, JSON.stringify(emails));
  return newEmail;
};

export const deleteEmailConfig = (id: string): void => {
  const emails = getEmailConfigs().filter(email => email.id !== id);
  localStorage.setItem(EMAIL_CONFIG_KEY, JSON.stringify(emails));
};

export const updateEmailConfig = (id: string, updates: Partial<EmailConfig>): void => {
  const emails = getEmailConfigs().map(email => 
    email.id === id ? { ...email, ...updates } : email
  );
  localStorage.setItem(EMAIL_CONFIG_KEY, JSON.stringify(emails));
};

// Auth
export const saveAuthState = (user: User) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify({ isAuthenticated: true, user }));
};

export const getAuthState = (): { isAuthenticated: boolean; user: User | null } => {
  const auth = localStorage.getItem(AUTH_KEY);
  return auth ? JSON.parse(auth) : { isAuthenticated: false, user: null };
};

export const clearAuthState = () => {
  localStorage.removeItem(AUTH_KEY);
};