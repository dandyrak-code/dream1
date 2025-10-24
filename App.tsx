
import React, { useState, useEffect } from 'react';

// --- Icon Components ---
const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ServiceIcon1: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
);

const ServiceIcon2: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const ServiceIcon3: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const ServiceIcon4: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
);

const WhyUsIcon1: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const WhyUsIcon2: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const WhyUsIcon3: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const WhyUsIcon4: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


// --- Section Components ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '서비스', href: '#services' },
    { name: '회사소개', href: '#about' },
    { name: '고객사', href: '#partners' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className={`text-2xl font-bold ${isScrolled || isOpen ? 'text-gray-800' : 'text-white'} lg:text-gray-800`}>
            Dream Frontier
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors shadow">
              상담 신청
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled || isOpen ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl">
            <ul className="flex flex-col items-center space-y-4 p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600 text-lg">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors w-full text-center block mt-2">
                  상담 신청
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center text-center text-white">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}></div>
    <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
    <div className="relative z-10 p-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
        귀사의 비즈니스, Dream Frontier의<br />
        <span className="text-blue-400">SAP 전문가와 함께 최적화하세요.</span>
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in-up">
        안정적이고 효율적인 IT 운영으로 비즈니스 성장의 새로운 지평을 엽니다.
      </p>
      <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
        무료 컨설팅 받기
      </a>
    </div>
  </section>
);

const Services: React.FC = () => {
    const serviceItems = [
        {
            icon: <ServiceIcon1 className="w-12 h-12 text-blue-600" />,
            title: 'SAP 시스템 운영 및 유지보수',
            description: '24/7 모니터링, 장애 대응, 성능 최적화로 시스템 안정성을 확보하여 비즈니스의 연속성을 보장합니다.',
        },
        {
            icon: <ServiceIcon2 className="w-12 h-12 text-blue-600" />,
            title: '비즈니스 프로세스 최적화',
            description: 'SAP 전문가가 고객사의 비즈니스 프로세스를 심층 분석하여 비효율을 제거하고 생산성을 극대화합니다.',
        },
        {
            icon: <ServiceIcon3 className="w-12 h-12 text-blue-600" />,
            title: '데이터 기반 의사결정 지원',
            description: 'SAP 데이터를 활용하여 비즈니스 인사이트를 도출하고, 데이터에 기반한 빠르고 정확한 의사결정을 지원합니다.',
        },
        {
            icon: <ServiceIcon4 className="w-12 h-12 text-blue-600" />,
            title: '클라우드 전환 및 관리',
            description: '안전하고 유연한 SAP 클라우드 환경을 구축하고, 전문적인 운영 서비스를 통해 비용 효율성을 높입니다.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">핵심 서비스</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Dream Frontier는 비즈니스 최적화를 위한 포괄적인 SAP IT 운영 서비스를 제공합니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-6 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyUs: React.FC = () => {
    const whyUsItems = [
        {
            icon: <WhyUsIcon1 className="w-10 h-10 text-white" />,
            title: '최고의 SAP 전문가 그룹',
            description: '다년간의 경험을 보유한 최고의 SAP 전문가들이 귀사의 시스템을 책임집니다.'
        },
        {
            icon: <WhyUsIcon2 className="w-10 h-10 text-white" />,
            title: '고객 맞춤형 솔루션',
            description: '고객사의 비즈니스 환경과 목표에 최적화된 맞춤형 솔루션을 제공합니다.'
        },
        {
            icon: <WhyUsIcon3 className="w-10 h-10 text-white" />,
            title: '비용 효율성 극대화',
            description: 'IT 운영 비용을 절감하고, 투자 대비 최고의 효과를 보장하여 ROI를 극대화합니다.'
        },
        {
            icon: <WhyUsIcon4 className="w-10 h-10 text-white" />,
            title: '신뢰할 수 있는 파트너',
            description: '단순한 서비스 제공을 넘어, 고객사의 성공을 함께 만들어가는 든든한 동반자가 되겠습니다.'
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">왜 Dream Frontier인가?</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Dream Frontier는 단순한 IT 운영 서비스를 넘어, 고객 비즈니스의 핵심 가치를 이해하고 성장을 함께하는 전략적 파트너입니다. 우리의 전문성과 헌신은 고객의 성공으로 증명됩니다.
                        </p>
                        <div className="space-y-6">
                            {whyUsItems.map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-gray-600 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img src="https://picsum.photos/600/500?random=1" alt="Why Us" className="rounded-lg shadow-2xl object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Partners: React.FC = () => {
    const partners = [
        { name: 'GLOBALBIZ', logo: '🏢' },
        { name: 'TECHCORP', logo: '⚙️' },
        { name: 'INNOVATE INC', logo: '💡' },
        { name: 'NEXUS', logo: '🔗' },
        { name: 'SYNERGY', logo: '🤝' },
        { name: 'QUANTUM', logo: '⚛️' },
    ];

    return (
        <section id="partners" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">신뢰의 파트너십</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        다양한 산업의 리더들이 Dream Frontier와 함께하고 있습니다.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md grayscale hover:grayscale-0 transition-all duration-300">
                            <span className="text-4xl" role="img" aria-label={partner.name}>{partner.logo}</span>
                            <span className="ml-4 text-lg font-semibold text-gray-700">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const CTA: React.FC = () => (
  <section id="contact" className="py-20 bg-blue-700 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">지금 바로 비즈니스 혁신을 시작하세요</h2>
      <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
        Dream Frontier의 전문가와 상담하고, 귀사의 비즈니스에 최적화된 SAP 운영 전략을 만나보세요.
      </p>
      <a href="mailto:contact@dreamfrontier.com" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg">
        전문가에게 문의하기
      </a>
    </div>
  </section>
);


const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300">
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Dream Frontier</h3>
          <p className="text-gray-400">고객의 비즈니스 성공을 위한<br />최고의 IT 파트너</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">바로가기</h4>
          <ul>
            <li className="mb-2"><a href="#services" className="hover:text-blue-400 transition-colors">서비스</a></li>
            <li className="mb-2"><a href="#about" className="hover:text-blue-400 transition-colors">회사소개</a></li>
            <li className="mb-2"><a href="#partners" className="hover:text-blue-400 transition-colors">고객사</a></li>
            <li className="mb-2"><a href="#contact" className="hover:text-blue-400 transition-colors">문의하기</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">연락처</h4>
          <p className="mb-2">주소: 서울특별시 강남구 테헤란로 123</p>
          <p className="mb-2">이메일: contact@dreamfrontier.com</p>
          <p>전화: 02-1234-5678</p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dream Frontier. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);


const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
