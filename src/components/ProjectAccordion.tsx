import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowUpRight, X, LayoutGrid, Palette, Video, Box, User, Mail, Link as LinkIcon, Calendar, Tag, Briefcase } from 'lucide-react';
import { useState, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  date: string;
  client: string;
  link: string;
  linkText?: string;
  description: string;
  images: string[];
  isWhiteBg?: boolean;
}

function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [errorCount, setErrorCount] = useState(0);
  
  const seed = useMemo(() => {
    let hash = 0;
    if (!src) return 0;
    for (let i = 0; i < src.length; i++) {
      hash = src.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 1000;
  }, [src]);

  const fallbackUrl = `https://picsum.photos/seed/design-${seed}/1200/800`;

  if (errorCount >= 2) {
    return (
      <div className={`w-full h-full min-h-[300px] bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-8 border border-zinc-805 text-center ${className || ''}`}>
        <div className="w-12 h-12 rounded-full bg-zinc-850 flex items-center justify-center mb-3">
          <Palette className="text-zinc-500" size={20} />
        </div>
        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">IMAGE IN DEVELOPMENT</span>
        <span className="font-mono text-[9px] text-zinc-600 uppercase block max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={errorCount === 1 ? fallbackUrl : src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => {
        setErrorCount(prev => prev + 1);
      }}
    />
  );
}

