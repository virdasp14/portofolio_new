const Projects = () => {
    return (
        <section id="projects" className="projects section bg-surface">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Studi Kasus & Proyek</h2>
                    <p className="section-subtitle">Beberapa karya pilihan yang menunjukkan proses saya dari masalah hingga
                        solusi.</p>
                </div>

                <div className="project-list">
                    {/* Project 1: MOCO */}
                    <div className="project-card fade-in-up">
                        <div className="project-image">
                            <img src="assets/Banner_MOCO.png" alt="MOCO App Banner" />
                        </div>
                        <div className="project-info">
                            <div className="project-tags">
                                <span className="tag tag-yellow">UI/UX</span>
                                <span className="tag tag-green">QA</span>
                            </div>
                            <h3 className="project-title">MOCO</h3>
                            <p className="project-tech"><strong>Tools:</strong> Figma</p>
                            
                            <p className="project-desc" style={{ marginTop: '16px', marginBottom: '8px' }}>
                                MOCO adalah aplikasi manajemen keuangan pintar di mana pengguna dapat dengan mudah mengelola catatan keuangan mereka, mulai dari memantau pemasukan hingga mengontrol pengeluaran harian. Aplikasi ini dirancang untuk memberikan kemudahan dan transparansi penuh atas kondisi finansial pengguna agar tidak lagi <em>boncos</em> di akhir bulan.
                            </p>

                            <div className="project-details">
                                <h4>Proses UI/UX</h4>
                                <p><strong>Masalah:</strong> Banyak anak muda kesulitan mengatur <strong>budget</strong> bulanan dan
                                    melacak pengeluaran mereka secara efektif.</p>
                                <p><strong>Solusi:</strong> Mendesain aplikasi manajemen keuangan dengan antarmuka
                                    minimalis, diagram pengeluaran yang mudah dipahami, dan pencatatan yang cepat.</p>
                            </div>

                            <div className="project-deliverables">
                                <h4>Deliverables</h4>
                                <div className="btn-group">
                                    <a href="https://play.google.com/store/apps/details?id=com.moco.moneycontrol"
                                        target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><i
                                            className="fa-brands fa-google-play"></i> Google Play</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: PulmoCare */}
                    <div className="project-card reverse fade-in-up">
                        <div className="project-mockup-group">
                            <div className="phone-mockup">
                                <img src="assets/Dashboard_PulmoCare.png" alt="PulmoCare Dashboard" />
                            </div>
                            <div className="phone-mockup mockup-center">
                                <img src="assets/Skrining_PulmoCare.png" alt="PulmoCare Skrining" />
                            </div>
                            <div className="phone-mockup">
                                <img src="assets/ReminderObat_PulmoCare.png" alt="PulmoCare Reminder" />
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="project-tags">
                                <span className="tag tag-yellow">UI/UX</span>
                                <span className="tag tag-blue">Front-End Mobile Developer</span>
                            </div>
                            <h3 className="project-title">PulmoCare</h3>
                            <p className="project-tech"><strong>Tools:</strong> Figma, Flutter, VS Code</p>

                            <p className="project-desc" style={{ marginTop: '16px', marginBottom: '8px' }}>
                                PulmoCare hadir sebagai teman perjalanan yang suportif bagi pejuang sembuh TBC. Aplikasi ini menonjolkan fitur <strong>Skrining Gejala Mandiri</strong> untuk deteksi awal yang cepat dan intuitif, serta <strong>Reminder Obat Pintar</strong> yang akan setia mengingatkan jadwal minum obat tanpa terlewat. Melalui perpaduan desain yang hangat dan teknologi yang andal, PulmoCare memastikan penggunanya merasa didampingi di setiap langkah menuju kesembuhan.
                            </p>

                            <div className="project-details">
                                <h4>Proses UI/UX & Implementasi Mobile</h4>
                                <p><strong>Tujuan:</strong> Membantu pasien TBC melacak pengobatan, jadwal minum obat, dan
                                    memberikan edukasi kesehatan.</p>
                                <p><strong>Tantangan Teknis:</strong> Membangun antarmuka yang ramah pengguna sekaligus
                                    mengintegrasikan sistem pengingat lokal di Flutter secara responsif dan <strong>state
                                    management</strong> yang rapi.</p>
                            </div>

                            <div className="project-deliverables mt-1">
                                <h4>Deliverables</h4>
                                <div className="btn-group">
                                    <a href="https://github.com/orgs/PulmoCareApp/repositories" target="_blank"
                                        rel="noopener noreferrer" className="btn btn-outline btn-sm"><i
                                            className="fa-brands fa-github"></i> Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
