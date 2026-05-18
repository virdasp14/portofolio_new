const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Pengalaman & Organisasi</h2>
                    <p className="section-subtitle">Membangun pengalaman di luar ruang kelas.</p>
                </div>
                
                <div className="timeline-section fade-in-up delay-1">
                    <div className="timeline">
                        {/* Item 1 */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h4>Tutor</h4>
                                        <h3>Tutor Siswa SD-SMP</h3>
                                    </div>
                                    <span className="timeline-date">2024 - Sekarang</span>
                                </div>
                                <p className="timeline-desc">Membimbing dan memberikan pengajaran kepada siswa tingkat SD dan SMP untuk membantu mereka memahami materi pelajaran.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h4>Peserta</h4>
                                        <h3>LKMM TD PENS</h3>
                                    </div>
                                    <span className="timeline-date">2025</span>
                                </div>
                                <p className="timeline-desc">Berpartisipasi dalam Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (LKMM TD) untuk mengasah kemampuan kepemimpinan dan manajemen organisasi.</p>
                                <a href="assets/sertif_LKMMTD_Virda.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{marginTop: '12px', display: 'inline-flex'}}>
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Lihat Sertifikat
                                </a>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h4>Koordinator Tim UKS</h4>
                                        <h3>PMR SMAN 1 Bangkalan</h3>
                                    </div>
                                    <span className="timeline-date">2022 - 2023</span>
                                </div>
                                <p className="timeline-desc">Bertanggung jawab dalam koordinasi tim Unit Kesehatan Sekolah (UKS) saat penjagaan di PMR SMAN 1 Bangkalan, memastikan kesiapsiagaan tim kesehatan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
