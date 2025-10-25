import React from 'react'

const outcomes = [
  'Apply software engineering principles to design modular systems',
  'Select and justify appropriate algorithms and data structures',
  'Design normalized database schemas and optimize queries',
  'Demonstrate professional-level testing and documentation',
  'Integrate secure and maintainable code in full-stack applications',
]

const OutcomesList: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Course Outcomes</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {outcomes.map((o, i) => (
            <li key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-background">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm text-muted-foreground">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OutcomesList
