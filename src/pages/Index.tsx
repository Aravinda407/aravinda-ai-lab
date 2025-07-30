import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, GraduationCap, Briefcase, Code, User } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Traffic Management System Using IoT",
      description: "Complete reduction of human activity in controlling traffic lights using IoT technologies for smart city solutions.",
      technologies: ["Java", "IoT"],
      github: null
    },
    {
      title: "Blood Cell Classification Using CNN",
      description: "Advanced machine learning model for automated blood cell classification using Convolutional Neural Networks.",
      technologies: ["Python", "CNN", "Deep Learning"],
      github: null
    },
    {
      title: "Object Detection using YOLO",
      description: "Real-time object detection system implementing YOLO algorithm with COCO dataset for accurate object recognition.",
      technologies: ["Python", "YOLO", "Computer Vision"],
      github: null
    },
    {
      title: "Object Tracking",
      description: "Advanced object tracking system using YOLOv5 and DeepSORT algorithms with MOT17 dataset for multi-object tracking.",
      technologies: ["YOLOv5", "Python", "DeepSORT", "Computer Vision"],
      github: null
    },
    {
      title: "Resume Analyser",
      description: "Analyzes resumes and evaluates candidate strengths with comprehensive visualization and intelligent scoring system.",
      technologies: ["Python", "NLP", "Data Analysis"],
      github: "https://github.com/Aravinda407/talent-score-insight.git"
    },
    {
      title: "YouTube-Based Notes & Test Generator (Tube Tutor AI)",
      description: "Extracts educational content from YouTube videos to auto-generate comprehensive notes and MCQ tests for enhanced learning.",
      technologies: ["Python", "AI", "NLP", "Web Development"],
      github: "https://github.com/Aravinda407/tube-tutor-ai.git"
    },
    {
      title: "Movie Recommendation App (Cine Faves Nexus)",
      description: "Intelligent movie recommendation system using collaborative filtering algorithms to suggest personalized content.",
      technologies: ["Python", "Machine Learning", "Collaborative Filtering"],
      github: "https://github.com/Aravinda407/cine-faves-nexus.git"
    },
    {
      title: "Text-to-Voice Converter (Audio Reply Bot)",
      description: "Converts input text into natural, human-like speech using advanced Python libraries and AI voice synthesis.",
      technologies: ["Python", "AI", "Speech Synthesis", "NLP"],
      github: "https://github.com/Aravinda407/audio-reply-bot.git"
    }
  ];

  const skills = {
    technical: ["C", "C++", "Java", "JavaScript", "Web Development", "Data Analysis", "Python", "HTML", "CSS"],
    nonTechnical: ["Customer Service", "Written Communication", "Project Management", "Problem Solving"]
  };

  const achievements = [
    "Participated in Project Expo 2k22",
    "Gold Medal in 12th National Open To All Style Karate & Kung-Fu Championship 2021",
    "Certification of participation in Java Full Stack from Tecknowledge"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float">
              Goreti Aravinda
            </h1>
            <div className="text-xl md:text-2xl text-white/90 mb-8 bg-text-gradient bg-clip-text text-transparent">
              AI & Machine Learning Engineer | Full Stack Developer
            </div>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate technology professional seeking exciting challenges in AI/ML and software development. 
              Committed to driving innovation and achieving organizational excellence through cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 animate-glow"
                asChild
              >
                <a href="https://www.linkedin.com/in/goreti-aravind-02b2a9234/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="mailto:aravindagoreti407@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Contact Information */}
        <section className="animate-slide-up">
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <User className="h-6 w-6" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>7671947414</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>aravindagoreti407@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/goreti-aravind-02b2a9234/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="animate-slide-up">
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <GraduationCap className="h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">M.Tech in Artificial Intelligence and Machine Learning</h3>
                  <p className="text-muted-foreground">Osmania University</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">B.Tech in Computer Science Engineering</h3>
                  <p className="text-muted-foreground">Kodad Institute of Technology and Science</p>
                </div>
                <div>
                  <h3 className="font-semibold">Intermediate</h3>
                  <p className="text-muted-foreground">TSWRS/JC</p>
                </div>
                <div>
                  <h3 className="font-semibold">School</h3>
                  <p className="text-muted-foreground">TSWR(RPRP)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="animate-slide-up">
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <Briefcase className="h-6 w-6" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-primary/30 pl-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">Intern</h3>
                  <p className="text-primary font-medium">COSMIC365.AI</p>
                  <p className="text-muted-foreground">Gained hands-on experience in AI and machine learning technologies</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Customer Relationship Manager (CRM) Officer</h3>
                  <p className="text-primary font-medium">HDFC Bank</p>
                  <p className="text-muted-foreground">6+ months experience in customer service and relationship management</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="animate-slide-up">
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <Code className="h-6 w-6" />
                Skills & Proficiencies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent-gradient text-white border-none">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Non-Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.nonTechnical.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-primary/30 text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Achievements */}
        <section className="animate-slide-up">
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <Award className="h-6 w-6" />
                Achievements & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section className="animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative projects spanning AI/ML, web development, and IoT solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient border-border/50 shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-primary/30 hover:bg-primary/10 transition-colors"
                        asChild
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View on GitHub
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personal Information */}
        <section className="animate-slide-up">
          <Card className="bg-card-gradient border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                <User className="h-6 w-6" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">Date of Birth:</span>
                    <span className="ml-2 text-muted-foreground">02/08/2001</span>
                  </div>
                  <div>
                    <span className="font-semibold">Languages:</span>
                    <span className="ml-2 text-muted-foreground">English, Telugu, Hindi</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">Hobbies:</span>
                    <span className="ml-2 text-muted-foreground">Reading Books, Art, Learning Interesting Facts</span>
                  </div>
                  <div>
                    <span className="font-semibold">Additional Skills:</span>
                    <span className="ml-2 text-muted-foreground">Writing, Research, Communication</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-accent-gradient py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-white/90 mb-4">
            "To the best of my knowledge the above statements are true and I understand that withholding or misstating any fact may result in the refusal for placement."
          </p>
          <p className="text-white/70">
            © 2025 Goreti Aravinda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;