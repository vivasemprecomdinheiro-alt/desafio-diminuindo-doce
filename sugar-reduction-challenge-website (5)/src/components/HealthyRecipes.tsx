import { useState } from 'react';
import { HEALTHY_RECIPES } from '../data';
import { Clock, Award, Search, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';

export default function HealthyRecipes() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sobremesa' | 'lanche' | 'bebida'>('all');
  const [activeRecipeId, setActiveRecipeId] = useState<string>(HEALTHY_RECIPES[0].id);

  const filteredRecipes = selectedCategory === 'all'
    ? HEALTHY_RECIPES
    : HEALTHY_RECIPES.filter((r) => r.category === selectedCategory);

  const activeRecipe = HEALTHY_RECIPES.find((r) => r.id === activeRecipeId) || HEALTHY_RECIPES[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left: Recipe List & Filters */}
      <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-purple-50/50 shadow-sm space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-pink-500" /> Substitutos Saudáveis
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Sobremesas e lanches deliciosos que matam a vontade de doce com açúcar natural e fibras.
          </p>
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'sobremesa', 'lanche', 'bebida'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-pink-500 text-white'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100/80'
              }`}
            >
              {cat === 'all' && 'Todos'}
              {cat === 'sobremesa' && 'Sobremesas'}
              {cat === 'lanche' && 'Lanches'}
              {cat === 'bebida' && 'Bebidas'}
            </button>
          ))}
        </div>

        {/* List of Recipes */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
          {filteredRecipes.map((recipe) => {
            const isActive = recipe.id === activeRecipeId;
            return (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipeId(recipe.id)}
                className={`w-full p-4 text-left rounded-2xl border-2 transition-all duration-200 flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'border-pink-400 bg-pink-50/10 shadow-sm'
                    : 'border-gray-100 hover:border-pink-100 hover:bg-pink-50/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl shrink-0">{recipe.imageEmoji}</span>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">{recipe.title}</h4>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
                      <span className="flex items-center gap-0.5">
                        <Clock className="h-3 w-3" /> {recipe.prepTime}
                      </span>
                      <span>•</span>
                      <span className="font-medium text-purple-600">{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isActive ? 'translate-x-1 text-pink-500' : ''}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Selected Recipe Details */}
      <div className="lg:col-span-7">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50/30 border border-purple-100 p-6 md:p-8 rounded-3xl shadow-sm h-full space-y-6">
          {/* Header with Sugar Saved badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-purple-100">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{activeRecipe.imageEmoji}</span>
              <div>
                <h4 className="text-xl font-black text-purple-950 leading-tight">{activeRecipe.title}</h4>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full mt-1.5">
                  {activeRecipe.category}
                </span>
              </div>
            </div>

            {/* Sugar Savings Badge */}
            <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl text-emerald-800 shrink-0 max-w-xs">
              <span className="text-[9px] text-emerald-600 font-black block uppercase tracking-wide">Economia de Açúcar</span>
              <span className="text-xs font-bold">{activeRecipe.sugarSaving}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div className="space-y-3">
              <h5 className="font-black text-sm text-purple-950 flex items-center gap-1.5">
                <Search className="h-4 w-4 text-pink-500" /> Ingredientes
              </h5>
              <ul className="space-y-2">
                {activeRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Steps */}
            <div className="space-y-3">
              <h5 className="font-black text-sm text-purple-950 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-pink-500" /> Modo de Preparo
              </h5>
              <ol className="space-y-3.5">
                {activeRecipe.instructions.map((step, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex gap-2.5">
                    <span className="font-black text-pink-500 text-xs shrink-0 bg-pink-100 h-5 w-5 rounded-full flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
