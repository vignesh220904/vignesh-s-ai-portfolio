import { Video, Palette, Megaphone } from 'lucide-react';

const hobbies = [
  {
    icon: Video,
    name: 'Video Editing',
    description: 'Creating engaging visual content',
  },
  {
    icon: Palette,
    name: 'Poster Designing',
    description: 'Designing creative graphics',
  },
  {
    icon: Megaphone,
    name: 'Content Creation',
    description: 'Crafting digital narratives',
  },
];

const Hobbies = () => {
  return (
    <section className="py-16 relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            When I'm Not <span className="gradient-text">Coding</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.name}
              className="glass-card rounded-xl px-6 py-4 flex items-center gap-4 hover:bg-muted/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <hobby.icon className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-display font-semibold">{hobby.name}</h3>
                <p className="text-xs text-muted-foreground">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
