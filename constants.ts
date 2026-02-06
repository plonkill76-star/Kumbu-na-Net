
import { Task, TaskType } from './types';

export const AVAILABLE_TASKS: Task[] = [
  {
    id: 'ad_1',
    type: TaskType.GOOGLE_ADS,
    title: 'Anúncio Google Ads (Alta Recompensa)',
    reward: 100,
    durationSeconds: 300, // 5 minutos conforme solicitado
    icon: 'fa-brands fa-google',
    url: 'https://www.google.com/ads'
  },
  {
    id: 'vid_1',
    type: TaskType.YOUTUBE,
    title: 'Vídeo YouTube: Conteúdo Parceiro',
    reward: 300,
    durationSeconds: 180, // Sugestão AdSense (3 min)
    icon: 'fa-brands fa-youtube',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid_2',
    type: TaskType.TIKTOK,
    title: 'Vídeo TikTok: Trend Monetizada',
    reward: 300,
    durationSeconds: 120, // Sugestão AdSense (2 min)
    icon: 'fa-brands fa-tiktok',
    url: 'https://www.tiktok.com'
  },
  {
    id: 'vid_3',
    type: TaskType.REELS,
    title: 'Vídeo Reels: Viral Angola',
    reward: 300,
    durationSeconds: 240, // Sugestão AdSense (4 min)
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/reels/'
  }
];

export const DAILY_LIMITS = {
  ADS: 10,
  VIDEOS: 4,
  REWARD_AD: 100,
  REWARD_VIDEO: 300,
  MIN_WITHDRAWAL: 15000 
};

export const MOCK_TRANSACTIONS = [
  { id: 'tx1', amount: 15000, date: '2024-02-05', status: 'CONCLUÍDO', method: 'MCX EXPRESS' },
  { id: 'tx2', amount: 15500, date: '2024-02-06', status: 'PENDENTE', method: 'MCX EXPRESS' },
];
