import React from "react";
import "./ReachUsForm.scss";

const ReachUsForm = () => {
    return (
        <div className="contact-section">
            <div className="contact-section__left">
                <h2>OUR MISSION</h2>
                <p className="contact-section__left">
                    Golden Composter is committed to helping the globe achieve zero food
                    waste by providing modular organic food waste composting solutions
                    and systems for all kinds of businesses and homes.
                </p>
                <p>
                    Our goal is to help achieve sustainability, allowing the food waste
                    from the team, individuals, food processing outlets, etc. to be
                    utilized as fertilizer for future food through our food recycler
                    machines.
                </p>
                <h3>CONTACT DETAILS</h3>
                <p>
                    <strong>Email:</strong> sales@goldencomposter.com
                </p>
                <p>
                    <strong>Phone:</strong> +91-123-456-789, +91-999-999-9997
                </p>
                <p>
                    <strong>Address:</strong> Plot no. 382, Sec. 4th Kartikbad, Mysuru,
                    India
                </p>
            </div>

            {/* Right Column */}
            <div className="contact-section__right">
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Name*" required />
                    <input type="email" name="email" placeholder="Email*" required />
                    <input type="tel" name="phone" placeholder="Phone*" required />
                    <input type="text" name="subject" placeholder="Subject*" required />
                    <textarea name="message" placeholder="Message*" required></textarea>
                    <button type="submit" className="submit-button">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReachUsForm;
