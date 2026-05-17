import { ChallengeDay, Recipe, Badge } from './types';

// Standard Sweet Items for Calculator & Fast Logging
export interface SweetItem {
  id: string;
  name: string;
  sugarGrams: number;
  calories: number;
  emoji: string;
  category: string;
  servingSize: string;
}

export const POPULAR_SWEETS: SweetItem[] = [
  { id: 'soda', name: 'Refrigerante em Lata', sugarGrams: 37, calories: 140, emoji: '🥤', category: 'Bebidas', servingSize: '350ml' },
  { id: 'chocolate_bar', name: 'Barra de Chocolate (Ao Leite)', sugarGrams: 55, calories: 530, emoji: '🍫', category: 'Doces', servingSize: '90g' },
  { id: 'ice_cream', name: 'Sorvete (2 bolas)', sugarGrams: 32, calories: 280, emoji: '🍦', category: 'Gelados', servingSize: '120g' },
  { id: 'donut', name: 'Donut Recheado', sugarGrams: 22, calories: 300, emoji: '🍩', category: 'Padaria', servingSize: '1 unidade' },
  { id: 'cake_slice', name: 'Fatia de Bolo de Chocolate', sugarGrams: 40, calories: 380, emoji: '🍰', category: 'Padaria', servingSize: '100g' },
  { id: 'cookies', name: 'Biscoitos Recheados (4 un.)', sugarGrams: 24, calories: 200, emoji: '🍪', category: 'Snacks', servingSize: '40g' },
  { id: 'candy', name: 'Balas de Goma (1 pacotinho)', sugarGrams: 38, calories: 160, emoji: '🍬', category: 'Doces', servingSize: '50g' },
  { id: 'coffee_sugar', name: 'Café Adoçado', sugarGrams: 10, calories: 40, emoji: '☕', category: 'Bebidas', servingSize: '1 xícara (150ml, c/ 2 sachês)' },
  { id: 'box_juice', name: 'Suco de Caixa Industrializado', sugarGrams: 28, calories: 120, emoji: '🧃', category: 'Bebidas', servingSize: '200ml' },
  { id: 'condensed_milk', name: 'Leite Condensado (Colher de Sopa)', sugarGrams: 11, calories: 65, emoji: '🍯', category: 'Ingredientes', servingSize: '20g' },
  { id: 'energy_drink', name: 'Energético Lata', sugarGrams: 27, calories: 110, emoji: '⚡', category: 'Bebidas', servingSize: '250ml' },
  { id: 'pudding', name: 'Pudim de Leite Condensado', sugarGrams: 29, calories: 220, emoji: '🍮', category: 'Doces', servingSize: '1 fatia' },
];

