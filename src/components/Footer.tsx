import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/vignesh220904', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:Vignesh220904@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-2xl font-bold gradient-text">
              VG
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              AI & Data Science Undergraduate
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Vignesh G. Made with{' '}
            <Heart size={14} className="text-red-500 fill-red-500" /> in Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
