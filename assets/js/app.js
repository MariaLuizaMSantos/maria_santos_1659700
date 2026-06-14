const dados = {
    "destinos": [
        {
            "id": 1,
            "nome": "Paris",
            "descricao": "A Cidade Luz encanta com sua arquitetura, gastronomia e romance.",
            "conteudo": "Paris oferece uma experiência única com seus boulevards elegantes, museus de classe mundial como o Louvre, cafés históricos e a magia da Torre Eiffel iluminada à noite. Destino obrigatório para amantes da cultura e da gastronomia.",
            "pais": "França",
            "melhor_epoca": "Primavera/Outono",
            "clima_medio": "12°C",
            "duracao_ideal": "5-7 dias",
            "nivel": "Intermediário",
            "destaque": true,
            "imagem_principal": "assets/img/paris.jpg",
            "atracoes": [
                {
                    "id": 1,
                    "nome": "Torre Eiffel",
                    "descricao": "Símbolo de Paris com mirantes panorâmicos a 324m de altura.",
                    "imagem": "assets/img/pontosTuristicos/paris_torre_eiffel.jpg"
                },
                {
                    "id": 2,
                    "nome": "Museu do Louvre",
                    "descricao": "Maior museu de arte do mundo com 380 mil obras incluindo a Mona Lisa.",
                    "imagem": "assets/img/pontosTuristicos/paris_louvre.jpg"
                },
                {
                    "id": 3,
                    "nome": "Catedral Notre-Dame",
                    "descricao": "Obra-prima gótica às margens do Rio Sena (em restauração).",
                    "imagem": "assets/img/PontosTuristicos/paris_notre_dame.jpg"
                }
            ]
        },
        {
            "id": 2,
            "nome": "Santorini",
            "descricao": "Ilhas gregas com casinhas brancas e pores do sol mágicos.",
            "conteudo": "Santorini é o cartão-postal da Grécia com suas casinhas brancas empilhadas, igrejas de cúpulas azuis e o mar Egeu de tirar o fôlego. Para casais e lua de mel.",
            "pais": "Grécia",
            "melhor_epoca": "Verão",
            "clima_medio": "24°C",
            "duracao_ideal": "4-6 dias",
            "nivel": "Relax",
            "destaque": true,
            "imagem_principal": "assets/img/santorini.jpg",
            "atracoes": [
                {
                    "id": 1,
                    "nome": "Oia ao pôr do sol",
                    "descricao": "Um dos mais belos pores do sol do mundo com vista para o vulcão.",
                    "imagem": "assets/img/PontosTuristicos/santorini_oia.jpg"
                },
                {
                    "id": 2,
                    "nome": "Praia Vermelha",
                    "descricao": "Praia única com areia vermelha vulcânica e águas cristalinas.",
                    "imagem": "assets/img/PontosTuristicos/santorini_praia_vermelha.jpg"
                },
                {
                    "id": 3,
                    "nome": "Vila de Fira",
                    "descricao": "Capital da ilha com ruas estreitas e vistas panorâmicas.",
                    "imagem": "assets/img/PontosTuristicos/santorini_fira.jpg"
                }
            ]
        },
        {
            "id": 3,
            "nome": "Machu Picchu",
            "descricao": "A cidade perdida dos Incas nas alturas dos Andes.",
            "conteudo": "Uma das 7 Maravilhas do Mundo Moderno, Machu Picchu revela a engenhosidade inca em perfeita harmonia com a natureza andina. Experiência transformadora.",
            "pais": "Peru",
            "melhor_epoca": "Abril-Setembro",
            "clima_medio": "15°C",
            "duracao_ideal": "3-5 dias",
            "nivel": "Aventura",
            "destaque": true,
            "imagem_principal": "assets/img/machu_picchu.jpg",
            "atracoes": [
                {
                    "id": 1,
                    "nome": "Trilha Inca",
                    "descricao": "Caminhada épica de 4 dias até a cidade perdida.",
                    "imagem": "assets/img/PontosTuristicos/machu_picchu_trilha_inca.jpg"
                },
                {
                    "id": 2,
                    "nome": "Templo do Sol",
                    "descricao": "Maior construção sagrada da cidadela inca.",
                    "imagem": "assets/img/PontosTuristicos/machu_picchu_templo_sol.jpg"
                },
                {
                    "id": 3,
                    "nome": "Piedra Intihuatana",
                    "descricao": "'Relógio solar' inca alinhado com solstícios.",
                    "imagem": "assets/img/PontosTuristicos/machu_picchu_intihuatana.jpg"
                }
            ]
        },
        {
            "id": 4,
            "nome": "Tóquio",
            "descricao": "Futuro e tradição convivendo em harmonia vibrante.",
            "conteudo": "Tóquio combina arranha-céus futuristas, templos milenares, culinária de 3 estrelas Michelin e cultura pop. A megalópole mais fascinante do mundo.",
            "pais": "Japão",
            "melhor_epoca": "Cerejeiras (Mar-Abr)",
            "clima_medio": "18°C",
            "duracao_ideal": "7-10 dias",
            "nivel": "Intenso",
            "destaque": false,
            "imagem_principal": "assets/img/toquio.jpg",
            "atracoes": [
                {
                    "id": 1,
                    "nome": "Shibuya Crossing",
                    "descricao": "Maior cruzamento pedestre do mundo com 3.000 pessoas por vez.",
                    "imagem": "assets/img/PontosTuristicos/toquio_shibuya.jpg"
                },
                {
                    "id": 2,
                    "nome": "Templo Senso-ji",
                    "descricao": "Mais antigo templo de Tóquio em Asakusa.",
                    "imagem": "assets/img/PontosTuristicos/toquio_sensoji.jpg"
                },
                {
                    "id": 3,
                    "nome": "Torre Tokyo Skytree",
                    "descricao": "Torre mais alta do mundo com 634m.",
                    "imagem": "assets/img/PontosTuristicos/toquio_skytree.jpg"
                }
            ]
        },
        {
            "id": 5,
            "nome": "Marrakech",
            "descricao": "Mercados vibrantes e arquitetura mourisca exótica.",
            "conteudo": "A 'Cidade Vermelha' do Marrocos pulsa com souks coloridos, palácios de mil e uma noites, culinária tagine e hospitalidade árabe autêntica.",
            "pais": "Marrocos",
            "melhor_epoca": "Primavera/Outono",
            "clima_medio": "22°C",
            "duracao_ideal": "4-6 dias",
            "nivel": "Cultural",
            "destaque": false,
            "imagem_principal": "assets/img/marrakech.jpg",
            "atracoes": [
                {
                    "id": 1,
                    "nome": "Praça Jemaa el-Fna",
                    "descricao": "Coração pulsante de Marrakech com encantadores de serpentes.",
                    "imagem": "assets/img/PontosTuristicos/marrakech_jemaa.jpg"
                },
                {
                    "id": 2,
                    "nome": "Palácio Bahia",
                    "descricao": "Palácio do século XIX com 160 quartos e jardins exuberantes.",
                    "imagem": "assets/img/PontosTuristicos/marrakech_bahia.jpg"
                },
                {
                    "id": 3,
                    "nome": "Jardins Majorelle",
                    "descricao": "Oásis azul criado por Yves Saint-Laurent.",
                    "imagem": "assets/img/PontosTuristicos/marrakech_majorelle.jpg"
                }
            ]
        },
        
    
    {
        "id": 10,
        "nome": "Copacabana",
        "descricao": "A praia mais famosa do mundo e a alma da Zona Sul carioca.",
        "conteudo": "O icônico calçadão de pedras portuguesas serve de palco para o calor do Rio. Copacabana mistura a agitação urbana de seus quiosques e hotéis tradicionais com a beleza clássica do mar azul.",
        "pais": "Brasil",
        "melhor_epoca": "Ano inteiro",
        "clima_medio": "26°C",
        "duracao_ideal": "3-5 dias",
        "nivel": "Lazer",
        "destaque": true,
        "imagem_principal": "assets/img/copacabana.jpg",
        "atracoes": [
            {
                "id": 1,
                "nome": "Praia de Copacabana",
                "descricao": "Famosa faixa de areia com o calçadão em ondas e quiosques animados.",
                "imagem": "assets/img/PontosTuristicos/copacabana_praia.jpg"
            },
            {
                "id": 2,
                "nome": "Forte de Copacabana",
                "descricao": "Fortificação histórica que oferece uma vista panorâmica incrível da orla e o famoso Café do Forte.",
                "imagem": "assets/img/PontosTuristicos/copacabana_forte.jpg"
            },
            {
                "id": 3,
                "nome": "Copacabana Palace",
                "descricao": "O hotel mais luxuoso e tradicional do país, patrimônio histórico do Rio.",
                "imagem": "assets/img/PontosTuristicos/copacabana_palace.jpg"
            }
        ]
    },
    {
        "id": 11,
        "nome": "Fernando de Noronha",
        "descricao": "Santuário ecológico intocado e paraíso de águas cristalinas.",
        "conteudo": "O arquipélago pernambucano é um refúgio de preservação ambiental com as praias mais bonitas do país, ideal para mergulho livre e contato próximo com a fauna marinha.",
        "pais": "Brasil",
        "melhor_epoca": "Agosto a Janeiro",
        "clima_medio": "27°C",
        "duracao_ideal": "5-7 dias",
        "nivel": "Natureza",
        "destaque": true,
        "imagem_principal": "assets/img/noronha.jpg",
        "atracoes": [
            {
                "id": 1,
                "nome": "Baía do Sancho",
                "descricao": "Frequentemente eleita a praia mais bonita do mundo, cercada por falésias.",
                "imagem": "assets/img/PontosTuristicos/noronha_sancho.jpg"
            },
            {
                "id": 2,
                "nome": "Baía dos Porcos",
                "descricao": "Piscina natural perfeita para mergulho com vista para o Morro Dois Irmãos.",
                "imagem": "assets/img/PontosTuristicos/noronha_porcos.jpg"
            },
            {
                "id": 3,
                "nome": "Praia do Leão",
                "descricao": "Praia de mar aberto e beleza selvagem, principal ponto de desova de tartarugas marinhas.",
                "imagem": "assets/img/PontosTuristicos/noronha_leao.jpg"
            }
        ]
    },
    {
        "id": 12,
        "nome": "Mirante do Mangabeiras",
        "descricao": "A vista panorâmica mais deslumbrante do horizonte de Belo Horizonte.",
        "conteudo": "Localizado nas curvas da Serra do Curral, o mirante oferece uma vista de tirar o fôlego de toda a capital mineira, sendo o ponto de encontro perfeito para assistir ao pôr do sol.",
        "pais": "Brasil",
        "melhor_epoca": "Abril a Setembro",
        "clima_medio": "21°C",
        "duracao_ideal": "1-2 dias",
        "nivel": "Paisagem",
        "destaque": false,
        "imagem_principal": "assets/img/mirante_mangabeiras.jpg",
        "atracoes": [
            {
                "id": 1,
                "nome": "Decks de Observação",
                "descricao": "Plataformas de madeira suspensas projetadas para garantir as melhores fotos da cidade.",
                "imagem": "assets/img/PontosTuristicos/mirante_decks.jpg"
            },
            {
                "id": 2,
                "nome": "Praça do Papa",
                "descricao": "Praça icônica bem ao lado, famosa pela colina gramada e eventos ao ar livre.",
                "imagem": "assets/img/PontosTuristicos/mirante_papa.jpg"
            },
            {
                "id": 3,
                "nome": "Parque das Mangabeiras",
                "descricao": "Uma das maiores reservas urbanas da América Latina, colada ao mirante.",
                "imagem": "assets/img/PontosTuristicos/mirante_parque.jpg"
            }
        ]
    },
    {
        "id": 13,
        "nome": "Las Vegas",
        "descricao": "A capital mundial do entretenimento e das luzes de néon.",
        "conteudo": "Erguida no meio do deserto de Nevada, a 'Cidade do Pecado' ferve 24 horas por dia com seus cassinos monumentais, resorts temáticos grandiosos, shows de padrão internacional e vida noturna incomparável.",
        "pais": "Estados Unidos",
        "melhor_epoca": "Primavera/Outono",
        "clima_medio": "24°C",
        "duracao_ideal": "3-5 dias",
        "nivel": "Entretenimento",
        "destaque": true,
        "imagem_principal": "assets/img/las_vegas.jpg",
        "atracoes": [
            {
                "id": 1,
                "nome": "The Strip",
                "descricao": "A icônica avenida principal que concentra os maiores hotéis, cassinos e as luzes da cidade.",
                "imagem": "assets/img/PontosTuristicos/vegas_strip.jpg"
            },
            {
                "id": 2,
                "nome": "Fontes do Bellagio",
                "descricao": "O famoso espetáculo gratuito de águas dançantes, luzes e música coreografada.",
                "imagem": "assets/img/PontosTuristicos/vegas_bellagio.jpg"
            },
            {
                "id": 3,
                "nome": "Fremont Street Experience",
                "descricao": "O coração da Vegas antiga, coberto por uma gigantesca tela de LED com shows de luzes e tirolesa.",
                "imagem": "assets/img/PontosTuristicos/vegas_fremont.jpg"
            }
        ]
    }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
  
    gerenciarInterfaceLogin();

    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        inicializarIndex();
    } else if (window.location.pathname.includes('detalhe.html')) {
        inicializarDetalhe();
    } else if (window.location.pathname.includes('favoritos.html')) {
        inicializarFavoritos();
    }
});