// The 30-Day Sweets Reduction Challenge
export const CHALLENGE_DAYS: Omit<ChallengeDay, 'completed'>[] = [
  {
    day: 1,
    title: 'Dia da Consciência',
    description: 'Anote ou registre absolutamente tudo de doce que você comer hoje. O primeiro passo para a mudança é enxergar o hábito real.',
    xpReward: 100,
  },
  {
    day: 2,
    title: 'Substituição Inteligente',
    description: 'Troque o doce depois do almoço por uma fruta naturalmente doce, como manga, uva ou morango fresco.',
    xpReward: 120,
  },
  {
    day: 3,
    title: 'Café Sem Açúcar',
    description: 'Experimente beber café, chá ou chimarrão sem açúcar ou adoçante hoje. Sinta o verdadeiro sabor do grão/ervas!',
    xpReward: 150,
  },
  {
    day: 4,
    title: 'O Teste da Água',
    description: 'Quando bater a vontade urgente de comer doce, beba um copo grande de água bem gelada e espere 10 minutos antes de decidir.',
    xpReward: 120,
  },
  {
    day: 5,
    title: 'Leitor de Rótulos',
    description: 'Pegue 3 produtos embalados em casa ou no mercado e confira os ingredientes. Procure por nomes ocultos do açúcar (xarope de milho, maltodextrina, sacarose).',
    xpReward: 150,
  },
  {
    day: 6,
    title: 'Zero Refrigerante',
    description: 'Evite refrigerantes e sucos de caixinha hoje. Substitua por água com gás e rodelas de limão ou hortelã.',
    xpReward: 130,
  },
  {
    day: 7,
    title: 'Semana 1 Concluída!',
    description: 'Você completou 7 dias de foco! Celebre hoje se dando uma recompensa não-alimentar (um banho relaxante, um filme ou um livro novo).',
    xpReward: 250,
    badge: 'semana_de_aco',
  },
  {
    day: 8,
    title: 'Mapeando Gatilhos',
    description: 'Identifique o que ativa sua vontade de doce hoje: tédio, cansaço, ansiedade ou hábito após refeições? Anote mentalmente.',
    xpReward: 120,
  },
  {
    day: 9,
    title: 'Especiarias Aliadas',
    description: 'Use canela em pó, raspas de limão ou essência de baunilha para adoçar naturalmente o seu iogurte, mingau ou frutas.',
    xpReward: 130,
  },
  {
    day: 10,
    title: 'Sobremesa Saudável',
    description: 'Prepare uma das nossas receitas saudáveis sem açúcar adicionado para comer hoje de lanche ou sobremesa!',
    xpReward: 180,
  },
  {
    day: 11,
    title: 'Chá da Tarde Conforto',
    description: 'Tome um chá de ervas naturalmente doces (como camomila, maçã com canela, ou erva-doce) sem adoçar no horário em que costuma comer doce.',
    xpReward: 120,
  },
  {
    day: 12,
    title: 'Organize o Ambiente',
    description: 'Retire doces do seu campo visual direto. Guarde-os em armários altos ou evite comprar estoque para deixar em casa.',
    xpReward: 140,
  },
  {
    day: 13,
    title: 'Cacau 70%+',
    description: 'Se a vontade de chocolate estiver insuportável, coma apenas 1 quadradinho de chocolate com pelo menos 70% de cacau. Saboreie bem devagar.',
    xpReward: 150,
  },
  {
    day: 14,
    title: 'Duas Semanas!',
    description: 'Metade do caminho! Suas papilas gustativas já começaram a se renovar. Perceba como os alimentos naturais estão mais saborosos.',
    xpReward: 300,
    badge: 'metade_jornada',
  },
  {
    day: 15,
    title: 'Durma Melhor',
    description: 'Evite açúcar ou refeições pesadas 3 horas antes de deitar. O açúcar antes de dormir prejudica a qualidade do sono profundo.',
    xpReward: 140,
  },
  {
    day: 16,
    title: 'Refeição Salgada Nutritiva',
    description: 'Garanta que seu almoço ou jantar tenha proteínas e fibras suficientes. Elas ajudam a manter a saciedade e reduzem picos de insulina que causam desejo de doce.',
    xpReward: 130,
  },
  {
    day: 17,
    title: 'Distração Ativa',
    description: 'Quando a fissura por açúcar aparecer hoje, faça 10 polichinelos ou dê uma caminhada de 5 minutos. Mover o corpo libera dopamina saudável.',
    xpReward: 150,
  },
  {
    day: 18,
    title: 'Respiração Quadrada',
    description: 'Pratique a respiração consciente por 2 minutos (use nossa ferramenta de pânico). O estresse gera cortisol, que implora por açúcar.',
    xpReward: 130,
  },
  {
    day: 19,
    title: 'Sem Doces Escondidos',
    description: 'Hoje, evite alimentos ultraprocessados salgados (molhos prontos, pães de forma) que costumam conter açúcar camuflado.',
    xpReward: 160,
  },
  {
    day: 20,
    title: 'Aliados da Saciedade',
    description: 'Adicione gorduras boas na sua rotina hoje: um punhado de castanhas, abacate ou coco seco. Eles reduzem a velocidade de digestão.',
    xpReward: 140,
  },
  {
    day: 21,
    title: 'Três Semanas de Ouro',
    description: '21 dias! Cientificamente, este é o tempo médio para consolidar um novo padrão neurológico. Você está no controle!',
    xpReward: 350,
    badge: 'ouro_21_dias',
  },
  {
    day: 22,
    title: 'Dia do Amargor Nobre',
    description: 'Desafie seu paladar hoje comendo uma salada de folhas amargas (como rúcula ou agrião) ou tomando chá verde. Ajuda a resetar receptores doces.',
    xpReward: 150,
  },
  {
    day: 23,
    title: 'Zero Adoçantes Artificiais',
    description: 'Tente passar o dia de hoje sem adoçantes artificiais (sucralose, aspartame). Eles mantêm seu cérebro viciado no estímulo ultra-doce.',
    xpReward: 180,
  },
  {
    day: 24,
    title: 'Auto-Observação',
    description: 'Como está sua energia hoje comparada ao Dia 1? Menos picos de preguiça no meio da tarde? Celebre mentalmente essa vitória!',
    xpReward: 140,
  },
  {
    day: 25,
    title: 'Espalhe a Inspiração',
    description: 'Compartilhe sua jornada ou prepare uma sobremesa saudável para alguém que você ama hoje. Fazer o bem gera bem-estar real.',
    xpReward: 160,
  },
  {
    day: 26,
    title: 'Resista com o Pânico',
    description: 'Abra a tela do "Botão de Pânico" hoje e faça uma rodada do jogo de distração ou respiração guiada, mesmo se a vontade for leve.',
    xpReward: 150,
  },
  {
    day: 27,
    title: 'A Vitória Está Próxima',
    description: 'Apenas mais alguns dias! Mantenha a dispensa limpa e o foco afiado. Você provou que é mais forte que o açúcar.',
    xpReward: 180,
  },
  {
    day: 28,
    title: 'Lanche Campeão',
    description: 'Monte um lanche da tarde com banana amassada, aveia e uma pitada de canela aquecida no micro-ondas. Conforto puro e saudável!',
    xpReward: 150,
  },
  {
    day: 29,
    title: 'Gratidão e Reflexão',
    description: 'Pense em tudo o que você aprendeu sobre si mesmo neste mês. O autocontrole é um superpoder que você acabou de exercitar.',
    xpReward: 200,
  },
  {
    day: 30,
    title: 'Mestre da Liberdade!',
    description: 'Parabéns! Você completou os 30 dias. Você não depende mais do açúcar para ter energia, prazer ou recompensa. Você é livre!',
    xpReward: 500,
    badge: 'mestre_da_liberdade',
  },
];

