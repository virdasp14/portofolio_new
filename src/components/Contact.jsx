const Contact = () => {
    return (
        <section id="contact" className="contact section bg-surface">
            <div className="container text-center fade-in-up">
                <h2 className="section-title">Mari Berkolaborasi!</h2>
                <p className="contact-desc">Tertarik untuk bekerja sama? Kotak masuk saya selalu terbuka.</p>

                <div className="contact-cards">
                    <a href="mailto:virdasp14@gmail.com" className="contact-card">
                        <div className="icon-circle bg-red"><i className="fa-solid fa-envelope"></i></div>
                        <h3>Email</h3>
                        <p>virdasp14@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/virdasp" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <div className="icon-circle bg-blue"><i className="fa-brands fa-linkedin-in"></i></div>
                        <h3>LinkedIn</h3>
                        <p>in/virdasp</p>
                    </a>
                    <a href="https://github.com/virdasp14" target="_blank" rel="noopener noreferrer" className="contact-card">
                        <div className="icon-circle bg-green"><i className="fa-brands fa-github"></i></div>
                        <h3>GitHub</h3>
                        <p>virdasp14</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
