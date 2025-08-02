import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScoreBadge } from '@/components/ScoreBadge';
import { MatchFilter } from '@/components/MatchFilter';
import { ResumeModal } from '@/components/ResumeModal';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  Filter, 
  FileText, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock,
  Eye,
  MoreHorizontal
} from 'lucide-react';

// Mock data - replace with real Supabase data
const mockResumes = [
  {
    id: '1',
    candidate_name: 'Sarah Johnson',
    candidate_email: 'sarah.johnson@email.com',
    candidate_phone: '+1 (555) 123-4567',
    file_name: 'sarah_johnson_resume.pdf',
    file_url: '#',
    match_percentage: 95,
    match_type: 'perfect' as const,
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL'],
    experience_years: 5,
    education: 'Bachelor of Computer Science, MIT',
    ai_analysis: {
      feedback: 'Excellent candidate with strong technical skills and relevant experience. Perfect match for the full-stack developer position.',
      strengths: ['5+ years React experience', 'Strong TypeScript skills', 'AWS certification', 'Previous startup experience'],
      weaknesses: ['Limited mobile development experience', 'No DevOps background']
    },
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    candidate_name: 'Michael Chen',
    candidate_email: 'michael.chen@email.com',
    file_name: 'michael_chen_cv.pdf',
    file_url: '#',
    match_percentage: 82,
    match_type: 'strong' as const,
    skills: ['JavaScript', 'React', 'Python', 'Docker'],
    experience_years: 3,
    education: 'Master of Software Engineering, Stanford',
    ai_analysis: {
      feedback: 'Strong candidate with good technical foundation. Some gaps in required technologies but shows potential for growth.',
      strengths: ['Strong programming fundamentals', 'Quick learner', 'Good communication skills'],
      weaknesses: ['Limited TypeScript experience', 'No cloud platform experience']
    },
    created_at: '2024-01-14T14:20:00Z'
  },
  {
    id: '3',
    candidate_name: 'Emily Rodriguez',
    candidate_email: 'emily.rodriguez@email.com',
    file_name: 'emily_rodriguez_resume.docx',
    file_url: '#',
    match_percentage: 67,
    match_type: 'partial' as const,
    skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    experience_years: 2,
    education: 'Associate Degree in Web Development',
    ai_analysis: {
      feedback: 'Junior developer with basic skills. Would need significant training and mentoring.',
      strengths: ['Eager to learn', 'Good design sense', 'Portfolio projects'],
      weaknesses: ['Limited React experience', 'No backend experience', 'Junior level skills']
    },
    created_at: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    candidate_name: 'David Kim',
    candidate_email: 'david.kim@email.com',
    file_name: 'david_kim_cv.pdf',
    file_url: '#',
    match_percentage: 45,
    match_type: 'weak' as const,
    skills: ['Java', 'Spring', 'MySQL'],
    experience_years: 4,
    education: 'Bachelor of Information Systems',
    ai_analysis: {
      feedback: 'Experienced in different technology stack. Would require significant retraining for this role.',
      strengths: ['Strong Java background', 'Database expertise', 'Team leadership experience'],
      weaknesses: ['No JavaScript experience', 'No front-end skills', 'Different tech stack']
    },
    created_at: '2024-01-12T16:45:00Z'
  }
];

export default function Dashboard() {
  const [resumes, setResumes] = useState(mockResumes);
  const [filteredResumes, setFilteredResumes] = useState(mockResumes);
  const [selectedResume, setSelectedResume] = useState<typeof mockResumes[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [matchFilter, setMatchFilter] = useState('all');
  const { toast } = useToast();

  // Filter resumes based on search and match type
  useEffect(() => {
    let filtered = resumes;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(resume =>
        resume.candidate_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.candidate_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resume.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Match type filter
    if (matchFilter !== 'all') {
      filtered = filtered.filter(resume => resume.match_type === matchFilter);
    }

    setFilteredResumes(filtered);
  }, [resumes, searchTerm, matchFilter]);

  // Calculate stats
  const stats = {
    total: resumes.length,
    perfect: resumes.filter(r => r.match_type === 'perfect').length,
    strong: resumes.filter(r => r.match_type === 'strong').length,
    partial: resumes.filter(r => r.match_type === 'partial').length,
    weak: resumes.filter(r => r.match_type === 'weak').length,
    avgScore: Math.round(resumes.reduce((acc, r) => acc + (r.match_percentage || 0), 0) / resumes.length)
  };

  const handleViewResume = (resume: typeof mockResumes[0]) => {
    setSelectedResume(resume);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Total Resumes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins">{stats.total}</div>
            <p className="text-xs text-muted-foreground font-inter">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Perfect Matches</CardTitle>
            <CheckCircle className="h-4 w-4 text-perfect" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins text-perfect">{stats.perfect}</div>
            <p className="text-xs text-muted-foreground font-inter">
              {Math.round((stats.perfect / stats.total) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Avg. Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins">{stats.avgScore}%</div>
            <p className="text-xs text-muted-foreground font-inter">
              +5.2% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-inter">Processing</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-poppins">3</div>
            <p className="text-xs text-muted-foreground font-inter">
              Currently analyzing
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins">Resume Library</CardTitle>
          <CardDescription className="font-inter">
            View and analyze all uploaded resumes with AI-powered matching scores
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 font-inter shadow-card hover:shadow-hover transition-all duration-300"
                />
              </div>
            </div>
            <MatchFilter
              value={matchFilter}
              onValueChange={setMatchFilter}
              counts={{
                all: stats.total,
                perfect: stats.perfect,
                strong: stats.strong,
                partial: stats.partial,
                weak: stats.weak
              }}
            />
          </div>

          {/* Resume Table */}
          <div className="rounded-lg border shadow-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-poppins font-semibold">Candidate</TableHead>
                  <TableHead className="font-poppins font-semibold">Score</TableHead>
                  <TableHead className="font-poppins font-semibold">Skills</TableHead>
                  <TableHead className="font-poppins font-semibold">Experience</TableHead>
                  <TableHead className="font-poppins font-semibold">Uploaded</TableHead>
                  <TableHead className="font-poppins font-semibold w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResumes.map((resume) => (
                  <TableRow 
                    key={resume.id} 
                    className="hover:bg-muted/30 transition-all duration-200 cursor-pointer animate-scale-in"
                    onClick={() => handleViewResume(resume)}
                  >
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium font-inter">{resume.candidate_name}</div>
                        <div className="text-sm text-muted-foreground font-inter">
                          {resume.candidate_email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <ScoreBadge 
                        score={resume.match_percentage} 
                        matchType={resume.match_type}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {resume.skills?.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs font-inter">
                            {skill}
                          </Badge>
                        ))}
                        {resume.skills && resume.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs font-inter">
                            +{resume.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="font-inter">
                      {resume.experience_years} years
                    </TableCell>
                    <TableCell className="font-inter text-sm text-muted-foreground">
                      {new Date(resume.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewResume(resume);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredResumes.length === 0 && (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-poppins font-semibold">No resumes found</h3>
              <p className="text-muted-foreground font-inter">
                Try adjusting your search criteria or upload new resumes.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Resume Detail Modal */}
      <ResumeModal
        resume={selectedResume}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}