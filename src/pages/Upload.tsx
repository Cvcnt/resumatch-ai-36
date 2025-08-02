import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadDropzone } from '@/components/UploadDropzone';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function Upload() {
  const handleUploadComplete = (files: any[]) => {
    console.log('Upload completed:', files);
    // TODO: Handle successful upload and redirect to dashboard
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-poppins font-bold text-foreground">
          Upload Resumes
        </h1>
        <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
          Upload candidate resumes to get instant AI-powered analysis and matching scores. 
          Our system evaluates skills, experience, and overall fit for your positions.
        </p>
      </div>

      {/* Process Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            How It Works
          </CardTitle>
          <CardDescription className="font-inter">
            Our AI-powered resume analysis process in three simple steps
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold">1. Upload</h3>
              <p className="text-sm text-muted-foreground font-inter">
                Drag and drop or browse to upload PDF, DOC, or DOCX resume files
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold">2. Analyze</h3>
              <p className="text-sm text-muted-foreground font-inter">
                Google Gemini AI extracts skills, experience, and matches against job requirements
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-perfect/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-perfect" />
              </div>
              <h3 className="font-poppins font-semibold">3. Score</h3>
              <p className="text-sm text-muted-foreground font-inter">
                Get detailed scores (0-100) with match types and actionable feedback
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Area */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins">Upload Resumes</CardTitle>
          <CardDescription className="font-inter">
            Select multiple resume files to analyze at once
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UploadDropzone 
            onUploadComplete={handleUploadComplete}
            maxFiles={10}
            maxSize={10 * 1024 * 1024} // 10MB
          />
        </CardContent>
      </Card>

      {/* Supported Formats & Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-poppins text-lg">Supported Formats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-inter">PDF</Badge>
              <span className="text-sm text-muted-foreground font-inter">Portable Document Format</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-inter">DOC</Badge>
              <span className="text-sm text-muted-foreground font-inter">Microsoft Word Document</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-inter">DOCX</Badge>
              <span className="text-sm text-muted-foreground font-inter">Microsoft Word (Modern)</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-inter">TXT</Badge>
              <span className="text-sm text-muted-foreground font-inter">Plain Text</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-poppins text-lg">AI Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-inter">Skills extraction & matching</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-inter">Experience level analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-perfect" />
              <span className="text-sm font-inter">Job requirement matching</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-strong" />
              <span className="text-sm font-inter">Detailed feedback & insights</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Notes */}
      <Alert className="shadow-card border-accent/20 bg-accent/5">
        <AlertTriangle className="h-4 w-4 text-accent" />
        <AlertDescription className="font-inter">
          <strong>Privacy Notice:</strong> All uploaded resumes are processed securely and stored with encryption. 
          Personal information is handled according to our privacy policy and GDPR compliance standards.
        </AlertDescription>
      </Alert>

      <Alert className="shadow-card border-primary/20 bg-primary/5">
        <CheckCircle className="h-4 w-4 text-primary" />
        <AlertDescription className="font-inter">
          <strong>Processing Time:</strong> Most resumes are analyzed within 30-60 seconds. 
          You'll see real-time progress updates and can continue working while files process in the background.
        </AlertDescription>
      </Alert>
    </div>
  );
}