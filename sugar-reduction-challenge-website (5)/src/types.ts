export interface UserProfile {
  name: string;
  profileType: 'sugar_addict' | 'moderate' | 'mindful'; // Doceiro, Moderado, Equilibrado
  goal: 'quit_totally' | 'reduce_80' | 'reduce_50' | 'weekends_only';
  dailyLimit: number; // in grams
  xp: number;
  level: number;
  streak: number;
  maxStreak: number;
  badges: string[];
  hasSetup: boolean;
  
  // High Protein & Health Additions
  weightKg?: number;
  activityLevel?: 'sedentary' | 'moderate' | 'active' | 'athlete';
  proteinMultiplier?: number; // g/kg
  proteinGoalGrams?: number; // calculated target
  weightGoal?: 'fat_loss' | 'muscle_gain' | 'maintenance';
}

export interface FoodLog {
  id: string;
  date: string; // YYYY-MM-DD
  name: string;
  sugarGrams: number;
  calories: number;
  quantity: number;
}

export interface CravingLog {
  id: string;
  date: string;
  intensity: 'mild' | 'medium' | 'intense';
  strategyUsed: 'breathing' | 'distraction' | 'water' | 'reading';
  resisted: boolean;
}

export interface ChallengeDay {
  day: number;
  title: string;
  description: string;
  xpReward: number;
  badge?: string;
  completed: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'sobremesa' | 'lanche' | 'bebida';
  prepTime: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  ingredients: string[];
  instructions: string[];
  sugarSaving: string; // how much sugar saved compared to regular version
  imageEmoji: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconEmoji: string;
  colorClass: string;
  requirement: string;
}

export interface Meal {
  cafe: string;
  almoco: string;
  lanche: string;
  jantar: string;
  docinho: string;
}

export interface EbookChapter {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: string[];
}
