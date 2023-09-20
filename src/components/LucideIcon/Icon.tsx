import { icons, LucideProps } from 'lucide-react';


export const Icon = ({ name, color, size }: LucideProps) => {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} />
};