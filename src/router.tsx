import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Layers, Box } from 'lucide-react';
import { UIButtonPage } from './pages/ui/ButtonPage';
import { UICardPage } from './pages/ui/CardPage';

// Import existing pages from legacy
import { Dashboard, PanelsGallery, ElementsGallery } from './pages/legacy';

const Navigation = () => {
  const location = useLocation();
  const links = [
    { to: '/', label: 'DASHBOARD', icon: Layout },
    { to: '/panels', label: 'PANELS', icon: Layers },
    { to: '/elements', label: 'ELEMENTS', icon: Box },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="bg-cyber-panel/90 border border-cyber-blue/30 px-2 py-1 flex gap-2 clip-path-panel backdrop-blur-md">
        {links.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;
          return (
            <Link key={to} to={to}>
              <motion.div
                className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest transition-colors ${
                  isActive ? 'bg-cyber-blue text-cyber-dark' : 'text-cyber-blue hover:bg-cyber-blue/10'
                }`}
                whileHover={{ y: -2 }}
              >
                <Icon size={14} />
                {label}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-8 flex flex-col items-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-cyber-blue/5">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#00aaff 1px, transparent 1px), linear-gradient(90deg, #00aaff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Navigation />

      <main className="w-full flex flex-col items-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center"
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/panels" element={<PanelsGallery />} />
              <Route path="/elements" element={<ElementsGallery />} />
              <Route path="/ui/button" element={<UIButtonPage />} />
              <Route path="/ui/card" element={<UICardPage />} />

            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <style>{`
        @keyframes scan {
          from { transform: translateY(-50%); }
          to { transform: translateY(50%); }
        }
        .clip-path-header {
          clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
        }
        .clip-path-panel {
          clip-path: polygon(
            0 15px, 15px 0, 
            calc(100% - 15px) 0, 100% 15px, 
            100% calc(100% - 15px), calc(100% - 15px) 100%, 
            15px 100%, 0 calc(100% - 15px)
          );
        }
        .clip-path-tall {
          clip-path: polygon(
            0 20px, 20px 0, 
            calc(100% - 40px) 0, 100% 40px, 
            100% calc(100% - 20px), calc(100% - 20px) 100%, 
            20px 100%, 0 calc(100% - 20px)
          );
        }
        .clip-path-v1 {
          clip-path: polygon(
            0 20px, 20px 0, 
            calc(100% - 20px) 0, 100% 20px, 
            100% calc(100% - 20px), calc(100% - 20px) 100%, 
            calc(50% + 40px) 100%, 50% calc(100% - 10px), calc(50% - 40px) 100%,
            20px 100%, 0 calc(100% - 20px)
          );
        }
        .clip-path-v2 {
          clip-path: polygon(
            0 20px, 20px 0, 
            calc(100% - 20px) 0, 100% 20px, 
            100% calc(100% - 30px), calc(100% - 30px) 100%, 
            30px 100%, 0 calc(100% - 30px)
          );
        }
        .clip-path-v3 {
          clip-path: polygon(
            0 0, 80% 0, 100% 20px, 
            100% 100%, 20px 100%, 0 calc(100% - 20px)
          );
        }
        .clip-path-v4 {
          clip-path: polygon(
            0 15px, 15px 0, 
            100% 0, 100% 100%, 
            15px 100%, 0 calc(100% - 15px)
          );
        }
        .clip-path-v5 {
          clip-path: polygon(
            0 0, 100% 0, 
            100% calc(100% - 15px), calc(100% - 15px) 100%, 
            0 100%
          );
        }
        .clip-path-v6 {
          clip-path: polygon(
            0 0, calc(100% - 15px) 0, 100% 15px, 
            100% 100%, 0 100%
          );
        }
        .clip-path-v7 {
          clip-path: polygon(
            0 0, calc(50% - 20px) 0, 50% 10px, calc(50% + 20px) 0, 100% 0, 
            100% 100%, 0 100%
          );
        }
        .clip-path-live-left {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }
        .clip-path-live-right {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
        }
        .clip-path-button {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .clip-path-button-icon {
          clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export function AppRouter() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
