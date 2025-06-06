'use client';

import { Home as HomeIcon, BookOpen, Ticket, Download, Mail } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { SplineSceneBasic } from "@/components/ui/spline-scene"
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/ui/feature-section-demo";
import { FeatureDemo } from "@/components/feature-demo";

const menuItems = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full text-neutral-600 group-hover:text-[#EC6726] transition-colors dark:text-neutral-300' />,
    href: '#',
  },
  {
    title: 'Guides',
    icon: <BookOpen className='h-full w-full text-neutral-600 group-hover:text-[#EC6726] transition-colors dark:text-neutral-300' />,
    href: '#',
  },
  {
    title: 'Tickets',
    icon: <Ticket className='h-full w-full text-neutral-600 group-hover:text-[#EC6726] transition-colors dark:text-neutral-300' />,
    href: '#',
  },
  {
    title: 'Contact',
    icon: <Mail className='h-full w-full text-neutral-600 group-hover:text-[#EC6726] transition-colors dark:text-neutral-300' />,
    href: '#',
  },
  {
    title: 'Download App',
    icon: <Download className='h-full w-full text-neutral-600 group-hover:text-[#EC6726] transition-colors dark:text-neutral-300' />,
    href: '#',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full min-h-screen">
        <SplineSceneBasic />
      </div>
      <div className="w-full bg-background">
        <FeaturesSectionWithHoverEffectsDemo />
      </div>
      <div className='fixed bottom-2 left-1/2 max-w-full -translate-x-1/2'>
        <Dock className='items-end pb-3'>
          {menuItems.map((item, idx) => (
            <DockItem
              key={idx}
              className='group aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
      <FeatureDemo />
    </main>
  );
}
