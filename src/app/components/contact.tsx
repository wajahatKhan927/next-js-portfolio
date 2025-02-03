export default function Contact() {
    return (
    <div className="contactMainBody" id="contact">
    <h2> Lets <span>Contact Us</span></h2><br />
    <p>We would love to hear from you! Feel free to drop us a message.</p><br /><br />
    <div className="form-container">
            <div className="container">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/wajahat-ali-9719a62b1/" target="_blank">
                        <button>LinkedIn</button>
                    </a>
                    <a href="https://github.com/Muhammed-Wajahat" target="_blank">
                        <button>GitHub</button>
                    </a>
                </div>
                <div className="email-contact">
                    <p>Prefer direct email? Reach us at <a href="mailto:wajahatali8710@gmail.com">wajahatali8710@gmail.com</a></p>
                </div>
            </div>
    </div>
</div>

  )
}