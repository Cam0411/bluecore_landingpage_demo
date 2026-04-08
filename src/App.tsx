import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { 
  ChevronRight, Play, ShieldCheck, Zap, Database, Search, Facebook, Mail, CheckCircle2, PieChart, LineChart, BarChart, List, ArrowUpRight, Sparkles, User, ArrowDown, Network, LayoutDashboard, Cpu, Package, Users, Megaphone,
  Info, FileText, Box, DollarSign, Briefcase, Target, Globe,
  Workflow, Link as LinkIcon, TrendingUp, Layers, RefreshCw, ShoppingCart, Share2, MessageSquare
} from "lucide-react";
import React, { useRef, useState } from "react";

export const FloatingDroplet = ({ delay = 0, top = "10%", left = "10%", size = 40 }: { delay?: number, top?: string, left?: string, size?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 10, 0], 
      x: [0, 15, -10, 0],
      opacity: [0.15, 0.4, 0.15], 
      scale: [1, 1.05, 1] 
    }}
    transition={{ 
      duration: 12 + Math.random() * 4, 
      repeat: Infinity, 
      delay, 
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none z-10"
    style={{ top, left, width: size, height: size }}
  >
    <div className="w-full h-full bg-blue-500/20 rounded-full blur-2xl" />
  </motion.div>
);

export const SmallGlow = ({ top, left, size = 300, delay = 0, opacity = 0.4, src = "https://ik.imagekit.io/39wvgoqre/Group%207.png" }: { top: string, left: string, size?: number, delay?: number, opacity?: number, src?: string }) => (
  <motion.img
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ 
      opacity: [opacity * 0.6, opacity, opacity * 0.6], 
      scale: [1, 1.03, 1],
      rotate: [0, 360]
    }}
    transition={{ 
      opacity: { duration: 15, repeat: Infinity, ease: "easeInOut", delay },
      scale: { duration: 15, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 60, repeat: Infinity, ease: "linear", delay }
    }}
    viewport={{ once: true }}
    src={src}
    alt="Glow Element"
    className="absolute pointer-events-none blur-[100px] z-0"
    style={{ top, left, width: size, height: size }}
    referrerPolicy="no-referrer"
  />
);

const NetworkNode = ({ top, left, title, value, align = "left", delay = 0 }: { top: string, left: string, title: string, value: string, align?: "left" | "right", delay?: number }) => (
  <motion.div 
    className={`absolute hidden md:flex flex-col ${align === 'right' ? 'items-end' : 'items-start'} z-20`}
    style={{ top, left }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1, ease: "easeOut" }}
  >
    <div className="flex items-center gap-2 mb-1 relative">
      <div className={`absolute top-1/2 -translate-y-1/2 ${align === 'right' ? 'right-full mr-2' : 'left-full ml-2'} w-32 h-[1px] bg-gradient-to-${align === 'right' ? 'r' : 'l'} from-blue-500/30 to-transparent`} />
      {align === 'right' && <span className="text-gray-600 text-sm tracking-wider font-medium">{title}</span>}
      <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] relative z-10" />
      {align === 'left' && <span className="text-gray-600 text-sm tracking-wider font-medium">{title}</span>}
    </div>
    <div className={`text-blue-600/80 font-mono text-xs ${align === 'right' ? 'mr-4' : 'ml-4'}`}>
      {value}
    </div>
  </motion.div>
);

