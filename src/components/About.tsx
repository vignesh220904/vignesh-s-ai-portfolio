import { Sparkles, Brain, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Passionate about machine learning and intelligent systems',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven',
    description: 'Focused on analytics and business intelligence',
  },
  {
    icon: Sparkles,
    title: 'Creative Thinker',
    description: 'Combining technical skills with creative problem-solving',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            Enthusiastic <span className="text-foreground font-medium">Artificial Intelligence & Data Science</span> undergraduate 
            with strong interests in <span className="text-primary">AI</span>, <span className="text-primary">Data Analytics</span>, 
            and <span className="text-primary">Digital Marketing</span>. Passionate about applying technical expertise and 
            creative skills to drive data-driven innovation, operational efficiency, and business growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 text-center glow-border hover:bg-muted/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
