import { useState } from 'react';
import { Check, Star, Shield, Zap, Brain, ArrowRight, Sparkles, Award, TrendingUp, BookOpen, Calendar, Smartphone, Lock, Mail, MessageCircle, CreditCard, Clock, ChevronDown, ChevronUp, Users } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const HOTMART_CHECKOUT = 'https://pay.hotmart.com/N105763245B?off=rzu9lhcf';
  
  const handlePurchase = () => {
    window.location.href = HOTMART_CHECKOUT;
  };
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      
      {/* ==================== DOBRA 1: HERO ==================== */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-white border border-pink-100 px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-bold text-purple-900 uppercase">Programa 100% Digital</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-gray-900 leading-tight mb-6">
            Reconquiste Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Liberdade Alimentar</span> em 30 Dias
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Um <strong className="text-purple-700">guia completo</strong> com cardápios práticos, ferramentas inteligentes e técnicas de neurociência para você retomar o controle da sua alimentação.
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <button
              onClick={handlePurchase}
              className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-black text-lg px-12 py-5 rounded-full shadow-xl shadow-pink-200 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              QUERO COMEÇAR MINHA JORNADA
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Preço */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <span className="text-sm text-gray-400 line-through block">De R$ 97</span>
              <span className="text-4xl font-black text-purple-700">R$ 27</span>
            </div>
            <div className="bg-red-500 text-white font-black text-xs px-3 py-1.5 rounded-full animate-pulse">
              -72%
            </div>
          </div>

          {/* Garantia */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="h-4 w-4 text-emerald-500" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 2: PROBLEMA ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
            Você Se Identifica Com Isso?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🍫', title: 'Vontade Constante de Doces', desc: 'Desejo urgente após as refeições ou em momentos de estresse.' },
              { emoji: '😴', title: 'Cansaço Durante o Dia', desc: 'Picos de energia seguidos de quedas que te deixam sem disposição.' },
              { emoji: '👕', title: 'Roupas Apertando', desc: 'Sensação de inchaço e desconforto com suas roupas habituais.' },
              { emoji: '🧠', title: 'Dificuldade de Foco', desc: 'Problemas de concentração causados pela variação de energia.' },
              { emoji: '✨', title: 'Pele com Aspecto Cansado', desc: 'Manchas, acne ou sinais de envelhecimento precoce.' },
              { emoji: '😤', title: 'Irritabilidade', desc: 'Fica de mau humor quando passa muitas horas sem comer algo doce.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50/30 border border-red-100 rounded-2xl p-6 space-y-3">
                <span className="text-4xl block">{item.emoji}</span>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 3: SOLUÇÃO ==================== */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Tudo Para Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">Transformação</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="h-6 w-6" />, title: 'E-book Educativo', desc: '5 capítulos sobre nutrição, saciedade e mudança de hábitos.', color: 'from-pink-500 to-rose-500' },
              { icon: <Calendar className="h-6 w-6" />, title: 'Cardápio 30 Dias', desc: 'Refeições práticas com ingredientes acessíveis.', color: 'from-purple-500 to-indigo-500' },
              { icon: <TrendingUp className="h-6 w-6" />, title: 'Calculadora de Proteína', desc: 'Saiba exatamente quanto consumir baseado no seu perfil.', color: 'from-indigo-500 to-blue-500' },
              { icon: <Brain className="h-6 w-6" />, title: 'Ferramenta S.O.S', desc: 'Técnicas para momentos de vontade intensa.', color: 'from-amber-500 to-orange-500' },
              { icon: <Award className="h-6 w-6" />, title: 'Sistema Gamificado', desc: 'Conquiste medalhas e acompanhe sua evolução.', color: 'from-emerald-500 to-teal-500' },
              { icon: <Smartphone className="h-6 w-6" />, title: 'Acesso Vitalício', desc: 'Use no computador, tablet ou celular quando quiser.', color: 'from-pink-500 to-purple-500' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-purple-200/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 4: CONTEÚDO ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
            O Que Você Recebe <span className="text-purple-600">Imediatamente</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { number: '01', title: 'Desafio 30 Dias', items: ['Missões diárias práticas', 'Sistema de pontos e níveis', 'Medalhas por conquistas', 'Acompanhamento de progresso'], emoji: '📅', color: 'from-pink-500 to-rose-500' },
              { number: '02', title: 'Cardápio Completo', items: ['Café, almoço, lanche e jantar', 'Receitas com ingredientes comuns', 'Opções vegetarianas', 'Sobremesas sem açúcar'], emoji: '🍽️', color: 'from-purple-500 to-indigo-500' },
              { number: '03', title: 'Material Educativo', items: ['5 capítulos de conteúdo', 'Entenda como funciona o desejo', 'Estratégias para mudança', 'Técnicas de reeducação'], emoji: '📖', color: 'from-indigo-500 to-blue-500' },
              { number: '04', title: 'Ferramentas', items: ['Calculadora de proteína', 'Calculadora de açúcar', 'Ferramenta para crises', 'Acompanhamento de água'], emoji: '🛠️', color: 'from-emerald-500 to-teal-500' }
            ].map((module, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{module.emoji}</span>
                    <div>
                      <span className="text-xs font-black opacity-80 block">MÓDULO {module.number}</span>
                      <h3 className="font-black text-xl">{module.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {module.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 5: PROVA SOCIAL ==================== */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
            Histórias de <span className="text-amber-500">Transformação</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Mariana S.', role: 'Completo 30 dias', text: 'Não conseguia passar a tarde sem chocolate. O cardápio mudou minha rotina! Hoje escolho o que como, sem compulsão.', avatar: 'MS', result: '30 dias' },
              { name: 'Carlos O.', role: 'Reduziu 90% do açúcar', text: 'A calculadora de proteína fez diferença. Entendi como me alimentar melhor. Programa prático e direto!', avatar: 'CO', result: '90% menos' },
              { name: 'Fernanda L.', role: 'Mais energia', text: 'As ferramentas para momentos difíceis me ajudaram muito. As técnicas funcionam mesmo! Recomendo.', avatar: 'FL', result: 'Mais disposição' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-amber-100 rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{testimonial.result}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center font-black text-purple-700 text-sm">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '2.500+', label: 'Participantes', icon: <Users className="h-6 w-6" /> },
              { number: '4.9/5', label: 'Avaliação', icon: <Star className="h-6 w-6" /> },
              { number: '30', label: 'Dias de Programa', icon: <Calendar className="h-6 w-6" /> },
              { number: '100%', label: 'Garantia', icon: <Shield className="h-6 w-6" /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-purple-50">
                <div className="inline-flex p-3 bg-purple-100 rounded-xl text-purple-600 mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-gray-900">{stat.number}</div>
                <div className="text-xs text-gray-500 font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 6: TIMELINE ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
            O Que Acontece em <span className="text-emerald-600">30 Dias</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-emerald-300"></div>

            <div className="space-y-12">
              {[
                { time: '24 Horas', title: 'Mais Estabilidade', desc: 'Seus níveis de energia começam a se equilibrar. Você se sente mais disposto.', emoji: '⏱️', color: 'bg-pink-500' },
                { time: '3 Dias', title: 'Paladar Renovado', desc: 'Frutas naturais começam a parecer mais saborosas e doces.', emoji: '👅', color: 'bg-purple-500' },
                { time: '1 Semana', title: 'Mais Disposição', desc: 'Você acorda com mais energia e se sente mais leve durante o dia.', emoji: '✨', color: 'bg-indigo-500' },
                { time: '2 Semanas', title: 'Controle Total', desc: 'A vontade constante diminui significativamente. Você escolhe o que comer.', emoji: '⚡', color: 'bg-blue-500' },
                { time: '30 Dias', title: 'Nova Rotina', desc: 'Hábitos consolidados. Você está no comando das suas escolhas alimentares.', emoji: '🎉', color: 'bg-emerald-500' }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className={`inline-flex p-3 rounded-2xl ${item.color} text-white mb-3`}>
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                    <span className="text-xs font-black text-purple-600 uppercase tracking-wider">{item.time}</span>
                    <h3 className="font-black text-xl text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-6 w-6 rounded-full ${item.color} border-4 border-white shadow-lg`}></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 7: OFERTA ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-pink-100 text-pink-700 font-black text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">🎁 Oferta Especial</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Comece Sua Jornada <span className="text-purple-600">Hoje</span></h2>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-500 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-black px-4 py-1.5 rounded-bl-2xl animate-pulse">
              🔥 OFERTA
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="font-bold text-xl text-gray-900 flex items-center justify-center gap-2">
                  Acesso Completo <Sparkles className="h-5 w-5 text-amber-500 fill-amber-500" />
                </h3>
                <p className="text-sm text-gray-500 mt-1">Todos os recursos inclusos</p>
              </div>

              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm text-gray-400 line-through">R$ 532</span>
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">R$ 27</span>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                <span className="text-xs font-black text-red-600 uppercase">🔥 Economia de R$ 505</span>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Desafio 30 Dias Completo', 'Cardápio com Receitas', 'E-book Educativo', 'Calculadora de Proteína', 'Calculadora de Açúcar', 'Ferramenta S.O.S', 'Sistema de Pontos', 'Medalhas e Conquistas', 'Acompanhamento de Progresso', 'Acesso Vitalício', 'Atualizações Inclusas', 'Suporte'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePurchase}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-black text-lg py-5 rounded-full shadow-lg shadow-pink-200 transition-all duration-200 hover:scale-105"
              >
                QUERO COMEÇAR AGORA
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento Seguro</span>
                <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Garantia 7 Dias</span>
              </div>
            </div>
          </div>

          {/* Pagamento */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2"><CreditCard className="h-6 w-6 text-gray-600" /></div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-xs font-bold text-gray-600">PIX</div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-xs font-bold text-gray-600">Boleto</div>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 flex items-start gap-4 mt-8">
            <Shield className="h-10 w-10 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-black text-emerald-800 text-lg">Garantia de 7 Dias</h4>
              <p className="text-sm text-emerald-700/80 mt-2">Se não estiver satisfeito em até 7 dias, devolvemos <strong>100% do valor</strong>. Sem perguntas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 8: FAQ ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
            Perguntas <span className="text-purple-600">Frequentes</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'O programa é digital?', a: 'Sim! Todo o conteúdo é acessado online pelo computador, tablet ou celular. Acesso imediato após confirmação.' },
              { q: 'Preciso de ingredientes caros?', a: 'Não! O cardápio usa alimentos comuns de supermercado. Foco em praticidade e sustentabilidade.' },
              { q: 'Sou vegetariano, serve para mim?', a: 'Sim! Incluímos opções vegetais de proteína e você pode adaptar conforme sua preferência.' },
              { q: 'Quanto tempo por dia?', a: '5-10 minutos diários para registrar refeições e completar o desafio do dia já trazem resultados.' },
              { q: 'E se eu não gostar?', a: 'Garantia de 7 dias. Se não estiver satisfeito, devolvemos 100% do valor sem perguntas.' },
              { q: 'Como recebo o acesso?', a: 'Imediatamente após o pagamento, você recebe e-mail com login e senha. Acesso vitalício!' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="h-5 w-5 text-purple-600 shrink-0" /> : <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === idx && <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DOBRA 9: CTA FINAL ==================== */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="space-y-4">
            <span className="inline-block bg-pink-500/20 text-pink-300 font-black text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border border-pink-500/30 animate-pulse">
              ⏰ Última Oportunidade
            </span>
            <h2 className="text-3xl md:text-5xl font-black">
              Pronto Para Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">Transformação</span>?
            </h2>
            <p className="text-purple-200/90 text-base leading-relaxed max-w-2xl mx-auto">
              Junte-se a mais de 2.500 pessoas que já mudaram sua relação com a alimentação. Comece hoje!
            </p>
          </div>

          <button
            onClick={handlePurchase}
            className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-black text-lg px-12 py-6 rounded-full shadow-xl shadow-pink-900/50 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group"
          >
            QUERO COMEÇAR MINHA JORNADA
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-purple-300/80"><Lock className="h-4 w-4" /> Pagamento Seguro</div>
            <div className="flex items-center gap-2 text-sm text-purple-300/80"><Shield className="h-4 w-4" /> Garantia 7 Dias</div>
            <div className="flex items-center gap-2 text-sm text-purple-300/80"><Zap className="h-4 w-4" /> Acesso Imediato</div>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3">
              <Clock className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-sm font-bold text-red-300">Oferta por tempo limitado!</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5"><span className="text-2xl">🍓</span><span className="font-black text-white">Desafio Diminuindo Doce</span></div>
              <p className="text-xs leading-relaxed">Programa de reeducação alimentar para uma vida mais saudável e equilibrada.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#beneficios" className="hover:text-white transition">Benefícios</a></li>
                <li><a href="#modulo" className="hover:text-white transition">Conteúdo</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition">Quem Fez</a></li>
                <li><a href="#faq" className="hover:text-white transition">Dúvidas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Reembolso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" />contato@desafiodiminuindodoce.com.br</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" />WhatsApp: (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs">
            <p>&copy; 2026 Desafio Diminuindo Doce. Todos os direitos reservados.</p>
            <p className="mt-2 text-gray-500">Este programa não substitui acompanhamento profissional.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
