import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface MatchFilterProps {
  value: string;
  onValueChange: (value: string) => void;
  counts?: {
    all: number;
    perfect: number;
    strong: number;
    partial: number;
    weak: number;
  };
}

export function MatchFilter({ value, onValueChange, counts }: MatchFilterProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium font-inter text-foreground">
        Filter by Match Type:
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[200px] font-inter shadow-card hover:shadow-hover transition-all duration-300">
          <SelectValue placeholder="All matches" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="font-inter">
            <div className="flex items-center justify-between w-full">
              <span>All Matches</span>
              {counts && <Badge variant="secondary" className="ml-2">{counts.all}</Badge>}
            </div>
          </SelectItem>
          <SelectItem value="perfect" className="font-inter">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-perfect" />
                <span>Perfect</span>
              </div>
              {counts && <Badge variant="secondary" className="ml-2">{counts.perfect}</Badge>}
            </div>
          </SelectItem>
          <SelectItem value="strong" className="font-inter">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-strong" />
                <span>Strong</span>
              </div>
              {counts && <Badge variant="secondary" className="ml-2">{counts.strong}</Badge>}
            </div>
          </SelectItem>
          <SelectItem value="partial" className="font-inter">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-partial" />
                <span>Partial</span>
              </div>
              {counts && <Badge variant="secondary" className="ml-2">{counts.partial}</Badge>}
            </div>
          </SelectItem>
          <SelectItem value="weak" className="font-inter">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-weak" />
                <span>Weak</span>
              </div>
              {counts && <Badge variant="secondary" className="ml-2">{counts.weak}</Badge>}
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}