// Delicious sugar-free recipes
export const HEALTHY_RECIPES: Recipe[] = [
  {
    id: 'banana_pancakes',
    title: 'Panqueca de Banana de 2 Ingredientes',
    category: 'sobremesa',
    prepTime: '10 min',
    difficulty: 'Fácil',
    imageEmoji: '🥞',
    ingredients: [
      '1 banana bem madura (quanto mais madura, mais doce!)',
      '1 ovo inteiro',
      '1 colher de sopa de farelo de aveia (opcional, para dar liga)',
      '1 pitada de canela em pó'
    ],
    instructions: [
      'Em um prato, amasse muito bem a banana com um garfo até virar uma papinha.',
      'Adicione o ovo e bata bem a mistura até ficar homogênea.',
      'Misture a aveia e a canela.',
      'Aqueça uma frigideira antiaderente em fogo baixo (unte levemente com um pingo de óleo de coco se necessário).',
      'Despeje a massa, tampe e espere firmar. Vire com cuidado para dourar o outro lado.',
      'Sirva morna! Fica excelente acompanhada de morangos ou um fio de mel de abelha (moderado).'
    ],
    sugarSaving: 'Economiza ~25g de açúcar em relação a panquecas tradicionais adoçadas.'
  },
  {
    id: 'avocado_mousse',
    title: 'Danoninho de Abacate e Cacau',
    category: 'sobremesa',
    prepTime: '15 min',
    difficulty: 'Fácil',
    imageEmoji: '🥑',
    ingredients: [
      '1 abacate médio maduro (ou 2 avocados)',
      '3 colheres de sopa de cacau em pó 100% (sem açúcar)',
      '3 colheres de sopa de leite de coco concentrado ou iogurte natural integral',
      '2 colheres de sopa de mel, xilitol ou purê de tâmaras (opcional, ajuste a gosto)',
      '1 colher de chá de essência de baunilha'
    ],
    instructions: [
      'Corte o abacate e retire o caroço e a polpa.',
      'Coloque todos os ingredientes no liquidificador ou processador de alimentos.',
      'Bata muito bem até obter um creme liso, brilhante e sem pedaços de abacate.',
      'Transfira para taças individuais e leve à geladeira por pelo menos 2 horas para firmar e gelar.',
      'Dica: Sirva salpicado com nibs de cacau ou raspas de laranja.'
    ],
    sugarSaving: 'Substitui o mousse tradicional entupido de leite condensado (economiza ~45g de açúcar por porção!).'
  },
  {
    id: 'chia_pudding',
    title: 'Pudim de Chia com Frutas Vermelhas',
    category: 'lanche',
    prepTime: '5 min (prep) + 4h geladeira',
    difficulty: 'Fácil',
    imageEmoji: '🍮',
    ingredients: [
      '4 colheres de sopa de sementes de chia',
      '1 copo (200ml) de leite vegetal (coco, amêndoas ou aveia)',
      '1 colher de chá de extrato de baunilha',
      '1 xícara de frutas vermelhas frescas (morangos picados, mirtilos, amoras)',
      'Opcional: 1 colher de sopa de coco ralado sem açúcar'
    ],
    instructions: [
      'Em um frasco de vidro ou pote, misture bem as sementes de chia, o leite vegetal e a baunilha.',
      'Deixe descansar por 10 minutos e mexa novamente para evitar que as sementes fiquem empelotadas no fundo.',
      'Feche o pote e leve à geladeira por no mínimo 4 horas (ou de um dia para o outro) até virar um gel denso parecido com pudim.',
      'Na hora de comer, adicione as frutas vermelhas por cima e o coco ralado.',
      'A chia é riquíssima em fibras solúveis que estabilizam a glicose e dão saciedade duradoura!'
    ],
    sugarSaving: 'Lanche com baixíssimo índice glicêmico, zero açúcar refinado e muita fibra.'
  },
  {
    id: 'cinnamon_apples',
    title: 'Maçãs Assadas com Canela no Micro-ondas',
    category: 'lanche',
    prepTime: '5 min',
    difficulty: 'Fácil',
    imageEmoji: '🍎',
    ingredients: [
      '1 maçã (Gala ou Fuji)',
      '1 colher de chá de canela em pó',
      '1 colher de chá de cravo-da-índia em pó (opcional)',
      '1 punhado pequeno de nozes ou castanhas picadas para crocância'
    ],
    instructions: [
      'Lave bem a maçã e corte em fatias finas ou cubos, removendo as sementes.',
      'Disponha os pedaços em um prato ou tigela própria para micro-ondas.',
      'Polvilhe generosamente a canela e o cravo em pó por cima das maçãs.',
      'Leve ao micro-ondas em potência alta por 2 a 3 minutos (até ficarem bem macias e soltando uma calda natural).',
      'Finalize salpicando as nozes ou castanhas por cima.',
      'Coma quentinho! A canela ajuda a regular os níveis de açúcar no sangue.'
    ],
    sugarSaving: 'Uma sobremesa reconfortante, quente, com zero açúcar adicionado.'
  },
  {
    id: 'hibiscus_mocktail',
    title: 'Soda Saudável de Hibisco e Limão',
    category: 'bebida',
    prepTime: '5 min',
    difficulty: 'Fácil',
    imageEmoji: '🍹',
    ingredients: [
      '100ml de chá de hibisco concentrado e frio',
      'Suco de 1/2 limão espremido na hora',
      '150ml de água mineral gasosa',
      'Folhas de hortelã fresca e cubos de gelo'
    ],
    instructions: [
      'Prepare o chá de hibisco (infusão de 1 colher de sopa de flores secas em 100ml de água quente, coado e resfriado).',
      'Em um copo alto cheio de gelo, despeje o chá de hibisco concentrado.',
      'Adicione o suco de limão.',
      'Complete o copo lentamente com a água gasosa para criar um efeito degradê lindo.',
      'Decore com folhas de hortelã fresca levemente amassadas.',
      'O azedinho do limão junto com o floral do hibisco é super refrescante e limpa as papilas do desejo por refrigerante.'
    ],
    sugarSaving: 'Substitui um copo de refrigerante ou chá industrializado de lata (economiza ~35g de açúcar!).'
  }
];

