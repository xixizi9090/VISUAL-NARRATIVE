import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative px-0 flex flex-col overflow-hidden bg-studio-bg">
      {/* 1. Visual Narrative Title - Blue Block */}
      <div className="bg-studio-blue h-[115px] px-0 border-b-2 border-studio-border relative overflow-hidden flex items-end">
        {/* The Slice Line */}
        <div className="absolute top-[55%] left-0 w-full h-[10px] bg-studio-blue z-20"></div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ skewX: -12 }}
          transition={{ 
            y: { duration: 0.8, ease: "easeOut" },
            skewX: { type: "spring", stiffness: 300, damping: 20 }
          }}
          className="text-[130px] leading-[0.7] uppercase font-bold tracking-[-0.05em] flex gap-x-8 text-[#1a1a1a] select-none whitespace-nowrap px-4 cursor-default relative z-10"
          style={{ 
            textShadow: '-3px -4px 0px white'
          }}
        >
          <span className="flex items-baseline">VISUAL</span>
          <span className="flex items-baseline">NARRATIVE</span>
          <span className="opacity-40 text-[130px] flex items-baseline relative">
            VISTA
          </span>
        </motion.h1>
        
        <div className="absolute top-4 right-6 font-mono text-[9px] text-right text-black/50 space-y-0.5 pointer-events-none z-30">
          <p>DESIGN_DAILY</p>
          <p>INSPIRATION</p>
        </div>
      </div>

      {/* 2. Red Ticker Bar */}
      <div className="bg-studio-orange h-[53px] border-b-2 border-studio-border overflow-hidden whitespace-nowrap flex items-center">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center font-black tracking-widest uppercase text-[20px] text-black"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span>DESIGN_PROCESS🌟</span>
              <span>CREATIVE_FLOW🦄</span>
              <span>UNIQUE_STYLE✍️</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex-none flex flex-col h-[360px]">
        {/* 3. Sentient Drive Section & Side blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-studio-border h-full">
          {/* Main Left Block: Sentient Drive */}
          <div className="lg:col-span-8 border-r-0 lg:border-r-2 border-studio-border p-10 flex flex-col justify-end relative overflow-hidden group/hero bg-studio-bg h-full">
            {/* High-performance CSS grid background with ambient gradient */}
            <div className="absolute inset-0 opacity-20 dot-bg pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-transparent to-transparent pointer-events-none" />
            
            {/* About Me Content */}
            <div className="relative z-10 mb-auto pt-6 flex flex-col md:flex-row gap-8 md:gap-20">
              <div className="md:w-1/2 flex md:justify-end items-start pt-1">
                <h2 className="text-studio-blue font-mono uppercase tracking-[0.2em] text-[16px] font-bold">about me</h2>
              </div>
              <div className="md:w-1/2 text-studio-text opacity-70 text-[14px] leading-relaxed space-y-1 font-medium">
                <p>初熹 cissiechu 1990。</p>
                <p>视觉、平面、品牌、UX</p>
                <p>中国美术学院</p>
                <p>具有品牌创意、活动策划、项目owner等经验。</p>
                <p className="mt-4">服务部门：鹅厂 ISUX / CDC / FXD / 现于ARTIPS</p>
              </div>
            </div>
            
            <div className="flex justify-between items-end relative z-10 pointer-events-none w-full pb-0">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-studio-blue/60 block mb-2">PROJECT:</span>
                <div className="text-[80px] font-bold uppercase leading-[0.8] text-studio-blue tracking-tighter relative">
                  <div className="mb-[-5px]">设计驱动</div>
                  <div className="flex items-baseline -mt-2">
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-12 mb-2">
                <div className="max-w-[400px] text-right">
                  <p className="text-[14px] font-bold font-serif italic leading-tight text-studio-text opacity-40">
                    在有序的数字网格中，探索无序的视觉表达。<br />为品牌与个人提供深度定制的视觉解决方案。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 grid-rows-3 divide-y-2 divide-studio-border h-full overflow-hidden">
            <div className="px-8 flex flex-col justify-center items-start bg-studio-green text-white relative">
              <div className="space-y-0.5">
                <h4 className="text-xl font-bold uppercase tracking-tight">BRAND IDENTITY SYSTEM</h4>
              </div>
            </div>
            <div className="px-8 flex flex-col justify-center items-start bg-studio-blue text-black relative">
              <div className="space-y-0.5">
                <h4 className="text-xl font-bold uppercase tracking-tight">MOTION GRAPHICS & DESIGN</h4>
              </div>
            </div>
            <div className="px-8 flex flex-col justify-center items-start bg-studio-beige text-black relative">
              <div className="space-y-0.5">
                <h4 className="text-xl font-bold uppercase tracking-tight">NARRATIVE ILLUSTRATION</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
