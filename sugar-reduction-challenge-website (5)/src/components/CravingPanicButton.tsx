import { useState, useEffect, useRef } from 'react';
import { Heart, Activity, Droplet, Sparkles, Award, BrainCircuit, Check, RefreshCw } from 'lucide-react';

interface CravingPanicButtonProps {
  onResistCraving: (xpReward: number) => void;
  cravingsResisted: number;
}

type ToolType = 'menu' | 'breathing' | 'game' | 'water' | 'tips';

export default function CravingPanicButton({ onResistCraving, cravingsResisted }: CravingPanicButtonProps) {
  const [activeTool, setActiveTool] = useState<ToolType>('menu');
  const [resistedToday, setResistedToday] = useState(false);

  // --- Breathing Exercise State ---
  const [breathPhase, setBreathPhase] = useState<'in' | 'hold1' | 'out' | 'hold2'>('in');
  const [breathTimer, setBreathTimer] = useState(4);
  const breathingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (activeTool !== 'breathing') {
      if (breathingIntervalRef.current) clearInterval(breathingIntervalRef.current);
      return;
    }

    setBreathPhase('in');
    setBreathTimer(4);

    breathingIntervalRef.current = setInterval(() => {
      setBreathTimer((prev) => {
        if (prev <= 1) {
          // Phase transition
          setBreathPhase((currPhase) => {
            switch (currPhase) {
              case 'in': return 'hold1';
              case 'hold1': return 'out';
              case 'out': return 'hold2';
              case 'hold2': return 'in';
              default: return 'in';
            }
          });
          return 4; // reset timer to 4s
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (breathingIntervalRef.current) clearInterval(breathingIntervalRef.current);
    };
  }, [activeTool]);

  // --- Game State ---
  const [gameScore, setGameScore] = useState(0);
  const [gameTimeLeft, setGameTimeLeft] = useState(20);
  const [gameActive, setGameActive] = useState(false);
  const [gameTargets, setGameTargets] = useState<{ id: number; emoji: string; isHealthy: boolean; top: number; left: number }[]>([]);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setGameScore(0);
    setGameTimeLeft(20);
    setGameActive(true);
    generateTargets();
  };

  const generateTargets = () => {
    const healthyEmojis = ['🍓', '🍊', '🥝', '🍍', '🍌', '🍎'];
    const sugaryEmojis = ['🍫', '🍩', '🧁', '🍭', '🍬'];
    const newTargets = Array.from({ length: 4 }).map((_, i) => {
      const isHealthy = Math.random() > 0.35; // 65% chance of healthy fruit
      const emoji = isHealthy
        ? healthyEmojis[Math.floor(Math.random() * healthyEmojis.length)]
        : sugaryEmojis[Math.floor(Math.random() * sugaryEmojis.length)];
      
      return {
        id: Date.now() + i + Math.random(),
        emoji,
        isHealthy,
        top: Math.floor(Math.random() * 70) + 10, // 10% to 80%
        left: Math.floor(Math.random() * 80) + 10, // 10% to 90%
      };
    });
    setGameTargets(newTargets);
  };

  useEffect(() => {
    if (!gameActive) return;

    gameTimerRef.current = setInterval(() => {
      setGameTimeLeft((prev) => {
        if (prev <= 1) {
          setGameActive(false);
          if (gameTimerRef.current) clearInterval(gameTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    };
  }, [gameActive]);

  const handleTapTarget = (targetId: number, isHealthy: boolean) => {
    if (!gameActive) return;

    if (isHealthy) {
      setGameScore((prev) => prev + 10);
    } else {
      setGameScore((prev) => Math.max(0, prev - 15)); // penalty for sugar
    }

    // Remove clicked and generate new ones
    setGameTargets((prev) => prev.filter((t) => t.id !== targetId));
    
    // If few left, replenish
    setTimeout(() => {
      setGameTargets((prev) => {
        if (prev.length <= 2) {
          const healthyEmojis = ['🍓', '🍊', '🥝', '🍍', '🍌', '🍎'];
          const sugaryEmojis = ['🍫', '🍩', '🧁', '🍭', '🍬'];
          const isHealthyNew = Math.random() > 0.35;
          const emoji = isHealthyNew
            ? healthyEmojis[Math.floor(Math.random() * healthyEmojis.length)]
            : sugaryEmojis[Math.floor(Math.random() * sugaryEmojis.length)];
          
          return [
            ...prev,
            {
              id: Date.now() + Math.random(),
              emoji,
              isHealthy: isHealthyNew,
              top: Math.floor(Math.random() * 70) + 10,
              left: Math.floor(Math.random() * 80) + 10,
            }
          ];
        }
        return prev;
      });
    }, 100);
  };

  // --- Water State ---
  const [waterLogged, setWaterLogged] = useState(0);
  const logWater = () => {
    setWaterLogged((prev) => prev + 1);
  };

  // --- Complete Crisis Resistance ---
  const handleSuccessResist = () => {
    onResistCraving(150); // 150 XP reward for overcoming crisis!
    setResistedToday(true);
    setActiveTool('menu');
    setTimeout(() => setResistedToday(false), 4000);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-red-100 shadow-sm space-y-6 relative overflow-hidden">
      {/* Sparkly Background Elements for active resistance state */}
      {resistedToday && (
        <div className="absolute inset-0 bg-emerald-500/95 z-20 flex flex-col items-center justify-center text-white p-6 animate-fade-in text-center">
          <span className="text-5xl animate-bounce mb-3">🏆</span>
          <h4 className="text-2xl font-black">Desejo Vencido!</h4>
          <p className="text-sm text-white/90 max-w-md mt-2">
            Incrível! Você respirou, se distraiu ou bebeu água e derrotou um desejo imediato. Seu cérebro está se libertando do vício.
          </p>
          <div className="mt-4 text-xs bg-white/20 px-3 py-1.5 rounded-full font-bold flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-yellow-200" /> +150 XP Adicionados
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="animate-pulse inline-block w-3 h-3 rounded-full bg-red-500"></span>
            Botão de Pânico do Doce
          </h3>
          <p className="text-xs text-gray-500 mt-1">Vontade avassaladora de comer açúcar agora? Use as ferramentas rápidas.</p>
        </div>

        <div className="bg-rose-50 text-rose-700 px-4 py-2 rounded-2xl shrink-0 border border-rose-100 flex items-center gap-2">
          <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
          <div className="text-left">
            <span className="text-[9px] text-rose-500 font-extrabold block uppercase leading-none">Resistidos</span>
            <span className="text-sm font-black">{cravingsResisted} vezes</span>
          </div>
        </div>
      </div>

      {/* Main Panel Area */}
      <div className="min-h-[300px] bg-gradient-to-br from-slate-50 to-zinc-100 rounded-2xl p-6 flex flex-col justify-between border border-gray-200/50 relative">
        {/* MENU TOOL SELECTOR */}
        {activeTool === 'menu' && (
          <div className="space-y-4 my-auto">
            <div className="text-center pb-2">
              <span className="text-4xl block mb-2">🚨</span>
              <h4 className="font-black text-gray-800 text-sm">Selecione uma arma contra o desejo:</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Breathing */}
              <button
                onClick={() => setActiveTool('breathing')}
                className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-pink-400 hover:shadow-sm transition text-left flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 bg-pink-50 text-pink-500 rounded-xl shrink-0">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-800">Respiração Quadrada</h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">Acalme o sistema nervoso e reduza a ansiedade e cortisol em 60s.</p>
                </div>
              </button>

              {/* Game */}
              <button
                onClick={() => setActiveTool('game')}
                className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-sm transition text-left flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 bg-purple-50 text-purple-500 rounded-xl shrink-0">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-800">Jogo da Distração</h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">Quebre o circuito dopaminérgico jogando por 20s.</p>
                </div>
              </button>

              {/* Water */}
              <button
                onClick={() => setActiveTool('water')}
                className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-sky-400 hover:shadow-sm transition text-left flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 bg-sky-50 text-sky-500 rounded-xl shrink-0">
                  <Droplet className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-800">Teste da Água</h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">Muitas vezes o cérebro confunde desidratação com fome de doces.</p>
                </div>
              </button>

              {/* Science tips */}
              <button
                onClick={() => setActiveTool('tips')}
                className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-amber-400 hover:shadow-sm transition text-left flex items-start gap-3 cursor-pointer"
              >
                <div className="p-2 bg-amber-50 text-amber-500 rounded-xl shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-gray-800">Surfando o Desejo</h5>
                  <p className="text-[10px] text-gray-500 mt-0.5">Entenda como a vontade funciona para desarmá-la mentalmente.</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* BREATHING TOOL */}
        {activeTool === 'breathing' && (
          <div className="flex flex-col items-center justify-between h-full my-auto py-2">
            <h4 className="font-extrabold text-sm text-gray-800">Respire de Forma Estabilizadora</h4>
            
            {/* Visual Breathing Circle */}
            <div className="relative flex items-center justify-center my-8 h-32 w-32">
              {/* Background pulse ring */}
              <div
                className={`absolute inset-0 rounded-full bg-pink-500/10 transition-all duration-[4000ms] ${
                  breathPhase === 'in' ? 'scale-[1.3]' : breathPhase === 'out' ? 'scale-[0.8]' : 'scale-[1.1]'
                }`}
              ></div>

              {/* Core interactive circle */}
              <div
                className={`h-24 w-24 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg flex flex-col items-center justify-center text-white transition-all duration-[4000ms] ${
                  breathPhase === 'in' ? 'scale-[1.2]' : breathPhase === 'out' ? 'scale-[0.8]' : 'scale-[1.0]'
                }`}
              >
                <span className="text-xs font-bold tracking-wider uppercase">
                  {breathPhase === 'in' && 'Inspire'}
                  {breathPhase === 'hold1' && 'Segure'}
                  {breathPhase === 'out' && 'Expire'}
                  {breathPhase === 'hold2' && 'Segure'}
                </span>
                <span className="text-lg font-black mt-1">{breathTimer}s</span>
              </div>
            </div>

            <div className="text-center px-4">
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                {breathPhase === 'in' && 'Puxe o ar pelo nariz inflando o abdômen lentamente...'}
                {breathPhase === 'hold1' && 'Mantenha os pulmões confortavelmente cheios...'}
                {breathPhase === 'out' && 'Solte o ar bem devagar pela boca, relaxando os ombros...'}
                {breathPhase === 'hold2' && 'Mantenha os pulmões vazios antes do próximo ciclo...'}
              </p>
              <button
                onClick={handleSuccessResist}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs rounded-full shadow-md transition cursor-pointer"
              >
                Me Sinto Calmo - Venci o Desejo!
              </button>
            </div>
          </div>
        )}

        {/* GAME TOOL (FRUTAMANIA) */}
        {activeTool === 'game' && (
          <div className="flex flex-col justify-between h-full my-auto">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 text-xs">
              <span className="font-bold text-purple-800">Jogo da Distração: Frutamania 🍓</span>
              <div className="flex items-center gap-3 font-bold">
                <span className="text-gray-500">Tempo: {gameTimeLeft}s</span>
                <span className="text-purple-600">Pontos: {gameScore}</span>
              </div>
            </div>

            {!gameActive ? (
              <div className="flex flex-col items-center justify-center py-8 text-center my-auto">
                <span className="text-4xl block mb-2">🎯</span>
                {gameScore > 0 ? (
                  <>
                    <h5 className="font-bold text-sm text-gray-800">Fim de Jogo!</h5>
                    <p className="text-xs text-gray-500 max-w-sm mt-1">
                      Sua pontuação: <span className="font-black text-purple-600 text-sm">{gameScore} pontos</span>
                    </p>
                    {gameScore >= 50 ? (
                      <div className="mt-3 space-y-3">
                        <p className="text-xs text-emerald-600 font-bold">Sucesso! Você distraiu seu cérebro e quebrou a urgência.</p>
                        <button
                          onClick={handleSuccessResist}
                          className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-xs rounded-full shadow-md transition cursor-pointer"
                        >
                          Confirmar Vitória (+150 XP)
                        </button>
                      </div>
                    ) : (
                      <div className="mt-3 space-y-3">
                        <p className="text-xs text-amber-600 font-semibold">Tente atingir pelo menos 50 pontos para focar bem!</p>
                        <button
                          onClick={startGame}
                          className="px-5 py-2 bg-purple-600 text-white font-bold text-xs rounded-full flex items-center gap-1 mx-auto cursor-pointer"
                        >
                          <RefreshCw className="h-3.5 w-3.5" /> Jogar Novamente
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <h5 className="font-bold text-sm text-gray-800">Regras:</h5>
                    <p className="text-xs text-gray-500 max-w-xs mt-1">
                      Clique rapidamente apenas nas <span className="font-bold text-emerald-600">frutas saudáveis</span>!
                      Evite clicar nos doces artificiais. Alcance <span className="font-bold text-purple-600">50 pontos</span> para vencer o desejo!
                    </p>
                    <button
                      onClick={startGame}
                      className="mt-4 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs rounded-full shadow-md transition cursor-pointer"
                    >
                      Iniciar Distração
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="relative flex-1 w-full bg-white/80 rounded-xl overflow-hidden border border-gray-200/30 min-h-[180px] my-4">
                {gameTargets.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleTapTarget(t.id, t.isHealthy)}
                    style={{ top: `${t.top}%`, left: `${t.left}%` }}
                    className="absolute text-3xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-all duration-150 cursor-pointer active:scale-90 animate-scale-in select-none"
                  >
                    {t.emoji}
                  </button>
                ))}
              </div>
            )}

            {gameActive && (
              <p className="text-[9px] text-gray-400 text-center font-medium">
                Toque apenas em 🍓 🥝 🍊 🍌 🍎 e evite chocolates, donuts ou balas!
              </p>
            )}
          </div>
        )}

        {/* WATER TOOL */}
        {activeTool === 'water' && (
          <div className="flex flex-col items-center justify-between h-full my-auto py-2">
            <h4 className="font-extrabold text-sm text-gray-800">O Teste da Água</h4>
            <div className="text-center max-w-md space-y-3 my-4 bg-white p-4 rounded-2xl border border-gray-100">
              <span className="text-3xl block">💧</span>
              <p className="text-xs text-gray-600 leading-relaxed">
                O hipotálamo controla a fome, a sede e os impulsos de recompensa. De forma confusa, o cérebro muitas vezes decodifica a desidratação leve como uma vontade urgente de comer açúcar rápido (carboidrato simples).
              </p>
              <p className="text-xs font-bold text-sky-600">
                Desafio: Beba 1 copo grande de água (250ml) e aguarde 10 minutos. 80% dos desejos passam após a hidratação!
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 w-full">
              <button
                onClick={logWater}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs rounded-full flex items-center gap-2 shadow-md transition cursor-pointer"
              >
                <Droplet className="h-4 w-4 fill-white text-white" />
                Bebi 1 Copo de Água!
              </button>

              {waterLogged > 0 && (
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <Check className="h-4 w-4" /> {waterLogged} copo(s) registrados agora.
                </span>
              )}

              <button
                onClick={handleSuccessResist}
                className="mt-3 text-xs font-bold text-gray-500 hover:text-gray-700 underline cursor-pointer"
              >
                Já bebi a água e o desejo diminuiu (+150 XP)
              </button>
            </div>
          </div>
        )}

        {/* SCIENCE MINDSET (TIPS) TOOL */}
        {activeTool === 'tips' && (
          <div className="flex flex-col items-center justify-between h-full my-auto py-2">
            <h4 className="font-extrabold text-sm text-gray-800">Surfando no Desejo (Urge Surfing)</h4>
            
            <div className="space-y-3 my-4 text-left">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                <span className="text-2xl shrink-0">🌊</span>
                <div>
                  <h5 className="font-bold text-xs text-gray-800">Cravings são como Ondas</h5>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                    Cientificamente, um desejo de doce atinge seu pico entre 10 e 15 minutos de duração, e depois quebra de forma abrupta. Não tente lutar contra o desejo: apenas observe-o subir, ciente de que ele vai descer sozinho.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                <span className="text-2xl shrink-0">🧠</span>
                <div>
                  <h5 className="font-bold text-xs text-gray-800">Dopamina Rápida vs. Lenta</h5>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                    O açúcar dá um pico de dopamina artificial imediato que escraviza seu cérebro. Recompense seu cérebro com dopamina boa: ligue para um amigo, brinque com seu pet ou leia um texto inspirador.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSuccessResist}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs rounded-full shadow-md transition cursor-pointer"
            >
              Entendi e vou surfar essa onda! (+150 XP)
            </button>
          </div>
        )}

        {/* BACK BUTTON IN SUBTOOLS */}
        {activeTool !== 'menu' && (
          <button
            onClick={() => setActiveTool('menu')}
            className="absolute bottom-4 right-4 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            Voltar ao Menu
          </button>
        )}
      </div>
    </div>
  );
}