const VerticalLines = () => (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-12 h-64 z-0 opacity-40">
    {[1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent relative"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: i * 0.2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-blue-400 blur-[1px]"
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 2 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
        />
      </motion.div>
    ))}
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 px-6 shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-md shadow-blue-500/20">
          <Database className="text-white w-4 h-4" />
        </div>
        <span className="text-lg font-bold tracking-tight text-gray-900 hidden sm:block">BLUECORE</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {["Trang chủ", "Giải pháp", "Báo cáo", "Bảng giá", "FAQ"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            {item}
          </a>
        ))}
        <div className="w-[1px] h-4 bg-gray-300" />
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 flex items-center gap-1">
          Bảo mật <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-50 flex items-center overflow-hidden pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <SmallGlow top="-10%" left="40%" size={1000} opacity={0.3} delay={0} src="https://ik.imagekit.io/39wvgoqre/Group%207.png" />
        <SmallGlow top="50%" left="-10%" size={800} opacity={0.2} delay={2} src="https://ik.imagekit.io/39wvgoqre/Ellipse%201%20(3).png?tr=w-400" />
        
        <FloatingDroplet top="20%" left="45%" size={80} delay={0} />
        <FloatingDroplet top="60%" left="10%" size={120} delay={1.5} />
        <FloatingDroplet top="80%" left="50%" size={60} delay={3} />

        <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-10" />
      </div>

      <VerticalLines />

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Text Column */}
        <div className="lg:col-span-5 text-left pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Nền tảng phân tích dữ liệu</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]"
          >
            Chỉ một chạm để <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Làm chủ Dữ liệu</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-xl mb-10 font-medium leading-relaxed"
          >
            Giải pháp thông minh về phân tích dữ liệu bán hàng đa kênh. Tổng hợp dữ liệu từ mọi nguồn về một nơi, giúp doanh nghiệp bứt phá doanh thu với hệ thống báo cáo trực quan.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="https://bit.ly/bluecore-register-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group"
            >
              Bắt đầu ngay <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="w-full sm:w-auto bg-white border border-gray-200 shadow-sm text-gray-900 px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-current" /> Xem Demo
            </button>
          </motion.div>
          
          {/* Stats/Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-8"
          >
            <div>
              <div className="text-2xl font-black text-gray-900">99.9%</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Uptime</div>
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            <div>
              <div className="text-2xl font-black text-gray-900">50+</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Tích hợp</div>
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            <div>
              <div className="text-2xl font-black text-gray-900">24/7</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Hỗ trợ</div>
            </div>
          </motion.div>
        </div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="lg:col-span-7 relative w-full mt-16 lg:mt-0"
        >
          <div className="relative w-full flex items-center justify-center">
            {/* Network Nodes positioned around the laptop */}
            <NetworkNode top="5%" left="-5%" title="ETL Engine" value="20.945 MB/s" align="left" delay={0.8} />
            <NetworkNode top="75%" left="-10%" title="Data Warehouse" value="19.346 TB" align="left" delay={1.0} />
            <NetworkNode top="10%" left="80%" title="BI System" value="2.945 Reports" align="right" delay={1.2} />
            <NetworkNode top="70%" left="85%" title="Machine Learning" value="440 Models" align="right" delay={1.4} />

            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://ik.imagekit.io/39wvgoqre/ZenBook%20Duo%2014.png?updatedAt=1775374156217" 
              alt="Bluecore Dashboard Mockup" 
              className="w-full h-auto scale-110 lg:scale-125 lg:origin-left drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = () => (
  <section id="giải pháp" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Hệ sinh thái Toàn diện</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
          Kết hợp ETL, Data Warehouse và BI System thành một luồng dữ liệu khép kín.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 rounded-[2.5rem] p-10 relative overflow-hidden group bg-slate-50 border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/20 transition-colors duration-500" />
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-blue-600 group-hover:scale-110">
            <Network className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Network className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">ETL (Integration)</h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-10 font-medium">
              Thu thập dữ liệu từ mọi kênh: KiotViet, Haravan, Sapo, Shopee, Lazada, Tiki, Facebook, Tiktok, Google Ads... Đưa tất cả về một nơi duy nhất.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Ecommerce", "Marketing", "Social", "CRM"].map(tag => (
                <span key={tag} className="px-5 py-2 rounded-full bg-white border border-gray-200 text-xs text-gray-700 font-bold shadow-sm">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="rounded-[2.5rem] p-10 flex flex-col justify-between group bg-slate-50 border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Database className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Warehouse</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Lưu trữ an toàn trên Google Cloud & BigQuery. Dữ liệu được sắp xếp, phân loại khoa học.
            </p>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between relative z-10">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Enterprise Grade</span>
            <ShieldCheck className="w-5 h-5 text-blue-600" />
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="rounded-[2.5rem] p-10 flex flex-col justify-between group bg-slate-50 border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <LayoutDashboard className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">BI System</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Sử dụng METABASE để khám phá dữ liệu. Tạo báo cáo chi tiết, drill-down số liệu.
            </p>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex gap-2 items-end h-8">
              {[40, 70, 45, 90, 60].map((h, i) => (
                <motion.div 
                  key={i} 
                  className="w-full bg-blue-200 rounded-t-sm group-hover:bg-blue-500 transition-colors duration-300" 
                  style={{ height: `${h}%` }}
                  animate={{ height: ['20%', `${h}%`, '20%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 rounded-[2.5rem] p-10 relative overflow-hidden group bg-slate-50 border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
        >
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Machine Learning</h3>
              <p className="text-gray-600 text-base leading-relaxed font-medium">
                Recommend sản phẩm, xử lý ngôn từ tự nhiên (NLP), đánh giá cảm xúc khách hàng dựa trên nền tảng Google Cloud hiện đại.
              </p>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-5 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="p-2 bg-blue-50 rounded-lg"><Zap className="w-5 h-5 text-blue-600" /></div>
                <span className="text-sm font-bold text-gray-800">Automation Marketing</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-5 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                <div className="p-2 bg-purple-50 rounded-lg"><Search className="w-5 h-5 text-purple-600" /></div>
                <span className="text-sm font-bold text-gray-800">Analytic Service</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ReportSection = () => (
  <section id="báo cáo" className="py-32 relative bg-slate-50 overflow-hidden border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Báo cáo Đa dạng & Trực quan
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium">Dữ liệu được làm mới vào 0H mỗi ngày. Trải nghiệm báo cáo dễ hiểu - cập nhật liên tục - có thể so sánh.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: List, label: "Danh sách" },
            { icon: BarChart, label: "Biểu đồ cột" },
            { icon: LineChart, label: "Biểu đồ đường" },
            { icon: PieChart, label: "Biểu đồ tròn" }
          ].map((t, i) => (
            <div key={i} className="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm flex items-center gap-2 text-xs font-medium text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer">
              <t.icon className="w-3 h-3 text-blue-500" /> {t.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "Sản phẩm & Tồn kho", 
            icon: Package, 
            items: ["Sản phẩm bán chạy/kém nhất", "Doanh thu theo nhóm sản phẩm", "Cảnh báo hàng tồn kho", "Sản phẩm bị hủy/hoàn trả"],
            chart: (
              <div className="h-24 mt-6 flex items-end gap-2">
                {[30, 50, 40, 70, 50, 80, 60].map((h, i) => (
                  <motion.div key={i} className="flex-1 bg-blue-100 rounded-t-md relative group"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-md" />
                  </motion.div>
                ))}
              </div>
            )
          },
          { 
            title: "Khách hàng & Doanh thu", 
            icon: Users, 
            items: ["Phân loại theo giá trị đơn hàng", "Chu kỳ trung bình mua hàng", "Doanh thu thực nhận vs Doanh thu mất", "Bảng xếp hạng nhân viên bán hàng"],
            chart: (
              <div className="h-24 mt-6 relative">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  <motion.path 
                    d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,5" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.path 
                    d="M0,40 Q10,30 20,35 T40,20 T60,25 T80,10 T100,5 L100,40 L0,40 Z" 
                    fill="url(#gradient)" 
                    opacity="0.2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )
          },
          { 
            title: "Ads & Marketing", 
            icon: Megaphone, 
            items: ["Google Analytics (User, Traffic)", "Facebook Insights (CPM, CPC, CTR)", "Hiệu quả theo nhóm tuổi/tỉnh thành", "Chi tiết từng chiến dịch quảng cáo"],
            chart: (
              <div className="h-24 mt-6 flex items-center justify-center gap-4">
                <div className="relative w-20 h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#eff6ff" strokeWidth="20" />
                    <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * 0.3 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-medium"><div className="w-3 h-3 rounded-full bg-blue-500" /> Facebook</div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-medium"><div className="w-3 h-3 rounded-full bg-blue-100" /> Google</div>
                </div>
              </div>
            )
          }
        ].map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <cat.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {cat.chart}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const faqData = [
  {
    id: "overview",
    title: "Tổng quan & Khác biệt",
    icon: Info,
    items: [
      {
        q: "BLUECORE là gì?",
        a: "BLUECORE là hệ thống giúp bạn gom tất cả dữ liệu bán hàng từ nhiều nơi về một chỗ. Sau đó, hệ thống tự động phân tích và tạo ra các báo cáo dễ hiểu, giúp bạn nắm bắt tình hình kinh doanh nhanh chóng."
      },
      {
        q: "Điểm khác biệt lớn nhất của BLUECORE là gì?",
        a: "Thay vì phải tự tải dữ liệu từ từng phần mềm rồi dùng Excel để tính toán mất thời gian, BLUECORE làm việc này hoàn toàn tự động. Bạn chỉ cần mở máy lên là có ngay báo cáo mới nhất mỗi ngày."
      },
      {
        q: "Dữ liệu của tôi có được bảo mật không?",
        a: "Chắc chắn rồi. Dữ liệu của bạn được lưu trữ an toàn trên nền tảng đám mây của Google (Google Cloud), đảm bảo tính bảo mật cao nhất và không ai có thể truy cập trái phép."
      }
    ]
  },
  {
    id: "reports",
    title: "Xuất Báo Cáo",
    icon: FileText,
    items: [
      {
        q: "Hệ thống có những loại báo cáo nào?",
        a: "BLUECORE cung cấp đầy đủ các báo cáo quan trọng như: Doanh thu, Lợi nhuận, Tồn kho, Hiệu quả nhân viên, Phân tích khách hàng và Hiệu quả quảng cáo. Tất cả đều được thể hiện bằng biểu đồ trực quan."
      },
      {
        q: "Tôi có thể xem báo cáo trên điện thoại không?",
        a: "Có, giao diện báo cáo được thiết kế thân thiện, giúp bạn dễ dàng theo dõi các chỉ số kinh doanh mọi lúc, mọi nơi ngay trên điện thoại di động."
      },
      {
        q: "Báo cáo có tự động cập nhật không?",
        a: "Có, hệ thống sẽ tự động lấy dữ liệu mới và cập nhật báo cáo vào mỗi đêm. Sáng hôm sau bạn sẽ luôn có số liệu mới nhất để làm việc."
      }
    ]
  },
  {
    id: "products",
    title: "Sản Phẩm & Tồn Kho",
    icon: Box,
    items: [
      {
        q: "Làm sao để biết sản phẩm nào đang bán chạy?",
        a: "Hệ thống sẽ tự động xếp hạng các sản phẩm bán chạy nhất theo doanh thu hoặc số lượng. Giúp bạn biết nên tập trung nhập hàng và quảng cáo cho sản phẩm nào."
      },
      {
        q: "Tôi có thể theo dõi hàng tồn kho không?",
        a: "Có, báo cáo tồn kho sẽ cho bạn biết chính xác số lượng hàng còn lại, giá trị tồn kho hiện tại, và cảnh báo những mặt hàng sắp hết hoặc bán chậm để có phương án xử lý kịp thời."
      }
    ]
  },
  {
    id: "customers",
    title: "Khách Hàng",
    icon: Users,
    items: [
      {
        q: "Tôi có thể biết khách hàng của mình là ai không?",
        a: "BLUECORE giúp bạn phân tích độ tuổi, giới tính, khu vực sinh sống của khách hàng. Từ đó bạn sẽ hiểu rõ hơn về người mua và có cách tiếp cận phù hợp."
      },
      {
        q: "Hệ thống có phân loại khách hàng cũ và mới không?",
        a: "Có, báo cáo sẽ chỉ rõ tỷ lệ khách hàng quay lại mua hàng so với khách hàng mới. Giúp bạn đánh giá được chất lượng dịch vụ và mức độ trung thành của khách hàng."
      }
    ]
  },
  {
    id: "revenue",
    title: "Doanh Thu & Đơn Hàng",
    icon: DollarSign,
    items: [
      {
        q: "Tôi có thể xem doanh thu theo từng chi nhánh không?",
        a: "Chắc chắn. Bạn có thể dễ dàng xem và so sánh doanh thu, lợi nhuận giữa các chi nhánh, cửa hàng hoặc các kênh bán hàng khác nhau trên cùng một màn hình."
      },
      {
        q: "Làm sao để biết lý do đơn hàng bị hủy?",
        a: "Hệ thống có báo cáo chi tiết về tỷ lệ đơn hàng thành công, đơn hoàn, đơn hủy và thống kê các lý do hủy/hoàn phổ biến nhất để bạn tìm cách khắc phục."
      }
    ]
  },
  {
    id: "staff",
    title: "Nhân Viên Bán Hàng",
    icon: Briefcase,
    items: [
      {
        q: "Làm sao để đánh giá hiệu quả của từng nhân viên?",
        a: "Báo cáo sẽ thống kê chi tiết doanh số, số lượng đơn hàng, và tỷ lệ chốt đơn thành công của từng nhân viên. Giúp bạn dễ dàng khen thưởng và đào tạo đúng người."
      },
      {
        q: "Tôi có thể xem số liệu theo từng ca làm việc không?",
        a: "Có, bạn có thể lọc dữ liệu theo thời gian để xem hiệu quả bán hàng của từng ca, từng ngày hoặc từng tháng rất linh hoạt."
      }
    ]
  },
  {
    id: "marketing",
    title: "GG Ads, FB Ads",
    icon: Target,
    items: [
      {
        q: "Tôi có thể xem hiệu quả quảng cáo Facebook và Google ở đây không?",
        a: "Có, BLUECORE kết nối trực tiếp với Facebook và Google Ads. Bạn sẽ xem được chi phí, lượt click, lượt tin nhắn và tỷ lệ chuyển đổi của từng chiến dịch ngay trên hệ thống."
      },
      {
        q: "Làm sao để biết quảng cáo nào đang lãng phí tiền?",
        a: "Hệ thống sẽ tính toán chi phí để có được một tin nhắn hoặc một đơn hàng. Nếu chiến dịch nào có chi phí quá cao, bạn sẽ dễ dàng nhận ra và điều chỉnh ngay lập tức."
      }
    ]
  },
  {
    id: "omnichannel",
    title: "Bán Hàng Đa Kênh",
    icon: Globe,
    items: [
      {
        q: "Tôi bán hàng trên cả Shopee, Facebook và Cửa hàng thì sao?",
        a: "BLUECORE sinh ra để giải quyết việc này. Hệ thống sẽ gom dữ liệu từ tất cả các kênh (Shopee, Lazada, Facebook, KiotViet...) về một nơi để bạn quản lý tổng thể dễ dàng hơn."
      },
      {
        q: "Việc kết nối các kênh này có phức tạp không?",
        a: "Rất đơn giản. Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ bạn kết nối các kênh bán hàng vào hệ thống một cách nhanh chóng và an toàn."
      }
    ]
  }
];

const DetailedFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="tính năng chi tiết" className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Khám phá Chi tiết Tính năng</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Mọi câu hỏi và thông tin chi tiết về hệ thống phân tích dữ liệu BLUECORE được giải đáp đầy đủ tại đây.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {faqData.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-50 border border-blue-200 shadow-sm" 
                      : "bg-transparent border border-transparent hover:bg-slate-50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "bg-slate-100 text-gray-500"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`font-bold text-sm md:text-base ${isActive ? "text-blue-700" : "text-gray-600"}`}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      {(() => {
                        const ActiveIcon = faqData[activeTab].icon;
                        return <ActiveIcon className="w-6 h-6 text-blue-600" />;
                      })()}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{faqData[activeTab].title}</h3>
                  </div>

                  <div className="space-y-10">
                    {faqData[activeTab].items.map((item, idx) => (
                      <div key={idx} className="group">
                        <h4 className="text-lg font-bold text-gray-900 mb-3 flex gap-3">
                          <span className="text-blue-600 shrink-0">Q:</span>
                          <span>{item.q}</span>
                        </h4>
                        <div className="text-gray-600 font-medium leading-relaxed whitespace-pre-line pl-7">
                          {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pt-20 pb-10 border-t border-gray-200 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Database className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">BLUECORE</span>
          </div>
          <p className="text-gray-600 text-sm mb-8 max-w-sm font-medium leading-relaxed">
            Giải pháp thông minh phân tích dữ liệu bán hàng đa kênh. Giúp doanh nghiệp thấu hiểu dữ liệu và bứt phá doanh thu.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-6">Nền tảng</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition-colors">ETL Integration</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Data Warehouse</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">BI System</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Liên hệ</h4>
          <ul className="space-y-3 text-sm text-gray-600 font-medium">
            <li>bluecore@bluecore.vn</li>
            <li>bluecore.vn</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <p>© 2026 BLUECORE. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const DataFlowSection = () => {
  const steps = [
    { icon: LinkIcon, title: "1. Kết nối", desc: "Thu thập dữ liệu từ 50+ nguồn (SaaS, Social, Ecommerce) tự động." },
    { icon: RefreshCw, title: "2. Xử lý (ETL)", desc: "Làm sạch, chuẩn hóa và đồng bộ dữ liệu với độ chính xác tuyệt đối." },
    { icon: Database, title: "3. Lưu trữ", desc: "Tập trung dữ liệu tại Data Warehouse an toàn trên Google Cloud." },
    { icon: PieChart, title: "4. Phân tích", desc: "Trực quan hóa dữ liệu qua BI System, hỗ trợ ra quyết định nhanh chóng." }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6"
          >
            <Workflow className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Quy trình Hoạt động</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Luồng Dữ liệu Tự động hóa</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Từ việc thu thập dữ liệu thô đến khi xuất ra các báo cáo phân tích chi tiết, mọi thứ đều được vận hành trơn tru và hoàn toàn tự động.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line with Animated Gradient */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1.5 bg-gray-100 -translate-y-1/2 z-0 rounded-full overflow-hidden">
            <motion.div 
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-xl shadow-gray-200/20 relative group hover:-translate-y-3 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationsSection = () => {
  const categories = [
    { name: "Ecommerce", icon: ShoppingCart, items: ["Shopee", "Lazada", "Tiki", "TikTok Shop"] },
    { name: "Retail SaaS", icon: Package, items: ["KiotViet", "Haravan", "Sapo", "Nhanh.vn"] },
    { name: "Marketing", icon: Megaphone, items: ["Facebook Ads", "Google Ads", "TikTok Ads"] },
    { name: "CRM", icon: Users, items: ["Keap", "Freshworks", "Salesforce"] }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-gray-100">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Kết nối Không giới hạn</h2>
          <p className="text-gray-600 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            BLUECORE là đơn vị duy nhất tại Việt Nam sở hữu tích hợp hoàn chỉnh với hơn 50+ nền tảng phổ biến nhất, giúp bạn gom toàn bộ dữ liệu về một mối dễ dàng.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full border border-gray-200 shadow-md text-blue-600 font-bold cursor-pointer"
          >
            <span className="text-4xl">50+</span>
            <span className="text-xs uppercase tracking-wider text-gray-500 text-left leading-tight">Nền tảng<br/>được hỗ trợ</span>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-blue-600 group-hover:scale-110 duration-500">
                <cat.icon className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">{cat.name}</h3>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600 bg-slate-50 px-4 py-3 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  const cases = [
    {
      role: "Chủ Doanh Nghiệp (CEO/Founder)",
      desc: "Nhìn toàn cảnh bức tranh kinh doanh theo thời gian thực. Nắm bắt ngay lập tức sức khỏe doanh nghiệp, dòng tiền, và hiệu quả của từng bộ phận mà không cần chờ đợi báo cáo thủ công.",
      metrics: ["Tăng tốc độ ra quyết định", "Giảm 80% thời gian chờ báo cáo"]
    },
    {
      role: "Quản lý Marketing",
      desc: "Đo lường chính xác ROI của từng chiến dịch trên đa kênh (Facebook, Google, Tiktok). Tối ưu hóa chi phí quảng cáo và cá nhân hóa trải nghiệm khách hàng nhờ dữ liệu phân tích sâu.",
      metrics: ["Tối ưu 30% chi phí Ads", "Tăng tỷ lệ chuyển đổi"]
    },
    {
      role: "Quản lý Bán hàng",
      desc: "Theo dõi sát sao KPI của đội ngũ sales, phân tích xu hướng mua hàng, quản lý tồn kho thông minh và dự báo nhu cầu thị trường để có chiến lược nhập hàng hợp lý.",
      metrics: ["Giảm tỷ lệ hủy đơn", "Tăng giá trị vòng đời khách hàng"]
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Giải pháp cho từng Vai trò</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Dù bạn ở vị trí nào, BLUECORE đều cung cấp những góc nhìn dữ liệu phù hợp nhất để giúp bạn hoàn thành xuất sắc công việc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-[2.5rem] p-10 border border-gray-200 hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.role}</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-10">
                  {item.desc}
                </p>
                <div className="space-y-4">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-800 bg-slate-50 px-4 py-3 rounded-xl group-hover:bg-white transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="dang-ky" className="py-32 relative overflow-hidden bg-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight"
            >
              Sẵn sàng bứt phá doanh thu cùng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">BLUECORE?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-12 font-medium"
            >
              Đừng để dữ liệu của bạn nằm im lãng phí. Hãy để chúng tôi giúp bạn biến dữ liệu thành lợi thế cạnh tranh ngay hôm nay.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                "Phân tích dữ liệu đa kênh tự động",
                "Báo cáo trực quan, cập nhật Real-time",
                "Tối ưu chi phí Marketing & Vận hành",
                "Đội ngũ chuyên gia hỗ trợ 24/7"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Đăng ký thành công!</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Cảm ơn bạn đã quan tâm. Chuyên viên của BLUECORE sẽ liên hệ với bạn trong thời gian sớm nhất.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className="text-blue-600 font-bold hover:text-blue-700 transition-colors"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Nhận tư vấn giải pháp</h3>
                      <p className="text-gray-500 font-medium">Điền thông tin để trải nghiệm sức mạnh của dữ liệu</p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên <span className="text-red-500">*</span></label>
                      <input 
                        required 
                        type="text" 
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400" 
                        placeholder="Nhập họ và tên của bạn" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại <span className="text-red-500">*</span></label>
                        <input 
                          required 
                          type="tel" 
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400" 
                          placeholder="Nhập số điện thoại" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400" 
                          placeholder="Nhập địa chỉ email" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Tên doanh nghiệp</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400" 
                        placeholder="Nhập tên doanh nghiệp của bạn" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Vấn đề bạn đang quan tâm</label>
                      <textarea 
                        rows={3} 
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none font-medium text-gray-900 placeholder:text-gray-400" 
                        placeholder="Chia sẻ thêm về khó khăn của doanh nghiệp..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'} 
                      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                    >
                      {status === 'submitting' ? (
                        <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
                      ) : (
                        <>Gửi yêu cầu tư vấn <ArrowUpRight className="w-6 h-6" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-blue-200">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-[100]" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <DataFlowSection />
      <BentoGrid />
      <IntegrationsSection />
      <ReportSection />
      <UseCasesSection />
      <DetailedFeatures />
      <CTASection />
      <Footer />
    </div>
  );
}
