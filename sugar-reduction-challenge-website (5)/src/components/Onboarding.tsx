import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Sparkles, Award, ArrowRight, HeartPulse } from 'lucide-react';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [name, setName] = useState('');
  const [profileType, setProfileType] = useState<'sugar_addict' | 'moderate' | 'mindful'>('sugar_addict');
  const [goal, setGoal] = useState<'quit_totally' | 'reduce_80' | 'reduce_50' | 'weekends_only'>('reduce_50');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, insira seu nome para podermos começar!');
      return;
    }

    // Calculate daily limit based on goal
    let dailyLimit = 25; // default WHO standard
    if (goal === 'quit_totally') dailyLimit = 5;
    if (goal === 'reduce_80') dailyLimit = 15;
    if (goal === 'reduce_50') dailyLimit = 25;
    if (goal === 'weekends_only') dailyLimit = 12; // strict on weekdays

    const profile: UserProfile = {
      name: name.trim(),
      profileType,
      goal,
      dailyLimit,
      xp: 100, // start with some starter XP!
      level: 1,
      streak: 0,
      maxStreak: 0,
      badges: ['primeiro_passo'], // Starter badge
      hasSetup: true,
    };

    onComplete(profile);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 md:flex">
        {/* Sidebar panel */}
        <div className="md:w-2/5 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="pattern-cubes" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40 L40 0 M0 0 L40 40" fill="none" stroke="currentColor" strokeWidth="2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern-cubes)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex p-3 bg-white/20 rounded-2xl backdrop-blur-md mb-6">
              <HeartPulse className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
              Desafio<br/>Diminuindo<br/>Doces 🍓
            </h1>
            <p className="mt-4 text-white/90 text-sm leading-relaxed">
              Recupere sua energia, melhore sua pele, emagreça com saúde e assuma o controle do seu cérebro contra a dependência do açúcar refinado.
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/20 text-xs text-white/75 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-yellow-200" />
              <span>Recomendado pela OMS: máx. 25g por dia.</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-yellow-200" />
              <span>30 Dias de Desafios Gamificados!</span>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <form onSubmit={handleSubmit} className="md:w-3/5 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Bem-vindo(a)!</h2>
              <p className="text-sm text-gray-500 mt-1">Vamos configurar sua jornada saudável e personalizada.</p>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Como gostaria de ser chamado(a)?
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Seu nome ou apelido"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none transition duration-200 text-gray-800"
              />
              {error && <p className="text-red-500 text-xs font-medium mt-1">{error}</p>}
            </div>

            {/* Profile Type Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Qual é a sua relação atual com o doce?
              </label>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => setProfileType('sugar_addict')}
                  className={`p-3 text-left rounded-2xl border-2 transition duration-200 flex items-center gap-3 ${
                    profileType === 'sugar_addict'
                      ? 'border-pink-500 bg-pink-50/40'
                      : 'border-gray-100 hover:border-pink-100 hover:bg-pink-50/10'
                  }`}
                >
                  <span className="text-2xl">🐜</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Doceiro(a) Supremo(a)</div>
                    <div className="text-xs text-gray-500">Como doces todo dia, várias vezes. Sinto fissuras constantes.</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProfileType('moderate')}
                  className={`p-3 text-left rounded-2xl border-2 transition duration-200 flex items-center gap-3 ${
                    profileType === 'moderate'
                      ? 'border-pink-500 bg-pink-50/40'
                      : 'border-gray-100 hover:border-pink-100 hover:bg-pink-50/10'
                  }`}
                >
                  <span className="text-2xl">🍰</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Doceiro(a) Moderado</div>
                    <div className="text-xs text-gray-500">Como doces uma vez ao dia (como após o almoço) ou sob estresse.</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setProfileType('mindful')}
                  className={`p-3 text-left rounded-2xl border-2 transition duration-200 flex items-center gap-3 ${
                    profileType === 'mindful'
                      ? 'border-pink-500 bg-pink-50/40'
                      : 'border-gray-100 hover:border-pink-100 hover:bg-pink-50/10'
                  }`}
                >
                  <span className="text-2xl">🍎</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Equilibrado(a)</div>
                    <div className="text-xs text-gray-500">Como de vez em quando, mas quero otimizar minha imunidade e energia.</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Goal Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Qual é sua meta de redução para este mês?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGoal('reduce_50')}
                  className={`p-3 text-center rounded-2xl border-2 transition duration-200 ${
                    goal === 'reduce_50'
                      ? 'border-purple-500 bg-purple-50/40'
                      : 'border-gray-100 hover:border-purple-100'
                  }`}
                >
                  <div className="text-lg font-bold text-purple-600">Metade</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Até 25g por dia</div>
                  <div className="text-[9px] text-gray-400">(Limite recomendado OMS)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal('reduce_80')}
                  className={`p-3 text-center rounded-2xl border-2 transition duration-200 ${
                    goal === 'reduce_80'
                      ? 'border-purple-500 bg-purple-50/40'
                      : 'border-gray-100 hover:border-purple-100'
                  }`}
                >
                  <div className="text-lg font-bold text-purple-600">Reduzir 80%</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Até 15g por dia</div>
                  <div className="text-[9px] text-gray-400">(Açúcar bem restrito)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal('quit_totally')}
                  className={`p-3 text-center rounded-2xl border-2 transition duration-200 ${
                    goal === 'quit_totally'
                      ? 'border-purple-500 bg-purple-50/40'
                      : 'border-gray-100 hover:border-purple-100'
                  }`}
                >
                  <div className="text-lg font-bold text-purple-600">Zero Açúcar</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Até 5g por dia</div>
                  <div className="text-[9px] text-gray-400">(Sem açúcar refinado/adicionado)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setGoal('weekends_only')}
                  className={`p-3 text-center rounded-2xl border-2 transition duration-200 ${
                    goal === 'weekends_only'
                      ? 'border-purple-500 bg-purple-50/40'
                      : 'border-gray-100 hover:border-purple-100'
                  }`}
                >
                  <div className="text-lg font-bold text-purple-600">Só Fim de Semana</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Super restrito de seg. a sex.</div>
                  <div className="text-[9px] text-gray-400">(Equilíbrio flexível)</div>
                </button>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-100 transition duration-200 flex items-center justify-center gap-2 group"
          >
            Começar Desafio
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}
