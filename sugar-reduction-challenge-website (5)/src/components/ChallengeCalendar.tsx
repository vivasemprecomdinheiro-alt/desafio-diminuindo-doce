import { useState } from 'react';
import { CHALLENGE_DAYS } from '../data';
import { Check, Sparkles, Award, Calendar, ArrowRight, Zap } from 'lucide-react';

interface ChallengeCalendarProps {
  completedDays: number[];
  onToggleDay: (day: number, xpReward: number, badgeId?: string) => void;
}

export default function ChallengeCalendar({
  completedDays,
  onToggleDay,
}: ChallengeCalendarProps) {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  const selectedDayData = CHALLENGE_DAYS.find((d) => d.day === selectedDayNumber) || CHALLENGE_DAYS[0];
  const isSelectedDayCompleted = completedDays.includes(selectedDayNumber);

  const totalDays = CHALLENGE_DAYS.length;
  const completedCount = completedDays.length;
  const progressPercent = Math.round((completedCount / totalDays) * 100);

  const handleCompleteDay = () => {
    onToggleDay(selectedDayData.day, selectedDayData.xpReward, selectedDayData.badge);
  };

  // Helper to get day cell styling
  const getDayStatus = (dayNum: number) => {
    const isCompleted = completedDays.includes(dayNum);
    const isSelected = selectedDayNumber === dayNum;
    const dayData = CHALLENGE_DAYS.find((d) => d.day === dayNum);
    const hasBadge = !!dayData?.badge;

    let borderClass = 'border-gray-100 hover:border-pink-200';
    let bgClass = 'bg-white text-gray-800';

    if (isCompleted) {
      bgClass = 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-md shadow-pink-100';
      borderClass = 'border-transparent';
    } else if (isSelected) {
      borderClass = 'border-purple-500 ring-4 ring-purple-100';
    } else if (hasBadge) {
      borderClass = 'border-amber-300 bg-amber-50/50';
    }

    return { isCompleted, isSelected, hasBadge, borderClass, bgClass };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Calendar Grid */}
      <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-pink-500" /> Desafio 30 Dias
            </h3>
            <p className="text-xs text-gray-500 mt-1">Complete as pequenas missões diárias para reeducar seu cérebro.</p>
          </div>

          {/* Mini stats */}
          <div className="bg-pink-50/40 px-4 py-2 rounded-2xl text-right shrink-0 border border-pink-50">
            <span className="text-[10px] text-pink-500 font-extrabold uppercase tracking-wider block">Seu Progresso</span>
            <span className="text-lg font-black text-purple-900">
              {completedCount} <span className="text-xs text-gray-400 font-normal">/ {totalDays} dias</span>
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 bg-purple-50/30 p-4 rounded-2xl border border-purple-50/50">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-purple-700">Progresso Geral</span>
            <span className="font-black text-purple-700">{progressPercent}%</span>
          </div>
          <div className="w-full bg-purple-100 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Grid Cells */}
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-6 gap-3.5">
          {CHALLENGE_DAYS.map((d) => {
            const { isCompleted, hasBadge, borderClass, bgClass } = getDayStatus(d.day);
            return (
              <button
                key={d.day}
                onClick={() => setSelectedDayNumber(d.day)}
                className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-between p-2 transition-all duration-200 relative group cursor-pointer ${borderClass} ${bgClass}`}
              >
                {/* Milestone crown / star indicator */}
                {hasBadge && !isCompleted && (
                  <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-white rounded-full p-0.5 shadow-sm animate-pulse">
                    <Award className="h-3.5 w-3.5" />
                  </span>
                )}

                <span className={`text-xs font-black ${isCompleted ? 'text-white/80' : 'text-gray-400'}`}>
                  DIA
                </span>

                <span className={`text-2xl font-black ${isCompleted ? 'text-white' : 'text-gray-800 group-hover:scale-110 transition-transform'}`}>
                  {d.day}
                </span>

                <div className="h-4">
                  {isCompleted ? (
                    <Check className="h-4 w-4 text-white stroke-[3]" />
                  ) : hasBadge ? (
                    <span className="text-[10px] text-amber-600 font-bold">Bônus</span>
                  ) : (
                    <span className="text-[9px] text-purple-400/70 font-medium group-hover:text-purple-500 transition">
                      +{d.xpReward}XP
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Daily Mission Detail Card */}
      <div className="lg:col-span-5">
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-purple-100 p-6 md:p-8 rounded-3xl shadow-sm h-full flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header Badge */}
            <div className="flex items-center justify-between">
              <span className="bg-pink-100 text-pink-700 font-black text-xs px-4 py-1.5 rounded-full">
                MISSÃO: DIA {selectedDayData.day}
              </span>

              {selectedDayData.badge && (
                <span className="bg-amber-100 text-amber-700 font-bold text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Award className="h-3.5 w-3.5" /> Medalha Especial
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h4 className="text-2xl font-black text-gray-800 leading-snug">
                {selectedDayData.title}
              </h4>
              <div className="flex items-center gap-2 mt-2 text-xs text-purple-600 font-bold">
                <Zap className="h-4 w-4 text-amber-500 fill-amber-500" /> Recompensa: +{selectedDayData.xpReward} XP
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed bg-white/60 p-5 rounded-2xl border border-purple-100/50">
              {selectedDayData.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-purple-100">
            {isSelectedDayCompleted ? (
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-center flex flex-col items-center gap-1 text-emerald-800">
                <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-1">
                  <Check className="h-5 w-5 stroke-[3]" />
                </div>
                <span className="font-black text-sm">Dia Concluído com Sucesso!</span>
                <span className="text-xs text-emerald-700/80">Parabéns por manter a disciplina. Continue assim amanhã!</span>
              </div>
            ) : (
              <button
                onClick={handleCompleteDay}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold rounded-2xl shadow-lg shadow-pink-100 transition duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="h-5 w-5 text-yellow-200 animate-spin-slow" />
                Marcar como Concluído!
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
