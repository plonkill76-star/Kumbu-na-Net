
export enum TaskType {
  YOUTUBE = 'YOUTUBE',
  TIKTOK = 'TIKTOK',
  GOOGLE_ADS = 'GOOGLE_ADS',
  REELS = 'REELS'
}

export interface Task {
  id: string;
  type: TaskType;
  title: string;
  reward: number;
  durationSeconds: number;
  icon: string;
  url: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  multicaixaNumber: string;
  totalTasksCompleted: number;
  dailyAdsCount: number;
  dailyVideosCount: number;
  lastResetDate: string; // Para resetar as metas todo dia
  avatar: string;
  isVerified: boolean;
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  status: 'PENDENTE' | 'CONCLUÍDO' | 'REJEITADO';
  method: string;
}
