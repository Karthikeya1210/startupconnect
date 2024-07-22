import { HomeIcon } from './icons/HomeIcon';
import { StatusIcon } from './icons/StatusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { ChatIcon } from './icons/ChatIcon';
import { SettingsIcon } from './icons/SettingsIcon';

export const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Status',
    icon: <StatusIcon />,
    link: '/admin/status',
  },
  {
    title: 'Chat',
    icon: <ChatIcon />,
    link: '/admin/archives',
  },
  {
    title: 'Share',
    icon: <ShareIcon />,
    link: '/admin/credits',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
 
];