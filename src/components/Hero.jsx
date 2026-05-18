const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero-container">
                <div className="hero-content fade-in-up">
                    <p className="greeting">Halo, saya</p>
                    <h1 className="headline">Virda Septina Putri</h1>

                    <h2 className="sub-headline">seorang <span className="highlight-blue">UI/UX Enthusiast</span></h2>
                    <p className="hero-desc">
                        Saya adalah mahasiswa Teknik Informatika semester 4 yang memiliki ketertarikan mendalam di dunia UI/UX Design. Saya percaya bahwa desain yang baik adalah jembatan penghubung antara pengguna dan teknologi. Oleh karena itu, saya selalu antusias merancang antarmuka digital yang tidak hanya memanjakan mata, tetapi juga fungsional, intuitif, dan memberikan pengalaman yang bermakna.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">Lihat Karya Saya</a>
                        <a href="#contact" className="btn btn-secondary">Hubungi Saya</a>
                    </div>
                </div>
                <div className="hero-visual fade-in-up delay-1">
                    <div className="image-wrapper blob-shape">
                        <img src="assets/virdaprofilporto.jpeg" alt="Virda Septina P Profil" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
