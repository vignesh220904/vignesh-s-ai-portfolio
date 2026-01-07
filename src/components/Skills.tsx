import { Code, Database, BarChart3, Bot, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Domain',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 70 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    icon: Database,
    title: 'Libraries & Frameworks',
    skills: [
      { name: 'NumPy', level: 80 },
      { name: 'Pandas', level: 85 },
      { name: 'Scikit-Learn', level: 75 },
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Visualization & BI',
    skills: [
      { name: 'Power BI', level: 80 },
      { name: 'Excel', level: 90 },
      { name: 'Matplotlib', level: 75 },
    ],
  },
  {
    icon: Bot,
    title: 'AI Tools',
    skills: [
      { name: 'ChatGPT', level: 90 },
      { name: 'Gemini', level: 85 },
      { name: 'Replit', level: 75 },
    ],
  },
  {
    icon: Users,
    title: 'Professional Skills',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Teamwork', level: 85 },
      { name: 'Adaptability', level: 88 },
    ],
  },
];

const ProgressBar = ({ level, delay }: { level: number; delay: number }) => {
  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full progress-bar-fill rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${level}%`,
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 glow-border hover:bg-muted/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <category.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <ProgressBar level={skill.level} delay={catIndex * 100 + skillIndex * 50} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
