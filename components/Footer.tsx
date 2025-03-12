import { Facebook, Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { IoLogoWechat as Wechat } from "react-icons/io5";
const socialLinks = ["mail", "github", "wechat"];
const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
              <li>+86 182 2447 6162</li>
              <li>
                <Link href="mailto:coderericontheway@gmail.com">coderericontheway@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <div
                  key={social}
                  // href="#"
                  className="w-10 h-10 bg-gray-500 text-white rounded-full flex items-center justify-center hover:bg-gray-700"
                >
                  {social === "github" && (
                    <Link href={"https://github.com/laoskey"}>
                      <Github size={20} />
                    </Link>
                  )}
                  {social === "mail" && (
                    <Link href="mailto:coderericontheway@gmail.com">
                      <Mail size={20} />
                    </Link>
                  )}
                  {social === "wechat" && <Wechat size={22} />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
