import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Random Password Generator",
    description:
      "A React-based Random Password Generator that creates secure, customizable passwords instantly. Works as both a web app and a Chrome Extension with one-click copy support.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://random-password-generator-six-lake.vercel.app/",
    githubUrl: "https://github.com/aditya-2145/Random-Password-Generator",
  },
  {
    id: 2,
    title: "MewChat",
    description:
      "MewChat is a MERN-based real-time chat app featuring email OTP signup, secure JWT authentication, and instant messaging with Socket.IO.",
    image: "/projects/project2.png",
    tags: ["ReactJs", "NodeJs", "MongoDB"],
    demoUrl: "https://mew-chat-lyart.vercel.app/",
    githubUrl: "https://github.com/aditya-2145/MewChat",
  },
  {
    id: 3,
    title: "Typesense",
    description:
      "Typesense is a typing speed test app that measures your Words Per Minute (WPM) and accuracy in real time. It provides a clean, minimal UI for focused typing practice and instant performance tracking.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS3", "JavaScript"],
    demoUrl: "https://type-sense-nu.vercel.app/",
    githubUrl: "https://github.com/aditya-2145/TypeSense",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aditya-2145"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
