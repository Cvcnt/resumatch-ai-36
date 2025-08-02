import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileText, CheckCircle, AlertCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

interface UploadDropzoneProps {
  onUploadComplete?: (files: any[]) => void;
  maxFiles?: number;
  maxSize?: number; // in bytes
}

export function UploadDropzone({ 
  onUploadComplete, 
  maxFiles = 10, 
  maxSize = 10 * 1024 * 1024 // 10MB
}: UploadDropzoneProps) {
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    // Handle rejected files
    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach((rejection) => {
        const errors = rejection.errors.map((e: any) => e.message).join(', ');
        toast({
          title: `Error uploading ${rejection.file.name}`,
          description: errors,
          variant: "destructive",
        });
      });
    }

    // Process accepted files
    const newUploadFiles: UploadFile[] = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'uploading' as const
    }));

    setUploadFiles(prev => [...prev, ...newUploadFiles]);

    // Simulate upload process for each file
    newUploadFiles.forEach(uploadFile => {
      uploadFileWithProgress(uploadFile);
    });
  }, [toast]);

  const uploadFileWithProgress = async (uploadFile: UploadFile) => {
    try {
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadFiles(prev => prev.map(f => 
          f.id === uploadFile.id 
            ? { ...f, progress: Math.min(f.progress + Math.random() * 30, 90) }
            : f
        ));
      }, 200);

      // TODO: Replace with actual Supabase upload
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
      
      clearInterval(interval);
      
      setUploadFiles(prev => prev.map(f => 
        f.id === uploadFile.id 
          ? { ...f, progress: 100, status: 'success' }
          : f
      ));

      toast({
        title: "Upload successful",
        description: `${uploadFile.file.name} has been uploaded and is being processed.`,
      });

    } catch (error) {
      setUploadFiles(prev => prev.map(f => 
        f.id === uploadFile.id 
          ? { ...f, status: 'error', error: 'Upload failed' }
          : f
      ));

      toast({
        title: "Upload failed",
        description: `Failed to upload ${uploadFile.file.name}. Please try again.`,
        variant: "destructive",
      });
    }
  };

  const removeFile = (id: string) => {
    setUploadFiles(prev => prev.filter(f => f.id !== id));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    maxFiles,
    maxSize,
    multiple: true
  });

  return (
    <div className="space-y-6">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 shadow-card hover:shadow-hover",
          isDragActive 
            ? "border-primary bg-primary/5 scale-[1.02]" 
            : "border-border hover:border-primary/50 hover:bg-primary/2"
        )}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-poppins font-semibold">
              {isDragActive ? "Drop your resumes here" : "Upload Resumes"}
            </h3>
            <p className="text-sm text-muted-foreground font-inter">
              Drag and drop PDF, DOC, DOCX, or TXT files here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground font-inter">
              Maximum {maxFiles} files, up to {Math.round(maxSize / 1024 / 1024)}MB each
            </p>
          </div>
          <Button variant="outline" className="mt-4">
            Browse Files
          </Button>
        </div>
      </div>

      {/* Upload Progress */}
      {uploadFiles.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-poppins font-semibold">Upload Progress</h4>
          <div className="space-y-3">
            {uploadFiles.map((uploadFile) => (
              <div key={uploadFile.id} className="bg-card rounded-lg p-4 shadow-card border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium font-inter text-sm">{uploadFile.file.name}</span>
                    <span className="text-xs text-muted-foreground font-inter">
                      ({(uploadFile.file.size / 1024 / 1024).toFixed(1)} MB)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {uploadFile.status === 'success' && (
                      <CheckCircle className="w-5 h-5 text-perfect" />
                    )}
                    {uploadFile.status === 'error' && (
                      <AlertCircle className="w-5 h-5 text-weak" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(uploadFile.id)}
                      className="h-6 w-6 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {uploadFile.status === 'uploading' && (
                  <div className="space-y-1">
                    <Progress value={uploadFile.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground font-inter">
                      Uploading... {Math.round(uploadFile.progress)}%
                    </p>
                  </div>
                )}

                {uploadFile.status === 'success' && (
                  <p className="text-xs text-perfect font-inter">
                    Upload complete! Resume is being analyzed...
                  </p>
                )}

                {uploadFile.status === 'error' && (
                  <p className="text-xs text-weak font-inter">
                    {uploadFile.error || 'Upload failed'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}