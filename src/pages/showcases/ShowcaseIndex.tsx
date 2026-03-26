/**
 * Showcase Index Page
 * Navigation hub for all component showcases
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, ArrowRight } from 'lucide-react';

interface ShowcaseCategory {
  name: string;
  components: Array<{ name: string; slug: string }>;
}

const categories: ShowcaseCategory[] = [
  {
    name: 'Buttons & Actions',
    components: [
      { name: 'Button', slug: 'button' },
      { name: 'Button Group', slug: 'button-group' },
      { name: 'Toggle', slug: 'toggle' },
      { name: 'Toggle Group', slug: 'toggle-group' },
    ],
  },
  {
    name: 'Inputs',
    components: [
      { name: 'Input', slug: 'input' },
    ],
  },
  {
    name: 'Data Display',
    components: [
      { name: 'Badge', slug: 'badge' },
      { name: 'Avatar', slug: 'avatar' },
      { name: 'Skeleton', slug: 'skeleton' },
      { name: 'Spinner', slug: 'spinner' },
    ],
  },
  {
    name: 'Navigation',
    components: [
      { name: 'Tabs', slug: 'tabs' },
      { name: 'Pagination', slug: 'pagination' },
      { name: 'Breadcrumb', slug: 'breadcrumb' },
    ],
  },
  {
    name: 'Layout',
    components: [
      { name: 'Card', slug: 'card' },
      { name: 'Separator', slug: 'separator' },
      { name: 'Accordion', slug: 'accordion' },
      { name: 'Collapsible', slug: 'collapsible' },
    ],
  },
  {
    name: 'Feedback',
    components: [
      { name: 'Alert', slug: 'alert' },
      { name: 'Progress', slug: 'progress' },
    ],
  },
];

export function ShowcaseIndex() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Package size={40} className="text-cyber-blue" />
          <h1 className="text-5xl font-black tracking-tight text-cyber-blue uppercase">
            Component Showcases
          </h1>
        </div>
        <p className="text-cyber-blue/60 tracking-wider">
          Explore all components across 19 design versions with interactive controls
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-cyber-panel/30 border border-cyber-blue/30 p-6 rounded-lg backdrop-blur-sm hover:border-cyber-blue/50 transition-all"
          >
            {/* Category Title */}
            <h2 className="text-xl font-black text-cyber-blue uppercase tracking-wider mb-4">
              {category.name}
            </h2>

            {/* Component Links */}
            <div className="space-y-2">
              {category.components.map((component) => (
                <Link
                  key={component.slug}
                  to={`/ui/${component.slug}`}
                  className="group flex items-center justify-between p-3 bg-cyber-panel/30 border border-cyber-blue/20 hover:border-cyber-blue/40 hover:bg-cyber-blue/5 transition-all"
                >
                  <span className="text-sm font-bold text-cyber-blue/80 group-hover:text-cyber-blue uppercase tracking-wider">
                    {component.name}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-cyber-blue/40 group-hover:text-cyber-blue group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-xs text-cyber-blue/40 tracking-widest uppercase">
          More showcases coming soon • 62+ components total
        </p>
      </motion.div>
    </div>
  );
}

export default ShowcaseIndex;
