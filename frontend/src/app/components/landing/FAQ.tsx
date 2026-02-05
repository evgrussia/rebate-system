import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'Что такое rebate / cashback?',
      answer: 'Rebate (cashback) — это возврат части торговых комиссий, которые вы платите бирже. Когда вы регистрируетесь на бирже по нашей реферальной ссылке, биржа делится с нами частью комиссий, а мы возвращаем до 80% этой суммы вам.'
    },
    {
      question: 'Как начать получать cashback?',
      answer: 'Зарегистрируйтесь на CryptoRebate, выберите биржу, скопируйте реферальную ссылку и зарегистрируйтесь на бирже по этой ссылке. После начала торговли мы автоматически будем начислять вам rebate.'
    },
    {
      question: 'Какие биржи поддерживаются?',
      answer: 'Мы поддерживаем 11 крупнейших криптобирж: MEXC, Bitget, BingX, Weex, Bybit, Binance, Bitmart, OKX, KuCoin, HTX и BloFin. Все биржи доступны сразу после регистрации.'
    },
    {
      question: 'Как вывести заработанное?',
      answer: 'Вы можете вывести заработанный rebate в USDT на ваш кошелёк (TRC-20 или ERC-20) прямо из личного кабинета. Выводы обрабатываются в течение 24 часов.'
    },
    {
      question: 'Есть ли минимальная сумма вывода?',
      answer: 'Да, минимальная сумма вывода составляет $10. Это сделано для оптимизации комиссий сети блокчейн.'
    },
    {
      question: 'Это легально?',
      answer: 'Да, rebate-программы полностью легальны. Это стандартная практика в криптоиндустрии. Биржи официально поддерживают партнёрские программы и делятся комиссиями с реферерами.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#111827] mb-4">Частые вопросы</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border border-[#E5E7EB] data-[state=open]:bg-[#F9FAFB]"
              >
                <AccordionTrigger className="text-left font-semibold text-[#111827] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
