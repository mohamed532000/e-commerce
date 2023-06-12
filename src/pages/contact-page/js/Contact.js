import "../css/contact.css";

function Contact() {
    return (
        <>
            <div className="contact-section">
                <div className="container">
                    <div className="contact-texts">
                        <div className="contact-info">
                            <h2 className="info-title">Contact Info</h2>
                            <div className="info-box">
                                <div className="info-box-title">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h3>Address</h3>
                                </div>
                                <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">
                                    <i className="fa-solid fa-phone"></i>
                                    <h3>Phone</h3>
                                </div>
                                <p>+1 203 786-896 1</p>
                            </div>
                            <div className="info-box">
                                <div className="info-box-title">
                                    <i className="fa-solid fa-headset"></i>
                                    <h3>Support</h3>
                                </div>
                                <p>Support.StyleVista@gmail.com</p>
                            </div>
                            
                        </div>
                        <div className="contact-form">
                                <h2 className="form-title">SEND MESSAGE</h2>
                                <form>
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                    <input type="text" placeholder="Website"/>
                                    <textarea placeholder="Message"></textarea>
                                    <input type="submit" value="SEND MESSAGE" className="submit-btn"/>
                                </form>
                        </div>
                    </div>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61184952731!2d31.340867205270893!3d30.059611344163983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKzYjCDZhdi12LE!5e0!3m2!1sar!2sus!4v1685913585993!5m2!1sar!2sus" loading="lazy"  title="iframe"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;