function obterUsuarioLogado() {
    const usuarioJson = sessionStorage.getItem('usuarioCorrente');
    return usuarioJson ? JSON.parse(usuarioJson) : null;
}

function gerenciarInterfaceLogin() {
    const areaLogin = document.getElementById('area-login');
    if (!areaLogin) return;

    const usuario = obterUsuarioLogado();

    if (usuario) {
        areaLogin.innerHTML = `
            <span class="me-2">Olá, <span class="text-warning fw-bold">${usuario.nome}</span></span>
            <a href="#" id="btn-logout" class="btn btn-sm btn-outline-light ms-2 py-0">Sair</a>
        `;
        document.getElementById('btn-logout').addEventListener('click', function(e) {
            e.preventDefault();
            if (typeof logoutUser === 'function') {
                logoutUser();
            } else {
                sessionStorage.removeItem('usuarioCorrente');
                window.location.href = '/modulos/login/index.html';
            }
        });
    } else {
        areaLogin.innerHTML = `<a href="/modulos/login/index.html" class="btn btn-sm btn-light fw-bold text-primary px-3">Entrar</a>`;
    }
}

function obterFavoritosUsuario() {
    const usuario = obterUsuarioLogado();
    if (!usuario) return [];
    const favs = localStorage.getItem(`favoritos_${usuario.id}`);
    return favs ? JSON.parse(favs) : [];
}

