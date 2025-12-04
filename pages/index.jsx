import { useEffect } from "react";
import styles from "../styles/main.module.css"
import Header from "../components/header/header.jsx";
export default function trabalhoDeBiologia() {
    return (
        <div className={styles.body}>
            <Header />
            <main className={styles.main}>
                <section id="introduction" className="card content-panel">
                    <h2>What is epithelial tissue?</h2>
                    <p className="lead-text">Epithelial tissue covers surfaces and forms glands.</p>

                    <div className="media-section">
                        <div className="image-placeholder">Microscopic image</div>
                        <div className="text-content">
                            <p>Explore layers and important characteristics.</p>
                        </div>
                    </div>

                    <div className="actions-container">
                        <button className="button" id="explore-button">Explore structure</button>
                        <button className="button ghost-button" data-target="types">View types</button>
                    </div>
                </section>

                <aside className="card sidebar">
                    <h3>Quick Summary</h3>
                    <ul className="bullet-list">
                        <li>High cell cohesion</li>
                        <li>Avascular</li>
                        <li>Fast regeneration</li>
                        <li>Polarity</li>
                    </ul>

                    <div className="search-container">
                        <input type="search" id="search-input" placeholder="Search term..." />
                        <button id="search-button" className="icon-button">🔎</button>
                    </div>

                    <div className="small-card" id="curiosity-card">
                        <h4>Curiosity</h4>
                        <p>Keratinized epithelium protects the skin.</p>
                    </div>
                </aside>

                <section id="types" className="card content-panel hidden">
                    <h2>Types of epithelium</h2>
                    <div className="three-column-grid" id="examples-container"></div>
                </section>

                <section id="functions" className="card content-panel hidden">
                    <h2>Main functions</h2>
                    <ol>
                        <li>Protection</li>
                        <li>Absorption</li>
                        <li>Secretion</li>
                        <li>Sensitive</li>
                    </ol>

                    <div className="interactive-progress">
                        <label>Regeneration:</label>
                        <input type="range" id="regeneration-range" min="0" max="100" defaultValue="70" />
                        <span id="regeneration-value">70%</span>
                    </div>
                </section>

                <section id="glandular" className="card content-panel hidden">
                    <h2>Glandular tissue</h2>
                    <ul>
                        <li>Endocrine</li>
                        <li>Exocrine</li>
                    </ul>
                </section>

                <section id="quiz" className="card content-panel hidden">
                    <h2>Quick quiz</h2>
                    <div id="quiz-container"></div>
                    <div className="quiz-actions">
                        <button className="button" id="start-quiz-button">Start Quiz</button>
                        <button className="button ghost-button" id="show-result-button" disabled>Show Result</button>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container footer-inner">
                    <p>Made for study — © 2025</p>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">YouTube</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
