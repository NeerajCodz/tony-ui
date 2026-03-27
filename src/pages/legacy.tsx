/**
 * Legacy Dashboard & Gallery Components
 * Original cyberpunk UI system components
 */

import { DollarSign, FileText, HelpCircle, Info, Monitor, Play, Settings, User } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

// --- Shared Components ---

const CyberPanel = ({
  children,
  title,
  className = '',
  version = 1,
}: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  version?: number;
}) => {
  const getClipPath = (v: number) => {
    switch (v) {
      case 1:
        return 'clip-path-v1';
      case 2:
        return 'clip-path-v2';
      case 3:
        return 'clip-path-v3';
      case 4:
        return 'clip-path-v4';
      case 5:
        return 'clip-path-v5';
      case 6:
        return 'clip-path-v6';
      case 7:
        return 'clip-path-v7';
      default:
        return 'clip-path-panel';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 bg-cyber-panel/90 border border-cyber-blue/40 ${getClipPath(
          version
        )}`}
      />

      {version === 1 && (
        <>
          <div className="absolute top-0 left-0 w-8 h-1 bg-cyber-blue/60" />
          <div className="absolute top-0 left-0 w-1 h-8 bg-cyber-blue/60" />
          <div className="absolute top-0 right-0 w-8 h-1 bg-cyber-blue/60" />
          <div className="absolute top-0 right-0 w-1 h-8 bg-cyber-blue/60" />
        </>
      )}

      {version === 2 && (
        <div className="absolute bottom-0 left-0 right-0 h-4 flex gap-1 px-4">
          <div className="flex-1 bg-cyber-blue/20 border-t border-cyber-blue/40" />
          <div className="flex-1 bg-cyber-blue/20 border-t border-cyber-blue/40" />
        </div>
      )}

      {version === 3 && (
        <div className="absolute top-0 left-0 right-0 h-10 bg-cyber-blue/10 border-b border-cyber-blue/40" />
      )}

      <div className="absolute top-2 right-2 w-12 h-px bg-cyber-blue/20" />
      <div className="absolute top-3 right-2 w-8 h-px bg-cyber-blue/20" />

      <div className="relative p-6 h-full">
        {title && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 bg-cyber-blue text-[9px] font-black tracking-[0.3em] uppercase text-cyber-dark clip-path-header shadow-[0_0_15px_rgba(0,170,255,0.5)]">
            {title}
          </div>
        )}
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};

const CyberButton = ({
  icon: Icon,
  label,
  onClick,
}: {
  icon: any;
  label: string;
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="flex items-center w-full bg-cyber-panel border border-cyber-blue/40 group hover:border-cyber-blue transition-colors overflow-hidden clip-path-button"
  >
    <div className="bg-cyber-blue p-3 text-cyber-dark group-hover:bg-white transition-colors clip-path-button-icon">
      <Icon size={20} strokeWidth={2.5} />
    </div>
    <div className="px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase text-cyber-blue group-hover:text-white transition-colors">
      {label}
    </div>
  </motion.button>
);

const LiveIndicator = ({ withText = false }: { withText?: boolean }) => (
  <div className="flex items-center group cursor-pointer">
    <div className="bg-cyber-blue px-6 py-3 text-cyber-dark font-black tracking-tighter italic text-2xl clip-path-live-left group-hover:bg-white transition-colors">
      LIVE
    </div>
    <div className="bg-cyber-panel border-y border-r border-cyber-blue/40 px-4 py-3 flex items-center gap-4 clip-path-live-right group-hover:border-cyber-blue transition-colors">
      {withText && (
        <div className="flex flex-col">
          <span className="text-[8px] font-bold text-cyber-blue/40 uppercase leading-none">
            Status
          </span>
          <span className="text-[10px] font-black text-cyber-blue uppercase tracking-widest">
            Active
          </span>
        </div>
      )}
      <div className="bg-cyber-blue/10 p-2 border border-cyber-blue/40 group-hover:bg-cyber-blue/20 transition-colors">
        <Play size={18} className="fill-cyber-blue text-cyber-blue" />
      </div>
    </div>
  </div>
);

// --- Pages ---

export const Dashboard = () => (
  <div className="max-w-6xl w-full grid grid-cols-12 gap-6">
    <div className="col-span-12 md:col-span-8">
      <CyberPanel version={1} title="MAIN_VIEW" className="h-96">
        <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40">
          <Monitor size={64} className="text-cyber-blue" />
          <p className="font-mono text-sm tracking-[0.5em]">SYSTEM_ONLINE</p>
        </div>
      </CyberPanel>
    </div>
    <div className="col-span-12 md:col-span-4 space-y-6">
      <CyberPanel version={3} title="STATS" className="h-44">
        <div className="space-y-4">
          <div className="h-2 w-full bg-cyber-blue/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              className="h-full bg-cyber-blue"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 bg-cyber-blue/5 border border-cyber-blue/20" />
            <div className="h-8 bg-cyber-blue/5 border border-cyber-blue/20" />
          </div>
        </div>
      </CyberPanel>
      <CyberPanel version={2} title="ACTIVITY" className="h-44">
        <div className="flex items-end justify-between h-full p-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="w-2 bg-cyber-blue/40"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </CyberPanel>
    </div>
    <div className="col-span-12 md:col-span-4">
      <LiveIndicator withText />
    </div>
    <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <CyberButton icon={User} label="Profile" />
      <CyberButton icon={DollarSign} label="Wallet" />
      <CyberButton icon={Settings} label="Config" />
      <CyberButton icon={FileText} label="Logs" />
    </div>
  </div>
);

export const PanelsGallery = () => (
  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {Array.from({ length: 7 }).map((_, i) => (
      <div key={i} className="space-y-4">
        <div className="text-cyber-blue font-mono text-xs tracking-widest opacity-50">
          VERSION_0{i + 1}
        </div>
        <CyberPanel version={i + 1} className="h-48">
          <div className="flex items-center justify-center h-full opacity-20 font-mono text-[10px]">
            CLIP_PATH: V{i + 1}
          </div>
        </CyberPanel>
      </div>
    ))}
  </div>
);

export const ElementsGallery = () => (
  <div className="max-w-6xl w-full space-y-12">
    <section className="space-y-6">
      <h2 className="text-cyber-blue font-mono text-sm tracking-[0.3em] border-b border-cyber-blue/20 pb-2">
        INDICATORS
      </h2>
      <div className="flex flex-wrap gap-8">
        <LiveIndicator />
        <LiveIndicator withText />
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-cyber-blue font-mono text-sm tracking-[0.3em] border-b border-cyber-blue/20 pb-2">
        BUTTONS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CyberButton icon={User} label="About Me" />
        <CyberButton icon={DollarSign} label="Donate" />
        <CyberButton icon={FileText} label="Rules" />
        <CyberButton icon={Settings} label="Settings" />
        <CyberButton icon={HelpCircle} label="FAQ" />
        <CyberButton icon={Info} label="Info" />
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-cyber-blue font-mono text-sm tracking-[0.3em] border-b border-cyber-blue/20 pb-2">
        DECORATIVE
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="h-24 bg-cyber-panel border border-cyber-blue/20 clip-path-panel opacity-50" />
        <div className="h-24 bg-cyber-panel border border-cyber-blue/20 clip-path-tall opacity-50" />
        <div className="h-24 bg-cyber-panel border border-cyber-blue/20 clip-path-v1 opacity-50" />
        <div className="h-24 bg-cyber-panel border border-cyber-blue/20 clip-path-v7 opacity-50" />
      </div>
    </section>
  </div>
);
