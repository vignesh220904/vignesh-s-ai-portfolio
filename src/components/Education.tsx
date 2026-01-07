import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'Dhaanish Ahmed College of Engineering',
    location: 'Chennai',
    grade: 'CGPA: 8.22',
    period: 'Current',
    highlight: true,
  },
  {
    degree: 'Higher Secondary Education (HSE)',
    institution: 'Thiru Vi Ka Higher Secondary School',
    location: 'Shenoy Nagar',
    grade: '72.5%',
    period: 'Completed',
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Thiru Vi Ka Higher Secondary School',
    location: 'Shenoy Nagar',
    grade: '73.5%',
    period: 'Completed',
  },
];

const awards = [
  {
    title: '2nd Runner-Up',
    event: 'TECHFLIX Event',
    venue: 'DMI College',
  },
  {
    title: '1st Place',
    event: 'Talent Hunt (MOZHI \'24)',
    venue: 'Dhaanish Festember \'24',
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`glass-card rounded-xl p-5 glow-border transition-all duration-300 hover:bg-muted/20 ${
                    edu.highlight ? 'border-primary/30' : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/70">{edu.location}</p>
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium">
                    {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Award className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold">Awards</h3>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={award.title + award.event}
                  className="glass-card rounded-xl p-5 glow-border transition-all duration-300 hover:bg-muted/20 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-foreground">{award.title}</h4>
                      <p className="text-primary font-medium">{award.event}</p>
                      <p className="text-sm text-muted-foreground">{award.venue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
