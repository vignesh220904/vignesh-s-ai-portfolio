import { BarChart3, Brain, Palette, MessageSquare, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: BarChart3,
    title: 'Power BI Dashboards',
    description: 'Interactive reports and dashboards for data-driven business decisions with real-time analytics.',
    tags: ['Power BI', 'Data Visualization', 'Analytics'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AI-Based Internship Recommendation',
    description: 'Smart India Hackathon project - An intelligent system to match students with relevant internships using ML.',
    tags: ['Python', 'Machine Learning', 'SIH'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'KolamKraft',
    description: 'Smart India Hackathon project - AI system to analyze traditional Kolam designs and generate new patterns.',
    tags: ['AI', 'Computer Vision', 'SIH'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MessageSquare,
    title: 'Rule-Based Chatbot',
    description: 'Automated response system using keyword matching and rule-based logic for customer queries.',
    tags: ['Python', 'NLP', 'Chatbot'],
    color: 'from-green-500 to-emerald-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-xl overflow-hidden glow-border hover:bg-muted/20 transition-all duration-500"
            >
              {/* Gradient Top Bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink size={20} />
                  </button>
                </div>

                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
