import { Play, Calendar, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CodeReview = () => {
  const reviewPoints = [
    'Existing functionality walkthrough and demonstration',
    'Code structure and architecture analysis',
    'Areas identified for improvement and enhancement',
    'Security vulnerabilities and potential risks',
    'Performance bottlenecks and optimization opportunities',
    'Code quality assessment and maintainability review',
  ];

  const enhancements = [
    {
      category: 'Software Design & Engineering',
      points: [
        'Refactor monolithic code into modular components',
        'Implement design patterns (MVC, Repository, Factory)',
        'Add comprehensive error handling and logging',
        'Improve code documentation and inline comments',
      ],
    },
    {
      category: 'Algorithms & Data Structures',
      points: [
        'Optimize search algorithms from O(n²) to O(n log n)',
        'Replace inefficient data structures with appropriate alternatives',
        'Implement caching mechanisms for frequently accessed data',
        'Add algorithm complexity analysis and justification',
      ],
    },
    {
      category: 'Database Systems',
      points: [
        'Normalize database schema to eliminate redundancy',
        'Add appropriate indexes for query optimization',
        'Implement proper foreign key constraints',
        'Create stored procedures for complex operations',
        'Add database transaction management',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Code Review</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Analyzing existing artifacts and planning strategic enhancements
          </p>
        </div>

        {/* Video Section */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for video embed */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-10 w-10 text-primary" />
                </div>
                <p className="text-lg font-medium mb-2">Code Review Video</p>
                <p className="text-sm text-muted-foreground">
                  Replace this section with your YouTube or Vimeo embed
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-border">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Published: [Date]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span>Duration: XX minutes</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Review Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Code Review Overview</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                This comprehensive code review examines the original artifacts selected for enhancement
                in this portfolio. Through detailed analysis, I identify strengths to preserve and areas
                requiring improvement to meet professional software engineering standards.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Review Coverage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviewPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enhancement Plan */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Planned Enhancements</h2>
          <div className="space-y-6">
            {enhancements.map((enhancement, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="default" className="text-sm px-3 py-1">
                      {enhancement.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {enhancement.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-medium text-primary">{pointIndex + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Improvement Strategy</h3>
                  <p className="text-muted-foreground">
                    The planned enhancements address multiple aspects of software quality, from
                    architecture and algorithms to database design and security, ensuring a holistic
                    improvement of the original artifacts.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Course Outcome Alignment</h3>
                  <p className="text-muted-foreground">
                    Each enhancement has been carefully designed to demonstrate specific course outcomes,
                    showcasing technical competency, professional communication, and security mindset
                    throughout the development process.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Development Focus</h3>
                  <p className="text-muted-foreground">
                    The review process itself demonstrates critical thinking and self-assessment skills
                    essential for continuous improvement as a software engineering professional.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CodeReview;
