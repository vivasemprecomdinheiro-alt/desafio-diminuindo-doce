import { useState } from 'react';
import { POPULAR_SWEETS, SweetItem } from '../data';
import { Plus, Minus, Trash2, Check, AlertTriangle, Sparkles } from 'lucide-react';

interface SugarCalculatorProps {
  dailyLimit: number;
  onLogSweets: (items: { name: string; sugarGrams: number; calories: number }[]) => void;
}

export default function SugarCalculator({ dailyLimit, onLogSweets }: SugarCalculatorProps) {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({});
  const [loggedSuccessfully, setLoggedSuccessfully] = useState(false);

  const handleAddItem = (itemId: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const next = { ...prev };
      if (next[itemId] > 1) {
        next[itemId] -= 1;
      } else {
        delete next[itemId];
      }
      return next;
    });
  };

  const handleClearAll = () => {
    setSelectedItems({});
    setLoggedSuccessfully(false);
  };

  // Calculate totals
  let totalSugar = 0;
  let totalCalories = 0;
  const itemsList: { item: SweetItem; quantity: number }[] = [];

  Object.entries(selectedItems).forEach(([itemId, quantity]) => {
    const item = POPULAR_SWEETS.find((s) => s.id === itemId);
    if (item) {
      totalSugar += item.sugarGrams * quantity;
      totalCalories += item.calories * quantity;
      itemsList.push({ item, quantity });
    }
  });

  // 1 teaspoon of sugar is approx 4g
  const teaspoonsCount = Math.round((totalSugar / 4) * 10) / 10;

  const handleLogToJournal = () => {
    if (itemsList.length === 0) return;
    
    const formattedLogs = itemsList.map(({ item, quantity }) => ({
      name: `${item.name} (x${quantity})`,
      sugarGrams: item.sugarGrams * quantity,
      calories: item.calories * quantity,
    }));

    onLogSweets(formattedLogs);
    setLoggedSuccessfully(true);
    setTimeout(() => setLoggedSuccessfully(false), 3000);
  };

  // Health Warning / Message based on Sugar amount
  const getHealthFeedback = (sugar: number) => {
    if (sugar === 0) {
      return {
        title: 'Prato Limpo!',
        desc: 'Selecione alguns doces ao lado para ver o impacto real no seu corpo.',
        color: 'text-gray-500 bg-gray-50 border-gray-100',
        status: 'info',
      };
    }
    if (sugar < 10) {
      return {
        title: 'Dentro da Zona Segura 🌱',
        desc: 'Uma quantidade muito pequena. Suas células conseguem processar essa glicose de forma estável, sem gerar picos inflamatórios.',
        color: 'text-green-700 bg-green-50 border-green-100',
        status: 'success',
      };
    }
    if (sugar <= dailyLimit) {
      return {
        title: 'Sob Controle ⚖️',
        desc: 'Você está dentro do seu limite diário configurado. Tente não consumir mais açúcar adicionado hoje para manter a meta.',
        color: 'text-amber-700 bg-amber-50 border-amber-100',
        status: 'warning',
      };
    }
    if (sugar <= 50) {
      return {
        title: 'Alerta de Excesso ⚠️',
        desc: 'Você ultrapassou a recomendação ideal da OMS (25g). Seu pâncreas está liberando uma descarga alta de insulina para retirar esse açúcar do sangue, o que logo causará letargia e fome.',
        color: 'text-orange-700 bg-orange-50 border-orange-100',
        status: 'excess',
      };
    }
    return {
      title: 'Zona Vermelha: Sobrecarga 🚨',
      desc: `Grave! ${sugar}g de açúcar equivale a mais de 12 colheres de chá. Esse consumo contínuo satura suas células, aumenta o acúmulo de gordura visceral e gera fadiga crônica e desejo compulsivo por mais doces.`,
      color: 'text-red-700 bg-red-50 border-red-100',
      status: 'critical',
    };
  };

  const feedback = getHealthFeedback(totalSugar);
  const progressPercent = Math.min(100, Math.round((totalSugar / dailyLimit) * 100));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left: Sweet Items List Selector */}
      <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-purple-50/50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Prateleira de Doces</h3>
            <p className="text-xs text-gray-500 mt-1">Selecione o que você costuma consumir ou comeu hoje.</p>
          </div>
          <span className="text-xs bg-purple-50 text-purple-600 font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> {POPULAR_SWEETS.length} itens comuns
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1 custom-scrollbar">
          {POPULAR_SWEETS.map((item) => {
            const quantity = selectedItems[item.id] || 0;
            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                  quantity > 0
                    ? 'border-pink-200 bg-pink-50/20 shadow-sm'
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl" role="img" aria-label={item.name}>
                    {item.emoji}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                    <p className="text-[11px] text-gray-500">Porção: {item.servingSize}</p>
                    <p className="text-xs font-semibold text-pink-500 mt-0.5">
                      +{item.sugarGrams}g de açúcar <span className="text-gray-400 font-normal">({item.calories} kcal)</span>
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  {quantity > 0 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="h-7 w-7 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition flex items-center justify-center"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="font-bold text-sm text-gray-800 w-4 text-center">{quantity}</span>
                    </>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => handleAddItem(item.id)}
                    className="h-7 w-7 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition flex items-center justify-center"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Live Visualizer & WHO feedback */}
      <div className="lg:col-span-5 space-y-6">
        {/* Plate Visualizer Card */}
        <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 p-6 md:p-8 rounded-3xl text-white shadow-lg shadow-indigo-950/20 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
          {/* Background glowing elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-[80px] opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-extrabold tracking-tight">Visualizador de Açúcar</h4>
              {itemsList.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-xs text-white/60 hover:text-white flex items-center gap-1 transition"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Limpar Prato
                </button>
              )}
            </div>

            {/* Stacking Spoon / Sugar cube visualization */}
            <div className="my-6 flex flex-col items-center justify-center py-4 min-h-[120px] bg-white/5 rounded-2xl border border-white/10">
              {itemsList.length === 0 ? (
                <div className="text-center p-4 text-white/55 space-y-2">
                  <span className="text-4xl block animate-bounce">🍽️</span>
                  <p className="text-sm font-medium">Seu prato está limpo!</p>
                  <p className="text-xs">Adicione doces na prateleira ao lado para empilhar açúcar aqui.</p>
                </div>
              ) : (
                <div className="w-full px-4 text-center">
                  <div className="flex flex-wrap justify-center gap-1 max-h-[90px] overflow-y-auto mb-3 px-2">
                    {/* Render spoonfuls of sugar */}
                    {Array.from({ length: Math.ceil(teaspoonsCount) }).map((_, i) => (
                      <span
                        key={i}
                        className="text-2xl animate-scale-in inline-block transition-transform duration-300 hover:scale-125 cursor-default"
                        title="1 colher de chá = 4g de açúcar"
                      >
                        🥄
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-purple-300">
                    Empilhado: <span className="text-white font-extrabold text-lg">{teaspoonsCount}</span> colheres de chá
                  </p>
                  <p className="text-[10px] text-white/60 mt-0.5">(Cada colher 🥄 equivale a aproximadamente 4g de açúcar)</p>
                </div>
              )}
            </div>
          </div>

          {/* Statistics bottom panel */}
          <div className="relative z-10 space-y-4 mt-auto">
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs text-white/60 block">Açúcar Total</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                  {totalSugar}g
                </span>
              </div>
              <div>
                <span className="text-xs text-white/60 block">Calorias Est.</span>
                <span className="text-2xl font-bold text-white">{totalCalories} kcal</span>
              </div>
            </div>

            {/* Progress gauge */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Seu Limite Diário ({dailyLimit}g)</span>
                <span className="font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    progressPercent > 100
                      ? 'bg-gradient-to-r from-rose-500 to-red-600'
                      : progressPercent > 75
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                      : 'bg-gradient-to-r from-green-400 to-teal-400'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Feedback Card */}
        {totalSugar > 0 && (
          <div className={`p-5 rounded-3xl border-2 transition-all duration-300 ${feedback.color} space-y-2`}>
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm">{feedback.title}</h4>
                <p className="text-xs leading-relaxed mt-1">{feedback.desc}</p>
              </div>
            </div>
          </div>
        )}

        {/* Log to Journal Action Button */}
        {totalSugar > 0 && (
          <button
            onClick={handleLogToJournal}
            disabled={loggedSuccessfully}
            className={`w-full py-4 rounded-2xl font-extrabold shadow-md flex items-center justify-center gap-2 transition-all duration-200 ${
              loggedSuccessfully
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-100'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-pink-100'
            }`}
          >
            {loggedSuccessfully ? (
              <>
                <Check className="h-5 w-5" /> Registrado no Diário!
              </>
            ) : (
              <>
                Salvar no Diário de Hoje
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