function alternarFavorito(idDestino) {
    const usuario = obterUsuarioLogado();
    if (!usuario) {
        alert("Ação Bloqueada! Você precisa efetuar o login para favoritar destinos.");
        window.location.href = '/modulos/login/index.html';
        return;
    }

    let favoritos = obterFavoritosUsuario();
    const index = favoritos.indexOf(idDestino);

    if (index === -1) {
        favoritos.push(idDestino); 
    } else {
        favoritos.splice(index, 1); 
    }

    localStorage.setItem(`favoritos_${usuario.id}`, JSON.stringify(favoritos));
    
    if (document.getElementById('listaDestinos')) criarListaTodosDestinos();
    if (window.location.pathname.includes('favoritos.html')) inicializarFavoritos();
}



function inicializarIndex() {
    criarSliderDestaques();
    criarListaTodosDestinos();
}

function criarSliderDestaques() {
    const destaques = dados.destinos.filter(destino => destino.destaque);
    const carouselInner = document.getElementById('carouselInner');
    if (!carouselInner) return;
    
    carouselInner.innerHTML = '';
    destaques.forEach((destino, index) => {
        const activeClass = index === 0 ? 'active' : '';
        carouselInner.innerHTML += `
            <div class="carousel-item ${activeClass}">
                <img src="${destino.imagem_principal}" class="d-block w-100" alt="${destino.nome}">
                <div class="carousel-caption">
                    <h5>${destino.nome}, ${destino.pais}</h5>
                    <p>${destino.descricao}</p>
                </div>
            </div>
        `;
    });
}

