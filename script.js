// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS COMPLETOS DAS GERAÇÕES ---
    const generationsData = [
      {
        id: 'boomers', name: 'Baby Boomers', birth: '1946–1964', age: '~60–78 anos', pop: '~28M (≈13%)', tagline: 'A geração da experiência, do pós-guerra e da construção.',
        overview: 'São os brasileiros nascidos no forte crescimento demográfico do pós-guerra. Em 2024, estão aproximadamente entre 60 e 78 anos – muitos já aposentados ou próximos da aposentadoria. Representam cerca de 13% da população. É uma geração numerosa que liderou a expansão populacional, porém hoje seu contingente começa a declinar.',
        details: [
          { title: 'Educação & Formação', icon: '🎓', content: 'Tiveram, em média, menos acesso à educação formal que as gerações seguintes (taxa de analfabetismo de 20,3% entre 65+ em 2022). Apenas uma minoria cursou ensino superior. Muitos adquiriram formações técnicas ou experiência prática. Tiveram mais oportunidades que a geração anterior, mas uma fatia significativa não passou dos primeiros anos escolares. Habilidades digitais limitadas para muitos, embora uma parcela tenha se adaptado.' },
          { title: 'Economia & Poder Aquisitivo', icon: '💰', content: 'Grande parte fora do mercado ativo, vivendo de aposentadorias/pensões. Poder aquisitivo médio varia muito (de salário mínimo a classe média alta com patrimônio). Rendimentos médios tendem a ser inferiores aos da idade ativa. Contribuem significativamente para a "economia prateada" (~R$ 2 trilhões/ano), concentrando gastos em saúde, cuidados, lazer.' },
          { title: 'Carreira & Profissões', icon: '🛠️', content: 'Fizeram carreira em empregos formais de longa duração (servidores, bancários, professores, operários) durante a industrialização e expansão do Estado. Muitos empreenderam negócios próprios (comerciantes, autônomos). Hoje, quem está ativo ocupa posições sênior/consultivas. Ainda ocupam muitas posições de liderança política e empresarial (ex: Lula).' },
          { title: 'Hábitos de Consumo', icon: '🛍️', content: 'Hábitos tradicionais. Valorizam produtos duráveis, qualidade e fidelidade a marcas de confiança. Preferem lojas físicas (74%), bom atendimento pessoal. Adoção limitada de e-commerce, embora usem pagamentos digitais (53%). Pouco interesse em cashback/cupons (21%). Priorizam preço e funcionalidade. Gastam com saúde, bem-estar, viagens, família. Conservadores financeiramente.' },
          { title: 'Valores & Visão de Mundo', icon: '🌟', content: 'Socializados em um Brasil diferente (milagre econômico, regime militar). Tendem a valores mais tradicionais e conservadores. Valorizam estabilidade, trabalho duro, família (tiveram mais filhos). Apreciam etiqueta, respeito à autoridade. Podem ter dificuldade com mudanças sociais rápidas, mas há diversidade interna (progressistas e conservadores).' },
          { title: 'Religião & Espiritualidade', icon: '🕊️', content: 'Majoritariamente religiosos, criados principalmente no catolicismo, com migração posterior para igrejas evangélicas. Poucos "sem religião". Fé desempenha papel importante, com participação ativa em comunidades. Mulheres tendem a ser mais praticantes.' },
          { title: 'Política', icon: '🏛️', content: 'Memórias do regime militar e redemocratização. Eleitorado importante, com tendência média a posições mais conservadoras ou de centro-direita (valorizam ordem, segurança). Apoio a Bolsonaro foi maior entre idosos em 2022, mas há lealdade histórica a partidos trabalhistas. Respeito por instituições (Forças Armadas, Igreja). Preferem estabilidade a mudanças abruptas.' }
        ]
      },
      {
        id: 'gen-x', name: 'Geração X', birth: '1965–1980', age: '~44–59 anos', pop: '~47M (≈22%)', tagline: 'A geração "ponte", pragmática, independente e adaptável.',
        overview: 'Nascidos entre meados dos anos 1960 e 1980 (~22% da pop.). Em plena idade produtiva madura ("quadragenários e cinquentões"). Fizeram a ponte entre Boomers e Millennials, convivendo com a transição analógico-digital.',
        details: [
            { title: 'Educação & Formação', icon: '🎓', content: 'Primeiros a se beneficiarem da expansão do acesso à educação no Brasil democrático. Maior conclusão de ensino médio e superior que Boomers. Nível educacional intermediário, com heterogeneidade. Aprenderam a usar tecnologias na vida adulta (letramento digital razoável).' },
            { title: 'Economia & Poder Aquisitivo', icon: '💰', content: 'No auge do potencial de consumo e renda da carreira. Ocupam posições de gerência/especialistas. Poder aquisitivo elevado, com ativos acumulados. Pragmáticos financeiramente devido a crises passadas (hiperinflação 80s, desemprego 90s). Gastam com lar, educação dos filhos, qualidade de vida. "Geração sanduíche" (ajudam pais e filhos).' },
            { title: 'Carreira & Profissões', icon: '🛠️', content: 'Ocupam grande parte dos postos-chave: gestores, líderes, especialistas sêniores, funcionários públicos de chefia, empreendedores. Flexíveis, adaptaram-se a mudanças tecnológicas e econômicas. Coluna vertebral da força de trabalho qualificada atual. Enfrentam desafio de trabalhar mais anos (reforma previdenciária) e competição dos Millennials.' },
            { title: 'Hábitos de Consumo', icon: '🛍️', content: 'Consumidores omnichannel: pesquisam online, compram online e offline. Valorizam conveniência, custo-benefício e marcas conhecidas. Usam apps e sites. Aderiram a programas de fidelidade e descontos. Mantêm alguns hábitos tradicionais (TV a cabo). Grandes compradores para a família.' },
            { title: 'Valores & Visão de Mundo', icon: '🌟', content: 'Céticos e pragmáticos, moldados por instabilidade política/econômica. Independentes ("latchkey generation"). Valorizam autonomia, adaptabilidade, equilíbrio vida/trabalho. Meio-termo entre tradicionalismo e liberalismo. Tolerantes, mas com apego a estruturas conhecidas. Individualistas moderados, resilientes.' },
            { title: 'Religião & Espiritualidade', icon: '🕊️', content: 'Heterogênea. Criados em maioria católica, muitos migraram para evangelicalismo nos anos 90/00. Aumento dos "sem religião" comparado aos Boomers, mas ainda majoritariamente cristãos. Diversidade interna (neopentecostais, católicos praticantes, espiritualistas alternativos). Menos rígidos que Boomers em alguns aspectos.' },
            { title: 'Política', icon: '🏛️', content: 'Grande peso eleitoral, considerados "centro volátil". Oscilaram entre centro-direita e centro-esquerda. Priorizam resultados práticos (economia, estabilidade). Valores liberais moderados (mercado + políticas sociais). Menos polarizados que jovens/idosos. Valorizam combate à corrupção. Bloco moderado e pragmático.' },
        ]
      },
      {
        id: 'millennials', name: 'Millennials (Y)', birth: '1981–1996', age: '~28–43 anos', pop: '~52M (≈25%)', tagline: 'A maior geração, digitalmente fluente, busca propósito e experiências.',
        overview: 'A maior coorte geracional (~25% da pop.). Adultos jovens e de meia-idade inicial. Cresceram nos anos 90/00 (democracia, globalização, internet). Viveram a transição analógico-digital na infância/adolescência.',
        details: [
            { title: 'Educação & Formação', icon: '🎓', content: 'Geração mais educada formalmente até então (expansão do ensino superior nos anos 2000 - Prouni, FIES). Quase todos com ensino médio. Digitalmente fluentes (pegaram internet na adolescência). Multiqualificados, investiram em idiomas, pós-graduação.' },
            { title: 'Economia & Poder Aquisitivo', icon: '💰', content: 'Construindo estabilidade, mas impactados pela crise de 2014-16. Renda crescente, aproximando-se do pico. Grande peso consumidor (fase de aquisições). Valorizam experiências (viagens, gastronomia) e conveniência (serviços por assinatura, delivery). Endividamento educacional e precarização (gig economy) afetam uma parcela.' },
            { title: 'Carreira & Profissões', icon: '🛠️', content: 'Presentes em todos os setores, com destaque para tecnologia, MKT digital, serviços, economia criativa, finanças. Impulsionaram a onda de startups. Buscam propósito no trabalho, job-hopping comum se insatisfeitos. Valorizam colaboração e feedback. Começam a ocupar cargos de média gerência e liderança.' },
            { title: 'Hábitos de Consumo', icon: '🛍️', content: 'Conectados, exigentes, guiados por experiência e conveniência. Compram muito online/mobile. Esperam personalização e agilidade. Menos leais a marcas tradicionais, valorizam propósito e ética (ESG). Influenciados por reviews online e influenciadores digitais. Priorizam acesso sobre posse.' },
            { title: 'Valores & Visão de Mundo', icon: '🌟', content: 'Valores relativamente liberais e globalizados. Absorveram ideias de diversidade, igualdade, ambientalismo. Mais seculares. Buscam propósito, realização pessoal e equilíbrio vida/trabalho. Valorizam autenticidade. Engajados socialmente (ativismo online/offline, voluntariado, empreendedorismo social). Níveis de ansiedade mais altos.' },
            { title: 'Religião & Espiritualidade', icon: '🕊️', content: 'Aumento significativo dos "sem religião" ou espiritualistas não-institucionais (~25% até 34 anos). Entre religiosos, divisão entre católicos e evangélicos (muitos convertidos na juventude). Busca por espiritualidades alternativas (meditação, holismo). Reinterpretação mais liberal da fé entre os que permanecem.' },
            { title: 'Política', icon: '🏛️', content: 'Engajados, porém polarizados. Centro de manifestações recentes (2013, #EleNão). Tendência progressista em costumes, divididos na economia (esquerda social vs. direita liberal/conservadora). Usam redes sociais politicamente. Críticos de corrupção e política tradicional. Começam a ocupar cargos eletivos, trazendo renovação.' },
        ]
      },
      {
        id: 'gen-z', name: 'Geração Z', birth: '1997–2012', age: '~12–27 anos', pop: '~47M (≈23%)', tagline: 'Os nativos digitais pragmatistas: Conectados, realistas e engajados.',
        overview: 'Nascidos entre 1997-2012 (~23% da pop.). Adolescentes e jovens adultos. Cresceram totalmente imersos em tecnologia digital ("nativos digitais"). Vivenciaram crise econômica, pandemia e efervescência cultural online global em fase formativa.',
        details: [
            { title: 'Educação & Formação', icon: '🎓', content: 'Maior escolaridade básica da história, mas com desafios no acesso/permanência no ensino superior (~23% com superior). Aprendizes autodidatas digitais (YouTube, cursos online). Habilidades multitarefa, mas potencial dificuldade de concentração. Interesse em tech, design, MKT digital, causas sociais. Desafio do "nem-nem".' },
            { title: 'Economia & Poder Aquisitivo', icon: '💰', content: 'Muitos ainda dependentes ou em início de carreira (salários baixos, desemprego juvenil alto). Alto poder de influência no consumo familiar. Consumidores conscientes de preço, preferem acesso à propriedade. Cultura do compartilhado/usado. Monetizam atividades online (creators, gamers, e-commerce informal).' },
            { title: 'Carreira & Profissões', icon: '🛠️', content: 'Ingressando em áreas criativas e tecnológicas (TI, MKT digital, design). Atraídos por carreiras com propósito (meio ambiente, social, saúde mental) e autonomia (freelancer, creator, empreendedor digital). Muitos em subempregos ou precarizados (apps). Valorizam feedback constante, desafios, equilíbrio e crescimento rápido.' },
            { title: 'Hábitos de Consumo', icon: '🛍️', content: 'Primeira tribo de consumidores digitais. Não distinguem online/offline. Mobile-first (preferem apps - 69%). Influenciados por redes sociais/creators (51%). Valorizam rapidez, facilidade e ética (87% boicotariam marcas em escândalos). Exigem inclusão e diversidade. Usam cashback (69%) e comparam preços.' },
            { title: 'Valores & Visão de Mundo', icon: '🌟', content: 'Identidades fluidas, "radicalmente inclusivos". Abertos ao diálogo e tolerância. Pragmatistas e realistas economicamente (preocupados com segurança). Engajados em questões sociais (clima, direitos, saúde mental). Críticos, buscam autenticidade e equilíbrio. Falam abertamente sobre saúde mental.' },
            { title: 'Religião & Espiritualidade', icon: '🕊️', content: 'Geração com maior índice de "sem religião" (~25-30% entre 16-24). Afastamento de instituições. Busca por espiritualidades personalizadas (esoterismo pop, astrologia, mindfulness). Flexibilidade na interpretação da fé entre os religiosos.' },
            { title: 'Política', icon: '🏛️', content: 'Engajados desde cedo, porém polarizados. Tendência majoritária progressista em costumes (apoio a Lula > Bolsonaro entre 16-29). Minoria ativa na direita radical. Ativismo digital forte (redes, "cancelamento"). Senso de urgência moral. Cobram ética e ação. Começam a ingressar na política formal (vereadores/deputados jovens).' }
        ]
      },
      {
        id: 'alpha', name: 'Geração Alpha', birth: '2013–Presente', age: '~0–11 anos', pop: '~26M (≈12%)', tagline: 'As crianças de hoje: Nativos digitais extremos, crescendo em um mundo diverso.',
        overview: 'Nascidos de 2013 em diante (~12% da pop.). Crianças de hoje, filhos de Millennials/Gen Z. Geração menor em tamanho relativo (baixa natalidade). Crescem em lares menores, com pais mais velhos e imersos em tecnologia desde o berço.',
        details: [
            { title: 'Educação & Desenvolvimento', icon: '🎓', content: 'Alta frequência em creches/pré-escolas (34% 0-3 anos, 87% 4-5 anos). Nativos digitais extremos (tablets, assistentes de voz desde cedo). Educação mais tecnológica e personalizada (apps, híbrido). Desafio de equilibrar digital com habilidades socioemocionais (empatia, pensamento crítico).' },
            { title: 'Contexto Familiar e Social', icon: '👨‍👩‍👧‍👦', content: 'Maior diversidade familiar (pais solteiros, homoafetivos, inter-raciais). Pais Millennials mais participativos e dialogais (igualdade de gênero). Expostos a pautas de diversidade, respeito, consentimento desde cedo. Impacto da pandemia na socialização inicial (isolamento, telas).' },
            { title: 'Tecnologia e Brincadeiras', icon: '📱', content: 'Tecnologia onipresente (IA, IoT, metaverso). Brinquedos tecnológicos, mas também resgate do brincar clássico e natureza (incentivo dos pais para equilibrar). Aprendizado autodidata via tutoriais. Podem ter menor capacidade de atenção prolongada se não houver equilíbrio.' },
            { title: 'Padrões de Consumo Futuros', icon: '🛍️', content: 'Influenciam fortemente compras familiares (personagens, modas). No futuro, esperados serem ainda mais digitais, focados em acesso > posse, e eco-conscientes (crescem com discurso de sustentabilidade). Habituados a comércio social, RA, pagamentos invisíveis.' },
            { title: 'Valores e Cosmovisão (em formação)', icon: '🌟', content: 'Provavelmente questionadores (acostumados a respostas instantâneas). Maior consciência global e senso de justiça social (educação atual). Espiritualidade incerta (secularismo ou novas formas?). Podem ser superconfiantes ou mais ansiosos (criação atenta dos pais Millennials).' },
            { title: 'Desafios', icon: '🎯', content: 'Principal: Balancear o virtual e o real, desenvolvendo habilidades socioemocionais no mundo físico. Lidar com futuras crises (climáticas, econômicas). Formar indivíduos íntegros e não apenas "robôs digitais". Papel crucial de famílias e escolas.' },
        ]
      }
    ];

    // --- Elementos do DOM ---
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    const contentSections = document.querySelectorAll('.main-content .content-section');
    const generationCardsContainer = document.getElementById('generation-cards-container');
    const generationDetailContent = document.getElementById('generation-detail-content');
    const generationSummaryTableBody = document.querySelector('#generation-summary-table tbody');
    const currentYearSpan = document.getElementById('current-year');

    // --- Funções ---

    // Função para mostrar uma seção e esconder as outras
    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Esconde a seção de detalhe por padrão, a menos que ela seja o alvo
        const detailSection = document.getElementById('generation-detail');
        if (detailSection && targetId !== 'generation-detail') {
            detailSection.classList.remove('active');
        }

        const targetSection = document.getElementById(targetId);
        // Tenta encontrar o link pelo data-target, caso contrário pelo href (para links no footer, etc.)
        let targetLink = document.querySelector(`.navbar a[data-target="${targetId}"]`);
        if (!targetLink) {
             targetLink = document.querySelector(`a[href="#${targetId}"]`);
        }


        if (targetSection) {
            // Remove active de todas antes de adicionar na correta
             contentSections.forEach(s => s.classList.remove('active'));
            targetSection.classList.add('active');
            window.scrollTo(0, 0); // Rola para o topo da página
        } else {
            console.warn(`Seção com ID "${targetId}" não encontrada.`);
            // Se a seção não existe (ex: link quebrado), volta para home
             document.getElementById('home').classList.add('active');
             document.querySelector('.navbar a[data-target="home"]').classList.add('active');
             return; // Sai da função
        }

        // Remove active de todos os links antes de adicionar no correto
        navLinks.forEach(link => link.classList.remove('active'));
         if (targetLink) {
            targetLink.classList.add('active');
        }

    }

    // Função para exibir os detalhes de uma geração
    function showGenerationDetail(generationId) {
        const generation = generationsData.find(gen => gen.id === generationId);

        if (generation && generationDetailContent) {
             // Botão Voltar (criado aqui para garantir que está sempre presente ao mostrar detalhes)
            let backButtonHtml = `<button class="button-link back-button" data-target="geracoes-hub">← Voltar para Gerações</button>`;

            let detailHtml = `
                ${backButtonHtml}
                <header>
                    <h2>${generation.name} <span class="generation-meta">(${generation.birth} | ${generation.age})</span></h2>
                    <p class="tagline"><strong>${generation.tagline}</strong></p>
                </header>
                <section class="visao-geral">
                    <h3>Visão Geral</h3>
                    <p>${generation.overview}</p>
                </section>
                <section class="perfil-detalhado">
                    <h3>Perfil Detalhado</h3>
                    ${generation.details.map(detail => `
                        <div class="profile-section">
                            <h4><span class="icon" aria-hidden="true">${detail.icon || '🔹'}</span> ${detail.title}</h4>
                            <p>${detail.content.replace(/\n/g, '<br>')}</p> {/* Preserva quebras de linha se houver */}
                        </div>
                    `).join('')}
                </section>
            `;
            generationDetailContent.innerHTML = detailHtml;
            showSection('generation-detail'); // Mostra a seção de detalhes

             // Adiciona listener ao botão 'Voltar' recém-criado DENTRO do container de detalhes
             const backButton = generationDetailContent.querySelector('.back-button');
             if(backButton) {
                 backButton.addEventListener('click', (event) => {
                     event.preventDefault();
                     const target = event.target.getAttribute('data-target');
                     showSection(target);
                 });
             }

        } else {
            generationDetailContent.innerHTML = '<p>Erro: Detalhes da geração não encontrados.</p>';
            showSection('generation-detail');
             // Adiciona botão voltar mesmo em caso de erro
             const backButtonHtml = `<button class="button-link back-button" data-target="geracoes-hub">← Voltar para Gerações</button>`;
             generationDetailContent.insertAdjacentHTML('afterbegin', backButtonHtml);
             const backButton = generationDetailContent.querySelector('.back-button');
              if(backButton) {
                 backButton.addEventListener('click', (event) => {
                     event.preventDefault();
                     const target = event.target.getAttribute('data-target');
                     showSection(target);
                 });
             }
        }
    }

     // Função para preencher a tabela resumo das gerações
    function populateGenerationSummaryTable() {
        if (!generationSummaryTableBody) return;
        generationSummaryTableBody.innerHTML = ''; // Limpa tabela
        generationsData.forEach(gen => {
            const row = `
                <tr>
                    <td>${gen.name}</td>
                    <td>${gen.birth}</td>
                    <td>${gen.age}</td>
                    <td>${gen.pop}</td>
                </tr>
            `;
            generationSummaryTableBody.innerHTML += row;
        });
    }

    // Função para criar os cards das gerações no Hub
    function populateGenerationCards() {
        if (!generationCardsContainer) return;
        generationCardsContainer.innerHTML = ''; // Limpa container
        generationsData.forEach(gen => {
            const cardHtml = `
                <div class="card generation-card" data-generation-id="${gen.id}" role="button" tabindex="0" aria-label="Ver detalhes sobre ${gen.name}">
                    <h4>${gen.name} <span class="card-meta">(${gen.age})</span></h4>
                    <p>${gen.tagline}</p>
                    <button class="button-link generation-detail-button" data-generation-id="${gen.id}">Saiba Mais</button>
                </div>
            `;
            generationCardsContainer.innerHTML += cardHtml;
        });

         // Adiciona listeners aos botões "Saiba Mais" dos cards
         document.querySelectorAll('.generation-detail-button').forEach(button => {
             button.addEventListener('click', (event) => {
                 event.preventDefault();
                 event.stopPropagation(); // Impede que o clique no botão acione o clique no card
                 const genId = event.target.getAttribute('data-generation-id');
                 showGenerationDetail(genId);
             });
         });

          // Adiciona listeners aos cards inteiros (para clique e tecla Enter/Espaço)
         document.querySelectorAll('.generation-card').forEach(card => {
            const genId = card.getAttribute('data-generation-id');
             card.addEventListener('click', (event) => {
                 // Verifica se o clique foi no card e não em um botão dentro dele
                 if (event.target.closest('button')) return;
                 showGenerationDetail(genId);
             });
             card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                     event.preventDefault();
                      showGenerationDetail(genId);
                }
             });
         });
    }


    // --- Event Listeners ---

    // Navegação Principal e Links Internos (Footer, botões)
    document.body.addEventListener('click', (event) => {
        // Verifica se o elemento clicado ou um de seus pais é um link de navegação ou botão com data-target
        const linkElement = event.target.closest('a[data-target], button[data-target]');

        if (linkElement) {
            event.preventDefault(); // Previne a navegação padrão
            const targetId = linkElement.getAttribute('data-target');

            // Não faz nada se for botão de detalhe (tratado separadamente) ou botão voltar DENTRO do detalhe
            if (!linkElement.classList.contains('generation-detail-button') && !linkElement.classList.contains('back-button')) {
                showSection(targetId);
            } else if (linkElement.classList.contains('back-button') && !linkElement.closest('#generation-detail-content')) {
                 // Trata botões 'voltar' que não estejam dentro do #generation-detail-content
                 showSection(targetId);
            }
        }
    });


    // --- Inicialização ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    populateGenerationSummaryTable(); // Preenche a tabela no Hub
    populateGenerationCards(); // Cria os cards no Hub

    // Verifica se há um hash na URL ao carregar a página e tenta navegar
    const initialHash = window.location.hash.substring(1);
    let navigatedByHash = false;
    if (initialHash) {
        const generationMatch = initialHash.match(/^generation-(.+)/); // Formato #generation-gen-z
        if (generationMatch && generationMatch[1]) {
            const initialGenId = generationMatch[1];
            // Verifica se a geração existe antes de tentar mostrar
            if (generationsData.some(gen => gen.id === initialGenId)) {
                 // Atraso mínimo para garantir que tudo esteja pronto
                 setTimeout(() => showGenerationDetail(initialGenId), 50);
                 navigatedByHash = true;
            }
        } else if (document.getElementById(initialHash)) {
            // Atraso mínimo
            setTimeout(() => showSection(initialHash), 50);
            navigatedByHash = true;
        }
    }

    // Se não navegou pelo hash, mostra a home
    if (!navigatedByHash) {
         showSection('home');
    }

}); // Fim do DOMContentLoaded