import { useEffect, useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'collaboration', label: 'Collaboration' },
    { id: 'communication', label: 'Communication' },
    { id: 'algorithms', label: 'Algorithms & Data Structures' },
    { id: 'software', label: 'Software Engineering & Databases' },
    { id: 'security', label: 'Security' },
    { id: 'summary', label: 'Portfolio Summary' },
    { id: 'goals', label: 'Professional Goals' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Professional Self-Assessment</h1>
          <p className="text-xl text-muted-foreground">
            Reflecting on my journey through Computer Science
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 bg-card rounded-lg border border-border p-6">
              <h2 className="font-semibold mb-4">Contents</h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    <Circle className="h-2 w-2 flex-shrink-0" />
                    <span className="line-clamp-2">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-12">
              {/* Introduction */}
              <section id="introduction" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Computer Science program at SNHU has been a transformative journey that has shaped
                    my technical abilities, professional mindset, and career aspirations. Through rigorous
                    coursework spanning software development, algorithms, databases, and security, I have
                    developed a comprehensive skill set that prepares me for success in the technology industry.
                  </p>
                  <p>
                    This ePortfolio represents the culmination of my academic growth, showcasing enhanced
                    artifacts that demonstrate mastery across multiple domains. Each enhancement has been
                    carefully selected to illustrate specific competencies while addressing the five course
                    outcomes that define excellence in computer science.
                  </p>
                  <p>
                    Throughout my studies, I have evolved from learning foundational programming concepts to
                    architecting complex systems, optimizing algorithms, and implementing security-first
                    designs. This portfolio tells the story of that evolution through concrete examples of
                    my work.
                  </p>
                </div>
              </section>

              {/* Collaboration */}
              <section id="collaboration" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Collaboration in Team Environments</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Effective collaboration has been central to my development as a computer science
                    professional. Through team projects and code reviews, I have learned to communicate
                    technical concepts clearly, provide constructive feedback, and work effectively with
                    diverse teams toward shared goals.
                  </p>
                  <p>
                    My experience with version control systems like Git has taught me the importance of
                    collaborative workflows, including branching strategies, pull requests, and code review
                    processes. I have practiced writing clear commit messages, documenting changes thoroughly,
                    and resolving merge conflicts diplomatically.
                  </p>
                  <p>
                    In team settings, I have taken on various roles—from contributing individual components
                    to coordinating integration efforts and facilitating team communication. These experiences
                    have shown me that successful software development requires not just technical skill, but
                    also empathy, clear communication, and a commitment to team success.
                  </p>
                </div>
              </section>

              {/* Communication */}
              <section id="communication" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Professional Communication</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Throughout the program, I have developed strong communication skills tailored to various
                    audiences and contexts. Whether writing technical documentation, creating presentations,
                    or discussing architecture decisions, I have learned to adapt my communication style to
                    ensure clarity and effectiveness.
                  </p>
                  <p>
                    Code documentation has been a particular focus—I have learned that well-documented code
                    serves as communication with future developers (including my future self). I practice
                    writing clear comments, comprehensive README files, and detailed API documentation that
                    enables others to understand and extend my work.
                  </p>
                  <p>
                    This ePortfolio itself represents professional communication, as I present my work to
                    potential employers and colleagues. Each narrative accompanying my artifacts demonstrates
                    my ability to explain technical decisions, justify design choices, and reflect critically
                    on my development process.
                  </p>
                </div>
              </section>

              {/* Algorithms & Data Structures */}
              <section id="algorithms" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Data Structures & Algorithms</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My study of algorithms and data structures has provided me with a foundation for
                    solving complex computational problems efficiently. I have gained deep understanding
                    of algorithmic complexity, learning to analyze time and space trade-offs and select
                    appropriate data structures for specific use cases.
                  </p>
                  <p>
                    Through coursework and projects, I have implemented various data structures—including
                    linked lists, trees, hash tables, and graphs—and applied classic algorithms such as
                    searching, sorting, and graph traversal. More importantly, I have learned when and why
                    to use each approach, understanding that the best solution depends on the specific
                    problem constraints.
                  </p>
                  <p>
                    The algorithms enhancement in my portfolio demonstrates this mastery by showing how
                    I identified performance bottlenecks in existing code and applied algorithmic principles
                    to achieve significant improvements. This work showcases not just theoretical knowledge,
                    but practical application of algorithmic thinking to real-world problems.
                  </p>
                </div>
              </section>

              {/* Software Engineering & Databases */}
              <section id="software" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Software Engineering & Database Systems</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Software engineering principles have taught me that building quality software extends
                    far beyond writing code that works. I have learned to design modular, maintainable
                    systems using established patterns and practices, always considering factors like
                    scalability, reliability, and long-term maintenance.
                  </p>
                  <p>
                    My database coursework has provided comprehensive understanding of data modeling,
                    normalization, and query optimization. I can design efficient database schemas,
                    write complex SQL queries, and implement appropriate indexing strategies. I understand
                    the importance of data integrity, transactions, and the trade-offs between different
                    database paradigms.
                  </p>
                  <p>
                    The software design and database enhancements in my portfolio demonstrate these
                    competencies through practical improvements. I have refactored code to improve
                    architecture, implemented design patterns to enhance maintainability, and optimized
                    database interactions for better performance—all while maintaining clear documentation
                    and following industry best practices.
                  </p>
                </div>
              </section>

              {/* Security */}
              <section id="security" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Security Mindset</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Developing a security mindset has been crucial to my growth as a computer science
                    professional. I have learned to think like an attacker, anticipating potential
                    vulnerabilities and implementing defenses before they can be exploited. Security
                    is not an afterthought—it must be integrated throughout the development lifecycle.
                  </p>
                  <p>
                    Through my studies, I have gained knowledge of common vulnerabilities such as SQL
                    injection, cross-site scripting, and authentication flaws. More importantly, I have
                    learned secure coding practices that prevent these issues: input validation,
                    parameterized queries, proper authentication and authorization, and encryption of
                    sensitive data.
                  </p>
                  <p>
                    Throughout my portfolio enhancements, security considerations have been paramount.
                    I have implemented input validation, secured database queries, added authentication
                    mechanisms, and followed the principle of least privilege. These improvements
                    demonstrate my commitment to building not just functional software, but secure,
                    trustworthy systems.
                  </p>
                </div>
              </section>

              {/* Portfolio Summary */}
              <section id="summary" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Portfolio Summary</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The artifacts in this portfolio have been strategically selected and enhanced to
                    demonstrate comprehensive computer science competencies. Together, they showcase
                    my ability to work across the full software development lifecycle—from initial
                    design through implementation, testing, and deployment.
                  </p>
                  <p>
                    Each enhancement addresses multiple course outcomes while demonstrating real-world
                    applicability. The software design improvements show architectural thinking and
                    design pattern implementation. The algorithm optimizations demonstrate analytical
                    problem-solving and performance tuning. The database enhancements illustrate data
                    modeling expertise and query optimization skills.
                  </p>
                  <p>
                    What unifies these diverse artifacts is a consistent commitment to quality,
                    maintainability, security, and professional development practices. Each enhancement
                    includes not just code improvements, but also comprehensive documentation,
                    justification for design decisions, and reflection on the development process.
                  </p>
                </div>
              </section>

              {/* Professional Goals */}
              <section id="goals" className="bg-card rounded-lg border border-border p-8 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6">Professional Goals & Career Readiness</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Computer Science program has prepared me for a successful career in software
                    development and technology leadership. I am equipped with both the technical skills
                    and professional competencies needed to contribute effectively from day one while
                    continuing to grow throughout my career.
                  </p>
                  <p>
                    My immediate career goals include securing a position as a software engineer where
                    I can apply my full-stack development skills, work on challenging technical problems,
                    and collaborate with talented teams. I am particularly interested in roles that
                    emphasize clean code, robust architecture, and security-first development.
                  </p>
                  <p>
                    Long-term, I aspire to technical leadership roles where I can influence architecture
                    decisions, mentor junior developers, and drive the adoption of best practices. The
                    collaborative and communication skills I have developed will be essential as I take
                    on greater responsibility and work to elevate team performance.
                  </p>
                  <p>
                    This ePortfolio demonstrates that I am ready for these challenges. Through concrete
                    examples and thoughtful enhancements, it showcases my technical capabilities,
                    problem-solving approach, and commitment to continuous improvement—qualities that
                    define successful computer science professionals.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;
