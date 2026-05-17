import { Meal, EbookChapter } from './types';

export interface ProteinFood {
  name: string;
  proteinPer100g: number;
  avgServing: string;
  proteinPerServing: number;
  emoji: string;
  category: 'animal' | 'vegetal' | 'suplemento';
}

export const PROTEIN_FOODS: ProteinFood[] = [
  { name: 'Peito de Frango Grelhado', proteinPer100g: 31, avgServing: '150g (1 filé médio)', proteinPerServing: 46.5, emoji: '🍗', category: 'animal' },
  { name: 'Ovo Inteiro Cozido', proteinPer100g: 13, avgServing: '2 unidades', proteinPerServing: 13, emoji: '🥚', category: 'animal' },
  { name: 'Carne Patinho Moída', proteinPer100g: 28, avgServing: '150g (1 porção)', proteinPerServing: 42, emoji: '🥩', category: 'animal' },
  { name: 'Filet de Tilápia/Pescada', proteinPer100g: 20, avgServing: '150g (1 filé)', proteinPerServing: 30, emoji: '🐟', category: 'animal' },
  { name: 'Whey Protein (Concentrado)', proteinPer100g: 80, avgServing: '30g (1 scoop)', proteinPerServing: 24, emoji: '🥛', category: 'suplemento' },
  { name: 'Iogurte Grego Natural', proteinPer100g: 10, avgServing: '150g (1 copo)', proteinPerServing: 15, emoji: '🥣', category: 'animal' },
  { name: 'Queijo Cottage / Ricota', proteinPer100g: 12, avgServing: '100g (3 colheres sopa)', proteinPerServing: 12, emoji: '🧀', category: 'animal' },
  { name: 'Atum Ralado em Conserva', proteinPer100g: 25, avgServing: '100g (1 lata escorrida)', proteinPerServing: 25, emoji: '🐟', category: 'animal' },
  { name: 'Lombo de Porco Grelhado', proteinPer100g: 27, avgServing: '130g (1 bife médio)', proteinPerServing: 35, emoji: '🥩', category: 'animal' },
  { name: 'Lentilha Cozida', proteinPer100g: 9, avgServing: '150g (1 concha média)', proteinPerServing: 13.5, emoji: '🍲', category: 'vegetal' },
  { name: 'Grão-de-Bico Cozido', proteinPer100g: 8.8, avgServing: '150g (1 concha média)', proteinPerServing: 13.2, emoji: '🧆', category: 'vegetal' },
  { name: 'Tofu Grelhado', proteinPer100g: 8, avgServing: '150g (1 fatia grossa)', proteinPerServing: 12, emoji: '⬜', category: 'vegetal' },
  { name: 'Feijão Carioca Cozido', proteinPer100g: 4.8, avgServing: '140g (1 concha)', proteinPerServing: 6.7, emoji: '🫘', category: 'vegetal' },
  { name: 'Mix de Castanhas/Amêndoas', proteinPer100g: 20, avgServing: '30g (1 punhado)', proteinPerServing: 6, emoji: '🌰', category: 'vegetal' }
];

