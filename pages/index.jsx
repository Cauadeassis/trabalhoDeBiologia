import { useEffect } from "react";

export default function TecidoEpitelial() {
    useEffect(() => {
        // Navegação entre seções
        const navButtons = document.querySelectorAll('.nav-btn');
        const panels = document.querySelectorAll('.panel');

        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-target');

                panels.forEach(p => p.classList.add('hidden'));
                document.getElementById(target).classList.remove('hidden');

                navButtons.forEach(b => b.classList.remove('active-nav'));
                btn.classList.add('active-nav');

                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Controle do range
        const range = document.getElementById('regeneracao-range');
        const rangeValue = document.getElementById('reg-value');

        if (range) {
            range.addEventListener('input', () => {
                rangeValue.textContent = range.value + '%';
            });
        }

        // Exemplos microscópicos
        const examples = document.getElementById('examples');

        if (examples) {
            const imagens = [
                { nome: 'Epitélio simples', cor: '#bbd7ff' },
                { nome: 'Epitélio estratificado', cor: '#ffd2d2' },
                { nome: 'Pseudoestratificado', cor: '#d7ffd6' },
                { nome: 'Cúbico', cor: '#ffe8b5' },
                { nome: 'Colunar', cor: '#f2bbff' }
            ];

            imagens.forEach(item => {
                const div = document.createElement('div');
                div.className = 'example';
                div.style.background = item.cor;
                div.textContent = item.nome;
                examples.appendChild(div);
            });
        }

        // Busca interna
        const searchInput = document.getElementById('search');
        const searchBtn = document.getElementById('search-btn');
        const curiosidade = document.getElementById('curiosidade');

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const termo = searchInput.value.toLowerCase();

                const respostas = {
                    'queratinizacao': 'Processo que fortalece o epitélio estratificado da pele.',
                    'epitelio simples': 'Possui apenas uma camada de células e facilita trocas.',
                    'glandulas': 'Derivam do epitélio e realizam secreção.',
                    'pseudoestratificado': 'Parece ter várias camadas, mas é apenas uma.'
                };

                if (respostas[termo]) {
                    curiosidade.querySelector('p').textContent = respostas[termo];
                } else {
                    curiosidade.querySelector('p').textContent = 'Termo não encontrado.';
                }
            });
        }

        // Quiz
        const quizArea = document.getElementById('quiz-area');
        const startQuizBtn = document.getElementById('start-quiz');
        const verResultadoBtn = document.getElementById('ver-resultado');

        let respostasUsuario = [];
        let indexPergunta = 0;

        const perguntas = [
            {
                q: 'Qual é a principal característica do tecido epitelial?',
                op: ['Células muito unidas', 'Grande quantidade de matriz extracelular', 'Presença de vasos sanguíneos'],
                c: 0
            },
            {
                q: 'Onde encontramos epitélio estratificado?',
                op: ['Intestino', 'Pele', 'Traqueia'],
                c: 1
            },
            {
                q: 'Glândulas endócrinas liberam secreções para...',
                op: ['O exterior do corpo', 'Cavidades internas', 'A corrente sanguínea'],
                c: 2
            }
        ];

        function carregarPergunta() {
            const p = perguntas[indexPergunta];

            quizArea.innerHTML = `
        <h3>${p.q}</h3>
        <div class="quiz-opcoes">
          ${p.op.map((txt, i) => `
            <button class="btn quiz-btn" data-index="${i}">${txt}</button>
          `).join('')}
        </div>
      `;

            document.querySelectorAll('.quiz-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    respostasUsuario[indexPergunta] = parseInt(btn.getAttribute('data-index'));
                    indexPergunta++;

                    if (indexPergunta < perguntas.length) {
                        carregarPergunta();
                    } else {
                        quizArea.innerHTML = '<p>Quiz finalizado! Clique em "Ver Resultado".</p>';
                        verResultadoBtn.disabled = false;
                    }
                });
            });
        }

        if (startQuizBtn) {
            startQuizBtn.addEventListener('click', () => {
                indexPergunta = 0;
                respostasUsuario = [];
                verResultadoBtn.disabled = true;
                carregarPergunta();
            });
        }

        if (verResultadoBtn) {
            verResultadoBtn.addEventListener('click', () => {
                let acertos = 0;

                respostasUsuario.forEach((resp, i) => {
                    if (resp === perguntas[i].c) acertos++;
                });

                quizArea.innerHTML = `
          <h3>Resultado final</h3>
          <p><strong>${acertos}</strong> de ${perguntas.length} questões corretas.</p>
          <p>${acertos === perguntas.length ? 'Excelente! 👏' : 'Continue estudando! 💡'}</p>
        `;
            });
        }
    }, []);

    return (
        <div>
            <header className="site-header">
                <div className="container header-inner">
                    <div className="brand">
                        <h1>Tecido Epitelial</h1>
                        <p className="tag">Estrutura, funções e tipos — com recursos interativos</p>
                    </div>
                    <nav className="main-nav">
                        <button className="nav-btn" data-target="intro">Introdução</button>
                        <button className="nav-btn" data-target="tipos">Tipos</button>
                        <button className="nav-btn" data-target="funcoes">Funções</button>
                        <button className="nav-btn" data-target="glandular">Glandular</button>
                        <button className="nav-btn" data-target="quiz">Quiz</button>
                    </nav>
                </div>
            </header>

            <main className="container main-grid">
                <section id="intro" className="card panel">
                    <h2>O que é o tecido epitelial?</h2>
                    <p className="lead">O tecido epitelial reveste superfícies e forma glândulas.</p>

                    <div className="media">
                        <div className="image-placeholder">Imagem microscópica</div>
                        <div className="text">
                            <p>Explore camadas e características importantes.</p>
                        </div>
                    </div>

                    <div className="actions">
                        <button className="btn" id="btn-explorar">Explorar estrutura</button>
                        <button className="btn ghost" data-target="tipos">Ver tipos</button>
                    </div>
                </section>

                <aside className="card sidebar">
                    <h3>Resumo rápido</h3>
                    <ul className="bullet-list">
                        <li>Alta coesão celular</li>
                        <li>Avascular</li>
                        <li>Regeneração rápida</li>
                        <li>Polaridade</li>
                    </ul>

                    <div className="search-box">
                        <input type="search" id="search" placeholder="Buscar termo..." />
                        <button id="search-btn" className="icon-btn">🔎</button>
                    </div>

                    <div className="small-card" id="curiosidade">
                        <h4>Curiosidade</h4>
                        <p>O epitélio queratinizado protege a pele.</p>
                    </div>
                </aside>

                <section id="tipos" className="card panel hidden">
                    <h2>Tipos de epitélio</h2>
                    <div className="grid-3" id="examples"></div>
                </section>

                <section id="funcoes" className="card panel hidden">
                    <h2>Funções principais</h2>
                    <ol>
                        <li>Proteção</li>
                        <li>Absorção</li>
                        <li>Secreção</li>
                        <li>Sensitiva</li>
                    </ol>

                    <div className="interactive-progress">
                        <label>Regeneração:</label>
                        <input type="range" id="regeneracao-range" min="0" max="100" defaultValue="70" />
                        <span id="reg-value">70%</span>
                    </div>
                </section>

                <section id="glandular" className="card panel hidden">
                    <h2>Tecido glandular</h2>
                    <ul>
                        <li>Endócrinas</li>
                        <li>Exócrinas</li>
                    </ul>
                </section>

                <section id="quiz" className="card panel hidden">
                    <h2>Quiz rápido</h2>
                    <div id="quiz-area"></div>
                    <div className="quiz-actions">
                        <button className="btn" id="start-quiz">Iniciar Quiz</button>
                        <button className="btn ghost" id="ver-resultado" disabled>Ver Resultado</button>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container footer-inner">
                    <p>Feito para estudo — © 2025</p>
                    <div className="socials">
                        <a href="#">Instagram</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
