import { BODY_TIMELINE } from '../data';
import { ShieldAlert, Sparkles, HeartPulse } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-8">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="bg-emerald-100 text-emerald-700 font-black text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 w-fit mx-auto">
          <HeartPulse className="h-4 w-4 animate-pulse" /> O QUE ACONTECE NO CORPO
        </span>
        <h3 className="text-2xl font-black text-gray-800">A Linha do Tempo da Reabilitação</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          Reduzir o açúcar refinado causa mudanças biológicas imediatas. Veja como seu organismo se cura e regenera em cada etapa da sua nova jornada livre.
        </p>
      </div>

      {/* Vertical Timeline grid */}
      <div className="relative max-w-3xl mx-auto pl-4 sm:pl-6 border-l-2 border-purple-100 py-2 space-y-10">
        {BODY_TIMELINE.map((event, index) => {
          return (
            <div key={index} className="relative group">
              {/* Timline Dot */}
              <span className="absolute -left-[25px] sm:-left-[33px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-purple-300 group-hover:border-pink-500 transition-colors shadow-sm">
                <span className="text-base" role="img" aria-label={event.title}>
                  {event.iconEmoji}
                </span>
              </span>

              {/* Content Card */}
              <div className="ml-4 sm:ml-6 p-5 bg-gradient-to-br from-slate-50 to-zinc-50 border border-gray-200/60 rounded-2xl transition-all duration-300 hover:shadow-md hover:border-pink-200 group-hover:translate-x-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-black uppercase tracking-wider text-pink-500 bg-pink-50 px-2.5 py-1 rounded-full">
                      {event.time}
                    </span>
                    <h4 className="font-extrabold text-sm text-gray-800">{event.title}</h4>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mt-2.5">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scientific Note Footer */}
      <div className="bg-purple-50/40 border border-purple-100/75 rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto">
        <ShieldAlert className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h5 className="font-bold text-xs text-purple-900 flex items-center gap-1">
            Nota Científica <Sparkles className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
          </h5>
          <p className="text-[11px] text-purple-800/80 leading-relaxed">
            O açúcar adicionado ativa os mesmos receptores de recompensa cerebral no núcleo accumbens que substâncias viciantes altamente controladas. Romper esse circuito requer disciplina inicial, mas a neuroplasticidade do cérebro faz com que o vício químico e os desejos desapareçam por completo após cerca de 21 a 30 dias!
          </p>
        </div>
      </div>
    </div>
  );
}
