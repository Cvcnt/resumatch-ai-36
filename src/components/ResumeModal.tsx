import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScoreBadge } from "@/components/ScoreBadge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Mail, Phone, Calendar, Eye, Download } from "lucide-react";

interface Resume {
  id: string;
  candidate_name: string;
  candidate_email?: string;
  candidate_phone?: string;
  file_name: string;
  file_url: string;
  match_percentage?: number;
  match_type?: 'perfect' | 'strong' | 'partial' | 'weak';
  skills?: string[];
  experience_years?: number;
  education?: string;
  ai_analysis?: {
    feedback?: string;
    strengths?: string[];
    weaknesses?: string[];
  };
  created_at: string;
}

interface ResumeModalProps {
  resume: Resume | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ resume, isOpen, onClose }: ResumeModalProps) {
  if (!resume) return null;

  const handleViewFile = () => {
    window.open(resume.file_url, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.file_url;
    link.download = resume.file_name;
    link.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto shadow-hover">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-poppins text-foreground">
                {resume.candidate_name}
              </DialogTitle>
              <DialogDescription className="text-base font-inter">
                Resume Analysis & Details
              </DialogDescription>
            </div>
            {resume.match_percentage && resume.match_type && (
              <ScoreBadge 
                score={resume.match_percentage} 
                matchType={resume.match_type}
                className="flex-shrink-0"
              />
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resume.candidate_email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a 
                  href={`mailto:${resume.candidate_email}`}
                  className="text-primary hover:underline font-inter"
                >
                  {resume.candidate_email}
                </a>
              </div>
            )}
            {resume.candidate_phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="font-inter">{resume.candidate_phone}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="font-inter">
                Uploaded {new Date(resume.created_at).toLocaleDateString()}
              </span>
            </div>
            {resume.experience_years && (
              <div className="flex items-center gap-2 text-sm">
                <span className="font-inter">
                  {resume.experience_years} years of experience
                </span>
              </div>
            )}
          </div>

          <Separator />

          {/* Skills */}
          {resume.skills && resume.skills.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-poppins font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="font-inter">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {resume.education && (
            <div className="space-y-3">
              <h3 className="text-lg font-poppins font-semibold">Education</h3>
              <p className="text-sm font-inter text-muted-foreground">{resume.education}</p>
            </div>
          )}

          {/* AI Analysis */}
          {resume.ai_analysis && (
            <div className="space-y-4">
              <h3 className="text-lg font-poppins font-semibold">AI Analysis</h3>
              
              {resume.ai_analysis.feedback && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium font-inter">Overall Feedback</h4>
                  <p className="text-sm font-inter text-muted-foreground bg-muted/50 p-4 rounded-lg">
                    {resume.ai_analysis.feedback}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resume.ai_analysis.strengths && resume.ai_analysis.strengths.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium font-inter text-perfect">Strengths</h4>
                    <ul className="space-y-1">
                      {resume.ai_analysis.strengths.map((strength, index) => (
                        <li key={index} className="text-sm font-inter text-muted-foreground flex items-start gap-2">
                          <span className="text-perfect mt-1">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {resume.ai_analysis.weaknesses && resume.ai_analysis.weaknesses.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium font-inter text-weak">Areas for Improvement</h4>
                    <ul className="space-y-1">
                      {resume.ai_analysis.weaknesses.map((weakness, index) => (
                        <li key={index} className="text-sm font-inter text-muted-foreground flex items-start gap-2">
                          <span className="text-weak mt-1">•</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          <Separator />

          {/* File Actions */}
          <div className="flex items-center gap-3">
            <Button onClick={handleViewFile} variant="default" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View Resume
            </Button>
            <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
              <FileText className="w-4 h-4" />
              <span className="font-inter">{resume.file_name}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}