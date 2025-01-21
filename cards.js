    const cards = [
    // Arcanos Maiores
    {
      title: "🎭",
      meaning: {
        general: "O Louco é o espírito livre, o início da jornada. Ele nos ensina a abraçar a incerteza com fé e coragem, vivendo o momento com autenticidade.",
        love: "O Louco indica novos começos, aventuras inesperadas e liberdade emocional. Pode sugerir um novo relacionamento ou a necessidade de se libertar de restrições emocionais.",
        profession: "Na profissão, O Louco representa a coragem de arriscar novas oportunidades, explorar caminhos desconhecidos e iniciar projetos criativos.",
        finances: "Nas finanças, O Louco alerta para gastar com cuidado e não se deixar levar por impulsos. Há potencial para novas fontes de renda, mas é importante evitar riscos desnecessários.",
        health: "Na saúde, O Louco sugere cuidar do bem-estar físico e mental enquanto explora novos estilos de vida. Pode indicar um período de energia renovada.",
        spirituality: "Espiritualmente, O Louco nos convida a abraçar a jornada da alma com mente aberta e disposição para aprender com a experiência.",
        temporality: "Temporalmente, O Louco indica um momento de transição ou o início de um novo ciclo, muitas vezes repentino ou inesperado."
      }
    },
    {
      title: "⚪",
      meaning: {
        general: "O Mago representa habilidade, poder e a capacidade de manifestar intenções. Ele indica iniciativa, confiança e criatividade.",
        love: "Sugere charme, conexão emocional e a oportunidade de transformar um relacionamento ou iniciar um novo com energia positiva.",
        profession: "Indica sucesso em novos projetos e a habilidade de usar recursos disponíveis de maneira eficiente.",
        finances: "Sugere oportunidades financeiras criadas por iniciativa e engenhosidade.",
        health: "Indica um período de energia renovada e a capacidade de superar desafios de saúde.",
        spirituality: "Convida à exploração de poder interno e à manifestação de intenções espirituais.",
        temporality: "Um momento para agir com confiança e usar talentos de forma eficaz."
      }
    },
    {
      title: "📘",
      meaning: {
        general: "A Sacerdotisa simboliza intuição, mistério e sabedoria interior. É um convite para confiar em insights e na conexão espiritual.",
        love: "Indica profundidade emocional, mistério e a necessidade de confiar na intuição.",
        profession: "Sugere trabalhar em silêncio, observar e confiar em insights intuitivos para decisões profissionais.",
        finances: "Indica decisões financeiras tomadas com base na percepção e na paciência.",
        health: "Reflete a importância de ouvir o corpo e de buscar equilíbrio emocional para bem-estar físico.",
        spirituality: "Convida à exploração da sabedoria interior e da conexão espiritual profunda.",
        temporality: "Um momento de introspecção e crescimento interior."
      }
    },
    {
      title: "👑",
      meaning: {
        general: "A Imperatriz representa fertilidade, abundância e a criação. Ela simboliza crescimento, criatividade e harmonia com a natureza.",
        love: "Sugere nutrição, cuidado e prosperidade em relacionamentos.",
        profession: "Indica sucesso em empreendimentos criativos e a oportunidade de crescimento no trabalho.",
        finances: "Reflete estabilidade financeira e abundância.",
        health: "Sugere boa saúde e recuperação, com ênfase em autocuidado.",
        spirituality: "Enfatiza a conexão com a energia criativa do universo.",
        temporality: "Um período de crescimento e prosperidade."
      }
    },
    {
      title: "✝",
      meaning: {
        general: "O Imperador representa autoridade, estrutura e estabilidade. Ele nos ensina a importância da disciplina e do controle.",
        love: "Sugere compromisso e estabilidade em um relacionamento.",
        profession: "Indica liderança, controle e estrutura no ambiente profissional.",
        finances: "Reflete estabilidade financeira e planejamento sólido.",
        health: "Sugere disciplina para manter ou melhorar a saúde.",
        spirituality: "Convida a buscar equilíbrio entre controle e fé.",
        temporality: "Um momento de estabilidade e liderança."
      }
    },
    {
      title: "🛡",
      meaning: {
        general: "O Hierofante simboliza tradição, aprendizado e valores espirituais. Ele nos encoraja a buscar sabedoria em sistemas estabelecidos.",
        love: "Sugere relacionamentos tradicionais ou a busca por valores compartilhados.",
        profession: "Indica aprendizado e progresso através de métodos tradicionais.",
        finances: "Reflete estabilidade financeira através de práticas convencionais.",
        health: "Sugere benefícios ao seguir conselhos médicos tradicionais.",
        spirituality: "Convida à exploração de práticas espirituais organizadas.",
        temporality: "Um momento para confiar na tradição e no aprendizado."
      }
    },
    {
      title: "💑",
      meaning: {
        general: "Os Enamorados representam amor, escolhas e harmonia. Eles simbolizam conexão emocional e a importância de decisões conscientes.",
        love: "Sugere um relacionamento profundo e a necessidade de tomar decisões com o coração.",
        profession: "Indica escolhas importantes no trabalho que impactam o futuro.",
        finances: "Reflete decisões financeiras que devem ser tomadas com cuidado.",
        health: "Sugere equilíbrio entre bem-estar físico e emocional.",
        spirituality: "Enfatiza a harmonia e o amor como guias espirituais.",
        temporality: "Um momento de escolhas significativas e conexão emocional."
      }
    },
    {
      title: "🚗",
      meaning: {
        general: "O Carro simboliza determinação, progresso e sucesso. Ele nos encoraja a avançar com foco e confiança.",
        love: "Sugere progresso em um relacionamento e a superação de desafios.",
        profession: "Indica avanço e sucesso no trabalho através de esforço e controle.",
        finances: "Reflete ganhos financeiros através de determinação e disciplina.",
        health: "Sugere recuperação e força renovada.",
        spirituality: "Convida a usar a força interior para avançar espiritualmente.",
        temporality: "Um momento de progresso rápido e realização."
      }
    },
    {
      title: "🦁",
      meaning: {
        general: "A Força simboliza coragem, compaixão e autocontrole. Ela nos ensina a superar desafios com paciência e gentileza.",
        love: "Sugere harmonia e paciência em relacionamentos.",
        profession: "Indica sucesso no trabalho através de determinação e diplomacia.",
        finances: "Reflete estabilidade financeira através de controle emocional.",
        health: "Sugere recuperação e força física e emocional.",
        spirituality: "Enfatiza o poder interno como ferramenta espiritual.",
        temporality: "Um momento de força e superação."
      }
    },
    {
      title: "🔦",
      meaning: {
        general: "O Eremita simboliza introspecção, sabedoria e busca espiritual. Ele nos encoraja a olhar para dentro em busca de respostas.",
        love: "Sugere tempo para reflexão ou solidão necessária para o crescimento pessoal.",
        profession: "Indica a necessidade de introspecção e planejamento cuidadoso no trabalho.",
        finances: "Reflete uma abordagem cautelosa e reflexiva em questões financeiras.",
        health: "Sugere a necessidade de descanso e atenção ao bem-estar emocional.",
        spirituality: "Convida à busca de sabedoria espiritual através de introspecção.",
        temporality: "Um momento de introspecção e aprendizado interior."
      }
    },
    {
      title: "🎡",
      meaning: {
        general: "A Roda da Fortuna simboliza mudança, ciclos e destino. Ela nos ensina a aceitar os altos e baixos da vida.",
        love: "Sugere mudanças inesperadas e novos começos.",
        profession: "Indica oportunidades repentinas e mudanças de carreira.",
        finances: "Reflete ganhos ou perdas financeiras inesperadas.",
        health: "Sugere mudanças no estado de saúde, muitas vezes para melhor.",
        spirituality: "Enfatiza a aceitação do destino como parte do crescimento espiritual.",
        temporality: "Um momento de mudanças e novos ciclos."
      }
    },
    {
      title: "⚖",
      meaning: {
        general: "A Justiça representa equilíbrio, verdade e responsabilidade. Ela nos encoraja a agir com integridade e a buscar a justiça.",
        love: "Sugere honestidade e a importância de equilíbrio em relacionamentos.",
        profession: "Indica decisões justas e resultados baseados em esforço no trabalho.",
        finances: "Reflete estabilidade financeira através de escolhas responsáveis.",
        health: "Sugere equilíbrio e atenção às necessidades do corpo e da mente.",
        spirituality: "Convida à reflexão sobre a causa e efeito em questões espirituais.",
        temporality: "Um momento de decisões equilibradas e justiça."
      }
    },
    {
      title: "⛓",
      meaning: {
        general: "O Enforcado simboliza sacrifício, pausa e novas perspectivas. Ele nos encoraja a olhar para as coisas de maneira diferente.",
        love: "Sugere paciência e a necessidade de mudanças de perspectiva.",
        profession: "Indica um período de pausa ou reflexão no trabalho.",
        finances: "Reflete a necessidade de planejamento financeiro cuidadoso.",
        health: "Sugere tempo para recuperação e descanso.",
        spirituality: "Convida à contemplação e à busca de novas perspectivas espirituais.",
        temporality: "Um momento de pausa e reflexão."
      }
    },
    {
      title: "☠",
      meaning: {
        general: "A Morte simboliza transformação, finalizações e novos começos. Ela nos ensina a aceitar mudanças inevitáveis.",
        love: "Sugere o fim de um ciclo ou transformação em um relacionamento.",
        profession: "Indica mudanças significativas no trabalho, como transições de carreira.",
        finances: "Reflete mudanças financeiras importantes, com potencial para recomeços.",
        health: "Sugere a necessidade de transformação para melhor saúde.",
        spirituality: "Enfatiza a renovação espiritual e o renascimento.",
        temporality: "Um momento de transição e novos começos."
      }
    },
    {
      title: "⚗",
      meaning: {
        general: "A Temperança representa equilíbrio, moderação e harmonia. Ela nos ensina a encontrar o meio-termo em todas as situações.",
        love: "Sugere equilíbrio e paciência para construir uma relação saudável.",
        profession: "Indica sucesso no trabalho através de cooperação e compromisso.",
        finances: "Reflete estabilidade financeira e decisões equilibradas.",
        health: "Sugere equilíbrio e moderação para melhorar o bem-estar.",
        spirituality: "Enfatiza a harmonia espiritual e o equilíbrio interno.",
        temporality: "Um momento de calma e estabilidade."
      }
    },
    {
      title: "👿",
      meaning: {
        general: "O Diabo simboliza apego, tentação e materialismo. Ele nos encoraja a reconhecer e libertar-nos de nossas limitações.",
        love: "Sugere apego excessivo ou dependência em um relacionamento.",
        profession: "Indica a necessidade de evitar escolhas impulsivas ou tóxicas no trabalho.",
        finances: "Reflete preocupações excessivas com dinheiro ou consumo.",
        health: "Sugere atenção aos comportamentos que prejudicam a saúde.",
        spirituality: "Convida a superar os aspectos sombrios do eu para crescimento espiritual.",
        temporality: "Um momento para reconhecer e superar limitações."
      }
    },
    {
      title: "🏰",
      meaning: {
        general: "A Torre simboliza ruptura, transformação repentina e libertação. Ela nos ensina a aceitar mudanças drásticas para reconstruir.",
        love: "Sugere mudanças significativas ou rupturas em relacionamentos.",
        profession: "Indica mudanças inesperadas no trabalho, muitas vezes desafiadoras.",
        finances: "Reflete instabilidade financeira e a necessidade de reconstrução.",
        health: "Sugere atenção a mudanças repentinas na saúde.",
        spirituality: "Enfatiza a necessidade de reconstrução espiritual após a ruptura.",
        temporality: "Um momento de transformação drástica."
      }
    },
    {
      title: "✨",
      meaning: {
        general: "A Estrela simboliza esperança, inspiração e renovação. Ela nos encoraja a confiar no futuro e nos guiar pela luz interna.",
        love: "Sugere esperança e renovação em relacionamentos.",
        profession: "Indica sucesso e inspiração em projetos profissionais.",
        finances: "Reflete estabilidade financeira e otimismo.",
        health: "Sugere recuperação e renovação de energia.",
        spirituality: "Convida à conexão com a inspiração divina.",
        temporality: "Um momento de esperança e renovação."
      }
    },
    {
      title: "🌙",
      meaning: {
        general: "A Lua simboliza mistério, intuição e ilusões. Ela nos encoraja a olhar além do óbvio e confiar em nossos instintos.",
        love: "Sugere mistério ou confusão que exige confiança na intuição.",
        profession: "Indica incertezas ou a necessidade de seguir a intuição no trabalho.",
        finances: "Reflete dúvidas financeiras que exigem cautela.",
        health: "Sugere atenção à saúde emocional e mental.",
        spirituality: "Convida à exploração do inconsciente e dos sonhos.",
        temporality: "Um momento de mistério e descoberta."
      }
    },
    {
      title: "☀",
      meaning: {
        general: "O Sol simboliza sucesso, alegria e clareza. Ele nos encoraja a abraçar a positividade e a confiança.",
        love: "Sugere felicidade e harmonia em relacionamentos.",
        profession: "Indica sucesso e realização no trabalho.",
        finances: "Reflete prosperidade financeira e ganhos.",
        health: "Sugere vitalidade e bem-estar.",
        spirituality: "Enfatiza a iluminação espiritual e a alegria.",
        temporality: "Um momento de alegria e sucesso."
      }
    },
    {
      title: "📯",
      meaning: {
        general: "O Julgamento simboliza renascimento, decisão e realização. Ele nos encoraja a aceitar o passado e avançar com renovação.",
        love: "Sugere reconciliação ou novas oportunidades em relacionamentos.",
        profession: "Indica avaliação e decisões importantes no trabalho.",
        finances: "Reflete renovação financeira e novas oportunidades.",
        health: "Sugere recuperação e renovação de saúde.",
        spirituality: "Convida à transformação e ao despertar espiritual.",
        temporality: "Um momento de renascimento e decisões."
      }
    },
    {
      title: "🌍",
      meaning: {
        general: "O Mundo simboliza completude, realização e conexão. Ele nos encoraja a celebrar conquistas e abraçar a plenitude.",
        love: "Sugere harmonia e realização em relacionamentos.",
        profession: "Indica sucesso e conclusão de projetos no trabalho.",
        finances: "Reflete prosperidade financeira e realização.",
        health: "Sugere saúde plena e bem-estar.",
        spirituality: "Convida à conexão espiritual universal e à integração.",
        temporality: "Um momento de realização e conclusão."
      }
    },
  
  // Arcanos Menores - Paus
  {
    title: "A♠",
    meaning: {
      general: "Representa novos começos cheios de energia e inspiração, especialmente em projetos criativos ou empreendimentos.",
      love: "Indica paixão renovada ou o início de um novo relacionamento empolgante.",
      profession: "Sugere oportunidades criativas e novos projetos no trabalho.",
      finances: "Pode indicar uma nova fonte de renda ou oportunidades financeiras inovadoras.",
      health: "Reflete energia crescente e vitalidade.",
      spirituality: "Inspira crescimento espiritual através de novos insights.",
      temporality: "Um momento de inspiração e ação iminente."
    }
  },
  {
    title: "2♠",
    meaning: {
      general: "Representa planejamento, visão de futuro e decisões estratégicas. Sugere a importância de avaliar opções antes de agir.",
      love: "Indica a necessidade de decidir sobre o futuro de um relacionamento ou explorar novas possibilidades amorosas.",
      profession: "Reflete preparação e análise para avançar em projetos profissionais.",
      finances: "Sugere que o planejamento financeiro é essencial antes de investir ou gastar.",
      health: "Indica a importância de se planejar para alcançar bem-estar físico e mental.",
      spirituality: "Encoraja a busca de clareza e visão no crescimento espiritual.",
      temporality: "Um momento de preparação e decisão."
    }
  },
  {
    title: "3♠",
    meaning: {
      general: "Simboliza expansão, progresso e colheita dos frutos do planejamento. Indica que o esforço inicial está começando a gerar resultados.",
      love: "Sugere crescimento e aprofundamento do relacionamento, ou oportunidades promissoras surgindo.",
      profession: "Reflete progresso no trabalho e a necessidade de manter a visão de longo prazo.",
      finances: "Indica prosperidade resultante de esforços bem planejados.",
      health: "Sugere recuperação e melhoria gradual da saúde.",
      spirituality: "Encoraja a expansão e exploração de novos horizontes espirituais.",
      temporality: "Um momento de progresso visível e oportunidades."
    }
  },
  {
    title: "4♠",
    meaning: {
      general: "Simboliza celebração, estabilidade e harmonia. Representa momentos de alegria compartilhada e sucesso coletivo.",
      love: "Reflete relacionamentos estáveis e celebrações, como casamentos ou compromissos.",
      profession: "Indica sucesso e reconhecimento no trabalho, alcançado através de esforços colaborativos.",
      finances: "Sugere estabilidade financeira e recompensas pelos esforços.",
      health: "Reflete bem-estar e energia positiva.",
      spirituality: "Convida à celebração da conexão espiritual e à gratidão.",
      temporality: "Um momento de celebração e estabilidade."
    }
  },
  {
    title: "5♠",
    meaning: {
      general: "Representa conflitos, competição e desafios. Indica a necessidade de enfrentar disputas de forma construtiva.",
      love: "Sugere desentendimentos ou competição dentro do relacionamento.",
      profession: "Reflete competição saudável no trabalho ou desafios que precisam ser superados.",
      finances: "Indica conflitos financeiros ou a necessidade de evitar disputas por dinheiro.",
      health: "Sugere a necessidade de superar desafios para alcançar a saúde.",
      spirituality: "Encoraja a superação de barreiras internas para o crescimento espiritual.",
      temporality: "Um momento de competição e resolução de conflitos."
    }
  },
  {
    title: "6♠",
    meaning: {
      general: "Simboliza vitória, reconhecimento e sucesso. Indica que os esforços foram recompensados.",
      love: "Sugere um momento de harmonia e conquista em relacionamentos.",
      profession: "Reflete sucesso no trabalho e reconhecimento público ou privado.",
      finances: "Indica estabilidade financeira e ganhos após esforço.",
      health: "Sugere recuperação e vitalidade.",
      spirituality: "Encoraja a celebração das realizações espirituais.",
      temporality: "Um momento de vitória e reconhecimento."
    }
  },
  {
    title: "7♠",
    meaning: {
      general: "Representa defesa, perseverança e superação de obstáculos. Indica a necessidade de proteger o que foi conquistado.",
      love: "Sugere a necessidade de defender o relacionamento contra influências externas.",
      profession: "Reflete desafios no trabalho que exigem determinação para superá-los.",
      finances: "Indica a necessidade de proteger seus ativos ou finanças.",
      health: "Sugere força e resiliência para superar problemas de saúde.",
      spirituality: "Encoraja a firmeza em suas crenças espirituais.",
      temporality: "Um momento de defesa e resiliência."
    }
  },
  {
    title: "8♠",
    meaning: {
      general: "Simboliza movimento rápido, progresso e comunicação. Indica que eventos estão se desenrolando rapidamente.",
      love: "Reflete paixões intensas ou rápidas mudanças no relacionamento.",
      profession: "Indica progresso acelerado em projetos ou decisões rápidas no trabalho.",
      finances: "Reflete mudanças rápidas e oportunidades financeiras.",
      health: "Sugere melhoria rápida na saúde ou energia renovada.",
      spirituality: "Encoraja avanços rápidos no desenvolvimento espiritual.",
      temporality: "Um momento de ação e progresso acelerado."
    }
  },
  {
    title: "9♠",
    meaning: {
      general: "Representa resiliência, cautela e preparação. Indica a necessidade de se proteger e estar preparado para desafios.",
      love: "Sugere cautela e a necessidade de construir confiança no relacionamento.",
      profession: "Reflete a necessidade de se preparar para desafios no trabalho.",
      finances: "Indica a necessidade de cautela em decisões financeiras.",
      health: "Sugere a importância de descansar e se recuperar de desgastes.",
      spirituality: "Encoraja a proteção de seu progresso espiritual.",
      temporality: "Um momento de cautela e preparação."
    }
  },
  {
    title: "10♠",
    meaning: {
      general: "Simboliza sobrecarga, responsabilidade e esforço. Indica a necessidade de aliviar cargas desnecessárias.",
      love: "Sugere que responsabilidades excessivas estão impactando o relacionamento.",
      profession: "Reflete sobrecarga de trabalho e a necessidade de delegar ou reorganizar prioridades.",
      finances: "Indica pressões financeiras e a necessidade de alívio.",
      health: "Sugere a importância de reduzir o estresse para melhorar a saúde.",
      spirituality: "Encoraja a liberação de fardos espirituais.",
      temporality: "Um momento de esforço intenso, próximo do alívio."
    }
  },
  {
    title: "P♠",
    meaning: {
      general: "Representa curiosidade, novas ideias e uma energia entusiástica. Indica uma fase de exploração, aprendizado e novos começos.",
      love: "Sugere uma fase de descoberta ou o início de uma nova atração, com uma abordagem leve e entusiástica.",
      profession: "Reflete novas oportunidades no trabalho que exigem criatividade, energia e disposição para aprender.",
      finances: "Indica o início de um novo projeto ou oportunidade financeira que envolve risco e criatividade.",
      health: "Sugere uma abordagem nova e energizada para a saúde, com foco em ação e movimento.",
      spirituality: "Inspira uma busca por novas ideias espirituais e entusiasmo na jornada de autoconhecimento.",
      temporality: "Um momento de novas possibilidades, aprendizado e ação com entusiasmo."
    }
  },
  {
    title: "D♠",
    meaning: {
      general: "A Dama de Paus representa criatividade, liderança e coragem. Ela simboliza uma energia vibrante e confiante para explorar novas possibilidades.",
      love: "Indica uma pessoa apaixonada, confiante e que traz entusiasmo ao relacionamento. Pode sugerir uma figura feminina forte e inspiradora.",
      profession: "Reflete uma liderança criativa, alguém que inspira e motiva os outros no trabalho.",
      finances: "Indica sucesso financeiro através da confiança em suas próprias habilidades e empreendedorismo.",
      health: "Reflete vitalidade e uma energia renovada. A saúde está em equilíbrio quando a pessoa se sente empoderada.",
      spirituality: "Sugere a confiança na intuição e o uso da criatividade como meio de crescimento espiritual.",
      temporality: "Um momento de energia criativa e liderança."
    }
  },
  {
    title: "V♠",
    meaning: {
      general: "O Valete de Paus simboliza entusiasmo, ação e uma nova aventura. Ele está sempre pronto para explorar o desconhecido e é um mensageiro de boas notícias.",
      love: "Sugere paixão jovem e a energia para um novo romance ou reiniciar um relacionamento com uma nova perspectiva.",
      profession: "Reflete a empolgação com novos projetos e oportunidades no trabalho, com um espírito aventureiro e proativo.",
      finances: "Pode indicar novos investimentos ou iniciativas financeiras que trazem oportunidades de crescimento.",
      health: "Sugere energia e disposição física, com uma abordagem otimista para o bem-estar.",
      spirituality: "Encoraja a busca por novas experiências espirituais e a jornada de autodescoberta.",
      temporality: "Um momento para agir com coragem e explorar novas possibilidades."
    }
  },
  {
    title: "R♠",
    meaning: {
      general: "O Rei de Paus representa liderança, visão e autoridade. Ele é alguém com grande energia e capacidade de inspirar outros a agir com confiança.",
      love: "O Rei de Paus indica um relacionamento estável e com propósito, onde ambos os parceiros compartilham uma visão comum para o futuro.",
      profession: "Reflete uma liderança carismática no trabalho, sendo uma figura de autoridade que guia com sabedoria e paixão.",
      finances: "Sugere sucesso financeiro através da liderança visionária e a capacidade de tomar decisões estratégicas.",
      health: "Indica boa saúde, com energia positiva e um estilo de vida equilibrado.",
      spirituality: "Encoraja a exploração do propósito espiritual e a utilização da força interior para guiar o próprio caminho.",
      temporality: "Um momento de liderança firme e ação decisiva."
    }
  },
  {
    title: "A♦",
    meaning: {
      general: "Representa novos começos financeiros e materiais. Indica oportunidades de crescimento e estabilidade em aspectos materiais.",
      love: "Sugere um novo começo sólido ou uma base estável em um relacionamento.",
      profession: "Indica novas oportunidades profissionais e a chance de alcançar sucesso material.",
      finances: "Reflete o início de uma fase de estabilidade financeira e prosperidade.",
      health: "Sugere saúde e energia renovadas, com foco no bem-estar físico.",
      spirituality: "Inspira um crescimento espiritual ancorado na prática material e física.",
      temporality: "Um momento de novos começos financeiros e materiais."
    }
  },
  {
    title: "2♦",
    meaning: {
      general: "Representa equilíbrio, adaptação e gerenciamento de recursos. Indica a necessidade de equilibrar diferentes aspectos da vida.",
      love: "Sugere a necessidade de manter o equilíbrio entre as responsabilidades e a relação.",
      profession: "Indica a necessidade de adaptar-se a mudanças no trabalho e equilibrar múltiplas tarefas.",
      finances: "Reflete desafios financeiros que exigem flexibilidade e bom gerenciamento.",
      health: "Sugere a importância de manter equilíbrio entre trabalho, descanso e bem-estar.",
      spirituality: "Encoraja o equilíbrio entre o material e o espiritual para um crescimento harmônico.",
      temporality: "Um momento de adaptação e equilíbrio nas finanças."
    }
  },
  {
    title: "3♦",
    meaning: {
      general: "Simboliza colaboração, aprendizado e construção. Indica que o esforço coletivo está gerando resultados positivos.",
      love: "Sugere um relacionamento baseado em trabalho em equipe e crescimento mútuo.",
      profession: "Reflete sucesso no trabalho através da colaboração e da aprendizagem contínua.",
      finances: "Indica prosperidade financeira através de parcerias e projetos em equipe.",
      health: "Sugere boa saúde resultante de hábitos colaborativos e apoio mútuo.",
      spirituality: "Encoraja a colaboração espiritual e o aprendizado com outros.",
      temporality: "Um momento de crescimento e construção em colaboração."
    }
  },
  {
    title: "4♦",
    meaning: {
      general: "Representa segurança, controle e acúmulo de riquezas. Indica o desejo de manter estabilidade e controlar os recursos.",
      love: "Sugere apego excessivo ou a necessidade de maior abertura emocional.",
      profession: "Reflete a busca por segurança no trabalho, mas alerta contra a estagnação ou o excesso de controle.",
      finances: "Indica estabilidade financeira, mas também o risco de ser excessivamente conservador ou avarento.",
      health: "Sugere a necessidade de avaliar o impacto do estresse no corpo e buscar equilíbrio.",
      spirituality: "Convida à reflexão sobre o apego material e a necessidade de se desprender.",
      temporality: "Um momento de busca por segurança, mas com cautela para evitar o excesso de controle."
    }
  },
  {
    title: "5♦",
    meaning: {
      general: "Simboliza dificuldades financeiras, perda ou sensação de escassez. Indica um momento de desafio que exige perseverança.",
      love: "Sugere desafios emocionais, como a sensação de abandono ou dificuldades no relacionamento.",
      profession: "Reflete desafios financeiros ou profissionais que exigem resiliência e perseverança.",
      finances: "Indica dificuldades financeiras que precisam ser enfrentadas com cuidado e planejamento.",
      health: "Sugere atenção ao estresse e à saúde mental, com foco na recuperação.",
      spirituality: "Encoraja a buscar apoio espiritual em tempos de dificuldades.",
      temporality: "Um momento de dificuldades, mas com a possibilidade de superação."
    }
  },
  {
    title: "6♦",
    meaning: {
      general: "Representa generosidade, equilíbrio e troca. Indica a importância de dar e receber de forma equilibrada.",
      love: "Sugere equilíbrio no relacionamento e a troca justa entre parceiros.",
      profession: "Reflete equilíbrio entre dar e receber no trabalho, com reconhecimento e retribuição.",
      finances: "Indica equilíbrio financeiro e a necessidade de investir em causas importantes.",
      health: "Sugere equilíbrio entre dar atenção aos outros e cuidar de si mesmo.",
      spirituality: "Encoraja a generosidade e o fluxo de energia espiritual positiva.",
      temporality: "Um momento de equilíbrio nas finanças e na troca mútua."
    }
  },
  {
    title: "7♦",
    meaning: {
      general: "Simboliza paciência, colheita e avaliação do progresso. Indica que os frutos do trabalho árduo começam a aparecer.",
      love: "Sugere que o relacionamento está amadurecendo e é necessário avaliar seu progresso.",
      profession: "Reflete avaliação de investimentos no trabalho e a necessidade de paciência para colher os resultados.",
      finances: "Indica que os investimentos financeiros começam a gerar retornos, mas exige paciência.",
      health: "Sugere que a saúde melhora com o tempo e o esforço contínuo.",
      spirituality: "Encoraja a reflexão sobre o progresso espiritual e os resultados de seus esforços.",
      temporality: "Um momento de avaliação e paciência para colher os frutos do trabalho."
    }
  },
  {
    title: "8♦",
    meaning: {
      general: "Representa dedicação, foco e aprendizado contínuo. Indica o esforço constante para aprimorar habilidades e alcançar a excelência.",
      love: "Sugere dedicação ao relacionamento e o trabalho necessário para mantê-lo saudável.",
      profession: "Reflete dedicação ao trabalho e o aprimoramento contínuo das habilidades profissionais.",
      finances: "Indica um foco em aprimorar a gestão financeira e alcançar maior estabilidade.",
      health: "Sugere a importância de cuidados consistentes e foco em uma boa saúde.",
      spirituality: "Encoraja o aprimoramento contínuo no caminho espiritual.",
      temporality: "Um momento de dedicação ao crescimento e aprimoramento."
    }
  },
  {
    title: "9♦",
    meaning: {
      general: "Simboliza sucesso, independência e prosperidade material. Indica um período de realização e desfrute do trabalho árduo.",
      love: "Sugere um relacionamento maduro e estável, baseado em independência e equilíbrio.",
      profession: "Reflete sucesso no trabalho e uma posição de independência profissional.",
      finances: "Indica prosperidade financeira e a recompensa do esforço contínuo.",
      health: "Sugere um estado de saúde vibrante e bem-estar.",
      spirituality: "Encoraja o prazer na abundância material enquanto se mantém conectado espiritualmente.",
      temporality: "Um momento de sucesso e independência."
    }
  },
  {
    title: "10♦",
    meaning: {
      general: "Representa estabilidade, legado e riqueza material. Indica a conquista de segurança financeira duradoura e um legado familiar.",
      love: "Sugere um relacionamento sólido e duradouro, com foco em família e estabilidade.",
      profession: "Reflete sucesso duradouro no trabalho, com recompensas financeiras estáveis.",
      finances: "Indica prosperidade financeira a longo prazo e estabilidade econômica.",
      health: "Sugere boa saúde e estabilidade física, com uma abordagem preventiva.",
      spirituality: "Encoraja a conexão com as raízes familiares e espirituais, celebrando o legado.",
      temporality: "Um momento de segurança financeira e estabilidade duradoura."
    }
  },
  {
    title: "P♦",
    meaning: {
      general: "Representa novos começos práticos, aprendizado e dedicação ao trabalho e à prosperidade. Indica uma fase de estudo, empenho e crescimento material.",
      love: "Sugere uma abordagem mais cautelosa e prática, com foco no compromisso e estabilidade.",
      profession: "Reflete novos projetos ou oportunidades no trabalho que exigem dedicação, paciência e um foco em crescimento sustentável.",
      finances: "Indica novos investimentos ou uma abordagem mais responsável e estratégica para aumentar a segurança financeira.",
      health: "Sugere o foco em cuidar do corpo e mente com uma abordagem prática e disciplinada para alcançar o equilíbrio e bem-estar.",
      spirituality: "Inspira a busca por crescimento espiritual através da disciplina e da prática diária.",
      temporality: "Um momento de aprendizado prático e novas oportunidades que exigem dedicação e esforço."
    }
  },
  {
    title: "D♦",
    meaning: {
      general: "A Dama de Ouros representa uma pessoa prática, realista e focada no bem-estar material. Ela simboliza sabedoria financeira e uma abordagem cuidadosa para o conforto e a estabilidade.",
      love: "Indica uma parceira que busca segurança e estabilidade no relacionamento, com uma abordagem prática e sensata.",
      profession: "Reflete sucesso no trabalho, especialmente em áreas que envolvem finanças, administração ou qualquer forma de cuidado prático.",
      finances: "Indica uma pessoa que administra bem as finanças e está em busca de estabilidade financeira e segurança material.",
      health: "Sugere boa saúde e bem-estar, com uma abordagem cuidadosa à manutenção do corpo e da mente.",
      spirituality: "Encoraja o equilíbrio entre a vida material e espiritual, com foco na prática e na atenção aos detalhes.",
      temporality: "Um momento de sensatez e cuidado com os aspectos materiais da vida."
    }
  },
  {
    title: "V♦",
    meaning: {
      general: "O Valete de Ouros simboliza diligência, aprendizado e a busca por novos conhecimentos, especialmente no campo material e financeiro. Ele é uma carta que sugere estudo e preparação para alcançar o sucesso.",
      love: "Indica um relacionamento em crescimento, com um foco na construção de uma base sólida e duradoura.",
      profession: "Reflete uma pessoa jovem ou inexperiente que está aprendendo e se desenvolvendo na carreira, com um foco em aprimorar habilidades práticas.",
      finances: "Indica novas oportunidades financeiras, muitas vezes através do aprendizado, do desenvolvimento de habilidades ou de investimentos cautelosos.",
      health: "Sugere um foco em cuidar da saúde com disciplina e esforço contínuo.",
      spirituality: "Encoraja a busca por conhecimento espiritual, a fim de construir uma base sólida para o crescimento interior.",
      temporality: "Um momento de aprendizado e dedicação para o desenvolvimento material e espiritual."
    }
  },
  {
    title: "R♦",
    meaning: {
      general: "O Rei de Ouros representa autoridade, sucesso material e estabilidade financeira. Ele é uma figura de liderança que alcançou o sucesso através de esforço constante e sabedoria prática.",
      love: "Sugere um relacionamento sólido e equilibrado, baseado na segurança e no compromisso mútuo, com uma abordagem realista e madura.",
      profession: "Reflete sucesso duradouro na carreira, frequentemente em áreas de negócios, finanças ou gestão, com foco em segurança e estabilidade.",
      finances: "Indica uma forte posição financeira, sucesso nos investimentos e a capacidade de criar riqueza de forma constante e estável.",
      health: "Sugere boa saúde, geralmente associada a um estilo de vida equilibrado e prático.",
      spirituality: "Encoraja o uso de recursos materiais para apoiar o crescimento espiritual e para ajudar os outros, mantendo um equilíbrio entre o mundo material e o espiritual.",
      temporality: "Um momento de liderança e estabilidade financeira, com foco em segurança e sucesso a longo prazo."
    }
  },
    {
      title: "A⚔",
      meaning: {
        general: "Representa clareza mental, verdade e novas ideias. Indica novos começos que envolvem a percepção clara e a resolução de problemas.",
        love: "Sugere um momento de clareza e honestidade nas emoções, podendo indicar um novo começo no relacionamento.",
        profession: "Indica uma nova oportunidade profissional, geralmente baseada em inteligência ou habilidades mentais.",
        finances: "Reflete uma nova abordagem para questões financeiras, com foco em análise e razão.",
        health: "Sugere clareza mental e equilíbrio, essencial para o bem-estar físico.",
        spirituality: "Inspira busca por verdade e clareza no caminho espiritual.",
        temporality: "Um momento de esclarecimento e novas percepções."
      }
    },
    {
      title: "2⚔",
      meaning: {
        general: "Simboliza indecisão, bloqueios e escolhas difíceis. Indica a necessidade de tomar decisões difíceis, embora a verdade ainda não esteja clara.",
        love: "Sugere uma fase de indecisão ou bloqueios emocionais que precisam ser resolvidos.",
        profession: "Reflete a necessidade de tomar uma decisão importante no trabalho, mas com dificuldades em visualizar a solução.",
        finances: "Indica a necessidade de tomar decisões financeiras críticas, mas com dificuldades para agir.",
        health: "Sugere bloqueios emocionais que impactam a saúde, podendo exigir maior clareza.",
        spirituality: "Convida a superar bloqueios e a buscar clareza espiritual.",
        temporality: "Um momento de indecisão e necessidade de escolhas."
      }
    },
    {
      title: "3⚔",
      meaning: {
        general: "Representa dor, separação e coração partido. Indica um momento difícil de sofrimento emocional ou ruptura.",
        love: "Sugere decepções ou separações dolorosas.",
        profession: "Reflete conflitos ou perdas no ambiente profissional que causam sofrimento.",
        finances: "Indica dificuldades financeiras que podem ser dolorosas e impactar a estabilidade.",
        health: "Sugere o impacto emocional na saúde e a necessidade de superar os desafios emocionais.",
        spirituality: "Encoraja a cura de feridas emocionais para promover o crescimento espiritual.",
        temporality: "Um momento de sofrimento e necessidade de cura emocional."
      }
    },
    {
      title: "4⚔",
      meaning: {
          general: "Representa descanso, recuperação e reflexão. Indica a necessidade de uma pausa para restaurar forças.",
          love: "Sugere um momento de afastamento ou reflexão dentro do relacionamento.",
          profession: "Reflete a necessidade de fazer uma pausa no trabalho para evitar esgotamento.",
          finances: "Indica estabilidade financeira temporária, mas a necessidade de planejar cuidadosamente.",
          health: "Sugere repouso e recuperação física ou mental.",
          spirituality: "Encoraja a introspecção e meditação para restaurar a paz interior.",
          temporality: "Um momento de descanso e recuperação."
      }
  },
  {
      title: "5⚔",
      meaning: {
          general: "Simboliza conflitos, derrotas e tensões. Indica a necessidade de lidar com perdas ou disputas.",
          love: "Sugere desentendimentos ou lutas de poder dentro do relacionamento.",
          profession: "Reflete conflitos no ambiente profissional que podem levar a tensões.",
          finances: "Indica perdas financeiras ou disputas sobre dinheiro.",
          health: "Sugere que o estresse e os conflitos podem afetar negativamente a saúde.",
          spirituality: "Convida à aceitação e ao aprendizado com situações desafiadoras.",
          temporality: "Um momento de conflito e necessidade de resolução."
      }
  },
  {
      title: "6⚔",
      meaning: {
          general: "Representa transição, mudança e viagem. Indica um movimento para longe de dificuldades em busca de calma.",
          love: "Sugere uma fase de transição ou a superação de desafios emocionais.",
          profession: "Reflete mudanças no trabalho que podem levar a um futuro mais estável.",
          finances: "Indica a superação de dificuldades financeiras através de planejamento.",
          health: "Sugere recuperação e progresso após uma fase de desafios de saúde.",
          spirituality: "Encoraja uma jornada espiritual rumo à paz e clareza.",
          temporality: "Um momento de transição e movimento para tempos melhores."
      }
  },
  {
      title: "7⚔",
      meaning: {
          general: "Simboliza estratégia, engano e astúcia. Indica a necessidade de agir com cuidado e evitar armadilhas.",
          love: "Sugere desconfiança ou a necessidade de maior transparência em um relacionamento.",
          profession: "Reflete a necessidade de ser estratégico no trabalho para superar desafios.",
          finances: "Indica cuidado com finanças e possíveis enganos ou fraudes.",
          health: "Sugere atenção aos sinais do corpo e evitar comportamentos autodestrutivos.",
          spirituality: "Inspira a busca por autenticidade e honestidade no caminho espiritual.",
          temporality: "Um momento de estratégia e necessidade de cautela."
      }
  },
  {
      title: "8⚔",
      meaning: {
          general: "Representa restrições, medos e estagnação. Indica a sensação de estar preso ou limitado.",
          love: "Sugere bloqueios emocionais ou relacionamentos restritivos.",
          profession: "Reflete a sensação de estagnação ou falta de progresso no trabalho.",
          finances: "Indica dificuldades financeiras que parecem intransponíveis, mas que podem ser superadas.",
          health: "Sugere que medos e ansiedade podem impactar a saúde física.",
          spirituality: "Convida à libertação de pensamentos limitantes para alcançar clareza espiritual.",
          temporality: "Um momento de restrições e necessidade de superação."
      }
  },
  {
      title: "9⚔",
      meaning: {
          general: "Simboliza ansiedade, pesadelos e arrependimentos. Indica preocupações excessivas e sofrimento mental.",
          love: "Sugere preocupações ou arrependimentos sobre o relacionamento.",
          profession: "Reflete estresse ou medo de falhar no ambiente profissional.",
          finances: "Indica preocupações financeiras que podem ser exageradas ou baseadas em medos.",
          health: "Sugere que a ansiedade está afetando negativamente a saúde física ou mental.",
          spirituality: "Encoraja a liberação de medos e preocupações para alcançar a paz interior.",
          temporality: "Um momento de ansiedade e necessidade de clareza emocional."
      }
  },
  {
      title: "10⚔",
      meaning: {
          general: "Representa finais dolorosos, traições e colapsos. Indica o fim de uma situação difícil.",
          love: "Sugere o término de um relacionamento ou uma traição dolorosa.",
          profession: "Reflete o fim de um ciclo no trabalho, muitas vezes de forma abrupta.",
          finances: "Indica perdas financeiras que podem levar a um recomeço necessário.",
          health: "Sugere a necessidade de aceitação e recuperação após um colapso físico ou mental.",
          spirituality: "Inspira aceitação do fim de ciclos para abrir espaço ao crescimento espiritual.",
          temporality: "Um momento de encerramento e aceitação de mudanças difíceis."
      }
  },
  {
      title: "P⚔",
      meaning: {
          general: "Representa curiosidade, ideias iniciais e exploração mental. Indica novas ideias ou mensagens importantes.",
          love: "Sugere curiosidade ou uma comunicação inesperada.",
          profession: "Reflete novas ideias ou aprendizados no trabalho.",
          finances: "Indica novas oportunidades financeiras baseadas em análise.",
          health: "Sugere a necessidade de aprender mais sobre sua saúde para melhorar.",
          spirituality: "Encoraja a busca por conhecimento espiritual.",
          temporality: "Um momento de aprendizado e exploração intelectual."
      }
  },
  {
      title: "C⚔",
      meaning: {
          general: "Simboliza determinação, ação e bravura. Indica movimento rápido e decisões impulsivas.",
          love: "Sugere paixão ou mudanças rápidas em um relacionamento.",
          profession: "Reflete iniciativas ousadas no trabalho que podem trazer mudanças.",
          finances: "Indica ação decisiva nas finanças, mas cuidado com impulsividade.",
          health: "Sugere energia renovada, mas cuidado com exageros.",
          spirituality: "Inspira a busca por respostas rápidas no caminho espiritual.",
          temporality: "Um momento de ação e rapidez nas decisões."
      }
  },
  {
      title: "D⚔",
      meaning: {
          general: "Representa inteligência, lógica e honestidade. Indica clareza e liderança mental.",
          love: "Sugere honestidade e clareza em um relacionamento.",
          profession: "Reflete liderança e estratégia no ambiente profissional.",
          finances: "Indica a necessidade de decisões racionais para estabilidade financeira.",
          health: "Sugere análise lógica para melhorar a saúde.",
          spirituality: "Encoraja o uso da lógica para entender questões espirituais.",
          temporality: "Um momento de liderança e clareza mental."
      }
  },
  {
      title: "R⚔",
      meaning: {
          general: "Simboliza autoridade, verdade e justiça. Indica o uso da lógica para superar desafios.",
          love: "Sugere maturidade e clareza em emoções e decisões.",
          profession: "Reflete liderança e respeito no ambiente profissional.",
          finances: "Indica decisões financeiras bem informadas e estratégicas.",
          health: "Sugere o uso de lógica e disciplina para melhorar a saúde.",
          spirituality: "Inspira a busca por clareza e justiça no caminho espiritual.",
          temporality: "Um momento de autoridade e tomada de decisões justas."
      }
  },  
    {
      title: "A❤️",
      meaning: {
        general: "Representa novos começos emocionais, amor e criatividade. Indica uma fase de renovação emocional e abertura para novas experiências.",
        love: "Sugere um novo começo ou renovação em um relacionamento, com abertura para o amor incondicional.",
        profession: "Indica novas oportunidades profissionais que envolvem aspectos emocionais ou criativos.",
        finances: "Reflete abundância emocional e a possibilidade de ganhos que vêm de atividades que tragam prazer.",
        health: "Sugere equilíbrio emocional e cura, com foco no bem-estar mental e emocional.",
        spirituality: "Encoraja a conexão profunda com a espiritualidade, com foco na intuição e sentimentos.",
        temporality: "Um momento de renovação e crescimento emocional."
      }
    },
    {
      title: "2❤️",
      meaning: {
        general: "Simboliza parcerias, harmonia e união. Indica uma conexão profunda e equilibrada entre duas pessoas ou forças.",
        love: "Sugere uma parceria forte e equilibrada, com harmonia e reciprocidade entre os parceiros.",
        profession: "Reflete uma colaboração profissional bem-sucedida, com harmonia e objetivos comuns.",
        finances: "Indica uma boa fase financeira através de parcerias ou colaborações.",
        health: "Sugere um equilíbrio emocional e físico, com a importância de apoiar-se nos outros.",
        spirituality: "Encoraja a união espiritual, sugerindo uma conexão profunda com a sabedoria interior ou com outro ser.",
        temporality: "Um momento de harmonia e união emocional ou profissional."
      }
    },
    {
      title: "3❤️",
      meaning: {
        general: "Representa celebração, amizade e alegria compartilhada. Indica momentos de felicidade e comunhão com os outros.",
        love: "Sugere celebração e felicidade em um relacionamento, com momentos de alegria e união.",
        profession: "Reflete um ambiente de trabalho positivo e colaborativo, onde o reconhecimento e a celebração são importantes.",
        finances: "Indica um momento de prosperidade e celebração financeira, com foco no compartilhamento.",
        health: "Sugere boa saúde, com a importância de se apoiar nos amigos e entes queridos para o bem-estar.",
        spirituality: "Encoraja a celebração e o compartilhamento espiritual, promovendo alegria e gratidão.",
        temporality: "Um momento de celebração e felicidade, com foco na comunidade."
      }
    },
    {
      title: "4❤️",
      meaning: {
        general: "Simboliza insatisfação, apatia e desconexão emocional. Indica uma fase de introspecção ou desinteresse nas oportunidades ao redor.",
        love: "Sugere a necessidade de olhar mais profundamente para os sentimentos, podendo indicar uma fase de desinteresse ou distância.",
        profession: "Reflete um período de insatisfação no trabalho, onde as oportunidades podem não parecer tão atraentes.",
        finances: "Indica uma fase em que, apesar da abundância, há falta de apreciação ou insatisfação com a situação financeira.",
        health: "Sugere que o foco deve ser voltado para o equilíbrio emocional, já que a insatisfação pode afetar a saúde mental.",
        spirituality: "Convida a buscar um maior significado espiritual, superando a apatia e a falta de interesse.",
        temporality: "Um momento de reflexão interna e insatisfação emocional."
      }
    },
    {
      title: "5❤️",
      meaning: {
        general: "Representa tristeza, arrependimento e foco no que foi perdido. Indica um momento de luto emocional ou decepção.",
        love: "Sugere decepções emocionais ou um foco excessivo em perdas passadas, com dificuldade em ver as oportunidades presentes.",
        profession: "Reflete lamentos ou arrependimentos no ambiente de trabalho, com foco nas falhas em vez das conquistas.",
        finances: "Indica dificuldades financeiras e foco nos fracassos, esquecendo as oportunidades que ainda existem.",
        health: "Sugere a necessidade de superar a tristeza emocional para manter a saúde mental e física em equilíbrio.",
        spirituality: "Encoraja a superação da dor e a busca por cura emocional no caminho espiritual.",
        temporality: "Um momento de decepção e necessidade de transformação emocional."
      }
    },
    {
      title: "6❤️",
      meaning: {
        general: "Simboliza nostalgia, memórias e reconexão com o passado. Indica um retorno a tempos mais simples ou a busca por harmonia nas relações.",
        love: "Sugere uma reconciliação ou um retorno a uma conexão emocional mais pura e simples.",
        profession: "Reflete o resgate de ideias ou práticas do passado que podem ser aplicadas no presente de forma positiva.",
        finances: "Indica o retorno de uma boa fase financeira ou o reaproveitamento de recursos do passado.",
        health: "Sugere a cura através de cuidados e lembranças do passado, que trazem conforto emocional.",
        spirituality: "Encoraja a reconexão com práticas espirituais antigas que trazem paz e equilíbrio.",
        temporality: "Um momento de nostalgia e reconexão com o passado, trazendo benefícios para o presente."
      }
    },
    {
      title: "7❤️",
      meaning: {
        general: "Representa ilusões, escolhas e possibilidades. Indica um momento de confusão ou distração, onde muitas opções estão disponíveis.",
        love: "Sugere que há muitas possibilidades, mas é necessário discernimento para escolher a melhor opção.",
        profession: "Reflete um período em que muitas opções profissionais estão disponíveis, mas a escolha certa pode ser difícil de identificar.",
        finances: "Indica uma fase de muitas possibilidades financeiras, mas com risco de tomar decisões ilusórias ou imprudentes.",
        health: "Sugere que é necessário foco para evitar distrações que possam prejudicar a saúde física e mental.",
        spirituality: "Encoraja a clarificação e o discernimento espiritual, para não ser levado por ilusões.",
        temporality: "Um momento de escolhas difíceis e confusão, exigindo clareza e discernimento."
      }
    },
    {
      title: "8❤️",
      meaning: {
        general: "Simboliza a busca por algo mais significativo, abandono de velhos padrões emocionais e a busca por um propósito mais profundo.",
        love: "Sugere a decisão de deixar um relacionamento insatisfatório em busca de algo mais genuíno.",
        profession: "Reflete a necessidade de abandonar uma situação profissional insatisfatória em busca de um propósito maior.",
        finances: "Indica a necessidade de deixar para trás velhos hábitos financeiros para encontrar uma nova maneira de prosperar.",
        health: "Sugere que a busca por uma cura mais profunda é necessária, abandonando velhos padrões de autossabotagem.",
        spirituality: "Encoraja a busca por um caminho espiritual mais autêntico, deixando para trás o superficial.",
        temporality: "Um momento de busca por uma transformação emocional mais significativa."
      }
    },
    {
      title: "9❤️",
      meaning: {
        general: "Simboliza satisfação, realização e felicidade emocional. Indica um período de contentamento e gratidão pelas realizações.",
        love: "Sugere um relacionamento feliz e gratificante, onde os desejos emocionais são atendidos.",
        profession: "Reflete sucesso e satisfação no trabalho, com um sentimento de realização e reconhecimento.",
        finances: "Indica prosperidade e satisfação financeira, com foco no aproveitamento dos frutos alcançados.",
        health: "Sugere boa saúde e bem-estar, com a realização de um equilíbrio emocional e físico.",
        spirituality: "Encoraja a gratidão pelas conquistas espirituais, trazendo um sentimento de plenitude.",
        temporality: "Um momento de realização e felicidade emocional."
      }
    },
    {
      title: "10❤️",
      meaning: {
        general: "Representa harmonia, felicidade e realização familiar. Indica um momento de grande felicidade emocional, onde tudo se alinha de forma positiva.",
        love: "Sugere uma união emocional profunda e plena, com felicidade e realização no relacionamento.",
        profession: "Reflete satisfação profissional e realização, com a sensação de estar no caminho certo.",
        finances: "Indica a culminação de um período de prosperidade financeira, trazendo segurança e felicidade.",
        health: "Sugere um estado de equilíbrio e felicidade no corpo e na mente.",
        spirituality: "Encoraja a conexão com a plenitude espiritual e o amor incondicional.",
        temporality: "Um momento de felicidade plena e harmonia emocional, com a realização de todos os desejos."
      }
    },
    {
      title: "P❤️",
      meaning: {
        general: "Representa curiosidade, novas emoções e mensagens sentimentais. Indica uma fase de descoberta ou novas experiências emocionais.",
        love: "Sugere novas mensagens ou a chegada de alguém com boas intenções emocionais.",
        profession: "Reflete novas oportunidades no campo emocional ou criativo no trabalho.",
        finances: "Indica a chegada de novas ideias ou projetos que envolvem questões emocionais ou criativas.",
        health: "Sugere o início de novos métodos para cuidar da saúde, baseados no bem-estar emocional.",
        spirituality: "Inspira a busca por novos caminhos espirituais ou uma nova abordagem emocional.",
        temporality: "Um momento de novas descobertas e mensagens no campo emocional."
      }
    },
    {
      title: "C❤️",
      meaning: {
        general: "Representa ação, movimento e paixão. Indica um momento de agir com emoção e entusiasmo.",
        love: "Sugere uma abordagem apaixonada, com movimento rápido e forte conexão emocional.",
        profession: "Reflete a necessidade de tomar ações emocionais e impulsivas no ambiente profissional.",
        finances: "Indica uma abordagem ousada e apaixonada nas questões financeiras, mas com necessidade de cautela.",
        health: "Sugere energia renovada, com foco no bem-estar emocional e físico, mas evitando excessos.",
        spirituality: "Inspira ação espiritual e busca de respostas com paixão e determinação.",
        temporality: "Um momento de movimento rápido e paixão nas decisões."
      }
    },
    {
      title: "D❤️",
      meaning: {
        general: "Simboliza sensibilidade, intuição e equilíbrio emocional. Indica um momento de clareza emocional e harmonia.",
        love: "Sugere maturidade emocional, compreensão profunda e carinho incondicional.",
        profession: "Reflete uma abordagem equilibrada e sensível no trabalho, com empatia e habilidades interpessoais.",
        finances: "Indica a necessidade de encontrar equilíbrio financeiro e cuidar dos aspectos emocionais da situação.",
        health: "Sugere foco no bem-estar emocional e na conexão com os sentimentos internos.",
        spirituality: "Inspira uma conexão espiritual mais profunda, com sensibilidade e harmonia.",
        temporality: "Um momento de equilíbrio emocional e sensibilidade nas decisões."
      }
    },
    {
      title: "R❤️",
      meaning: {
        general: "Representa autoridade emocional, sabedoria e amor incondicional. Indica um momento de liderança emocional e estabilidade.",
        love: "Sugere um relacionamento maduro e equilibrado, com autoridade emocional e profunda conexão.",
        profession: "Reflete liderança no ambiente de trabalho com uma abordagem emocionalmente inteligente e empática.",
        finances: "Indica estabilidade financeira, com decisões sensatas e equilibradas.",
        health: "Sugere um estado de equilíbrio emocional que contribui para a boa saúde física e mental.",
        spirituality: "Inspira sabedoria espiritual e uma conexão profunda com o amor incondicional.",
        temporality: "Um momento de estabilidade emocional e sabedoria nas decisões."
      }
    }
  ];
