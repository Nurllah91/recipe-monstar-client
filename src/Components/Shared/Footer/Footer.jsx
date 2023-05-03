import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="divide-y  relative bottom-0 left-0">
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Awards and certifications</span>
                    <Link className="link link-hover">All certificate</Link>
                    <Link className="link link-hover">Awards of chef&apos;s</Link>
                    <Link className="link link-hover">Our client&apos;s feedback</Link>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <Link className="link link-hover">Address</Link>
                    <Link className="link link-hover">Contact with us</Link>
                    <Link className="link link-hover">Chef&apos;s</Link>
                    <Link className="link link-hover">Our Location</Link>
                </div>
                <div>
                    <span className="footer-title">Disclaimer</span>
                    <Link className="link link-hover">Our Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Copyrights</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;