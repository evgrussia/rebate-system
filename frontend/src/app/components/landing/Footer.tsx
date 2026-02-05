export function Footer() {
  const footerLinks = {
    product: {
      title: 'Продукт',
      links: ['Как работает', 'Биржи', 'Калькулятор', 'FAQ']
    },
    company: {
      title: 'Компания',
      links: ['О нас', 'Блог', 'Контакты']
    },
    legal: {
      title: 'Юридическое',
      links: ['Политика конфиденциальности', 'Условия использования']
    },
    social: {
      title: 'Социальные сети',
      links: ['Telegram', 'Twitter/X', 'Discord']
    }
  };

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="white" strokeWidth="2"/>
                  <path d="M10 6V10L13 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold">CryptoRebate</span>
            </div>
            <p className="text-sm text-gray-400">
              Максимальный возврат торговых комиссий
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2026 CryptoRebate. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