function criarListaTodosDestinos() {
    const listaDestinos = document.getElementById('listaDestinos');
    if (!listaDestinos) return;
    
    listaDestinos.innerHTML = '';
    const favoritos = obterFavoritosUsuario();
    
    dados.destinos.forEach((destino, index) => {
        const destaqueBadge = destino.destaque ? '<span class="destaque-badge"> Destaque</span>' : '';
        const isFavorito = favoritos.includes(destino.id);
       
        const iconeCoracao = isFavorito ? 'bi-heart-fill text-danger' : 'bi-heart text-secondary';

        listaDestinos.innerHTML += `
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 slide-in-up ${`delay-${(index % 4) + 1}`}">
                <div class="card card-destino h-100">
                    <div class="position-relative">
                        <a href="detalhe.html?id=${destino.id}">
                            <img src="${destino.imagem_principal}" class="card-img-top" alt="${destino.nome}">
                        </a>
                        ${destaqueBadge}
                        <button onclick="alternarFavorito(${destino.id})" class="btn-favoritar shadow" aria-label="Favoritar">
                            <i class="bi ${iconeCoracao} fs-4"></i>
                        </button>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <a href="detalhe.html?id=${destino.id}" class="text-decoration-none text-dark">
                            <h5 class="card-title hover-primary">${destino.nome}</h5>
                            <p class="card-text flex-grow-1">${destino.descricao}</p>
                        </a>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${destino.pais}</small>
                            <span class="badge bg-primary">${destino.nivel}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function inicializarDetalhe() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const destino = dados.destinos.find(d => d.id === id);
    
    if (destino) {
        criarDetalhesDestino(destino);
    } else {
        document.getElementById('detalhesDestino').innerHTML = 
            '<div class="col-12 text-center py-5"><h2 class="text-muted">Destino não encontrado</h2></div>';
    }
}

function criarDetalhesDestino(destino) {
    const container = document.getElementById('detalhesDestino');
    if (!container) return;
    
    container.innerHTML = `
        <div class="col-12">
            <div class="hero-destino">
                <img src="${destino.imagem_principal}" alt="${destino.nome}">
                <div class="overlay-info">
                    <h1>${destino.nome}</h1>
                    <p class="lead fs-4">${destino.descricao}</p>
                    <span class="badge bg-warning fs-6 px-3 py-2">${destino.nivel}</span>
                </div>
            </div>
        </div>
        
        <div class="col-lg-8">
            <div class="info-grid">
                <div class="row g-4">
                    <div class="col-md-3 info-item">
                        <i class="bi bi-geo-alt-fill"></i>
                        <h5>${destino.pais}</h5>
                        <small>País</small>
                    </div>
                    <div class="col-md-3 info-item">
                        <i class="bi bi-thermometer-half"></i>
                        <h5>${destino.clima_medio}</h5>
                        <small>Clima Médio</small>
                    </div>
                    <div class="col-md-3 info-item">
                        <i class="bi bi-calendar-check"></i>
                        <h5>${destino.melhor_epoca}</h5>
                        <small>Melhor Época</small>
                    </div>
                    <div class="col-md-3 info-item">
                        <i class="bi bi-clock"></i>
                        <h5>${destino.duracao_ideal}</h5>
                        <small>Duração Ideal</small>
                    </div>
                </div>
            </div>
            
            <div class="bg-white p-4 rounded-4 shadow-lg mb-5">
                <h3 class="mb-4">📖 Sobre o Destino</h3>
                <p class="lead fs-5">${destino.conteudo}</p>
            </div>
        </div>
        
        <div class="col-lg-4">
            <div class="bg-white p-4 rounded-4 shadow-lg sticky-top" style="top: 100px;">
                <h3 class="mb-4 text-primary">📸 Atrações Imperdíveis</h3>
                <div class="galeria-fotos row g-3">
                    ${destino.atracoes.map(atracao => `
                        <div class="col-12 foto-item">
                            <img src="${atracao.imagem}" alt="${atracao.nome}" class="foto-galeria w-100">
                            <h6 class="mt-3 fw-bold mb-1">${atracao.nome}</h6>
                            <p class="text-muted small mb-0">${atracao.descricao}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function inicializarFavoritos() {
    const listaFavs = document.getElementById('listaFavoritos');
    if (!listaFavs) return;

    const usuario = obterUsuarioLogado();
    if (!usuario) {
        listaFavs.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-lock display-3 text-muted mb-3"></i>
                <h3>Área Restrita</h3>
                <p class="text-muted">Por favor, faça login para visualizar e gerenciar seus destinos favoritos.</p>
                <a href="/modulos/login/index.html" class="btn btn-primary mt-2">Fazer Login</a>
            </div>
        `;
        return;
    }

    const favoritosIds = obterFavoritosUsuario();
    const destinosFavoritados = dados.destinos.filter(d => favoritosIds.includes(d.id));

    if (destinosFavoritados.length === 0) {
        listaFavs.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-heart-break display-3 text-muted mb-3"></i>
                <h3>Nenhum favorito salvo</h3>
                <p class="text-muted">Explore nossa lista de destinos e clique no ícone de coração para salvar seus locais preferidos.</p>
                <a href="index.html" class="btn btn-success mt-2">Ver Destinos</a>
            </div>
        `;
        return;
    }

    listaFavs.innerHTML = '';
    destinosFavoritados.forEach((destino, index) => {
        listaFavs.innerHTML += `
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div class="card card-destino h-100">
                    <div class="position-relative">
                        <img src="${destino.imagem_principal}" class="card-img-top" alt="${destino.nome}">
                        <button onclick="alternarFavorito(${destino.id})" class="btn-favoritar shadow">
                            <i class="bi bi-heart-fill text-danger fs-4"></i>
                        </button>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${destino.nome}</h5>
                        <p class="card-text flex-grow-1">${destino.descricao}</p>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            <small class="text-muted">${destino.pais}</small>
                            <button onclick="alternarFavorito(${destino.id})" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash me-1"></i>Remover</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}