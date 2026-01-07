import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Retech Solutions',
    role: 'AI/ML Intern',
    location: 'Chennai',
    period: 'Feb 2024 – Mar 2024',
    description: [
      'Developed a real-time emotion recognition model for video content',
      'Worked on human expression analysis using machine learning techniques',
    ],
  },
  {
    company: 'CodSoft',
    role: 'Python/ML Intern',
    location: 'Online',
    period: 'Mar 2024 – Apr 2024',
    description: [
      'Built Python-based machine learning projects',
      'Focused on data preprocessing and predictive modeling',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="glass-card rounded-xl p-6 glow-border hover:bg-muted/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase size={16} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