const PROJECTS: Project[] = [
  // 大会视觉
  {
    id: '01',
    title: '2026腾讯设计周',
    category: '大会视觉',
    tags: ['主美', '主视觉KV', '网站设计', '物料监修', '字体设计', '图形设计'],
    year: '2026',
    date: '2026/05',
    client: '腾讯',
    link: 'https://tdw.tencent.com/',
    linkText: 'https://tdw.tencent.com/',
    description: '腾讯设计周几经地点变动，最后确定在2026年5月在滨海大厦举行。本人本次担当主美，负责主视觉kv、设计延展、设计规范制定、网站设计、场地设计、物料监修等。',
    images: [
      '/images/xjz1.jpg',
      '/images/xjz1.jpg',
      '/images/xjz2.jpg',
      '/images/xjz3.jpg',
      '/images/xjz4.jpg',
      '/images/xjz5.jpg',
      '/images/xjz6.jpg',
      '/images/xjz7.jpg',
      '/images/xjz8.jpg',
      '/images/xjz9.jpg',
      '/images/xjz10.jpg',
      '/images/xjz11.jpg',
      '/images/xjz12.jpg'
    ]
  },
  {
    id: '02',
    title: '设计周 有机生物',
    category: '大会视觉',
    tags: ['fxd', '设计周', '部门摊位', '展位策划', '活动策划', '主视觉'],
    year: '2025',
    date: '2025/11/15',
    client: '腾讯',
    link: '',
    description: 'fxd的主题是【可持续社会价值】，主视觉“有机生物”，表意是科学含义上的有机生物，另一方面指代我们的设计都像有生命一样循环往复。视觉灵感主题让人想到植物的循环，从种子到嫩芽，嫩芽开花，花谢了变成土，土再孕育出种子。互动环节，叫做有机领养，设计师提供闲置物品，观众用一个故事来交换，让物品在新主人手里获得新生，成为一个新的故事。是可持续社会价值下的可持续活动。',
    images: [
      '/images/yg1.jpg',
      '/images/yg1.jpg',
      '/images/yg2.jpg',
      '/images/yg3.jpg',
      '/images/yg4.jpg',
      '/images/yg5.jpg',
      '/images/yg6.jpg',
      '/images/yg7.jpg',
      '/images/yg8.jpg',
      '/images/yg9.jpg',
      '/images/yg10.jpg',
      '/images/yg11.jpg'
    ]
  },
  {
    id: '03',
    title: '设计周2019',
    category: '大会视觉',
    tags: ['产品设计', '3d打印', '模型设计', '手办制作'],
    year: '2019',
    date: '2019/08/10',
    client: '腾讯',
    link: '',
    description: '本人参加的第一个设计周，作为产品主美设计制作怪奇鹅的产品。对2019年的ipengoo来说，设计周的营收占全年很大一部分，所以团队很重视，提前一个月启动项目。这次的项目主题是【荧光】，推出的重要单品，是怪奇鹅手办，每个手办都手工喷涂，独一无二适合收藏，配合其他警示色主题单品。',
    images: [
      '/images/gxjz1.jpg',
      '/images/gxjz1.jpg',
      '/images/gxjz2.jpg',
      '/images/gxjz3.jpg',
      '/images/gxjz4.jpg',
      '/images/gxjz5.jpg'
    ]
  },
  // 泛文化价值
  {
    id: '04',
    title: '无处不儿童',
    category: '泛文化价值',
    tags: ['场地设计', '策划', '资源对接', '平面设计', '海报设计', '物料设计', '志愿者'],
    year: '2020',
    date: '2020/06/01',
    client: '腾讯公益',
    link: '',
    description: '壹基⾦与腾讯看点、FXD、Starry Color联合发起创益设计作品征集活动，通过公益创作为⾃闭症群体带来更多尊严和⼒量。同时⾯向C端⽤户推⼴，将创益作品做为互动传播⼩游戏的素材内容，引发⽤户参与传播公益活动。最后以线下展 / 出版物义卖来⽀援公益，达到社会融合的宣传⽬的。',
    isWhiteBg: true,
    images: [
      '/images/wuc1.jpg',
      '/images/wuc1.jpg',
      '/images/wuc2.jpg',
      '/images/wuc3.jpg',
      '/images/wuc4.jpg',
      '/images/wuc5.jpg',
      '/images/wuc6.jpg',
      '/images/wuc7.jpg',
      '/images/wuc8.jpg',
      '/images/wuc9.jpg',
      '/images/wuc10.jpg',
      '/images/wuc11.jpg',
      '/images/wuc12.jpg',
      '/images/wuc13.jpg',
      '/images/wuc14.jpg'
    ]
  },
  {
    id: '05',
    title: '虚拟人',
    category: '泛文化价值',
    tags: ['概念美术', '调研', '策略', '项目pm', '内容制作', '2d原画', '人物设定', '故事创意', '资源对接'],
    year: '2021',
    date: '2021/11/01',
    client: '腾讯',
    link: '',
    description: '2021年QQ浏览器品牌升级，目标是吸引有内容消费力的年轻优质用户，需要一个品牌IP文化符号，qb产品转型背后，折射出更加多次元的文化生态。传统吉祥物ip主要适合卖萌和视觉记忆，要完成高互动、沟通类新任务虚拟人更加合适。于是超写实虚拟人项目成立。',
    images: [
      '/images/LUO1.jpg',
      '/images/LUO1.jpg',
      '/images/LUO2.jpg',
      '/images/LUO3.jpg',
      '/images/LUO4.jpg',
      '/images/LUO5.jpg',
      '/images/LUO6.jpg',
      '/images/LUO7.jpg',
      '/images/LUO8.jpg',
      '/images/LUO9.jpg',
      '/images/LUO10.jpg',
      '/images/LUO11.jpg',
      '/images/LUO12.jpg',
      '/images/LUO13.jpg',
      '/images/LUO14.jpg',
      '/images/LUO15.jpg',
      '/images/LUO16.jpg'
    ]
  },
  {
    id: '06',
    title: '鹅厂女生节',
    category: '泛文化价值',
    tags: ['主美', '形象设计', '概念设计', '包装设计', '产品制作'],
    year: '2020',
    date: '2020/03/08',
    client: '腾讯',
    link: '',
    description: '就是从这次开始，公司的节日礼品变成了AB两款，要感谢行政同学大力支持，事实也证明AB款受欢迎程度。本次的主题是【健康并性感】希望每个女孩拥有美丽和健康的体魄。设计了金榜芭比鹅的形象。',
    images: [
      '/images/nvs3.jpg',
      '/images/nvs1.jpg',
      '/images/nvs2.jpg',
      '/images/nvs3.jpg',
      '/images/nvs4.jpg',
      '/images/nvs5.jpg',
      '/images/nvs6.jpg'
    ]
  },
  {
    id: '07',
    title: '鹅厂女生节 2',
    category: '泛文化价值',
    tags: ['产品制作', '包装设计'],
    year: '2021',
    date: '2021/03/08',
    client: '腾讯',
    link: '',
    description: '这次的设计主题是【轻松旅行】设计一款莫兰迪配色和一款品牌主题色，2只洗漱包用当下很新的杜邦纸材质，和软质首饰袋，让每个女孩出行优雅又美丽。',
    isWhiteBg: true,
    images: [
      '/images/nvs12.jpg',
      '/images/nvs11.jpg',
      '/images/nvs12.jpg',
      '/images/nvs13.jpg',
      '/images/nvs14.jpg'
    ]
  },
  {
    id: '08',
    title: '鹅厂儿童节',
    category: '泛文化价值',
    tags: ['主美', '产品设计', '包装设计', '产品制作', '绘本创作', '教程创作'],
    year: '2018',
    date: '2018/06/01',
    client: '腾讯',
    link: '',
    description: '公司礼品首次和starry color公益品牌合作，为星星的孩子发声。产品主视觉来源于星星的孩子在艺术疗愈课程中创作的作品，由设计师再创而来。整个画具盒附带一本故事绘本，和画具使用说明。',
    isWhiteBg: true,
    images: [
      '/images/etj8.jpg',
      '/images/etj1.jpg',
      '/images/etj2.jpg',
      '/images/etj3.jpg',
      '/images/etj4.jpg',
      '/images/etj5.jpg',
      '/images/etj6.jpg',
      '/images/etj7.jpg',
      '/images/etj8.jpg',
      '/images/etj9.jpg',
      '/images/etj10.jpg'
    ]
  },
  // 品牌设计
  {
    id: '09',
    title: 'IPENGOO STICKERS',
    category: '品牌设计',
    tags: ['美术', '产品制作', '游戏制作', '项目合作'],
    year: '2024',
    date: '2024/10/05',
    client: 'IPENGOO',
    link: '',
    description: '怪奇鹅日常积累素材，由各大节日节点，和有趣的运营节点。包含万圣节、圣诞节、娱乐热点、周年小游戏、跨年创意、健身协会合作等。',
    images: [
      '/images/is1.jpg',
      '/images/is1.jpg',
      '/images/is2.jpg',
      '/images/is3.jpg',
      '/images/is4.jpg',
      '/images/is4-1.jpg',
      '/images/is5.jpg'
    ]
  },
  {
    id: '10',
    title: 'IPENGOO X 腾讯视频',
    category: '品牌设计',
    tags: ['行星', 'BBC', '主美', '外星人流行文化'],
    year: '2019',
    date: '2019/11/20',
    client: '腾讯视频',
    link: '',
    description: '和腾讯视频纪录片【行星】的合作非常契合品牌调性，特地绘制超长跨屏壁纸，在主视觉中藏着众多与宇宙相关的流行文化符号彩蛋。你能找到几个？',
    images: [
      '/images/ix3.jpg',
      '/images/ix1.jpg',
      '/images/ix2.jpg',
      '/images/ix3.jpg',
      '/images/ix4.jpg',
      '/images/ix5.jpg',
      '/images/ix6.jpg'
    ]
  },
  {
    id: '11',
    title: '品牌视觉',
    category: '品牌设计',
    tags: ['品牌', 'IP', '视觉'],
    year: '2020',
    date: '2020/12/15',
    client: '怪奇鹅',
    link: '',
    description: '品牌调性视觉积累，传达品牌自由、流行、小众文化的品牌调性。',
    images: [
      '/images/gp2.jpg',
      '/images/gp1.jpg',
      '/images/gp2.jpg',
      '/images/gp3.jpg',
      '/images/gp4.jpg',
      '/images/gp5.jpg',
      '/images/gp6.jpg',
      '/images/gp7.jpg'
    ]
  },
  {
    id: '12',
    title: '品牌传播',
    category: '品牌设计',
    tags: ['品牌设计', '产品设计', '品牌对接'],
    year: '2020',
    date: '2020/01/20',
    client: '怪奇鹅',
    link: '',
    description: '怪奇鹅和他的好朋友们的合作大回顾：草莓音乐节、妈妈制造、vans、酷玩节。',
    images: [
      '/images/gc1.jpg',
      '/images/gc1.jpg',
      '/images/gc2.jpg',
      '/images/gc3.jpg',
      '/images/gc4.jpg',
      '/images/gc5.jpg',
      '/images/gc6.jpg'
    ]
  },
  // APP 项目
  {
    id: '13',
    title: 'AI 高考传播',
    category: 'APP 项目',
    tags: ['AI', '高考', 'UI/UX'],
    year: '2025',
    date: '2025/06/07',
    client: '腾讯应用',
    link: '空白',
    description: 'AI 高考辅助功能传播视觉设计。',
    isWhiteBg: true,
    images: [
      '/images/gk2.jpg',
      '/images/gk1.jpg',
      '/images/gk2.jpg',
      '/images/gk3.jpg',
      '/images/gk4.jpg',
      '/images/gk5.jpg',
      '/images/gk6.jpg',
      '/images/gk7.jpg',
      '/images/gk8.jpg'
    ]
  },
  {
    id: '14',
    title: '新年主视觉',
    category: 'APP 项目',
    tags: ['春节', '新年', '主视觉'],
    year: '2025',
    date: '2025/01/01',
    client: '腾讯应用',
    link: '空白',
    description: '新年主题活动主视觉设计。',
    images: [
      '/images/xncover.jpg',
      '/images/xn1.jpg',
      '/images/xn2.jpg',
      '/images/xn3.jpg',
      '/images/xn4.jpg',
      '/images/xn5.jpg'
    ]
  },
  {
    id: '15',
    title: '出行赏春',
    category: 'APP 项目',
    tags: ['视觉主美', 'UI视觉', '运营设计'],
    year: '2025',
    date: '2025',
    client: 'QQ浏览器',
    link: 'https://m.sogou.com/web/searchList.jsp?keyword=%E6%B7%B1%E5%9C%B3%E5%8E%BB%E5%93%AA%E5%84%BF&flowerInfo=%7B%22tab%22%3A%22%E6%98%A5%E6%97%A5%E8%B5%8F%E8%8A%B1%E6%BC%AB%E6%B8%B8%22%2C%22center%22%3A%22%2C%22%2C%22zoom%22%3A0%2C%22sight%22%3A%22%22%7D&s_from=qb_share&IPLOC=CN4403&shareTitle=%E4%BB%8A%E6%97%A5%E6%B7%B1%E5%9C%B3%E6%98%A5%E6%97%A5%E8%B5%8F%E8%8A%B1%E6%BC%AB%E6%B8%B8%E6%8E%A8%E8%8D%90%EF%BC%81&shareDesc=5.20%E6%9C%80%E4%BD%B3%E5%87%BA%E6%B8%B8%E5%9C%B0%E6%8E%A8%E8%8D%90%EF%BC%9A%E7%8E%89%E9%BE%99%E5%85%AC%E5%9B%AD%E3%80%81%E7%94%98%E5%9D%91%E5%8F%A4%E9%95%87%E3%80%81%E6%A2%A7%E6%A1%90%E5%B1%B1&channel_id=1100125310&pos_id=92909&buis_id=ST001&_sharecom_pb=11046701friend&pid=sogou-waps-d0e7b521c18b0987',
    linkText: '今日深圳春日赏花漫游推荐！',
    description: '出行项目是qq浏览器一个持续运营项目，从项目搭建到后期运营，负责视觉主美参与，负责视觉风格调性、UI视觉、运营工作。春季出行是其中比较成熟比较成体系的季节专题运营。如今因为AI的改变，出行项目也在重新策划中。',
    images: [
      '/images/cx5.png', // 封面图（此项仅作为卡片封面图，不显示在详情内容大图中）
      '/images/cx1.jpg',
      '/images/cx2.jpg',
      '/images/cx3.jpg',
      '/images/cx4.jpg',
    ]
  },
  // 个人项目
  {
    id: '16',
    title: '个人项目',
    category: '个人项目',
    tags: ['试验', '艺术', '个人'],
    year: '年轻那会儿',
    date: '年轻那会儿',
    client: '个人',
    link: '',
    description: '看看就好的涂鸦作品，和项目合作。',
    images: [
      '/images/gr2.jpg',
      '/images/gr1.jpg',
      '/images/gr2.jpg',
      '/images/gr3.jpg',
      '/images/gr4.jpg'
    ]
  }
];

