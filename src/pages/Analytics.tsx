import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  BarChart3,
  Calendar,
  Award,
  Filter
} from 'lucide-react';

// Mock analytics data
const analyticsData = {
  overview: {
    totalUploads: 156,
    avgProcessingTime: 45, // seconds
    successRate: 98.7,
    topSkills: ['React', 'JavaScript', 'Python', 'Node.js', 'TypeScript']
  },
  matchDistribution: {
    perfect: 23,
    strong: 45,
    partial: 67,
    weak: 21
  },
  weeklyTrend: [
    { week: 'Week 1', uploads: 12, avgScore: 72 },
    { week: 'Week 2', uploads: 18, avgScore: 68 },
    { week: 'Week 3', uploads: 25, avgScore: 74 },
    { week: 'Week 4', uploads: 31, avgScore: 76 }
  ],
  skillsAnalysis: [
    { skill: 'React', frequency: 89, avgScore: 84 },
    { skill: 'JavaScript', frequency: 95, avgScore: 78 },
    { skill: 'Python', frequency: 67, avgScore: 82 },
    { skill: 'Node.js', frequency: 73, avgScore: 79 },
    { skill: 'TypeScript', frequency: 56, avgScore: 86 },
    { skill: 'AWS', frequency: 45, avgScore: 88 },
    { skill: 'Docker', frequency: 34, avgScore: 75 },
    { skill: 'GraphQL', frequency: 28, avgScore: 92 }
  ]
};

export default function Analytics() {
  const totalResumes = Object.values(analyticsData.matchDistribution).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-poppins font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground font-inter">
          Track performance metrics and insights for your resume analysis system
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Total Uploads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins">{analyticsData.overview.totalUploads}</div>
            <p className="text-xs text-muted-foreground font-inter">
              +23% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Avg Processing</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins">{analyticsData.overview.avgProcessingTime}s</div>
            <p className="text-xs text-muted-foreground font-inter">
              -12% faster than before
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-perfect" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins text-perfect">{analyticsData.overview.successRate}%</div>
            <p className="text-xs text-muted-foreground font-inter">
              +0.3% improvement
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Quality Matches</CardTitle>
            <Award className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins text-accent">
              {Math.round(((analyticsData.matchDistribution.perfect + analyticsData.matchDistribution.strong) / totalResumes) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground font-inter">
              Perfect + Strong matches
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Match Distribution */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Match Type Distribution
          </CardTitle>
          <CardDescription className="font-inter">
            Breakdown of resume match quality over time
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold font-poppins text-perfect">
                {analyticsData.matchDistribution.perfect}
              </div>
              <div className="text-sm font-inter text-muted-foreground">Perfect Matches</div>
              <div className="w-full bg-perfect/20 rounded-full h-2">
                <div 
                  className="bg-perfect h-2 rounded-full" 
                  style={{ width: `${(analyticsData.matchDistribution.perfect / totalResumes) * 100}%` }}
                />
              </div>
              <div className="text-xs text-perfect font-inter">
                {Math.round((analyticsData.matchDistribution.perfect / totalResumes) * 100)}%
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-2xl font-bold font-poppins text-strong">
                {analyticsData.matchDistribution.strong}
              </div>
              <div className="text-sm font-inter text-muted-foreground">Strong Matches</div>
              <div className="w-full bg-strong/20 rounded-full h-2">
                <div 
                  className="bg-strong h-2 rounded-full" 
                  style={{ width: `${(analyticsData.matchDistribution.strong / totalResumes) * 100}%` }}
                />
              </div>
              <div className="text-xs text-strong font-inter">
                {Math.round((analyticsData.matchDistribution.strong / totalResumes) * 100)}%
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-2xl font-bold font-poppins text-partial">
                {analyticsData.matchDistribution.partial}
              </div>
              <div className="text-sm font-inter text-muted-foreground">Partial Matches</div>
              <div className="w-full bg-partial/20 rounded-full h-2">
                <div 
                  className="bg-partial h-2 rounded-full" 
                  style={{ width: `${(analyticsData.matchDistribution.partial / totalResumes) * 100}%` }}
                />
              </div>
              <div className="text-xs text-partial font-inter">
                {Math.round((analyticsData.matchDistribution.partial / totalResumes) * 100)}%
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="text-2xl font-bold font-poppins text-weak">
                {analyticsData.matchDistribution.weak}
              </div>
              <div className="text-sm font-inter text-muted-foreground">Weak Matches</div>
              <div className="w-full bg-weak/20 rounded-full h-2">
                <div 
                  className="bg-weak h-2 rounded-full" 
                  style={{ width: `${(analyticsData.matchDistribution.weak / totalResumes) * 100}%` }}
                />
              </div>
              <div className="text-xs text-weak font-inter">
                {Math.round((analyticsData.matchDistribution.weak / totalResumes) * 100)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Analysis */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins">Skills Analysis</CardTitle>
          <CardDescription className="font-inter">
            Most common skills and their average matching scores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.skillsAnalysis.map((skill, index) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="font-inter">
                      #{index + 1}
                    </Badge>
                    <span className="font-medium font-inter">{skill.skill}</span>
                    <span className="text-sm text-muted-foreground font-inter">
                      {skill.frequency}% frequency
                    </span>
                  </div>
                  <div className="text-sm font-semibold font-inter">
                    {skill.avgScore}% avg score
                  </div>
                </div>
                <Progress value={skill.avgScore} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trends */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Weekly Trends
          </CardTitle>
          <CardDescription className="font-inter">
            Upload volume and average scores over the past month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.weeklyTrend.map((week, index) => (
              <div key={week.week} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <div className="space-y-1">
                  <div className="font-medium font-inter">{week.week}</div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {week.uploads} uploads
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-semibold font-inter">{week.avgScore}%</div>
                  <div className="text-sm text-muted-foreground font-inter">avg score</div>
                </div>
                <div className="w-24">
                  <Progress value={week.avgScore} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Skills Summary */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins">Top Skills in Demand</CardTitle>
          <CardDescription className="font-inter">
            Most requested skills across all uploaded resumes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {analyticsData.overview.topSkills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant={index < 2 ? "default" : "secondary"} 
                className="font-inter text-sm py-1 px-3"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}