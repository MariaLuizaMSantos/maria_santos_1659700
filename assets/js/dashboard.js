document.addEventListener('DOMContentLoaded', function() {
    if (typeof dados !== 'undefined' && dados.destinos) {
        inicializarGraficos(dados.destinos);
    } else {
        console.error("Dados dos destinos não encontrados.");
    }
});


let meuGraficoBarras = null;
let meuGraficoPizza = null;

function inicializarGraficos(destinos) {
    
    const nomesDestinos = destinos.map(d => d.nome);
    const qtdAtracoes = destinos.map(d => d.atracoes ? d.atracoes.length : 0);

    // Destruir instâncias antigas se existirem (evita bugs ao atualizar dados)
    if (meuGraficoBarras) meuGraficoBarras.destroy();
    if (meuGraficoPizza) meuGraficoPizza.destroy();

    const ctxBarras = document.getElementById('graficoAtracoes').getContext('2d');
    meuGraficoBarras = new Chart(ctxBarras, {
        type: 'bar',
        data: {
            labels: nomesDestinos,
            datasets: [{
                label: 'Quantidade de Atrações',
                data: qtdAtracoes,
                backgroundColor: 'rgba(56, 122, 220, 0.7)', 
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });

    const contagemNiveis = destinos.reduce((acc, d) => {
        acc[d.nivel] = (acc[d.nivel] || 0) + 1;
        return acc;
    }, {});

    const labelsNiveis = Object.keys(contagemNiveis);
    const dadosNiveis = Object.values(contagemNiveis);

    const ctxPizza = document.getElementById('graficoNiveis').getContext('2d');
    meuGraficoPizza = new Chart(ctxPizza, {
        type: 'doughnut', // Estilo rosca/donut moderno
        data: {
            labels: labelsNiveis,
            datasets: [{
                data: dadosNiveis,
    
                backgroundColor: [
                    '#387adc', 
                    '#198754', 
                    '#ffc107', 
                    '#dc3545', 
                    '#6f42c1', 
                    '#fd7e14', 
                    '#20c997', 
                    '#0dcaf0'  
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}