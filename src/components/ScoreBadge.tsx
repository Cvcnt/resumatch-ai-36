import { cn } from "@/lib/utils";

interface ScoreBadgeProps {
  score: number;
  matchType: 'perfect' | 'strong' | 'partial' | 'weak';
  className?: string;
}

const getMatchTypeInfo = (matchType: string) => {
  switch (matchType) {
    case 'perfect':
      return {
        label: 'Perfect Match',
        bgClass: 'bg-perfect/10 text-perfect border-perfect/20',
        iconClass: 'text-perfect'
      };
    case 'strong':
      return {
        label: 'Strong Match', 
        bgClass: 'bg-strong/10 text-strong border-strong/20',
        iconClass: 'text-strong'
      };
    case 'partial':
      return {
        label: 'Partial Match',
        bgClass: 'bg-partial/10 text-partial border-partial/20', 
        iconClass: 'text-partial'
      };
    case 'weak':
      return {
        label: 'Weak Match',
        bgClass: 'bg-weak/10 text-weak border-weak/20',
        iconClass: 'text-weak'
      };
    default:
      return {
        label: 'Unknown',
        bgClass: 'bg-muted text-muted-foreground border-border',
        iconClass: 'text-muted-foreground'
      };
  }
};

export function ScoreBadge({ score, matchType, className }: ScoreBadgeProps) {
  const { label, bgClass, iconClass } = getMatchTypeInfo(matchType);

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-medium text-sm font-inter transition-all duration-300 hover:scale-105",
      bgClass,
      className
    )}>
      <div className={cn("w-2 h-2 rounded-full", iconClass.replace('text-', 'bg-'))} />
      <span className="font-semibold">{score}%</span>
      <span className="text-xs opacity-80">{label}</span>
    </div>
  );
}