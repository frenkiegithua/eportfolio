import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Download, Copy, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const ArtifactDetail = () => {
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedEnhanced, setCopiedEnhanced] = useState(false);

  const handleCopy = (code: string, type: 'original' | 'enhanced') => {
    navigator.clipboard.writeText(code);
    if (type === 'original') {
      setCopiedOriginal(true);
      setTimeout(() => setCopiedOriginal(false), 2000);
    } else {
      setCopiedEnhanced(true);
      setTimeout(() => setCopiedEnhanced(false), 2000);
    }
  };

  const originalCode = `// Original Version - Basic Implementation
class InventoryItem {
    private String id;
    private String name;
    private int quantity;
    
    // Simple linear search - O(n) complexity
    public static InventoryItem findItem(List<InventoryItem> items, String name) {
        for (InventoryItem item : items) {
            if (item.getName().equals(name)) {
                return item;
            }
        }
        return null;
    }
}`;

  const enhancedCode = `// Enhanced Version - Optimized with HashMap
class InventoryItem {
    private String id;
    private String name;
    private int quantity;
    private LocalDateTime lastUpdated;
    
    // Optimized search using HashMap - O(1) complexity
    private static Map<String, InventoryItem> itemCache = new HashMap<>();
    
    public static InventoryItem findItem(String name) {
        return itemCache.get(name);
    }
    
    public static void addItem(InventoryItem item) {
        itemCache.put(item.getName(), item);
    }
}`;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/artifacts" className="hover:text-primary">Artifacts</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Inventory Management System</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Full-Stack Inventory Management System</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <span>Created: March 2024</span>
            <span>•</span>
            <span>Course: CS 340 - Client/Server Development</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Java</Badge>
            <Badge>Spring Boot</Badge>
            <Badge>MySQL</Badge>
            <Badge>React</Badge>
            <Badge>REST API</Badge>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-muted-foreground leading-relaxed">
              A comprehensive inventory tracking application that demonstrates full-stack development
              capabilities. The system includes a RESTful API backend built with Spring Boot, a MySQL
              database for persistent storage, and a responsive React frontend for user interaction.
              Originally developed as a course project, this artifact has been significantly enhanced
              across three categories to demonstrate professional-level software engineering practices.
            </p>
          </CardContent>
        </Card>

        {/* Tabbed Content */}
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="original">Original</TabsTrigger>
            <TabsTrigger value="software">Software Design</TabsTrigger>
            <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Project Purpose</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This inventory management system was designed to help small businesses track products,
                    manage stock levels, and generate reports. The application addresses real-world business
                    needs while demonstrating technical proficiency across multiple technology stacks.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>CRUD operations for inventory items with RESTful API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Real-time stock level monitoring and low-stock alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Search and filter functionality with optimized queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>User authentication and role-based access control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Responsive web interface with modern UI/UX design</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Enhancement Summary</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">Software Design & Engineering</h3>
                      <p className="text-sm text-muted-foreground">
                        Refactored architecture to implement MVC pattern, added comprehensive error handling,
                        and improved code documentation
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">Algorithms & Data Structures</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimized search operations from O(n) to O(1) using hash-based data structures,
                        implemented caching mechanisms
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <h3 className="font-semibold mb-2">Databases</h3>
                      <p className="text-sm text-muted-foreground">
                        Normalized schema to 3NF, added appropriate indexes, implemented stored procedures
                        for complex queries
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Original Version Tab */}
          <TabsContent value="original">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">Original Implementation</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The original version provided basic functionality but had several areas for improvement
                    including inefficient algorithms, lack of proper error handling, and suboptimal database design.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleCopy(originalCode, 'original')}
                    >
                      {copiedOriginal ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="bg-code-bg text-code-text p-6 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono">{originalCode}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Software Design Tab */}
          <TabsContent value="software">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Software Design Enhancement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Improved architecture by implementing design patterns, adding error handling,
                  and enhancing code maintainability. View the complete enhancement details including
                  before/after comparisons and comprehensive narrative.
                </p>
                <Button asChild>
                  <Link to="/enhancements/software-design">
                    View Full Enhancement Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Algorithms Tab */}
          <TabsContent value="algorithms">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">Algorithm Optimization</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Optimized search and data retrieval operations by implementing efficient data structures
                    and algorithms, resulting in significant performance improvements.
                  </p>
                </div>

                <div className="relative mb-6">
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleCopy(enhancedCode, 'enhanced')}
                    >
                      {copiedEnhanced ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="bg-code-bg text-code-text p-6 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono">{enhancedCode}</code>
                  </pre>
                </div>

                <Button asChild>
                  <Link to="/enhancements/algorithms">
                    View Full Enhancement Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Databases Tab */}
          <TabsContent value="databases">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Database Enhancement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Redesigned database schema for normalization, added indexes for query optimization,
                  and implemented stored procedures for complex operations. View the complete enhancement
                  with detailed schema diagrams and query comparisons.
                </p>
                <Button asChild>
                  <Link to="/enhancements/databases">
                    View Full Enhancement Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Enhancements */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Explore Detailed Enhancements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/enhancements/software-design">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Software Design & Engineering</h3>
                  <p className="text-sm text-muted-foreground">View enhancement →</p>
                </div>
              </Link>
              <Link to="/enhancements/algorithms">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Algorithms & Data Structures</h3>
                  <p className="text-sm text-muted-foreground">View enhancement →</p>
                </div>
              </Link>
              <Link to="/enhancements/databases">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Databases</h3>
                  <p className="text-sm text-muted-foreground">View enhancement →</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtifactDetail;