export const EBOOK_CHAPTERS: EbookChapter[] = [
  {
    id: 'cap1',
    title: 'Capítulo 1: O Sequestro Dopaminérgico do Açúcar',
    subtitle: 'Como o açúcar refinado hackeia seu sistema de recompensa e cria dependência física.',
    icon: '🧠',
    content: [
      'O açúcar refinado é uma substância altamente processada que não existia em abundância na dieta de nossos ancestrais. Por ser uma fonte rápida e densa de energia pura, a evolução moldou nosso cérebro para desejar e estocar açúcar sempre que possível.',
      'Quando você consome açúcar refinado, o cérebro (especificamente o núcleo accumbens) libera uma descarga maciça de DOPAMINA, o neurotransmissor do prazer, da motivação e da recompensa. Essa descarga é comparável à liberação provocada por drogas estimulantes.',
      'O problema central é a NEUROADAPTAÇÃO. Com o consumo frequente, o cérebro percebe o excesso de dopamina e, para se proteger, diminui o número de receptores dopaminérgicos ativos. A consequência direta é a tolerância: você precisa de doses cada vez maiores de doces para sentir o mesmo prazer ou para apenas se sentir "normal".',
      'Quando você decide cortar o açúcar abruptamente, os receptores escassos causam uma queda drástica nos níveis de bem-estar, gerando os famosos sintomas de abstinência: irritabilidade, dor de cabeça, fadiga extrema e uma compulsão incontrolável (craving). Compreender que isso é uma reação química temporária de cura é o primeiro passo para se libertar.'
    ]
  },
  {
    id: 'cap2',
    title: 'Capítulo 2: A Proteína como Arma Secreta Contra a Compulsão',
    subtitle: 'A ciência por trás da saciedade prolongada e a regulação dos hormônios intestinais.',
    icon: '🍗',
    content: [
      'Por que a proteína é o macronutriente mais importante quando você decide diminuir os doces? A resposta reside na bioquímica da saciedade e do controle da glicose.',
      '1. CONTROLE DA GLICEMIA: Carboidratos simples (doces, farinha branca) entram muito rápido na corrente sanguínea, provocando um pico altíssimo de glicose, seguido por uma enxurrada de insulina. Esse pico é rapidamente corrigido, gerando uma "hipoglicemia de rebote". O cérebro interpreta essa queda abrupta de energia como uma emergência de sobrevivência e envia um sinal urgente de fome química por carboidrato simples (doce). As proteínas têm digestão lenta, não gerando picos e mantendo sua glicose e energia estáveis o dia inteiro.',
      '2. OS HORMÔNIOS DA SACIEDADE: A digestão de proteínas no intestino estimula a liberação de dois hormônios cruciais da saciedade: o PYY (Peptídeo YY) e o GLP-1 (Glucagon-like Peptide-1). Esses hormônios avisam diretamente o hipotálamo de que você está satisfeito. Além disso, a proteína reduz a liberação de GRELINA, o hormônio que desperta a fome.',
      '3. TERMOÊNESE INDUZIDA PELA DIETA (TID): Seu corpo gasta muito mais calorias para digerir e quebrar as proteínas em aminoácidos (cerca de 20% a 30% do valor calórico da proteína) do que carboidratos (5% a 10%) ou gorduras (0% a 3%). Portanto, dietas hiperproteicas aceleram o metabolismo naturalmente.',
      'Se você consome proteína suficiente em cada refeição principal, os gatilhos físicos de fome compulsiva simplesmente deixam de disparar, facilitando em 90% a sua adesão ao Desafio Diminuindo Doce.'
    ]
  },
  {
    id: 'cap3',
    title: 'Capítulo 3: Calculando e Batendo a Meta de Proteínas',
    subtitle: 'O guia prático de quantas gramas consumir e como distribuir ao longo do dia.',
    icon: '⚖️',
    content: [
      'Para extrair os benefícios de saciedade e controle de compulsão, a recomendação básica de proteínas para adultos saudáveis deve ser ajustada para cima em relação à ingestão diária recomendada padrão (IDR).',
      'Enquanto a IDR padrão sugere modestos 0,8g por kg de peso corporal para evitar deficiências, a ciência moderna demonstra que para saciedade, emagrecimento e preservação de massa magra, a meta ideal varia de 1.6g a 2.2g de proteína por quilo.',
      'Por exemplo, uma pessoa de 70 kg que busca emagrecer com saúde deve consumir pelo menos 1.8g/kg de proteína, o que equivale a 126g de proteína líquida por dia. Nota importante: 120g de proteína líquida NÃO significa 120g de peito de frango. Significa o teor interno da proteína do alimento (e.g. 100g de frango grelhado contém cerca de 31g de proteína líquida).',
      'DISTRIBUIÇÃO É A CHAVE: O corpo humano não possui estoques eficientes de aminoácidos livres. Por isso, consumir toda a meta de proteína em uma única refeição (como o jantar) é ineficiente. O ideal é fracionar o consumo em porções de 25g a 40g distribuídas em 4 a 5 refeições diárias (Café da manhã, almoço, lanche da tarde, jantar e ceia). Isso estimula constantemente a síntese de proteína muscular e mantém a liberação de hormônios de saciedade ao longo de todo o dia.'
    ]
  },
  {
    id: 'cap4',
    title: 'Capítulo 4: O Detox de 3 Semanas',
    subtitle: 'As fases de transição do seu paladar e o ressurgimento da energia natural.',
    icon: '⏱️',
    content: [
      'Quando você decide reduzir significativamente ou zerar o açúcar adicionado, seu corpo passa por um processo de detox dividido em três fases bem definidas:',
      'FASE 1: A Tempestade (Dias 1 a 5) — O cérebro reclama da falta de dopamina rápida. Você pode sentir mau humor, fadiga no meio da tarde ou dores de cabeça leves. É a fase em que o uso do nosso Botão de Pânico (respiração profunda, hidratação ativa) é mais crítico. Foque em consumir proteínas de alta qualidade e alimentos salgados bem temperados.',
      'FASE 2: A Transição (Dias 6 a 15) — A fissura começa a ceder. Suas papilas gustativas se renovam completamente (o ciclo de renovação celular do paladar leva de 10 a 14 dias). Alimentos que antes pareciam sem graça, como mirtilos, morangos, abacate ou iogurte natural, começam a revelar sua doçura natural e rica. Sua energia diária passa a ficar estável.',
      'FASE 3: A Liberdade (Dias 16 a 30) — Seus receptores de dopamina estão recalibrados. O desejo compulsivo desaparece por completo. Comer um doce torna-se uma escolha consciente e prazerosa, e não mais um impulso químico incontrolável. Você percebe que sua pele está mais limpa, menos inflamada e que você tem muito mais foco mental.'
    ]
  },
  {
    id: 'cap5',
    title: 'Capítulo 5: Estratégias Comportamentais e Estilo de Vida',
    subtitle: 'Sono, controle de estresse e técnicas mentais para a liberdade a longo prazo.',
    icon: '🧘',
    content: [
      'Para blindar seu progresso contra recaídas compulsivas, você precisa integrar estratégias de estilo de vida adicionais ao seu consumo de proteínas:',
      '1. O PODER DO SONO: A privação de sono (dormir menos de 7h por noite) reduz a sensibilidade à insulina e aumenta drasticamente os níveis de Grelina (fome) no dia seguinte, ao mesmo tempo em que desliga as áreas de autocontrole do córtex pré-frontal. Com sono ruim, seu cérebro buscará açúcar rápido para se manter acordado.',
      '2. GERENCIAMENTO DO CORTISOL: O estresse crônico eleva o cortisol, que sinaliza ao fígado para liberar glicose de reserva, resultando em quedas glicêmicas subsequentes e desejos intensos por carboidratos simples e gorduras. Pratique 2 minutos de respiração quadrada diariamente ou faça caminhadas ao ar livre.',
      '3. A TÉCNICA DOS 10 MINUTOS: Diante de uma vontade intensa, aplique um adiamento consciente. Diga a si mesmo: "Eu posso comer esse doce, mas vou esperar 10 minutos completos após beber um copo grande de água". Na grande maioria das vezes, a ativação do lobo frontal durante a espera fará a vontade passar.',
      'Lembre-se: diminuir doces não é sobre punição ou restrição cega, mas sobre devolver o controle da sua mente e do seu corpo a você. Você é muito mais forte do que um cristal doce!'
    ]
  }
];