// Badges / Conquistas
export const BADGES: Badge[] = [
  {
    id: 'primeiro_passo',
    title: 'Primeiro Passo',
    description: 'Criou seu perfil e iniciou a jornada contra o excesso de doce!',
    iconEmoji: '🌱',
    colorClass: 'from-green-400 to-emerald-600 shadow-green-100',
    requirement: 'Inicie o aplicativo.',
  },
  {
    id: 'calc_expert',
    title: 'Cientista do Açúcar',
    description: 'Calculou o açúcar de alguma refeição na nossa calculadora inteligente.',
    iconEmoji: '🧪',
    colorClass: 'from-purple-400 to-indigo-600 shadow-indigo-100',
    requirement: 'Use a calculadora de açúcar.',
  },
  {
    id: 'resistencia_heroi',
    title: 'Domador de Craving',
    description: 'Venceu uma vontade avassaladora de doce usando as ferramentas de pânico.',
    iconEmoji: '🛡️',
    colorClass: 'from-red-400 to-rose-600 shadow-rose-100',
    requirement: 'Resista a uma vontade usando as ferramentas de pânico.',
  },
  {
    id: 'semana_de_aco',
    title: 'Semana de Aço',
    description: 'Alcançou o dia 7 do desafio dos 30 dias. Consistência exemplar!',
    iconEmoji: '⚔️',
    colorClass: 'from-amber-400 to-orange-600 shadow-orange-100',
    requirement: 'Complete 7 dias do desafio.',
  },
  {
    id: 'metade_jornada',
    title: 'Metade da Jornada',
    description: 'Chegou ao dia 14! Seus receptores já estão se reconfigurando.',
    iconEmoji: '🌟',
    colorClass: 'from-blue-400 to-sky-600 shadow-sky-100',
    requirement: 'Complete 14 dias do desafio.',
  },
  {
    id: 'ouro_21_dias',
    title: 'Guerreiro dos 21 Dias',
    description: 'Completou 21 dias de foco. Seu cérebro formou novos hábitos saudáveis!',
    iconEmoji: '🏆',
    colorClass: 'from-yellow-400 to-amber-600 shadow-amber-100',
    requirement: 'Complete 21 dias do desafio.',
  },
  {
    id: 'mestre_da_liberdade',
    title: 'Mestre da Liberdade',
    description: 'Completou com sucesso o desafio completo de 30 dias. Liberdade total!',
    iconEmoji: '👑',
    colorClass: 'from-fuchsia-500 to-purple-700 shadow-fuchsia-100',
    requirement: 'Complete os 30 dias do desafio.',
  },
];

