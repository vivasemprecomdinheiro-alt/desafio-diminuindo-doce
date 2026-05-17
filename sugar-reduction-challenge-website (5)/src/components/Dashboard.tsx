import { useState } from 'react';
import { UserProfile, FoodLog } from '../types';
import { BADGES, POPULAR_SWEETS } from '../data';
import { Zap, Award, Trash2, Flame, Droplet, Sparkles, ChevronRight } from 'lucide-react';

interface DashboardProps {
  user: UserProfile;
  logs: FoodLog[];
  completedDays: number[];
  cravingsResisted: number;
  waterCups: number;
  onAddLog: (name: string, sugarGrams: number, calories: number) => void;
  onDeleteLog: (id: string) => void;
  onLogWater: (cups: number) => void;
  onCompleteTodayChallenge: () => void;
  onChangeTab: (tab: string) => void;
}

export default function Dashboard({
  user,
  logs,
  completedDays,
  waterCups,
  onAddLog,
  onDeleteLog,
  onLogWater,
  onCompleteTodayChallenge,
  onChangeTab,
}: DashboardProps) {
  const [customFoodName, setCustomFoodName] = useState('');
  const [customSugar, setCustomSugar] = useState('');
  const [customCal, setCustomCal] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);

  // 1. Get Level & XP Progress
  const xpPerLevel = 500;
  const level = Math.floor(user.xp / xpPerLevel) + 1;
  const xpProgress = user.xp % xpPerLevel;
  const progressPercent = Math.round((xpProgress / xpPerLevel) * 100);

  // 2. Get Rank Title based on level
  const getRankTitle = (lvl: number) => {
    if (lvl === 1) return 'Iniciante Sem Açúcar 🍃';
    if (lvl === 2) return 'Guerreiro(a) do Cacau 🍫';
    if (lvl === 3) return 'Desbravador(a) da Fruta 🍓';
    if (lvl === 4) return 'Mestre da Resistência 🛡️';
    if (lvl === 5) return 'Lenda do Equilíbrio 👑';
    return 'Soberano(a) da Saúde 🌟';
  };

  // 3. Sugar stats for today
  const todayDate = new Date().toISOString().split('T')[0];
  const todayLogs = logs.filter((l) => l.date === todayDate);
  
  const totalTodaySugar = todayLogs.reduce((sum, curr) => sum + curr.sugarGrams, 0);
  const totalTodayCal = todayLogs.reduce((sum, curr) => sum + curr.calories, 0);
  const sugarLeft = Math.max(0, user.dailyLimit - totalTodaySugar);
  const limitExceeded = totalTodaySugar > user.dailyLimit;
  const sugarPercentage = Math.min(100, Math.round((totalTodaySugar / user.dailyLimit) * 100));

  // 4. Get current day challenge (day = completedDays.length + 1, max 30)
  const currentDay = Math.min(30, completedDays.length + 1);
  const isChallengeCompletedToday = completedDays.includes(currentDay);

  const handleQuickLog = (name: string, sugarGrams: number, calories: number) => {
    onAddLog(name, sugarGrams, calories);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customFoodName.trim() || !customSugar) return;
    
    const sugarGrams = parseFloat(customSugar) || 0;
    const calories = parseFloat(customCal) || 0;

    onAddLog(customFoodName.trim(), sugarGrams, calories);
    setCustomFoodName('');
    setCustomSugar('');
    setCustomCal('');
    setShowCustomForm(false);
  };

  return (
    <div className="space-y-8">
      {/* Row 1: Welcome & Level Progress Card */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: User Info */}
        <div className="space-y-2.5 text-center md:text-left w-full md:w-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="text-2xl font-black text-gray-800">Olá, {user.name}! 👋</h2>
            <span className="bg-pink-100 text-pink-600 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
              {getRankTitle(level)}
            </span>
          </div>
          <p className="text-xs text-gray-500 max-w-md leading-relaxed">
            Você está indo muito bem! Continue focado no desafio de reeducar o paladar e colha os benefícios.
          </p>
          
          {/* Streak */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full text-orange-600 font-bold text-xs">
              <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
              <span>{user.streak} Dias Ativos</span>
            </div>
            <span className="text-[10px] text-gray-400">Maior sequência: {user.maxStreak} dias</span>
          </div>
        </div>

        {/* Right Side: Level Progress */}
        <div className="bg-purple-50/30 p-5 rounded-2xl border border-purple-50 w-full md:w-72 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-purple-950 flex items-center gap-1">
              <Zap className="h-4 w-4 text-amber-500 fill-amber-500 animate-pulse" /> Nível {level}
            </span>
            <span className="text-[10px] text-purple-600 font-bold">
              {user.xp} XP total
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="w-full bg-purple-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-[9px] text-gray-400 font-semibold">
              <span>Progresso</span>
              <span>{xpProgress} / {xpPerLevel} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Sugar Balance Trackers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Dashboard Left: Sugar intake details */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Painel do Açúcar Hoje</h3>
              <p className="text-xs text-gray-500 mt-1">Monitore seu limite diário e regule seu consumo.</p>
            </div>
            <button
              onClick={() => onChangeTab('calculator')}
              className="text-xs text-pink-500 hover:text-pink-600 font-bold flex items-center gap-0.5 transition cursor-pointer"
            >
              Calculadora Completa <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Intake comparison visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-gradient-to-br from-pink-50/30 to-purple-50/20 p-6 rounded-2xl border border-purple-100/50">
            {/* Round Visual */}
            <div className="flex flex-col items-center justify-center relative py-4">
              <div className="relative h-32 w-32 flex items-center justify-center">
                {/* SVG Circular Progress Ring */}
                <svg className="absolute inset-0 transform -rotate-90 h-full w-full" viewBox="0 0 36 36">
                  <path
                    className="text-purple-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={`transition-all duration-500 ${
                      limitExceeded ? 'text-rose-500' : 'text-pink-500'
                    }`}
                    strokeWidth="3.5"
                    strokeDasharray={`${sugarPercentage}, 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>

                <div className="text-center z-10">
                  <span className="text-3xl font-black text-gray-800">{totalTodaySugar}g</span>
                  <span className="text-[10px] text-gray-400 block font-medium mt-0.5">consumidos</span>
                </div>
              </div>
              
              <span className="text-xs font-bold text-purple-800/80 mt-4">
                {Math.round((totalTodaySugar / 4) * 10) / 10} colheres de chá 🥄
              </span>
            </div>

            {/* Text Info & Stats */}
            <div className="space-y-4 text-center md:text-left">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-xs text-gray-400 block">Meta Diária</span>
                  <span className="text-lg font-bold text-gray-800">{user.dailyLimit}g de açúcar</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Calorias Doces</span>
                  <span className="text-lg font-bold text-gray-800">{totalTodayCal} kcal</span>
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-400 block">Status Atual</span>
                {limitExceeded ? (
                  <span className="inline-block mt-1 text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                    ⚠️ Limite Excedido!
                  </span>
                ) : (
                  <span className="inline-block mt-1 text-xs font-bold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                    ✅ Sob o Limite ({sugarLeft}g livres)
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold">
                  <span>Progresso diário</span>
                  <span>{sugarPercentage}%</span>
                </div>
                <div className="w-full bg-purple-100/50 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      limitExceeded ? 'bg-rose-500' : 'bg-pink-500'
                    }`}
                    style={{ width: `${sugarPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Add Widgets */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-gray-800">Registro Rápido de Hoje</h4>
              <button
                onClick={() => setShowCustomForm(!showCustomForm)}
                className="text-xs font-bold text-purple-600 hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                {showCustomForm ? 'Cancelar' : 'Adicionar Personalizado...'}
              </button>
            </div>

            {/* Custom Add Form */}
            {showCustomForm && (
              <form onSubmit={handleCustomSubmit} className="p-4 bg-purple-50/30 border border-purple-100 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 animate-scale-in">
                <input
                  type="text"
                  required
                  value={customFoodName}
                  onChange={(e) => setCustomFoodName(e.target.value)}
                  placeholder="Ex: Suco, Bolo..."
                  className="px-3.5 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-gray-800"
                />
                <input
                  type="number"
                  required
                  min="0"
                  value={customSugar}
                  onChange={(e) => setCustomSugar(e.target.value)}
                  placeholder="Açúcar (g)"
                  className="px-3.5 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-gray-800"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    value={customCal}
                    onChange={(e) => setCustomCal(e.target.value)}
                    placeholder="Calorias (kcal)"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-gray-800"
                  />
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-bold shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            )}

            {/* Quick selection grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {POPULAR_SWEETS.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleQuickLog(item.name, item.sugarGrams, item.calories)}
                  className="p-3 bg-white hover:bg-pink-50/10 border border-gray-100 hover:border-pink-200 rounded-2xl text-left transition flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div className="min-w-0">
                    <h5 className="font-bold text-[11px] text-gray-800 truncate">{item.name}</h5>
                    <span className="text-[10px] font-extrabold text-pink-500">+{item.sugarGrams}g</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Food Log History List */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-gray-800">Itens Consumidos Hoje</h4>
            {todayLogs.length === 0 ? (
              <div className="text-center py-8 bg-gray-50/50 border border-gray-100 rounded-2xl text-gray-400 text-xs font-medium">
                Nenhum açúcar consumido hoje! Ótimo controle. 🍎
              </div>
            ) : (
              <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                {todayLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl text-xs hover:shadow-sm transition"
                  >
                    <div className="space-y-0.5">
                      <span className="font-bold text-gray-800">{log.name}</span>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400">
                        <span className="font-semibold text-pink-500">{log.sugarGrams}g açúcar</span>
                        <span>•</span>
                        <span>{log.calories} kcal</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onDeleteLog(log.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition cursor-pointer"
                      title="Excluir registro"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Right: Challenge shortcut & Water log */}
        <div className="lg:col-span-5 space-y-8">
          {/* 1. Daily Challenge Shortcut Card */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-purple-100 p-6 md:p-8 rounded-3xl shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-pink-100 text-pink-700 font-black text-[10px] tracking-wide px-3 py-1 rounded-full uppercase">
                DESAFIO: DIA {currentDay}
              </span>
              <button
                onClick={() => onChangeTab('challenge')}
                className="text-[11px] font-bold text-purple-600 hover:underline flex items-center cursor-pointer"
              >
                Calendário Completo
              </button>
            </div>

            {/* Title & reward */}
            <div>
              <h4 className="text-lg font-black text-gray-800 leading-snug">
                {currentDay <= 30 ? 'Café Adoçado / Mini Missão' : 'Fim do Desafio!'}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Complete a micro-missão de hoje e ganhe pontos de experiência para subir de nível.
              </p>
            </div>

            {/* Completion state */}
            {isChallengeCompletedToday ? (
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-center text-emerald-800 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <span className="text-xs font-extrabold">Missão do Dia Concluída! 🏆</span>
              </div>
            ) : (
              <button
                onClick={onCompleteTodayChallenge}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold rounded-2xl shadow-md shadow-pink-100 transition duration-200 flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                Concluir Missão do Dia
              </button>
            )}
          </div>

          {/* 2. Interactive Water Tracker Widget */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                  <Droplet className="h-4 w-4 text-sky-500 fill-sky-500" /> Hidratação Inteligente
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">Ajuda a enganar o desejo falso de doce.</p>
              </div>
              <span className="text-xs font-black text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                {waterCups * 250}ml <span className="text-[10px] text-gray-400 font-normal">/ 2L</span>
              </span>
            </div>

            {/* 8 Cups log grid */}
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, idx) => {
                const isLogged = idx < waterCups;
                return (
                  <button
                    key={idx}
                    onClick={() => onLogWater(isLogged ? idx : idx + 1)}
                    className={`aspect-square rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
                      isLogged
                        ? 'border-sky-200 bg-sky-50/35 text-sky-600 shadow-sm'
                        : 'border-gray-100 hover:border-sky-100 text-gray-300 hover:text-sky-300'
                    }`}
                  >
                    <Droplet className={`h-6 w-6 ${isLogged ? 'fill-sky-500 text-sky-500' : ''}`} />
                    <span className="text-[9px] font-bold mt-1">250ml</span>
                  </button>
                );
              })}
            </div>

            <p className="text-[10px] text-gray-400 text-center italic">
              *Cada copo de água registrado adiciona +10 XP de hábito saudável!
            </p>
          </div>

          {/* 3. Badges / Achievements Showcase */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-amber-500 fill-amber-500" /> Medalhas Conquistadas
              </h3>
              <span className="text-xs font-extrabold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-full">
                {user.badges.length} / {BADGES.length}
              </span>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-4 gap-3">
              {BADGES.map((badge) => {
                const isUnlocked = user.badges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`aspect-square rounded-2xl border flex flex-col items-center justify-center p-2 text-center relative group ${
                      isUnlocked
                        ? 'border-amber-200 bg-gradient-to-br from-amber-50/50 to-orange-50/20'
                        : 'border-gray-100 bg-gray-50/50 opacity-40'
                    }`}
                    title={`${badge.title}: ${badge.description}`}
                  >
                    <span className="text-3xl select-none">{badge.iconEmoji}</span>
                    <span className="text-[8px] font-black text-gray-800 truncate max-w-full mt-1.5">
                      {badge.title}
                    </span>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[9px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-center z-30 shadow-md">
                      <span className="font-bold block text-amber-400 mb-0.5">{badge.title}</span>
                      <span>{badge.description}</span>
                      <span className="block text-[8px] text-gray-400 mt-1 italic">Requisito: {badge.requirement}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
