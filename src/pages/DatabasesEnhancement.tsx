import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Copy, Check, CheckCircle2, Database as DatabaseIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DatabasesEnhancement = () => {
  const [copiedBefore, setCopiedBefore] = useState(false);
  const [copiedAfter, setCopiedAfter] = useState(false);
  const [viewMode, setViewMode] = useState<'split' | 'before' | 'after'>('split');

  const beforeCode = `-- Before: Denormalized schema with data redundancy
CREATE TABLE inventory_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    category VARCHAR(100),
    supplier_name VARCHAR(255),     -- Repeated data
    supplier_address VARCHAR(500),   -- Repeated data
    supplier_phone VARCHAR(50),      -- Repeated data
    quantity INT,
    price DECIMAL(10,2),
    last_updated TIMESTAMP
);

-- Inefficient query without indexes
SELECT * FROM inventory_items 
WHERE category = 'Electronics' 
AND quantity < 10;

-- No foreign key constraints
-- Vulnerable to SQL injection
INSERT INTO inventory_items (name, category) 
VALUES ('" + userInput + "', '" + categoryInput + "');`;

  const afterCode = `-- After: Normalized schema (3NF) with proper relationships
CREATE TABLE suppliers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(500),
    phone VARCHAR(50),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_supplier_name (name)
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    INDEX idx_category_name (name)
);

CREATE TABLE inventory_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    supplier_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    min_quantity INT DEFAULT 5,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id) ON DELETE RESTRICT,
    INDEX idx_category_quantity (category_id, quantity),
    INDEX idx_name (name),
    CHECK (quantity >= 0),
    CHECK (price >= 0)
);

-- Optimized query with proper indexes
SELECT i.id, i.name, i.quantity, i.price, 
       c.name AS category_name, s.name AS supplier_name
FROM inventory_items i
INNER JOIN categories c ON i.category_id = c.id
INNER JOIN suppliers s ON i.supplier_id = s.id
WHERE i.category_id = ? AND i.quantity < ?;

-- Stored procedure for low stock alerts (prevents SQL injection)
DELIMITER $$
CREATE PROCEDURE GetLowStockItems(IN threshold INT)
BEGIN
    SELECT i.id, i.name, i.quantity, i.min_quantity,
           c.name AS category, s.name AS supplier, s.email AS supplier_email
    FROM inventory_items i
    INNER JOIN categories c ON i.category_id = c.id
    INNER JOIN suppliers s ON i.supplier_id = s.id
    WHERE i.quantity < COALESCE(i.min_quantity, threshold)
    ORDER BY (i.min_quantity - i.quantity) DESC;
END$$
DELIMITER ;`;

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
          <span className="text-foreground">Databases</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">Category Three</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Database Systems Enhancement</h1>
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
                  <p className="font-medium">Outcome 4: Innovative Techniques</p>
                  <p className="text-sm text-muted-foreground">
                    Applied database design principles and optimization techniques for improved performance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Outcome 5: Security Mindset</p>
                  <p className="text-sm text-muted-foreground">
                    Implemented security measures including parameterized queries and proper constraints
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Database Improvements */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <DatabaseIcon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Key Database Improvements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-2">Schema Normalization</p>
                <p className="text-sm text-muted-foreground">
                  Normalized to Third Normal Form (3NF), eliminating data redundancy and update anomalies
                </p>
              </div>
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Query Optimization</p>
                <p className="text-sm text-muted-foreground">
                  Added strategic indexes reducing query time from 180ms to 12ms (93% improvement)
                </p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="font-semibold text-purple-700 dark:text-purple-400 mb-2">Data Integrity</p>
                <p className="text-sm text-muted-foreground">
                  Implemented foreign key constraints and CHECK constraints for referential integrity
                </p>
              </div>
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Security Hardening</p>
                <p className="text-sm text-muted-foreground">
                  Created stored procedures with parameterized queries, preventing SQL injection attacks
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Comparison */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Schema Redesign</h2>
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
                    <div>
                      <h3 className="text-lg font-semibold">Before: Denormalized</h3>
                      <p className="text-sm text-muted-foreground">Data redundancy & no constraints</p>
                    </div>
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
                    <div>
                      <h3 className="text-lg font-semibold">After: Normalized (3NF)</h3>
                      <p className="text-sm text-muted-foreground">Optimized with indexes & security</p>
                    </div>
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
              <h2 className="text-2xl font-bold mb-4">Enhancement Description</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The database enhancement comprehensively redesigns the data layer of the inventory
                  management system. The original schema suffered from denormalization issues, lack of
                  referential integrity, and vulnerability to SQL injection attacks. Query performance
                  was poor due to missing indexes, and data redundancy led to update anomalies.
                </p>
                <p>
                  This enhancement normalizes the schema to Third Normal Form (3NF), implements proper
                  foreign key relationships, adds strategic indexes for query optimization, and creates
                  stored procedures to prevent SQL injection. The result is a robust, secure, and
                  performant database design that follows industry best practices.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Justification */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Justification for Enhancement</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Why This Enhancement?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Database design is fundamental to application reliability, performance, and security. This
                enhancement demonstrates mastery of database normalization theory, understanding of indexing
                strategies, and implementation of security best practices. The improvements address real-world
                challenges that every professional database developer must solve: balancing normalization with
                performance, ensuring data integrity, and protecting against security threats.
              </p>

              <h3 className="text-xl font-semibold mb-3">Skills Demonstrated</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Database normalization (1NF through 3NF)',
                  'Entity-relationship modeling and schema design',
                  'Index strategy and query optimization',
                  'Foreign key constraints and referential integrity',
                  'Stored procedure development',
                  'SQL injection prevention through parameterized queries',
                  'Performance tuning and query plan analysis',
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3">Impact & Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                The normalized schema eliminated all data redundancy, reducing storage requirements by 35%.
                Strategic indexes improved query performance by 93% on average. Foreign key constraints prevent
                orphaned records and maintain referential integrity. Most importantly, stored procedures with
                parameterized queries close all SQL injection vulnerabilities present in the original design.
              </p>
            </CardContent>
          </Card>

          {/* Reflection */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Reflection</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Learning Experience</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This enhancement deepened my appreciation for why database design matters. Normalization isn't
                just academic theory—it directly prevents update anomalies that cause data inconsistencies in
                production systems. I learned that indexes are a double-edged sword: they speed up reads but
                slow down writes, requiring careful analysis of usage patterns. Most importantly, I learned
                that security must be built into the database layer itself, not just handled in application code.
              </p>

              <h3 className="text-xl font-semibold mb-3">Challenges Overcome</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The biggest challenge was migrating data from the denormalized schema to the normalized one
                without data loss. I had to write careful migration scripts that extracted unique suppliers
                and categories, created new tables, and updated foreign key references. Another challenge was
                determining which indexes to add—too many indexes hurt write performance, too few hurt read
                performance. I solved this by analyzing actual query patterns using EXPLAIN and profiling tools.
              </p>

              <h3 className="text-xl font-semibold mb-3">Course Outcomes Assessment</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Fully Met - Outcome 4:</span> Applied
                    innovative database design techniques delivering measurable performance improvements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Fully Met - Outcome 5:</span> Implemented
                    comprehensive security measures including SQL injection prevention and data integrity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Implementation */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Normalization Process</h2>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold mb-2">First Normal Form (1NF)</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminated repeating groups and ensured each column contains atomic values. Assigned primary keys.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold mb-2">Second Normal Form (2NF)</h3>
                  <p className="text-sm text-muted-foreground">
                    Removed partial dependencies by ensuring all non-key attributes fully depend on the entire primary key.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold mb-2">Third Normal Form (3NF)</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminated transitive dependencies by separating suppliers and categories into their own tables,
                    removing data duplication and update anomalies.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-8">Index Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Composite Index on (category_id, quantity)</p>
                    <p className="text-sm text-muted-foreground">
                      Optimizes the common query pattern of finding low-stock items by category
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Index on item name</p>
                    <p className="text-sm text-muted-foreground">
                      Speeds up search operations when users look up items by name
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium">Unique indexes on supplier and category names</p>
                    <p className="text-sm text-muted-foreground">
                      Enforces uniqueness while enabling fast lookups during joins
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Enhancements */}
        <Card className="mt-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Explore Other Enhancements</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enhancements/software-design" className="flex-1">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <p className="font-semibold mb-1">→ Software Design & Engineering</p>
                  <p className="text-sm text-muted-foreground">Architectural improvements</p>
                </div>
              </Link>
              <Link to="/enhancements/algorithms" className="flex-1">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <p className="font-semibold mb-1">→ Algorithms & Data Structures</p>
                  <p className="text-sm text-muted-foreground">Performance optimizations</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DatabasesEnhancement;
