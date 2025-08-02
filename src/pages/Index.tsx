import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-dashboard.jpg';
import { 
  Zap, 
  Target, 
  Shield, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  FileText,
  TrendingUp,
  Users,
  Sparkles
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-poppins font-bold">
                R
              </div>
              <h1 className="text-xl font-poppins font-bold text-foreground">
                ResuMatch
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="premium" asChild>
                <Link to="/upload">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="font-inter">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Resume Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-foreground leading-tight">
              Smart Resume Matching 
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-3xl mx-auto">
              Upload resumes, get instant AI analysis with Google Gemini, and discover perfect candidates with precision scoring from 0-100.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="premium" asChild className="text-lg px-8 py-6">
              <Link to="/upload">
                Start Analyzing Resumes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-16 mb-12">
            <div className="relative max-w-5xl mx-auto">
              <img 
                src={heroImage} 
                alt="ResuMatch Dashboard Preview" 
                className="w-full h-auto rounded-2xl shadow-hover border border-border/50"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins text-perfect">98.7%</div>
              <div className="text-sm text-muted-foreground font-inter">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins text-primary">45s</div>
              <div className="text-sm text-muted-foreground font-inter">Avg Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins text-accent">10MB</div>
              <div className="text-sm text-muted-foreground font-inter">Max File Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-poppins text-strong">24/7</div>
              <div className="text-sm text-muted-foreground font-inter">AI Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Everything you need to streamline your recruitment process with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-poppins">AI-Powered Analysis</CardTitle>
                <CardDescription className="font-inter">
                  Google Gemini analyzes resumes for skills, experience, and job fit with advanced natural language processing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-poppins">Precision Scoring</CardTitle>
                <CardDescription className="font-inter">
                  Get detailed 0-100% scores with Perfect, Strong, Partial, or Weak match classifications for every resume
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-perfect/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-perfect" />
                </div>
                <CardTitle className="font-poppins">Instant Processing</CardTitle>
                <CardDescription className="font-inter">
                  Upload and analyze resumes in seconds with real-time progress tracking and immediate results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-strong/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-strong" />
                </div>
                <CardTitle className="font-poppins">Secure & Private</CardTitle>
                <CardDescription className="font-inter">
                  Enterprise-grade security with encrypted storage and GDPR compliance for all candidate data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-partial/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-partial" />
                </div>
                <CardTitle className="font-poppins">Smart Analytics</CardTitle>
                <CardDescription className="font-inter">
                  Track performance metrics, skill trends, and hiring insights with comprehensive dashboards
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-weak/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-weak" />
                </div>
                <CardTitle className="font-poppins">Team Collaboration</CardTitle>
                <CardDescription className="font-inter">
                  Share results, add notes, and collaborate with your team on candidate evaluations and decisions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Three simple steps to revolutionize your resume screening process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-2xl font-poppins font-bold">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-poppins font-semibold">Upload Resumes</h3>
                <p className="text-muted-foreground font-inter">
                  Drag and drop multiple PDF, DOC, or DOCX files. Support for bulk uploads up to 10MB each.
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto text-2xl font-poppins font-bold">
                2
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-poppins font-semibold">AI Analysis</h3>
                <p className="text-muted-foreground font-inter">
                  Google Gemini extracts skills, experience, and education, then matches against your job requirements.
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-perfect text-perfect-foreground flex items-center justify-center mx-auto text-2xl font-poppins font-bold">
                3
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-poppins font-semibold">Get Results</h3>
                <p className="text-muted-foreground font-inter">
                  Receive detailed scores, match types, and actionable feedback to make informed hiring decisions.
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-perfect/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-perfect" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary-foreground">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-primary-foreground/90 font-inter">
              Start analyzing resumes with AI-powered precision today. No setup required.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="accent" asChild className="text-lg px-8 py-6">
              <Link to="/upload">
                Upload Your First Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/dashboard">Explore Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-poppins font-bold">
                R
              </div>
              <span className="text-lg font-poppins font-bold text-foreground">ResuMatch</span>
            </div>
            <div className="text-sm text-muted-foreground font-inter">
              © 2024 ResuMatch. AI-powered resume analysis platform.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
