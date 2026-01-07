import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Vignesh220904@gmail.com',
    href: 'mailto:Vignesh220904@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98847 42209',
    href: 'tel:+919884742209',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/vignesh220904',
    href: 'https://linkedin.com/in/vignesh220904',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/vignesh220904', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: 'mailto:Vignesh220904@gmail.com', label: 'Email' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or ways to help bring your vision to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="glass-card rounded-xl p-6 text-center glow-border hover:bg-muted/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:Vignesh220904@gmail.com">
                <Send size={20} />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
