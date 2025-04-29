import React, { useRef } from 'react';
import { 
  FileText, Star, Shield, Settings, FileSpreadsheet, FileOutput, BookOpen, PenTool, Brain, Database, RefreshCw, Lock, History, MessageSquare, Bot, Wand2, 
  Languages, Sparkles
} from 'lucide-react';
import FeatureCard from './components/FeatureCard';

function App() {
  const originRef = useRef(null);
  const featuresRef = useRef(null);
  const demoRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "线下线上一体化，书签自动识别",
      description: "线下Word中的书签也能自动识别，实现快速关联合同表单要素",
      image: "/书签自动识别.png",
      videoUrl: "/1 线上线下一体化，书签自动识别.mp4",
      icon: BookOpen
    },
    {
      title: "在线定位要素位置",
      description: "支持将合同要素定位在合同文本指定位置，实现要素关联关系",
      image: "/在线定位要素位置.png",
      videoUrl: "/2 在线定位要素位置.mp4",
      icon: PenTool
    },
    {
      title: "合同文本格式调整",
      description: "提供对字号、大小、底色的调整，能够本页自动编号等能力",
      image: "/合同文本格式调整.png",
      videoUrl: "/3 合同文本格式调整.mp4",
      icon: FileText
    },
    {
      title: "合同文本批注",
      description: "合同文本可以批注，可以记录批注人、批注时间，能够添加特定人员，可以回复",
      image: "/合同文本批注.png",
      videoUrl: "/4 合同文本批注.mp4",
      icon: MessageSquare
    },
    {
      title: "合同文本留痕",
      description: "开启后，能够记录每一次编辑行为，便于回溯",
      image: "/合同文本留痕.png",
      videoUrl: "/5 合同文本留痕.mp4",
      icon: History
    },
    {
      title: "文本区域控制",
      description: "文档可以可编辑区域设置，保障合同文本标准条款不被修改",
      image: "/文本区域控制.png",
      videoUrl: "/6 文本区域控制.mp4",
      icon: Lock
    },
    {
      title: "合同模板套用",
      description: "合同模板中的关键信息，要素能够自动套用到合同模板中，快速生成合同正文",
      image: "/合同模板套用.png",
      videoUrl: "/7 合同模板套用.mp4",
      icon: FileSpreadsheet
    },
    {
      title: "明细字段套用",
      description: "合同回款中的信息以表格的形式清晰，也能够按要求自动加入合同文本指定业务位置",
      image: "/明细字段套用.png",
      videoUrl: "/8 明细字段套用.mp4",
      icon: Database
    },
    {
      title: "条款便捷插入",
      description: "提供从条款库中引用标准条款并在合同内容修订的能力",
      image: "/条款便捷插入.png",
      videoUrl: "/9 条款便捷插入.mp4",
      icon: FileText
    },
    {
      title: "依据表单动态调整文本",
      description: "根据合同文本模板表单要素数据自动更新结构化业务数据",
      image: "/依据表单动态调整文本.png",
      videoUrl: "/10 依据表单动态调整文本.mp4",
      icon: RefreshCw
    },
    {
      title: "电子签章",
      description: "提供与实体签章具备同等效力的电子签章服务，在线用印",
      image: "/电子签.png",
      videoUrl: "/电子签.png",
      icon: FileOutput
    },
    {
      title: "AI扩写",
      description: "提供简单提示词，即可扩展相关描述自动生成的合同文本的能力",
      image: "/AI扩写.png",
      videoUrl: "/AI扩写.png",
      icon: Bot
    },
    {
      title: "AI要素抽取",
      description: "提供对于非标合同的要素抽取能力，抽取的要素自动进入合同",
      image: "/要素抽取.png",
      videoUrl: "/要素抽取.png",
      icon: Wand2
    },
    {
      title: "AI内控",
      description: "根据内控内容规则能够通过编辑器进行合同文本的审查确认",
      image: "/AI内控.png",
      videoUrl: "/AI内控.png",
      icon: Shield
    },
    {
      title: "AI法审",
      description: "提供对于合同法律条款的审查能力，AI给出的修改建议也可以一键替换至合同文本中",
      image: "/AI法审.png",
      videoUrl: "/AI法审.png",
      icon: Brain
    },
    {
      title: "AI纠错",
      description: "合同文本中的错别字、错误符号、版式等也能够自动发现纠错，一键替换正确内容",
      image: "/AI纠错.png",
      videoUrl: "/AI纠错.png",
      icon: Sparkles
    },
    {
      title: "AI资信查询",
      description: "智能方的风信情况，是否存在风险，即时知晓",
      image: "/AI资信.png",
      videoUrl: "/AI资信.png",
      icon: Database
    },
    {
      title: "AI文本比对",
      description: "两份合同文本之间的差异，通过AI比对对比显示明，一键定位",
      image: "/AI文本比对.png",
      videoUrl: "/18 AI文本比对.mp4",
      icon: Languages
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="mx-auto px-4 py-4">
          <nav className="flex items-center justify-between px-20">
            <div className="flex items-center space-x-4">
              <img src="fw.png" alt="logo" className="h-8" />
              <div className="h-6 w-px bg-gray-300"></div>
              <img src="qys.png" alt="契约锁" className="h-5" />
              <div className="h-6 w-px bg-gray-300"></div>
              <img src="https://www.jincenda.com/images/logo_normal.png" alt="今承达" className="h-6" />
              <span className="text-lg font-medium text-[#055CE2]">数智化合同文本编辑器</span>
            </div>
            <div className="flex items-center space-x-8">
              <button 
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
                onClick={() => scrollToSection(originRef)}
              >
                <Star className="w-5 h-5" />
                <span>由来</span>
              </button>
              <button 
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
                onClick={() => scrollToSection(featuresRef)}
              >
                <Settings className="w-5 h-5" />
                <span>特色</span>
              </button>
              <button 
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
                onClick={() => scrollToSection(demoRef)}
              >
                <Shield className="w-5 h-5" />
                <span>功能展示</span>
              </button>
              <button className="flex items-center space-x-2 group relative">
                <FileText className="w-5 h-5" />
                <span>咨询联系</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden w-64 h-64 group-hover:block">
                  <div className="bg-white p-2 rounded-lg shadow-lg">
                    <img src="/qr.jpg" alt="咨询二维码" className="object-cover" />
                  </div>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main ref={originRef} >
        {/* Origin Section */}
        <section className="py-20 relative min-h-screen">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply" style={{ backgroundImage: 'url(/bg.jpg)' }} />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4 text-[#055CE2]">数智化合同文本编辑器</h1>
              <p className="text-gray-800 text-lg mx-auto">
                一个专为合同场景适配的文本编辑器，实现合同文本便捷的向结构化数据转变，方便的对接条款、业务要素与智能审查。
              </p>
            </div>

            {/* Features Circle */}
            <div className="relative flex items-center justify-center">
              <img src="/bjq.png" alt="" className="w-[60vw] h-auto mt-[2vh]" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 relative min-h-screen">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply" style={{ backgroundImage: 'url(/bg.jpg)' }} />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center my-20 text-[#055CE2]">泛微数智化合同编辑器的核心特点</h2>

              <img src="/feature.png" alt="核心特点" className="w-full h-auto" />

          </div>
        </section>

        {/* Demo Section */}
        <section ref={demoRef} className="px-20 py-8 min-h-screen">
          <div className="mx-auto my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;