const CATEGORIES = [
  { name: '项目总览', color: 'bg-zinc-800' },
  { name: '大会视觉' },
  { name: '泛文化价值' },
  { name: '品牌设计' },
  { name: 'APP 项目' },
  { name: '个人项目' },
];

export default function ProjectAccordion() {
  const [activeCategory, setActiveCategory] = useState('项目总览');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === '项目总览') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="bg-studio-bg px-0 flex flex-col lg:flex-row relative">
      
      {/* Categories - Mobile & Desktop */}
      <div className="flex w-full lg:w-80 flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-studio-border bg-black shrink-0">
        <div className="flex-1">
          {CATEGORIES.map((cat, index) => {
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full h-16 lg:h-20 flex items-center justify-between px-8 lg:px-10 transition-all duration-300 group relative ${
                  activeCategory === cat.name 
                    ? 'bg-zinc-800 text-white' 
                    : 'bg-black text-white/40 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-sm lg:text-base font-black uppercase tracking-widest transition-all duration-500 ${
                    activeCategory === cat.name ? 'translate-x-2' : ''
                  }`}>
                    {cat.name}
                  </span>
                </div>
                
                <div className="flex items-center justify-center">
                  {activeCategory === cat.name ? (
                    <div className="w-2 h-2 rounded-full bg-studio-orange animate-pulse" />
                  ) : (
                    <Plus size={18} className="text-white/10 group-hover:text-white group-hover:rotate-90 transition-all duration-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>


      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 lg:p-16">
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#1a1a1a] rounded-sm overflow-hidden transition-all duration-500 hover:bg-[#222] shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-2xl"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <ProjectImage 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />

                <div className="absolute bottom-6 right-6 bg-zinc-800 text-white px-4 py-2 font-mono text-[12px] font-black">
                  {project.category}
                </div>
              </div>
              
              <div className="px-6 py-6 lg:px-8 lg:py-8 bg-[#1a1a1a] group-hover:bg-[#222] transition-colors duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-mono text-[10px] opacity-40 uppercase block mb-2">CLIENT_{project.client}</span>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[12px] font-black font-mono bg-zinc-800 text-white/60 px-2 py-0.5 uppercase">#{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center lg:p-12 p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full max-w-[960px] h-full lg:h-[90vh] border-2 overflow-y-auto no-scrollbar scroll-smooth transition-colors duration-300 ${
                selectedProject.isWhiteBg 
                  ? 'bg-white border-zinc-200 text-zinc-900' 
                  : 'bg-studio-bg border-studio-border text-studio-text'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-10 right-10 z-50">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className={`p-4 transition-colors rounded-full ${
                    selectedProject.isWhiteBg
                      ? 'bg-zinc-100 text-black hover:bg-zinc-200 shadow-sm border border-zinc-200'
                      : 'bg-studio-text text-black hover:bg-studio-blue'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col min-h-full">
                {/* Header Info */}
                <div className={`p-6 lg:p-8 transition-colors duration-300 ${
                  selectedProject.isWhiteBg ? 'bg-white' : 'bg-studio-bg'
                }`}>
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-[40px] font-bold mb-6 tracking-tight leading-tight">
                      {selectedProject.title}
                    </h2>

                    <div className="space-y-3">
                      <div className="flex items-start gap-8">
                        <div className={`w-32 flex items-center gap-2 shrink-0 py-1 ${
                          selectedProject.isWhiteBg ? 'text-zinc-400' : 'text-studio-text/40'
                        }`}>
                          <LayoutGrid size={14} />
                          <span className="font-mono text-[10px] uppercase tracking-wider">项目简介</span>
                        </div>
                        <div className={`text-sm leading-relaxed ${
                          selectedProject.isWhiteBg ? 'text-zinc-650' : 'text-studio-text/60'
                        }`}>
                          {selectedProject.description || '空白'}
                        </div>
                      </div>

                      <div className="flex items-start gap-8">
                        <div className={`w-32 flex items-center gap-2 shrink-0 py-1 ${
                          selectedProject.isWhiteBg ? 'text-zinc-400' : 'text-studio-text/40'
                        }`}>
                          <Tag size={14} />
                          <span className="font-mono text-[10px] uppercase tracking-wider">Tags</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map(tag => (
                            <span 
                              key={tag} 
                              className={`px-1.5 py-0.5 font-mono text-[12px] font-bold rounded-sm ${
                                selectedProject.isWhiteBg
                                  ? 'bg-zinc-100 text-zinc-700 border border-zinc-250'
                                  : 'bg-studio-accent text-studio-text'
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-8">
                        <div className={`w-32 flex items-center gap-2 shrink-0 py-1 ${
                          selectedProject.isWhiteBg ? 'text-zinc-400' : 'text-studio-text/40'
                        }`}>
                          <Calendar size={14} />
                          <span className="font-mono text-[10px] uppercase tracking-wider">项目时间</span>
                        </div>
                        <div className={`text-sm font-medium ${
                          selectedProject.isWhiteBg ? 'text-zinc-800' : 'text-studio-text'
                        }`}>
                          {selectedProject.date}
                        </div>
                      </div>

                      {selectedProject.link && selectedProject.link !== '空白' && (
                        <div className="flex items-start gap-8">
                          <div className={`w-32 flex items-center gap-2 shrink-0 py-1 ${
                            selectedProject.isWhiteBg ? 'text-zinc-400' : 'text-studio-text/40'
                          }`}>
                            <LinkIcon size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-wider">网址</span>
                          </div>
                          <div className="text-sm font-medium">
                            <a 
                              href={selectedProject.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`underline font-semibold transition-all break-all ${
                                selectedProject.isWhiteBg
                                  ? 'text-blue-600 hover:text-blue-500 decoration-blue-600'
                                  : 'text-blue-500 hover:text-blue-400 decoration-blue-500'
                              }`}
                            >
                              {selectedProject.linkText || selectedProject.link}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Images */}
                <div className={`p-0 space-y-1 ${
                  selectedProject.isWhiteBg ? 'bg-zinc-100' : 'bg-studio-border'
                }`}>
                  <div className={`flex flex-col items-center p-8 transition-colors duration-300 ${
                    selectedProject.isWhiteBg ? 'bg-white' : 'bg-studio-bg'
                  }`}>
                    <div className="max-w-3xl w-full space-y-12 py-12">
                      {selectedProject.images.slice(1).map((img, idx) => (
                        <div key={idx} className="shadow-2xl">
                          <ProjectImage 
                            src={img} 
                            alt={`${selectedProject.title} ${idx}`}
                            className="w-full h-auto object-cover transition-all duration-1000"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`py-12 flex flex-col items-center relative overflow-hidden border-t transition-colors duration-300 ${
                    selectedProject.isWhiteBg 
                      ? 'bg-zinc-50 border-zinc-200 text-zinc-900' 
                      : 'bg-studio-bg text-studio-text border-studio-border'
                  }`}>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className={`relative z-10 px-6 py-3 border font-bold uppercase italic tracking-widest transition-all text-sm group ${
                        selectedProject.isWhiteBg
                          ? 'border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white'
                          : 'border-studio-text text-studio-text hover:bg-studio-blue hover:text-black'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        返回主页 / EXIT_ <ArrowUpRight size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
