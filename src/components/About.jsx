const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text fade-in-up">
                        <h2 className="section-title">Tentang Saya</h2>
                        <p className="about-story">
                            Fokus utama dan ketertarikan terbesar saya ada di dunia <strong>UI/UX Design</strong>. Saya sangat menikmati proses merancang antarmuka digital yang intuitif, estetis, dan berpusat pada pengguna. Bagi saya, desain yang sukses adalah desain yang tidak hanya memanjakan mata, tetapi juga mampu memecahkan masalah dan memberikan pengalaman yang bermakna bagi penggunanya.
                        </p>
                        <p className="about-story">
                            Sebagai desainer, saya juga membekali diri dengan pemahaman <em>Front-End</em> (seperti Flutter). Pengetahuan teknis ini cukup menjadi bekal agar desain yang saya rancang di Figma selalu realistis dan siap untuk diimplementasikan oleh <em>developer</em>.
                        </p>

                        <div className="resume-download mt-2">
                            <a href="assets/CV_Virda_Septina_Putri.pdf" target="_blank" rel="noopener noreferrer"
                                className="btn btn-primary"><i className="fa-solid fa-file-pdf"></i> Download Resume (PDF)</a>
                        </div>
                    </div>

                    <div className="about-skills fade-in-up delay-1">
                        <div className="skill-category">
                            <h3><i className="fa-solid fa-pen-nib highlight-red"></i> UI/UX Design</h3>
                            <ul className="skill-list">
                                <li>User Research</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                                <li>Usability Testing</li>
                                <li>Design Systems</li>
                            </ul>
                        </div>
                        <div className="skill-category mt-2">
                            <h3><i className="fa-solid fa-mobile-screen highlight-blue"></i> Mobile Development</h3>
                            <ul className="skill-list">
                                <li>Flutter</li>
                                <li>API Integration</li>
                            </ul>
                        </div>
                        <div className="skill-category mt-2">
                            <h3><i className="fa-solid fa-toolbox highlight-yellow"></i> Tools</h3>
                            <div className="tools-icons">
                                <span className="tool-item"><i className="fa-brands fa-figma"></i> Figma</span>
                                <span className="tool-item"><i className="fa-solid fa-code"></i> VS Code</span>
                                <span className="tool-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                                        fill="currentColor" style={{color: 'var(--text-secondary)'}}>
                                        <path
                                            d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
                                    </svg>
                                    Flutter
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
