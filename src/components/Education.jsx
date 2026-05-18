const Education = () => {
    return (
        <section id="education" className="education section bg-surface">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2 className="section-title">Pendidikan</h2>
                </div>
                
                <div className="education-grid">
                    {/* Education */}
                    <div className="edu-card fade-in-up">
                        <div className="edu-header">
                            <span className="edu-title">Education</span>
                            <span className="edu-date">Agustus 2024 - Sekarang</span>
                        </div>
                        <div className="edu-content">
                            <h3>D3 Teknik Informatika</h3>
                            <p>Politeknik Elektronika Negeri Surabaya (PENS)</p>
                            <span className="gpa-badge">GPA 3.56 / 4.00</span>
                        </div>
                    </div>

                    {/* High School */}
                    <div className="edu-card fade-in-up delay-1">
                        <div className="edu-header">
                            <span className="edu-title">Education</span>
                            <span className="edu-date">Lulus</span>
                        </div>
                        <div className="edu-content">
                            <h3>Jurusan MIPA</h3>
                            <p>SMAN 1 Bangkalan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
