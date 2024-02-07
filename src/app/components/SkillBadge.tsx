import React from 'react'
import { Badge } from "@/components/ui/badge"


interface SkillBadgeProps {
    skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({skill}) => {
  return (
    <Badge variant="secondary">{skill}</Badge>
  )
}

export default SkillBadge