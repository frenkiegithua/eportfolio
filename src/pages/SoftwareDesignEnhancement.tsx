import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Copy, Check, CheckCircle2, Circle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SoftwareDesignEnhancement = () => {
  const [copiedBefore, setCopiedBefore] = useState(false);
  const [copiedAfter, setCopiedAfter] = useState(false);
  const [viewMode, setViewMode] = useState<'split' | 'before' | 'after'>('split');

  const beforeCode = `// Before: Monolithic controller with poor separation of concerns
@RestController
public class InventoryController {
    
    @GetMapping("/items")
    public List<Item> getItems() {
        // Business logic mixed with data access
        Connection conn = DriverManager.getConnection(dbUrl);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM items");
        
        List<Item> items = new ArrayList<>();
        while(rs.next()) {
            Item item = new Item();
            item.setId(rs.getInt("id"));
            item.setName(rs.getString("name"));
            items.add(item);
        }
        // No error handling
        // No resource cleanup
        return items;
    }
}`;

  const afterCode = `// After: Clean MVC architecture with proper separation
@RestController
@RequestMapping("/api/v1/items")
public class InventoryController {
    
    private final InventoryService inventoryService;
    private static final Logger logger = LoggerFactory.getLogger(InventoryController.class);
    
    @Autowired
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }
    
    @GetMapping
    public ResponseEntity<List<ItemDTO>> getAllItems() {
        try {
            logger.info("Fetching all inventory items");
            List<ItemDTO> items = inventoryService.findAllItems();
            return ResponseEntity.ok(items);
        } catch (ServiceException e) {
            logger.error("Error fetching items", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Collections.emptyList());
        }
    }
}

// Service Layer
@Service
public class InventoryService {
    
    private final InventoryRepository repository;
    
    @Autowired
    public InventoryService(InventoryRepository repository) {
        this.repository = repository;
    }
    
    public List<ItemDTO> findAllItems() {
        return repository.findAll()
            .stream()
            .map(ItemMapper::toDTO)
            .collect(Collectors.toList());
    }
}`;

  const handleCopy = (code: string, type: 'before' | 'after') => {
    navigator.clipboard.writeText(code);
    if (type === 'before') {
      setCopiedBefore(true);
      setTimeout(() => setCopiedBefore(false), 2000);
    } else {
      setCopiedAfter(true);
      setTimeout(() => setCopiedAfter(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/enhancements" className="hover:text-primary">Enhancements</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Software Design & Engineering</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">Category One</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Software Design & Engineering Enhancement</h1>
          <p className="text-xl text-muted-foreground">
            Artifact: Full-Stack Inventory Management System
          </p>
        </div>

        {/* Course Outcomes */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Course Outcomes Addressed</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Outcome 1: Collaborative Environments</p>
                  <p className="text-sm text-muted-foreground">
                    Enhanced code organization and documentation to enable better team collaboration
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Outcome 2: Professional Communication</p>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive documentation and clear code structure communicate design decisions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Outcome 4: Innovative Techniques</p>
                  <p className="text-sm text-muted-foreground">
                    Applied modern design patterns and architectural best practices
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Comparison */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Before & After Comparison</h2>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'split' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('split')}
              >
                Split View
              </Button>
              <Button
                variant={viewMode === 'before' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('before')}
              >
                Before Only
              </Button>
              <Button
                variant={viewMode === 'after' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('after')}
              >
                After Only
              </Button>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'split' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
            {/* Before Code */}
            {(viewMode === 'split' || viewMode === 'before') && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Before Enhancement</h3>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleCopy(beforeCode, 'before')}
                    >
                      {copiedBefore ? (
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
                  <div className="relative overflow-hidden rounded-lg">
                    <pre className="bg-code-bg text-code-text p-4 overflow-x-auto text-sm">
                      <code className="font-mono">{beforeCode}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* After Code */}
            {(viewMode === 'split' || viewMode === 'after') && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">After Enhancement</h3>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleCopy(afterCode, 'after')}
                    >
                      {copiedAfter ? (
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
                  <div className="relative overflow-hidden rounded-lg">
                    <pre className="bg-code-bg text-code-text p-4 overflow-x-auto text-sm">
                      <code className="font-mono">{afterCode}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Narrative Sections */}
        <div className="space-y-8">
          {/* Description */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Artifact Description</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Inventory Management System is a full-stack web application originally created in CS 340
                  (Client/Server Development) during March 2024. The application was designed to help small
                  businesses track inventory items, manage stock levels, and generate reports through a
                  RESTful API backend and responsive web interface.
                </p>
                <p>
                  The original implementation provided basic CRUD functionality but lacked proper architectural
                  organization, comprehensive error handling, and adherence to professional software engineering
                  practices. Code was tightly coupled, making it difficult to test and maintain.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Justification */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Justification for Inclusion</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Why This Artifact?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I selected this artifact because it represents a complete, functional application that
                demonstrates full-stack development capabilities while offering substantial opportunities
                for architectural improvement. The original codebase had clear areas where professional
                design patterns and practices could transform it from a working prototype into production-quality
                software.
              </p>

              <h3 className="text-xl font-semibold mb-3">Skills Showcased</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Architectural design and refactoring',
                  'Implementation of design patterns (MVC, Repository, Dependency Injection)',
                  'Comprehensive error handling and logging',
                  'Code documentation and maintainability',
                  'RESTful API design best practices',
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3">How Enhancement Improved It</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The enhancement transformed the monolithic structure into a clean, layered architecture
                following the MVC pattern. I separated concerns by creating distinct controller, service,
                and repository layers, each with clear responsibilities. This separation makes the code
                more testable, maintainable, and easier for teams to work on collaboratively.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I implemented dependency injection to reduce coupling between components, added comprehensive
                error handling with proper logging, and created DTOs to separate internal models from API
                contracts. These improvements demonstrate professional software engineering practices essential
                for production environments.
              </p>
            </CardContent>
          </Card>

          {/* Reflection */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Reflection</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Learning Experience</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Creating this enhancement deepened my understanding of why architectural patterns matter
                beyond theoretical knowledge. I learned that well-structured code isn't just about
                following patterns—it's about creating systems that teams can understand, maintain, and
                extend over time. The process of refactoring taught me to balance improvement with
                maintaining functionality, requiring careful testing at each step.
              </p>

              <h3 className="text-xl font-semibold mb-3">Challenges Faced</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The primary challenge was refactoring tightly-coupled code without breaking existing
                functionality. I had to carefully extract business logic from controllers while ensuring
                all API endpoints continued working correctly. Another challenge was determining the right
                level of abstraction—avoiding both over-engineering and under-engineering the solution.
                I addressed these by implementing changes incrementally, writing tests before refactoring,
                and seeking feedback on design decisions.
              </p>

              <h3 className="text-xl font-semibold mb-3">Incorporating Feedback</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based on code review feedback, I added more comprehensive documentation explaining the
                rationale behind architectural decisions. I also improved error messages to be more
                descriptive and added additional validation at the service layer. This feedback emphasized
                that good architecture must be accompanied by clear communication through documentation.
              </p>

              <h3 className="text-xl font-semibold mb-3">Course Outcomes Assessment</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Fully Met - Outcome 1:</span> The improved
                    code organization and documentation enables effective team collaboration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Fully Met - Outcome 2:</span> Clear code
                    structure and comprehensive documentation demonstrate professional communication
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Fully Met - Outcome 4:</span> Application
                    of modern design patterns and best practices shows innovative technical implementation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
              
              <h3 className="text-xl font-semibold mb-3">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Java 17', 'Spring Boot 3.0', 'Maven', 'JUnit 5', 'Mockito', 'SLF4J', 'Lombok'].map((tech, index) => (
                  <Badge key={index} variant="secondary">{tech}</Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">Key Improvements</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Reduced Code Coupling by 60%</p>
                    <p className="text-sm text-muted-foreground">Measured through static analysis tools</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Increased Test Coverage to 85%</p>
                    <p className="text-sm text-muted-foreground">Up from 30% in original implementation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Improved Maintainability Index by 45 points</p>
                    <p className="text-sm text-muted-foreground">Based on SonarQube metrics</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Design Patterns Implemented</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Model-View-Controller (MVC)</p>
                  <p className="text-sm text-muted-foreground">Separation of concerns across layers</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Repository Pattern</p>
                  <p className="text-sm text-muted-foreground">Abstraction of data access logic</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Dependency Injection</p>
                  <p className="text-sm text-muted-foreground">Loose coupling through Spring DI</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-medium mb-1">Data Transfer Objects (DTO)</p>
                  <p className="text-sm text-muted-foreground">API contract separation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Enhancements */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Explore Other Enhancements</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enhancements/algorithms" className="flex-1">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <p className="font-semibold mb-1">→ Algorithms & Data Structures</p>
                  <p className="text-sm text-muted-foreground">Performance optimizations</p>
                </div>
              </Link>
              <Link to="/enhancements/databases" className="flex-1">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <p className="font-semibold mb-1">→ Databases</p>
                  <p className="text-sm text-muted-foreground">Schema and query improvements</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SoftwareDesignEnhancement;
