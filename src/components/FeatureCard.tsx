import React from 'react'
import { Card, CardContent } from './ui/card'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  icon: React.ComponentType<any>
  title: string
  description: string
  imageUrl?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, imageUrl }) => {
  return (
    <Card className={cn('overflow-hidden')}>
      {imageUrl && (
        <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
      )}
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-md bg-primary/10 p-3 text-primary">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
