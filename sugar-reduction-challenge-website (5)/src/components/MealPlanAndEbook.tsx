import { useState, useEffect } from 'react';
import { EBOOK_CHAPTERS, MENU_30_DAYS } from '../dataMenu';
import { BookOpen, CalendarDays, Sparkles, CheckCircle2, ArrowRight, BookOpenCheck, Dumbbell } from 'lucide-react';

interface MealPlanAndEbookProps {
  userXp: number;
  onAwardXp: (amount: number) => void;
}

export default function MealPlanAndEbook({ onAwardXp }: MealPlanAndEbookProps) {
  const [activeSection, setActiveSection] = useState<'menu' | 'ebook'>('menu');
  
  // --- 30-Day Menu Plan states ---
  const [selectedDay, setSelectedDay] = useState<number>(1);
  
  // --- Ebook states ---
  const [selectedChapterId, setSelectedChapterId] = useState<string>('cap1');
  const [readChapters, setReadChapters] = useState<string[]>([]);

  useEffect(() => {
    const savedRead = localStorage.getItem('sugar_challenge_read_chapters');
    if (savedRead) setReadChapters(JSON.parse(savedRead));
  }, []);

  const activeChapter = EBOOK_CHAPTERS.find((c) => c.id === selectedChapterId) || EBOOK_CHAPTERS[0];
  const isChapterRead = readChapters.includes(activeChapter.id);

  const handleMarkAsRead = () => {
    if (isChapterRead) return;

    const updated = [...readChapters, activeChapter.id];
    setReadChapters(updated);
    localStorage.setItem('sugar_challenge_read_chapters', JSON.stringify(updated));
    
    // Reward +50 XP for reading healthy ebook content!
    onAwardXp(50);
  };

  const activeDayMeal = MENU_30_DAYS[selectedDay - 1] || MENU_30_DAYS[0];

  return (
    <div className="space-y-8">
      
      {/* Section Toggle Navigation */}
      <div className="flex items-center justify-center bg-white p-2 rounded-2xl border border-purple-50/50 shadow-sm max-w-md mx-auto gap-2">
        <button
          onClick={() => setActiveSection('menu')}
          className={`flex-grow py-2.5 px-4 rounded-xl text-xs font-extrabold tracking-wide flex items-center justify-center gap-1.5 transition duration-200 cursor-pointer ${
            activeSection === 'menu'
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
              : 'text-gray-500 hover:bg-purple-50/50'
          }`}
        >
          <CalendarDays className="h-4 w-4" /> Cardápio 30 Dias
        </button>
        
        <button
          onClick={() => setActiveSection('ebook')}
          className={`flex-grow py-2.5 px-4 rounded-xl text-xs font-extrabold tracking-wide flex items-center justify-center gap-1.5 transition duration-200 cursor-pointer ${
            activeSection === 'ebook'
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
              : 'text-gray-500 hover:bg-purple-50/50'
          }`}
        >
          <BookOpen className="h-4 w-4" /> E-book Educativo
        </button>
      </div>

      {/* --- SECTION 1: 30-DAY HIGH-PROTEIN LOW-SUGAR MEAL PLAN --- */}
      {activeSection === 'menu' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: 30 Days Selector Grid */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-pink-500" /> Planejamento 30 Dias
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Cardápios diários estruturados focando em **alta ingestão de proteínas** e **baixo carboidrato refinado** para anular a compulsão por doces.
              </p>
            </div>

            {/* 30 day small buttons selector */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {Array.from({ length: 30 }).map((_, i) => {
                const dayNum = i + 1;
                const isSelected = selectedDay === dayNum;
                return (
                  <button
                    key={dayNum}
                    onClick={() => setSelectedDay(dayNum)}
                    className={`aspect-square rounded-2xl border-2 font-black text-sm transition flex flex-col items-center justify-center cursor-pointer ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50/40 text-purple-900 ring-4 ring-purple-100'
                        : 'border-gray-100 hover:border-pink-100 text-gray-600 bg-slate-50/20'
                    }`}
                  >
                    <span className="text-[8px] text-gray-400 font-bold uppercase leading-none">DIA</span>
                    <span className="text-base mt-0.5">{dayNum}</span>
                  </button>
                );
              })}
            </div>

            <div className="bg-purple-50/40 p-4 rounded-2xl border border-purple-50 text-[11px] text-purple-800 leading-relaxed">
              💡 **Dica do Nutri**: Sinta-se livre para substituir as fontes animais de proteína pelas equivalentes do nosso Guia Proteico (como frango por tilápia, filé bovino por porco, ou tofu por lentilha) mantendo a mesma proporção de peso!
            </div>
          </div>

          {/* Right: Day Detail Meal Cards */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50/20 border border-purple-100 p-6 md:p-8 rounded-3xl shadow-sm h-full space-y-6">
              
              {/* Title header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                <div className="flex items-center gap-3">
                  <span className="bg-pink-500 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                    DIA {selectedDay}
                  </span>
                  <h4 className="text-lg font-black text-purple-950">Cardápio de Alta Saciedade</h4>
                </div>
                
                <span className="text-[10px] bg-emerald-50 border border-emerald-100 text-emerald-700 font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 shrink-0">
                  <Dumbbell className="h-3.5 w-3.5" /> Foco em Proteína + Fibras
                </span>
              </div>

              {/* Meals list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Breakfast */}
                <div className="bg-white p-4 rounded-2xl border border-purple-100/50 space-y-1">
                  <span className="text-[10px] text-pink-500 font-black uppercase tracking-wider flex items-center gap-1">
                    🍳 Café da Manhã
                  </span>
                  <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                    {activeDayMeal.cafe}
                  </p>
                </div>

                {/* Lunch */}
                <div className="bg-white p-4 rounded-2xl border border-purple-100/50 space-y-1">
                  <span className="text-[10px] text-pink-500 font-black uppercase tracking-wider flex items-center gap-1">
                    🥗 Almoço
                  </span>
                  <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                    {activeDayMeal.almoco}
                  </p>
                </div>

                {/* Snack */}
                <div className="bg-white p-4 rounded-2xl border border-purple-100/50 space-y-1">
                  <span className="text-[10px] text-pink-500 font-black uppercase tracking-wider flex items-center gap-1">
                    🍎 Lanche da Tarde
                  </span>
                  <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                    {activeDayMeal.lanche}
                  </p>
                </div>

                {/* Dinner */}
                <div className="bg-white p-4 rounded-2xl border border-purple-100/50 space-y-1">
                  <span className="text-[10px] text-pink-500 font-black uppercase tracking-wider flex items-center gap-1">
                    🍲 Jantar
                  </span>
                  <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                    {activeDayMeal.jantar}
                  </p>
                </div>

                {/* Low-Sugar Sweet Alternative */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50/30 p-4 rounded-2xl border border-amber-100/70 sm:col-span-2 space-y-1">
                  <span className="text-[10px] text-amber-600 font-black uppercase tracking-wider flex items-center gap-1">
                    🍓 Sobremesa / Desejo de Doce
                  </span>
                  <p className="text-xs text-amber-800/90 font-extrabold leading-relaxed">
                    {activeDayMeal.docinho}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      )}

      {/* --- SECTION 2: E-BOOK EDUCATIONAL READER --- */}
      {activeSection === 'ebook' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Chapters index */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-pink-500" /> Capítulos do Livro
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Aprenda a base neurocientífica e metabólica para combater a fissura com conhecimento teórico robusto.
              </p>
            </div>

            {/* Ebook chapters links list */}
            <div className="space-y-2.5">
              {EBOOK_CHAPTERS.map((chap) => {
                const isActive = selectedChapterId === chap.id;
                const isRead = readChapters.includes(chap.id);
                
                return (
                  <button
                    key={chap.id}
                    onClick={() => setSelectedChapterId(chap.id)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'border-pink-400 bg-pink-50/15 shadow-sm'
                        : 'border-gray-100 hover:border-pink-100 hover:bg-pink-50/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl select-none">{chap.icon}</span>
                      <div>
                        <h4 className="font-bold text-xs text-gray-800 line-clamp-1">{chap.title}</h4>
                        <p className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">{chap.subtitle}</p>
                      </div>
                    </div>
                    
                    {isRead && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 fill-emerald-50" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Reading Progress bar */}
            <div className="space-y-2 bg-purple-50/30 p-4 rounded-2xl border border-purple-50">
              <div className="flex items-center justify-between text-xs font-bold text-purple-950">
                <span className="flex items-center gap-1">
                  <BookOpenCheck className="h-4 w-4 text-purple-700" /> Leitura Concluída
                </span>
                <span>{readChapters.length} / {EBOOK_CHAPTERS.length} Caps</span>
              </div>
              <div className="w-full bg-purple-100/70 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${(readChapters.length / EBOOK_CHAPTERS.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right: Selected Chapter Content */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/10 border border-purple-100 p-6 md:p-8 rounded-3xl shadow-sm h-full flex flex-col justify-between">
              
              <div className="space-y-5">
                {/* Icon / Chapter info */}
                <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl select-none">{activeChapter.icon}</span>
                    <div>
                      <h4 className="font-black text-purple-950 text-base leading-snug">{activeChapter.title}</h4>
                      <p className="text-[11px] text-gray-400 font-semibold leading-tight">{activeChapter.subtitle}</p>
                    </div>
                  </div>
                  
                  {isChapterRead && (
                    <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 font-black text-[10px] px-3 py-1 rounded-full uppercase">
                      Concluído
                    </span>
                  )}
                </div>

                {/* Main scrollable chapter paragraphs */}
                <div className="space-y-4 text-xs text-gray-600 leading-relaxed bg-white/75 p-6 rounded-2xl border border-purple-50 shadow-sm max-h-[360px] overflow-y-auto custom-scrollbar">
                  {activeChapter.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Action bottom bar */}
              <div className="mt-8 pt-5 border-t border-purple-100">
                {isChapterRead ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-center flex items-center justify-center gap-2 text-emerald-800">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 stroke-[3]" />
                    <span className="text-xs font-black">Capítulo lido! Você já coletou seus +50 XP.</span>
                  </div>
                ) : (
                  <button
                    onClick={handleMarkAsRead}
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold text-xs rounded-2xl shadow-md shadow-pink-100 transition duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Sparkles className="h-4 w-4 text-yellow-200 animate-spin-slow" />
                    Marcar Capítulo como Lido (+50 XP)
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
