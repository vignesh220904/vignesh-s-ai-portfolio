import { BadgeCheck } from 'lucide-react';

const certifications = [
  { name: 'Generative AI', issuer: 'IBM' },
  { name: 'AWS Cloud', issuer: 'Naan Mudhalvan' },
  { name: 'MongoDB Basics', issuer: 'MongoDB' },
  { name: 'Python Programming', issuer: 'NPTEL' },
  { name: 'Machine Learning', issuer: 'Infosys Springboard' },
  { name: 'Full Stack Development', issuer: 'TNSDC' },
  { name: 'AWS Cloud Practitioner', issuer: 'AWS' },
];

const Certifications = () => {
  return (
    <section className="section-padding relative bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="glass-card rounded-xl p-4 glow-border hover:bg-muted/20 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BadgeCheck className="text-primary" size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-sm text-foreground truncate">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
