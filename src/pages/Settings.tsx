import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  Building, 
  Key, 
  Bell, 
  Database, 
  Save,
  TestTube,
  Shield,
  Zap
} from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    // Profile
    fullName: 'John Recruiter',
    email: 'john.recruiter@company.com',
    company: 'TechCorp Inc.',
    department: 'Human Resources',
    
    // Job Requirements
    jobTitle: 'Full Stack Developer',
    requiredSkills: 'React, TypeScript, Node.js, AWS, PostgreSQL',
    jobDescription: 'We are looking for an experienced full-stack developer to join our growing team. The ideal candidate will have 3+ years of experience with modern web technologies and a passion for building scalable applications.',
    
    // AI Settings
    geminiApiKey: '',
    enableFallback: true,
    
    // Notifications
    emailNotifications: true,
    instantAnalysis: true,
    weeklyReports: false,
    
    // Scoring Thresholds
    perfectThreshold: 85,
    strongThreshold: 70,
    partialThreshold: 50
  });

  const { toast } = useToast();

  const handleSave = () => {
    // TODO: Save settings to Supabase
    toast({
      title: "Settings saved",
      description: "Your configuration has been updated successfully.",
    });
  };

  const handleTestConnection = () => {
    // TODO: Test Gemini API connection
    toast({
      title: "Testing connection...",
      description: "Verifying your Gemini API key configuration.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Information
          </CardTitle>
          <CardDescription className="font-inter">
            Update your personal and company information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="font-inter">Full Name</Label>
              <Input
                id="fullName"
                value={settings.fullName}
                onChange={(e) => setSettings(prev => ({ ...prev, fullName: e.target.value }))}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-inter">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="font-inter">Company</Label>
              <Input
                id="company"
                value={settings.company}
                onChange={(e) => setSettings(prev => ({ ...prev, company: e.target.value }))}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department" className="font-inter">Department</Label>
              <Input
                id="department"
                value={settings.department}
                onChange={(e) => setSettings(prev => ({ ...prev, department: e.target.value }))}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Requirements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <Building className="w-5 h-5" />
            Job Requirements
          </CardTitle>
          <CardDescription className="font-inter">
            Configure the position requirements for resume matching
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="font-inter">Job Title</Label>
            <Input
              id="jobTitle"
              value={settings.jobTitle}
              onChange={(e) => setSettings(prev => ({ ...prev, jobTitle: e.target.value }))}
              className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="requiredSkills" className="font-inter">Required Skills (comma-separated)</Label>
            <Input
              id="requiredSkills"
              value={settings.requiredSkills}
              onChange={(e) => setSettings(prev => ({ ...prev, requiredSkills: e.target.value }))}
              placeholder="React, TypeScript, Node.js..."
              className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jobDescription" className="font-inter">Job Description</Label>
            <Textarea
              id="jobDescription"
              value={settings.jobDescription}
              onChange={(e) => setSettings(prev => ({ ...prev, jobDescription: e.target.value }))}
              rows={4}
              className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
            />
          </div>
        </CardContent>
      </Card>

      {/* AI Configuration */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <Key className="w-5 h-5" />
            AI Configuration
          </CardTitle>
          <CardDescription className="font-inter">
            Configure your Google Gemini API and analysis settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="geminiApiKey" className="font-inter">Google Gemini API Key</Label>
            <div className="flex gap-2">
              <Input
                id="geminiApiKey"
                type="password"
                value={settings.geminiApiKey}
                onChange={(e) => setSettings(prev => ({ ...prev, geminiApiKey: e.target.value }))}
                placeholder="Enter your Gemini API key..."
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
              <Button onClick={handleTestConnection} variant="outline">
                <TestTube className="w-4 h-4 mr-2" />
                Test
              </Button>
            </div>
            <p className="text-xs text-muted-foreground font-inter">
              Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AI Studio</a>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="font-inter">Enable pgVector Fallback</Label>
              <p className="text-sm text-muted-foreground font-inter">
                Use local embeddings when Gemini API is unavailable
              </p>
            </div>
            <Switch
              checked={settings.enableFallback}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, enableFallback: checked }))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Scoring Thresholds */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Scoring Thresholds
          </CardTitle>
          <CardDescription className="font-inter">
            Configure the score ranges for different match types
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="font-inter flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-perfect"></div>
                Perfect Match (%)
              </Label>
              <Input
                type="number"
                value={settings.perfectThreshold}
                onChange={(e) => setSettings(prev => ({ ...prev, perfectThreshold: parseInt(e.target.value) }))}
                min={0}
                max={100}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-inter flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-strong"></div>
                Strong Match (%)
              </Label>
              <Input
                type="number"
                value={settings.strongThreshold}
                onChange={(e) => setSettings(prev => ({ ...prev, strongThreshold: parseInt(e.target.value) }))}
                min={0}
                max={100}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <Label className="font-inter flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-partial"></div>
                Partial Match (%)
              </Label>
              <Input
                type="number"
                value={settings.partialThreshold}
                onChange={(e) => setSettings(prev => ({ ...prev, partialThreshold: parseInt(e.target.value) }))}
                min={0}
                max={100}
                className="font-inter shadow-card hover:shadow-hover transition-all duration-300"
              />
            </div>
          </div>
          <div className="text-sm text-muted-foreground font-inter">
            Scores below {settings.partialThreshold}% are classified as <Badge variant="outline" className="bg-weak/10 text-weak border-weak/20">Weak Match</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="font-poppins flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
          <CardDescription className="font-inter">
            Manage your notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="font-inter">Email Notifications</Label>
              <p className="text-sm text-muted-foreground font-inter">
                Receive email updates about new resume analyses
              </p>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, emailNotifications: checked }))}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="font-inter">Instant Analysis</Label>
              <p className="text-sm text-muted-foreground font-inter">
                Start AI analysis immediately after upload
              </p>
            </div>
            <Switch
              checked={settings.instantAnalysis}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, instantAnalysis: checked }))}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="font-inter">Weekly Reports</Label>
              <p className="text-sm text-muted-foreground font-inter">
                Receive weekly analytics and insights
              </p>
            </div>
            <Switch
              checked={settings.weeklyReports}
              onCheckedChange={(checked) => setSettings(prev => ({ ...prev, weeklyReports: checked }))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="font-inter">
          <Save className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}