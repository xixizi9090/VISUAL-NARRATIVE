import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '作品录', href: '#' },
    { name: '项目归档', href: '#products' },
    { name: '关于工作室', href: '#about' },
    { name: '联系我们', href: '#contact', special: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-0 flex justify-between h-20 items-stretch bg-studio-bg border-b-2 border-studio-border">
      <div className="flex items-center px-8 border-r-2 border-studio-border group cursor-pointer bg-studio-blue">
        <span className="font-bold text-2xl tracking-tighter uppercase text-studio-bg">
          AETERNA<span className="opacity-50"> STUDIO</span>
        </span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-stretch text-[10px] tracking-[0.3em] font-bold uppercase transition-all">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center px-10 border-r-2 border-studio-border hover:bg-studio-blue hover:text-studio-bg transition-colors ${
              link.special ? 'bg-studio-orange text-studio-bg hover:bg-studio-orange/80' : 'text-studio-text'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex items-center px-8 border-l-2 border-studio-border font-mono text-[9px] opacity-40">
        状态: 系统在线 / ONLINE
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-stretch">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 flex items-center justify-center border-l-2 border-studio-border bg-studio-orange"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:hidden absolute top-full left-6 right-6 mt-4 bg-studio-header border border-studio-border p-6 pointer-events-auto"
        >
          <div className="flex flex-col gap-6 text-[10px] tracking-[0.3em] uppercase font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`pb-2 border-b border-studio-border last:border-0 ${
                  link.special ? 'text-studio-blue' : 'text-studio-text'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
