import { Link } from 'react-router-dom';
import { Code, Network, Database, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Enhancements = () => {
  const enhancements = [
    {
      category: 'Software Design & Engineering',
      icon: Code,
      description: 'Architectural improvements implementing design patterns, error handling, and code quality enhancements',
      link: '/enhancements/software-design',
      outcomes: [
        'Outcome 1: Collaborative Environments',
        'Outcome 2: Professional Communication',
        'Outcome 4: Innovative Techniques',
      ],
      improvements: [
        'Refactored to MVC architecture',
        'Implemented Repository and Factory patterns',
        'Added comprehensive error handling',
        'Enhanced code documentation',
        'Improved modularity and maintainability',
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      category: 'Algorithms & Data Structures',
      icon: Network,
      description: 'Performance optimizations through efficient algorithms and appropriate data structure selection',
      link: '/enhancements/algorithms',
      outcomes: [
        'Outcome 3: Algorithmic Solutions',
        'Outcome 4: Innovative Techniques',
      ],
      improvements: [
        'Optimized search from O(n) to O(1) complexity',
        'Implemented HashMap for efficient lookups',
        'Added caching mechanisms',
        'Reduced memory footprint by 40%',
        'Improved response times by 75%',
      ],
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
    {
      category: 'Databases',
      icon: Database,
      description: 'Schema design improvements, query optimization, and comprehensive data management',
      link: '/enhancements/databases',
      outcomes: [
        'Outcome 4: Innovative Techniques',
        'Outcome 5: Security Mindset',
      ],
      improvements: [
        'Normalized schema to Third Normal Form',
        'Added appropriate indexes for query optimization',
        'Implemented stored procedures',
        'Added foreign key constraints',
        'Secured queries against SQL injection',
      ],
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Artifact Enhancements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive improvements demonstrating mastery across software design, algorithms, and databases
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Each enhancement category addresses specific course outcomes while demonstrating practical
              application of computer science principles. The improvements shown here transform a basic
              course project into a professional-level application incorporating modern best practices,
              performance optimizations, and security considerations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Click on any enhancement category below to view detailed before/after comparisons, code
              samples, comprehensive narratives, and reflections on the development process.
            </p>
          </CardContent>
        </Card>

        {/* Enhancement Cards */}
        <div className="space-y-8">
          {enhancements.map((enhancement, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Icon Section */}
                  <div className={`lg:w-48 ${enhancement.bgColor} flex items-center justify-center p-8`}>
                    <enhancement.icon className={`h-24 w-24 ${enhancement.color}`} />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{enhancement.category}</h2>
                        <p className="text-muted-foreground">{enhancement.description}</p>
                      </div>
                    </div>

                    {/* Course Outcomes */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3">Course Outcomes Addressed</h3>
                      <div className="flex flex-wrap gap-2">
                        {enhancement.outcomes.map((outcome, outcomeIndex) => (
                          <Badge key={outcomeIndex} variant="secondary">
                            {outcome}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Improvements */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3">Key Improvements</h3>
                      <ul className="space-y-2">
                        {enhancement.improvements.map((improvement, improvementIndex) => (
                          <li key={improvementIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Details Button */}
                    <Link to={enhancement.link}>
                      <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                        <span>View Detailed Enhancement</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Artifacts */}
        <div className="mt-12 text-center">
          <Link to="/artifacts">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              ← Back to Artifacts Overview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Enhancements;
