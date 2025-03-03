import { Facebook, Instagram, Twitter } from "lucide-react";
const socialLinks = ["twitter", "facebook", "instagram"];
const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-12"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We help businesses grow through innovative digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Business Street</li>
              <li>+1 234 567 890</li>
              <li>info@company.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  {social === "twitter" && <Twitter />}
                  {social === "facebook" && <Facebook />}
                  {social === "instagram" && <Instagram />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
