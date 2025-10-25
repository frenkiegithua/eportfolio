import { Link } from 'react-router-dom';
import { Code, Database, Network, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import OutcomesList from '@/components/OutcomesList';
import { Button } from '@/components/ui/button';
// Comment out images until proper ones are added
// import softwareIcon from '@/assets/software-icon.jpg';
// import algorithmIcon from '@/assets/algorithm-icon.jpg';
// import databaseIcon from '@/assets/database-icon.jpg';

// Use placeholder empty string for now
const softwareIcon = '';
const algorithmIcon = '';
const databaseIcon = '';

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'Software Design & Engineering',
      description: 'Architecting scalable, maintainable solutions using modern design patterns and best practices',
      imageUrl: softwareIcon,
    },
    {
      icon: Network,
      title: 'Algorithms & Data Structures',
      description: 'Optimizing performance through efficient algorithmic solutions and appropriate data structure selection',
      imageUrl: algorithmIcon,
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Designing robust database schemas with optimized queries and comprehensive data management',
      imageUrl: databaseIcon,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Highlights */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Demonstrating comprehensive skills across core computer science disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Portfolio Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This ePortfolio showcases my growth as a computer science professional through
              carefully selected and enhanced artifacts from my coursework. Each project demonstrates
              mastery in software design, algorithmic problem-solving, and database management,
              while addressing all five course outcomes through practical, real-world applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Through strategic enhancements, I've transformed original projects into comprehensive
              demonstrations of professional-level skills, incorporating modern best practices,
              security considerations, and performance optimizations.
            </p>
            <Button size="lg" asChild>
              <Link to="/artifacts">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <OutcomesList />
    </div>
  );
};

export default Home;
