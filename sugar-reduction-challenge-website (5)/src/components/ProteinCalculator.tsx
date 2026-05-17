import { useState, useEffect } from 'react';
import { PROTEIN_FOODS } from '../dataMenu';
import { UserProfile } from '../types';
import { Scale, Dumbbell, Flame, Target, HelpCircle, Sparkles, Check, ListPlus, Activity } from 'lucide-react';

interface ProteinCalculatorProps {
  user: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export default function ProteinCalculator({ user, onUpdateProfile }: ProteinCalculatorProps) {
  // Input states (fallback to user saved profile properties or defaults)
  const [weight, setWeight] = useState<string>(user.weightKg?.toString() || '70');
  const [activity, setActivity] = useState<'sedentary' | 'moderate' | 'active' | 'athlete'>(
    user.activityLevel || 'moderate'
  );
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'maintenance'>(
    user.weightGoal || 'fat_loss'
  );
  const [filterCat, setFilterCat] = useState<'all' | 'animal' | 'vegetal' | 'suplemento'>('all');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Calculation logic
  const getCalculatedValues = () => {
    const numericWeight = parseFloat(weight) || 70;
    
    // Base multiplier depending on activity level and goal
    let multiplier = 1.6; // default moderate
    
    if (activity === 'sedentary') {
      multiplier = goal === 'fat_loss' ? 1.5 : goal === 'muscle_gain' ? 1.6 : 1.2;
    } else if (activity === 'moderate') {
      multiplier = goal === 'fat_loss' ? 1.8 : goal === 'muscle_gain' ? 2.0 : 1.6;
    } else if (activity === 'active') {
      multiplier = goal === 'fat_loss' ? 2.0 : goal === 'muscle_gain' ? 2.2 : 1.8;
    } else if (activity === 'athlete') {
      multiplier = goal === 'fat_loss' ? 2.2 : goal === 'muscle_gain' ? 2.4 : 2.0;
    }

    const proteinGoal = Math.round(numericWeight * multiplier);

    return { multiplier, proteinGoal };
  };

  const { multiplier, proteinGoal } = getCalculatedValues();

  // Keep internal state synced if user profile updates from outside
  useEffect(() => {
    if (user.weightKg) setWeight(user.weightKg.toString());
    if (user.activityLevel) setActivity(user.activityLevel);
    if (user.weightGoal) setGoal(user.weightGoal);
  }, [user]);

  const handleSaveSettings = () => {
    const numericWeight = parseFloat(weight) || 70;
    onUpdateProfile({
      weightKg: numericWeight,
      activityLevel: activity,
      proteinMultiplier: multiplier,
      proteinGoalGrams: proteinGoal,
      weightGoal: goal,
    });

    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Filter foods
  const filteredFoods = filterCat === 'all'
    ? PROTEIN_FOODS
    : PROTEIN_FOODS.filter((f) => f.category === filterCat);

  return (
    <div className="space-y-8">
      {/* Row 1: Interactive Calculator & Target Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Inputs Form */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Scale className="h-5 w-5 text-pink-500" /> Calculadora de Proteína por Kg
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Descubra sua necessidade de proteína líquida diária para bloquear a vontade de doces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Weight Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-600 flex items-center gap-1">
                Seu Peso Atual (Kg)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="30"
                  max="250"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-gray-800 font-bold"
                />
                <span className="absolute right-4 top-3.5 text-xs text-gray-400 font-bold">kg</span>
              </div>
            </div>

            {/* Goal Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-600">Seu Objetivo Principal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as any)}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-gray-800 bg-white text-xs font-bold"
              >
                <option value="fat_loss">Emagrecimento / Perda de Gordura 📉</option>
                <option value="muscle_gain">Ganho de Massa Magra 💪</option>
                <option value="maintenance">Manutenção / Saúde ⚖️</option>
              </select>
            </div>

            {/* Activity Level */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-xs font-bold text-gray-600">Nível de Atividade Física</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['sedentary', 'moderate', 'active', 'athlete'] as const).map((lvl) => {
                  const isSelected = activity === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setActivity(lvl)}
                      className={`p-3 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'border-pink-500 bg-pink-50/30 font-bold text-pink-700'
                          : 'border-gray-100 hover:border-pink-100 text-gray-500'
                      }`}
                    >
                      <span className="text-xs capitalize font-bold">
                        {lvl === 'sedentary' && 'Sedentário'}
                        {lvl === 'moderate' && 'Moderado'}
                        {lvl === 'active' && 'Ativo'}
                        {lvl === 'athlete' && 'Atleta'}
                      </span>
                      <span className="text-[9px] text-gray-400 font-semibold leading-none">
                        {lvl === 'sedentary' && 'Sem treinos'}
                        {lvl === 'moderate' && '1-3 dias/sem'}
                        {lvl === 'active' && '3-5 dias/sem'}
                        {lvl === 'athlete' && '6+ dias/sem'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={handleSaveSettings}
              disabled={saveSuccess}
              className={`w-full py-4 rounded-2xl font-extrabold text-xs shadow-md transition duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                saveSuccess
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-100'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-pink-100'
              }`}
            >
              {saveSuccess ? (
                <>
                  <Check className="h-4 w-4" /> Meta de Proteína Salva no Perfil!
                </>
              ) : (
                <>
                  <Target className="h-4 w-4" /> Salvar Nova Meta no Meu Perfil
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right: Dynamic Calculated Target Display */}
        <div className="lg:col-span-5 bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-950 p-6 md:p-8 rounded-3xl text-white shadow-lg shadow-indigo-950/20 flex flex-col justify-between min-h-[340px] relative overflow-hidden">
          {/* Background decorative glowing aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-[85px] opacity-15 pointer-events-none"></div>

          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="bg-pink-500/20 text-pink-300 font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-pink-500/30">
                SEU ALVO PERSONALIZADO
              </span>
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            </div>

            {/* Giant protein grams counter */}
            <div className="py-3 text-center sm:text-left">
              <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-200 block">
                {proteinGoal}g
              </span>
              <span className="text-xs text-purple-300/80 font-bold uppercase mt-1 block">
                de proteína líquida por dia
              </span>
            </div>

            {/* Mini formulas display */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/10 text-xs">
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-semibold">Multiplicador</span>
                <span className="text-lg font-bold text-white">{multiplier} g/Kg</span>
              </div>
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-semibold">Peso Base</span>
                <span className="text-lg font-bold text-white">{weight} Kg</span>
              </div>
            </div>
          </div>

          {/* Explanatory footer inside card */}
          <div className="relative z-10 space-y-3 mt-6">
            <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10 text-[11px] text-purple-200/95">
              <Dumbbell className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Para atingir <span className="text-white font-bold">{proteinGoal}g</span> de proteína, distribua em 3 a 4 refeições principais de ~30g a 40g de proteína líquida cada. Use o guia de alimentos abaixo!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Science-backed Explanation of Protein vs Sweet Craving */}
      <div className="bg-pink-50/40 border border-pink-100/75 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-3">
          <span className="text-4xl animate-bounce">💡</span>
          <h4 className="text-lg font-black text-purple-950">Por que a Proteína é o Seu Escudo Contra o Doce?</h4>
          <p className="text-xs text-gray-500">
            A ciência revela por que bater a meta proteica desliga os gatilhos cerebrais de açúcar.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600 leading-relaxed">
          <div className="bg-white p-4 rounded-2xl border border-pink-100/50 space-y-1.5">
            <h5 className="font-bold text-purple-950 flex items-center gap-1">
              <Activity className="h-4 w-4 text-pink-500" /> 1. Glicose e Insulina Estáveis
            </h5>
            <p className="text-[11px]">
              Carboidratos vazios geram picos e quedas bruscas de açúcar no sangue. Essa queda gera cansaço e uma "fome de doce química". A proteína tem digestão lenta, impedindo essas quedas e mantendo sua energia constante.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-pink-100/50 space-y-1.5">
            <h5 className="font-bold text-purple-950 flex items-center gap-1">
              <Target className="h-4 w-4 text-pink-500" /> 2. Hormônios do Estômago Cheio
            </h5>
            <p className="text-[11px]">
              A digestão de aminoácidos estimula fortemente a liberação de **GLP-1** e **PYY** no seu intestino. Estes hormônios se comunicam diretamente com o hipotálamo, desligando a sinalização de fome física e apetite emocional.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-pink-100/50 space-y-1.5">
            <h5 className="font-bold text-purple-950 flex items-center gap-1">
              <Flame className="h-4 w-4 text-pink-500" /> 3. Redução da Grelina
            </h5>
            <p className="text-[11px]">
              A grelina é o hormônio da fome, que faz seu estômago roncar e implorar por lanches rápidos. A proteína é o nutriente mais potente do planeta para derrubar os níveis de grelina por até 5 horas.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-pink-100/50 space-y-1.5">
            <h5 className="font-bold text-purple-950 flex items-center gap-1">
              <HelpCircle className="h-4 w-4 text-pink-500" /> 4. Massa Magra Poupada
            </h5>
            <p className="text-[11px]">
              Ao restringir doces e carboidratos simples, o corpo busca queimar gordura. Consumir proteínas suficientes garante que seus músculos sejam completamente preservados, mantendo seu metabolismo acelerado.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3: Interactive Protein Food Helper List */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-1.5">
              <ListPlus className="h-5 w-5 text-pink-500" /> Guia Inteligente de Fontes Proteicas
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Consulte alimentos práticos para preencher sua despensa e bater sua meta diária de {proteinGoal}g.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'animal', 'vegetal', 'suplemento'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition cursor-pointer ${
                  filterCat === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                }`}
              >
                {cat === 'all' && 'Todos'}
                {cat === 'animal' && 'Animal'}
                {cat === 'vegetal' && 'Vegetal'}
                {cat === 'suplemento' && 'Suplemento'}
              </button>
            ))}
          </div>
        </div>

        {/* Food grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFoods.map((food) => (
            <div
              key={food.name}
              className="p-4 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50/30 flex items-start gap-3 hover:shadow-sm hover:border-pink-100 transition duration-200"
            >
              <span className="text-3xl shrink-0 select-none">{food.emoji}</span>
              <div className="min-w-0 space-y-1">
                <h4 className="font-bold text-xs text-gray-800 truncate" title={food.name}>
                  {food.name}
                </h4>
                <p className="text-[10px] text-gray-400">Porção recomendada: {food.avgServing}</p>
                
                <div className="flex items-center gap-2 pt-1.5">
                  <span className="bg-pink-100 text-pink-600 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                    +{Math.round(food.proteinPerServing)}g de Prot
                  </span>
                  <span className="text-[9px] text-gray-400">({food.proteinPer100g}% prot)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