export const MENU_30_DAYS: Meal[] = [
  {
    cafe: 'Omelete de 3 ovos com queijo cottage (32g prot), café com canela sem açúcar.',
    almoco: '150g de peito de frango grelhado, brócolis no vapor com azeite, arroz integral (50g prot).',
    lanche: '1 scoop de Whey Protein batido com 150g de iogurte grego natural e morangos (39g prot).',
    jantar: '150g de filé de tilápia grelhado, salada de folhas escuras e tomate cereja (32g prot).',
    docinho: 'Maçã aquecida com canela no micro-ondas (sobremesa saudável).'
  },
  {
    cafe: '3 ovos mexidos com fatias de abacate (20g prot), chá verde com limão sem adoçar.',
    almoco: '150g de carne moída magra (patinho), abobrinha refogada, purê de abóbora (44g prot).',
    lanche: 'Iogurte grego natural com sementes de chia e 1 colher de nozes picadas (18g prot).',
    jantar: '150g de peito de frango desfiado com salada de alface, pepino e molho de iogurte (48g prot).',
    docinho: '1 quadradinho de chocolate 85% cacau derretido por cima de fatias de morango.'
  },
  {
    cafe: 'Mingau de aveia proteico: Aveia hidratada na água com 1 scoop de Whey e pitada de canela (30g prot).',
    almoco: '150g de bife de lombo suíno grelhado, vagem refogada no alho, mix de legumes (38g prot).',
    lanche: '2 ovos cozidos temperados com orégano e sal rosa (13g prot), 1 xícara de chá de hibisco gelado.',
    jantar: '1 lata de atum escorrida misturada com maionese light ou cottage, servida sobre folhas de endívia (28g prot).',
    docinho: 'Gelatina sem açúcar sabor morango batida com creme de leite light.'
  },
  {
    cafe: 'Ovos mexidos com ricota esfarelada (22g prot), café expresso puro.',
    almoco: '150g de sobrecoxa de frango assada sem pele, couve-flor gratinada com cottage (48g prot).',
    lanche: '150g de queijo cottage com raspas de limão, canela e um fiozinho leve de mel (14g prot).',
    jantar: '150g de filé de salmão ou pescada assada com azeite e alecrim, aspargos grelhados (33g prot).',
    docinho: 'Banana amassada com aveia e canela aquecida por 1 minuto no micro-ondas.'
  },
  {
    cafe: 'Panqueca de banana de 2 ingredientes: 1 banana amassada, 2 ovos batidos e canela (14g prot).',
    almoco: '150g de carne de panela desfiada, brócolis grelhado, berinjela ao forno com azeite (43g prot).',
    lanche: 'Shake proteico: 1 scoop de Whey sabor baunilha batido com água de coco e morangos (25g prot).',
    jantar: '150g de filé de frango grelhado, salada de rúcula com raspas de limão e sementes de abóbora (48g prot).',
    docinho: 'Coco seco em pedaços (ótimo para saciar a mastigação de doces).'
  },
  {
    cafe: '3 ovos fritos na manteiga, 1 xícara de café sem açúcar com óleo de coco (opcional) (19.5g prot).',
    almoco: '150g de carne bovina grelhada (alcatra ou contra-filé), salada de repolho e cenoura ralada (42g prot).',
    lanche: 'Iogurte natural integral com 1 scoop de Whey de chocolate e mirtilos frescos (39g prot).',
    jantar: 'Sopa cremosa de legumes com peito de frango desfiado (35g prot).',
    docinho: 'Abacate batido com cacau 100% e adoçante stévia (Mousse de cacau saudável).'
  },
  {
    cafe: 'Waffle proteico: 1 ovo, 1 scoop de Whey, 1 colher de aveia, assado na máquina ou frigideira (31g prot).',
    almoco: '150g de peito de frango grelhado acebolado, purê de mandioca (moderado), brócolis (48g prot).',
    lanche: '2 ovos cozidos com sal e páprica defumada (13g prot), água com limão.',
    jantar: '150g de carne suína magra picadinha com pimentões e cebolas na frigideira (38g prot).',
    docinho: 'Chá de maçã com canela e cravo bem quente, sem adoçar.'
  },
  {
    cafe: 'Crepioca proteica: 2 ovos, 1 colher de sopa de goma de tapioca, recheada com 2 colheres de cottage (20g prot).',
    almoco: '150g de tiras de frango com cogumelos refogados no azeite, salada de alface e rúcula (47g prot).',
    lanche: 'Iogurte grego natural com um punhado pequeno de amêndoas e morangos picados (17g prot).',
    jantar: '150g de hambúrguer de carne caseiro (patinho), grelhado e servido no prato com queijo prato e tomate (43g prot).',
    docinho: '1 kiwi gelado cortado ao meio e consumido com colher.'
  },
  {
    cafe: 'Ovos mexidos com peito de peru picado e ricota (24g prot), café preto puro.',
    almoco: '150g de tilápia assada com crosta de ervas, purê de batata doce (moderado), vagem (32g prot).',
    lanche: 'Whey de morango batido com leite de amêndoas e sementes de chia (26g prot).',
    jantar: 'Omelete com peito de frango desfiado e queijo cottage (40g prot).',
    docinho: 'Maçã desidratada em rodelas salpicada com canela.'
  },
  {
    cafe: '150g de queijo cottage com 1 banana fatiada e canela (14g prot), chá de hibisco com gengibre.',
    almoco: '150g de carne moída com pedaços de bacon artesanal e brócolis (43g prot).',
    lanche: '2 ovos cozidos (13g prot) com um punhado de castanhas de caju.',
    jantar: '150g de filé de frango com molho pesto caseiro, salada verde (47g prot).',
    docinho: 'Gelatina diet de uva com creme de leite fresco por cima.'
  },
  {
    cafe: '3 ovos mexidos na manteiga com orégano e tomate picado (20g prot), café expresso.',
    almoco: '150g de lombo suíno grelhado, repolho roxo refogado no azeite de oliva (37g prot).',
    lanche: '150g de iogurte grego natural com 1 scoop de Whey e sementes de abóbora (39g prot).',
    jantar: '150g de tilápia grelhada, couve refogada no alho, rodelas de tomate (32g prot).',
    docinho: '1 quadrado de chocolate 90% cacau derretido na boca bem devagar.'
  },
  {
    cafe: 'Panqueca proteica de coco: 2 ovos, 1 colher de coco ralado sem açúcar, 1/2 scoop de Whey (25g prot).',
    almoco: '150g de peito de frango grelhado com limão e ervas, abobrinha assada (46g prot).',
    lanche: 'Queijo coalho grelhado na frigideira (1 fatia de 50g - 12g prot), chá verde gelado.',
    jantar: '1 lata de atum sólido ao natural, salada de tomate, cebola roxa e azeite (25g prot).',
    docinho: 'Morangos frescos com gotas de essência de baunilha.'
  },
  {
    cafe: 'Omelete de queijo prato e tomate (22g prot), xícara de café sem açúcar.',
    almoco: '150g de carne de panela macia com legumes variados picadinhos (42g prot).',
    lanche: 'Mix de Whey protein e água morna virando uma caldinha cremosa por cima de 1 banana fatiada (27g prot).',
    jantar: '150g de peito de frango desfiado temperado com açafrão, salada verde grande (48g prot).',
    docinho: 'Coco ralado sem açúcar com um fiozinho leve de mel.'
  },
  {
    cafe: 'Mingau de aveia proteico com canela e nibs de cacau (32g prot).',
    almoco: '150g de peixe tilápia grelhado, purê de abóbora cabotiá, vagem no alho (32g prot).',
    lanche: '2 ovos cozidos com maionese caseira de ervas (13g prot).',
    jantar: 'Omelete recheada com carne moída sobrou do almoço e queijo (35g prot).',
    docinho: 'Chá de camomila morno com gotas de limão.'
  },
  {
    cafe: 'Ovos mexidos com bacon artesanal e abacate (21g prot), café puro.',
    almoco: '150g de sobrecoxa de frango assada sem pele, salada de repolho, cenoura e maionese de iogurte (36g prot).',
    lanche: '150g de queijo cottage com morangos frescos picados e chia (14g prot).',
    jantar: '150g de carne bovina grelhada, brócolis no vapor com azeite (42g prot).',
    docinho: 'Banana assada com cacau em pó polvilhado por cima.'
  },
  {
    cafe: 'Crepioca proteica de frango: 2 ovos, tapioca e peito de frango desfiado (32g prot).',
    almoco: '150g de lombo de porco assado, couve-flor gratinada com queijo parmesão (40g prot).',
    lanche: 'Whey Protein batido com iogurte natural e raspas de limão (39g prot).',
    jantar: '150g de tilápia grelhada com tomate cereja confitado no azeite (31g prot).',
    docinho: 'Sorvete saudável: 1 banana congelada batida com 1 colher de cacau 100%.'
  },
  {
    cafe: '3 ovos fritos, fatias de queijo minas grelhado (26g prot), café com canela.',
    almoco: '150g de carne moída refogada com ovos cozidos picados e cheiro verde (48g prot).',
    lanche: '1 xícara de queijo cottage com raspas de baunilha e pitada de canela (13g prot).',
    jantar: '150g de filé de frango grelhado com fatias de abobrinha assada no forno (47g prot).',
    docinho: 'Chá de capim-cidreira bem relaxante.'
  },
  {
    cafe: 'Waffle proteico com canela e recheio de morangos frescos (31g prot).',
    almoco: '150g de hambúrguer caseiro grelhado, salada de alface romana, bacon picado e queijo (43g prot).',
    lanche: 'Iogurte natural integral com punhado de sementes de girassol (12g prot).',
    jantar: '150g de filé de tilápia ou salmão grelhado, aspargos frescos no azeite (33g prot).',
    docinho: 'Gelatina diet batida com iogurte grego natural (Danoninho fit).'
  },
  {
    cafe: 'Mingau proteico de cacau: Aveia, cacau 100%, Whey e leite vegetal (32g prot).',
    almoco: '150g de peito de frango grelhado ao molho de mostarda e mel (pouco mel), legumes (48g prot).',
    lanche: '2 ovos cozidos temperados com sal rosa e lemon pepper (13g prot).',
    jantar: 'Omelete recheada com atum em lata e queijo cottage (35g prot).',
    docinho: '1 pedaço de coco seco bem mastigado.'
  },
  {
    cafe: '3 ovos mexidos com abobrinha ralada na manteiga (20g prot), café expresso.',
    almoco: '150g de carne de boi grelhada, brócolis e cenoura salteados na manteiga (43g prot).',
    lanche: 'Shake proteico: Whey de chocolate com pasta de amendoim sem açúcar (29g prot).',
    jantar: 'Sopa de abóbora cabotiá cremosa com peito de frango desfiado e cheiro verde (35g prot).',
    docinho: 'Maçã fatiada fina assada com canela no forno ou micro-ondas.'
  },
  {
    cafe: 'Panqueca de banana e aveia com recheio de cottage (18g prot), chá de gengibre.',
    almoco: '150g de lombo suíno grelhado com alecrim, purê de batata doce, vagem (38g prot).',
    lanche: 'Iogurte grego natural com morangos e sementes de abóbora (17g prot).',
    jantar: '150g de peito de frango grelhado, salada de folhas de rúcula com tomate (47g prot).',
    docinho: 'Chá de hortelã fresca gelado com rodelas de limão.'
  },
  {
    cafe: 'Omelete de queijo minas com ervas finas (23g prot), xícara de café puro.',
    almoco: '150g de peixe tilápia assado com tomate, cebola e pimentões (30g prot).',
    lanche: 'Whey de baunilha batido com água, morangos e 1 colher de chia (26g prot).',
    jantar: '150g de carne moída com couve refogada na manteiga (42g prot).',
    docinho: '1 quadrado de chocolate 85% cacau.'
  },
  {
    cafe: 'Ovos fritos com fatias de tomate grelhado e abacate (20g prot), café preto.',
    almoco: '150g de sobrecoxa de frango assada sem pele, brócolis cozido, abobrinha (36g prot).',
    lanche: '150g de iogurte grego natural com coco ralado sem açúcar (15g prot).',
    jantar: 'Omelete de atum em conserva (1 lata) com salsinha e cebolinha (25g prot).',
    docinho: 'Sorbet de morango saudável: morangos congelados batidos com limão.'
  },
  {
    cafe: 'Mingau proteico com canela e castanhas de caju picadas (31g prot).',
    almoco: '150g de bife de lombo de porco, repolho refogado no azeite (37g prot).',
    lanche: '2 ovos cozidos com sal e pimenta calabresa (13g prot).',
    jantar: '150g de peito de frango desfiado com creme de cottage e couve-flor cozida (48g prot).',
    docinho: 'Coco seco fatiado em tiras dourado na frigideira.'
  },
  {
    cafe: 'Waffle proteico de banana: ovo, Whey, banana e aveia batidos (31g prot).',
    almoco: '150g de carne de panela desfiada com legumes, salada verde (43g prot).',
    lanche: 'Iogurte natural com pedaços de maçã e pitada de canela (12g prot).',
    jantar: '150g de filé de tilápia ou pescada grelhada, aspargos com azeite (32g prot).',
    docinho: 'Gelatina diet com creme de leite leve.'
  },
  {
    cafe: '3 ovos mexidos na manteiga com queijo prato (24g prot), café expresso puro.',
    almoco: '150g de filé de peito de frango grelhado, arroz de couve-flor, brócolis (48g prot).',
    lanche: 'Whey Protein sabor morango com água de coco e morangos frescos (25g prot).',
    jantar: '150g de hambúrguer caseiro bovino grelhado com salada de rúcula e queijo (42g prot).',
    docinho: 'Coco seco natural picado.'
  },
  {
    cafe: 'Crepioca com recheio de cottage e peito de peru picado (24g prot), chá verde.',
    almoco: '150g de tilápia grelhada, purê de abóbora, legumes no vapor (32g prot).',
    lanche: '2 ovos cozidos com sal e lemon pepper (13g prot), café com canela.',
    jantar: '150g de lombo suíno grelhado com alcaparras, couve refogada (38g prot).',
    docinho: 'Mousse de abacate saudável com cacau 100%.'
  },
  {
    cafe: 'Omelete de 3 ovos com queijo ricota e tomate (28g prot), café preto.',
    almoco: '150g de carne moída com legumes salteados na manteiga (42g prot).',
    lanche: 'Iogurte grego natural com Whey protein e sementes de girassol (39g prot).',
    jantar: '150g de peito de frango desfiado refogado, salada verde de alface (48g prot).',
    docinho: 'Chá quente de hibisco com anis-estrelado.'
  },
  {
    cafe: 'Mingau proteico de aveia com canela e gotas de baunilha (30g prot).',
    almoco: '150g de pescada grelhada, abobrinha assada, purê de batata doce (moderado) (30g prot).',
    lanche: '2 ovos cozidos (13g prot) e um punhado de nozes e castanhas.',
    jantar: 'Tiras de carne suína grelhadas aceboladas na chapa (38g prot), salada.',
    docinho: '1 quadrado de chocolate 85% cacau.'
  },
  {
    cafe: 'Waffle proteico de cacau servido quente com morangos frescos por cima (32g prot).',
    almoco: '150g de peito de frango grelhado, brócolis cozido, arroz integral (48g prot).',
    lanche: '150g de queijo cottage com raspas de limão e essência de baunilha (13g prot).',
    jantar: '150g de filé de tilápia grelhado com salada de rúcula e tomate cereja (31g prot).',
    docinho: 'Parabéns! Você completou 30 dias! Celebre com uma deliciosa salada de frutas vermelhas e coco ralado.'
  }
];