// Body Benefits Timeline
export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  iconEmoji: string;
  color: string;
}

export const BODY_TIMELINE: TimelineEvent[] = [
  {
    time: '20 minutos',
    title: 'Glicose Estabilizada',
    description: 'Sua insulina para de dar picos bruscos. O pâncreas reduz a hiperatividade e seus níveis de energia começam a se estabilizar, sem aquela moleza pós-açúcar.',
    iconEmoji: '⏱️',
    color: 'border-emerald-500 bg-emerald-50 text-emerald-700',
  },
  {
    time: '24 horas',
    title: 'Reset Digestivo e Alerta',
    description: 'Sua microbiota intestinal agradece! Menos fermentação de bactérias patogênicas. Sua mente fica mais focada, sem o nevoeiro cerebral (brain fog) causado por quedas de açúcar.',
    iconEmoji: '🧠',
    color: 'border-teal-500 bg-teal-50 text-teal-700',
  },
  {
    time: '3 dias',
    title: 'Paladar Reconfigurando',
    description: 'Suas papilas gustativas começam a se renovar. Doces artificiais podem começar a parecer excessivamente enjoativos, e o sabor de uma banana ou maçã fica muito mais rico.',
    iconEmoji: '👅',
    color: 'border-indigo-500 bg-indigo-50 text-indigo-700',
  },
  {
    time: '1 semana',
    title: 'Pele Radiante e Sem Inchaço',
    description: 'O açúcar causa um processo chamado glicação, que destrói colágeno e envelhece a pele. Em 7 dias, a acne inflamatória diminui e a retenção de líquido desaparece, reduzindo o inchaço.',
    iconEmoji: '✨',
    color: 'border-pink-500 bg-pink-50 text-pink-700',
  },
  {
    time: '2 semanas',
    title: 'Sem Quedas de Energia',
    description: 'A dependência química cerebral de dopamina rápida cai drasticamente. Seus desejos compulsivos diminuem e você mantém energia constante o dia todo, sem precisar de cafeína ou doces à tarde.',
    iconEmoji: '⚡',
    color: 'border-orange-500 bg-orange-50 text-orange-700',
  },
  {
    time: '1 mês',
    title: 'Saúde Metabólica Blindada',
    description: 'Sua sensibilidade à insulina aumenta significativamente, reduzindo o risco de Diabetes Tipo 2, gordura no fígado (esteatose hepática) e inflamações crônicas sistêmicas. Você está com o metabolismo totalmente saudável!',
    iconEmoji: '❤️',
    color: 'border-red-500 bg-red-50 text-red-700',
  },
];
