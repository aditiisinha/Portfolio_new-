import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Passionate web developer and DevOps enthusiast with strong coding skills.
            </h3>

            <p className="text-muted-foreground">
            I am Aditi Sinha, a B.Tech graduate with a specialization in Computer Science and Information Technology from ITER, Siksha 'O' Anusandhan, 
            with an overall CGPA of 8.6 (2021-2025). 
            I possess a strong academic foundation and a passion for innovation, focusing on creating solutions that are both practical and impactful.
            </p>

            <p className="text-muted-foreground">
            My expertise encompasses <strong>Full-Stack Web Development</strong>, 
<strong> DevOps</strong>, and <strong>Blockchain</strong>, backed by a strong grasp of 
<strong> Data Structures and Algorithms</strong>. I specialize in creating 
<strong> responsive</strong>, <strong>accessible</strong>, and <strong>scalable</strong> applications, 
while ensuring <strong>reliable deployments</strong>. Additionally, I actively explore 
<strong> cutting-edge technologies</strong> to remain at the forefront of the ever-evolving tech landscape.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Aditi_Sinha_Resume1.pdf"
                download="Aditi_Sinha_Resume1.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                  Developing responsive websites and web applications using modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps</h4>
                  <p className="text-muted-foreground">
                  Facilitating seamless deployment, automation, and robust infrastructure to support scalable applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Blockchain</h4>
                  <p className="text-muted-foreground">
                   Developing secure, decentralized solutions leveraging blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
