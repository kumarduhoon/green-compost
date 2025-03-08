import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ReachUsForm.scss";

const ReachUsForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "343df0a6-d348-44dc-af99-32c5acaf6a2b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                toast.success("Message sent successfully!");
                event.target.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="contact-section">
            <div className="contact-section__left">
                <h2>OUR MISSION</h2>
                <p className="contact-section__left">
                    At Green Composte, (green compost) our mission is to revolutionize waste management by delivering
                    innovative and sustainable solutions. We are dedicated to manufacturing high-quality
                    organic waste reprocessors, shredders, and waste handling equipment that empower
                    communities and industries to reduce waste, conserve resources, and promote
                    environmental health. Guided by a commitment to excellence, cost-efficiency, and
                    engineering precision, we strive to enhance market share while contributing to a cleaner,
                    greener planet.
                </p>
                <p>
                    We aim to lead the way in creating a zero-waste future by blending advanced technology
                    with eco-conscious practices. Through our well-engineered products and customer-centric
                    approach, we seek to inspire sustainable habits and make waste management more
                    accessible and efficient for everyone. By turning challenges into opportunities, we endeavor
                    to leave a lasting positive impact on both society and the environment.
                </p>
                <h3>CONTACT DETAILS</h3>
                <p>
                    <strong>Email:</strong> sales@greencomposte.com
                </p>
                <p>
                    <strong>Phone:</strong> +91 99586 29977
                </p>
                <p>
                    <strong>Address:</strong> Plot no. 382, Sec.- 68, IMT Faridabad, Haryana, India
                </p>
            </div>

            <div className="contact-section__right">
                <h2>Ask Question or Get Quote</h2>
                <form className="contact-form" onSubmit={onSubmit}>
                    <input type="text" name="name" placeholder="Name*" required />
                    <input type="email" name="email" placeholder="Email*" required />
                    <input type="tel" name="phone" placeholder="Phone*" required />
                    <input type="text" name="subject" placeholder="Subject*" required />
                    <textarea name="message" placeholder="Message*" required></textarea>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default ReachUsForm;
