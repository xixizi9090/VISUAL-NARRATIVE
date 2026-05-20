import { motion } from 'motion/react';

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] border-t-2 border-studio-border/30 min-h-[100px] py-6 lg:py-0 flex items-center px-8 lg:px-16 text-white relative z-50">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 lg:gap-0 font-mono">
        {/* Primary Lead */}
        <div className="flex items-center gap-6">
          <div className="bg-studio-blue px-4 py-1.5 transform -skew-x-12 flex items-center gap-2 shrink-0">
            <span className="text-black font-black text-[18px] lg:text-[20px] block skew-x-12 whitespace-nowrap">联系我吧 / INQUIRY</span>
          </div>
          <div className="flex flex-col justify-center whitespace-nowrap">
            <span className="opacity-40 text-[10px] tracking-widest uppercase">LOCATION: SHENZHEN</span>
            <span className="text-[14px] font-bold">工作地点：深圳</span>
          </div>
        </div>

        {/* Contact Matrix */}
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-14">
          <div className="flex flex-col items-center lg:items-start">
            <span className="opacity-30 text-[9px] mb-1 uppercase tracking-tighter">WECHAT / 微信</span>
            <span className="text-[18px] lg:text-[20px] font-bold tracking-tight whitespace-nowrap">xixiziture</span>
          </div>
          
          <div className="hidden lg:block w-[1px] h-10 bg-white/10" />
          
          <div className="flex flex-col items-center lg:items-start">
            <span className="opacity-30 text-[9px] mb-1 uppercase tracking-tighter">EMAIL / 邮箱</span>
            <span className="text-[18px] lg:text-[20px] font-bold tracking-tight whitespace-nowrap">735955687@qq.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
