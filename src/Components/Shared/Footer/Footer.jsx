import { Link } from "react-router-dom";
import './footer.css'


const Footer = () => {
    return (
        <div className="divide-y pt-20 footerBg relative bottom-0 left-0 border-t">
            <footer className="w-11/12 lg:9/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 text-neutral-content border-b border-slate-400">
                <div>
                    <span className="footer-title block">Awards and certifications</span>
                    <Link className="link link-hover block">All certificate</Link>
                    <Link className="link link-hover block">Awards of chef&apos;s</Link>
                    <Link className="link link-hover block">Our client&apos;s feedback</Link>
                </div>
                <div>
                    <span className="footer-title block">About Us</span>
                    <Link className="link link-hove block">Address</Link>
                    <Link className="link link-hover block">Contact with us</Link>
                    <Link className="link link-hover block">Chef&apos;s</Link>
                    <Link className="link link-hover block">Our Location</Link>
                </div>
                <div>
                    <span className="footer-title block">Disclaimer</span>
                    <Link className="link link-hover block">Our Terms of use</Link>
                    <Link className="link link-hover block">Privacy policy</Link>
                    <Link className="link link-hover block">Copyrights</Link>
                </div>

                <div>
                <span className="footer-title block">Featured Food</span>
                <div className="grid grid-cols-2">
                    <img src="https://i.ibb.co/hFNS4zT/image-7.jpg" alt="img" />
                    <img src="https://i.ibb.co/4V824sG/image-6.jpg" alt="img" />
                    <img src="https://i.ibb.co/27TWh1m/image-5.jpg" alt="img" />
                    <img src="https://i.ibb.co/VvtQXpy/image-10.jpg" alt="img" />
                 
                   


                </div>
                </div>
            </footer>

            <p className="text-center pb-10 pt-5 text-slate-300">Copyright © 2023 - All right reserved by Recipe Monster</p>
        </div>
    );
};

export default Footer;