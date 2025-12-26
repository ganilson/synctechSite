import reactLogo from "@assets/react_logo.png";
import javaLogo from "@assets/java_logo.png";
import nodejsLogo from "@assets/nodejs_logo.png";
import typescriptLogo from "@assets/typescript_logo.png";
import javascriptLogo from "@assets/javascript_logo.png";
import pythonLogo from "@assets/python_logo.png";
import dockerLogo from "@assets/docker_logo.png";
import mongodbLogo from "@assets/mongodb_logo.png";
import strapiLogo from "@assets/strapi_logo.png";
import gitlabLogo from "@assets/gitlab_logo.png";

export const TechStack = () => {
    const stack = [
        { name: "React", img: reactLogo },
        { name: "Java", img: javaLogo },
        { name: "Node.js", img: nodejsLogo },
        { name: "TypeScript", img: typescriptLogo },
        { name: "JavaScript", img: javascriptLogo },
        { name: "Python", img: pythonLogo },
        { name: "Docker", img: dockerLogo },
        { name: "MongoDB", img: mongodbLogo },
        { name: "Strapi", img: strapiLogo },
        { name: "RabbitMQ", img: gitlabLogo },
    ];

    return (
        <section className="py-8 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden relative z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

            <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
                {[...stack, ...stack, ...stack, ...stack].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-default">
                        {/* LOGO COM IMAGEM */}
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-lg">
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="w-8 h-8 object-contain"
                            />
                        </div>

                        <span className="text-xl font-bold text-white/40 group-hover:text-white/90 transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
};
