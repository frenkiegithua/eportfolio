import { Link } from 'react-router-dom';
import { Code, Database, Network, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Artifacts = () => {
  const artifact = {
    title: 'Full-Stack Inventory Management System',
    description: 'A comprehensive inventory tracking application with REST API backend, relational database, and responsive web interface',
    originalCourse: 'CS 340 - Client/Server Development',
    originalDate: 'March 2024',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'REST API'],
    enhancements: [
      { name: 'Software Design & Engineering', completed: true },
      { name: 'Algorithms & Data Structures', completed: true },
      { name: 'Databases', completed: true },
    ],
    image: '/api/placeholder/800/400',
  };

  const enhancementCategories = [
    {
      icon: Code,
      title: 'Software Design & Engineering',
      description: 'Architectural improvements, design patterns, and code quality enhancements',
      link: '/enhancements/software-design',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Network,
      title: 'Algorithms & Data Structures',
      description: 'Performance optimizations and efficient algorithm implementations',
      link: '/enhancements/algorithms',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Schema design, query optimization, and data management improvements',
      link: '/enhancements/databases',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Project Artifacts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing growth through enhanced projects across software design, algorithms, and databases
          </p>
        </header>

        {/* Main Artifact Card */}
        <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-0">
            {/* Image Section */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="h-32 w-32 text-primary/30" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{artifact.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Created: {artifact.originalDate}</span>
                    <span>•</span>
                    <span>Course: {artifact.originalCourse}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {artifact.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {artifact.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Enhancements */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Enhancements Completed</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {artifact.enhancements.map((enhancement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50"
                    >
                      <div className={`w-2 h-2 rounded-full ${enhancement.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className="text-sm">{enhancement.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/artifact/inventory-system">
                  View Detailed Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhancement Categories */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Explore Enhancements by Category</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each enhancement category addresses specific course outcomes and demonstrates mastery
            in different aspects of computer science
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enhancementCategories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-xl ${category.bgColor} flex items-center justify-center mb-4`}>
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Artifacts;
