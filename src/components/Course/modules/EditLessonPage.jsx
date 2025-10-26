import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { X } from 'lucide-react';
import { TextareaInput } from '../../ui/textarea-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

function EditLessonPage({ lesson, onCancel, onSave }) {
  const [formData, setFormData] = React.useState({
    title: lesson?.title || '',
    type: lesson?.type || '',
    duration: lesson?.duration || '',
    status: lesson?.status || '',
    videoFile: null,
    videoUrl: '',
    resourceFiles: null
  });

  const [activeTab, setActiveTab] = React.useState('upload');
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [isResourceDragOver, setIsResourceDragOver] = React.useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleInputChange('videoFile', files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleInputChange('videoFile', file);
    }
  };

  const handleResourceDragOver = (e) => {
    e.preventDefault();
    setIsResourceDragOver(true);
  };

  const handleResourceDragLeave = (e) => {
    e.preventDefault();
    setIsResourceDragOver(false);
  };

  const handleResourceDrop = (e) => {
    e.preventDefault();
    setIsResourceDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleInputChange('resourceFiles', files);
    }
  };

  const handleResourceFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleInputChange('resourceFiles', files);
    }
  };

  const handlePublish = () => {
    console.log('Publish');
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className='container-main pb-4 px-4 sm:px-6 lg:px-8'>
       {/* edit lesson form context container*/}
       <div className='max-w-4xl mx-auto space-y-4 sm:space-y-6'>
        {/* Header with responsive layout */}
         <div className='relative'>
          <Button 
            variant="outline" 
            onClick={onCancel}
            className='flex items-center rounded-full absolute top-0 left-0 sm:left-[-100px] cursor-pointer h-10 w-10 hover:bg-gray-200 z-10'
          >
            <X size={18} />
          </Button>
         </div>
        
         <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-12 sm:mt-0'>
           <h1 className='text-heading-md'>Edit Video Lesson</h1>
           <div className='flex gap-2'>
            <Button 
              onClick={handlePublish}
              className='w-fit cursor-pointer py-3 h-full bg-black text-white'
            >
              Publish
            </Button>
          </div>
         </div>

         {/* Lesson Title */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Lesson Title
           </label>
           <Input
             value={formData.title}
             onChange={(e) => handleInputChange('title', e.target.value)}
             placeholder="Enter lesson title"
             className='py-2 h-full'
           />
         </div>

         {/* Video Upload Tabs */}
         <div className='pt-4'>
           <label className='text-heading-lg mb-3 block'>
             Upload Video File
           </label>
           
           {/* Tab Headers */}
           <div className='flex border-b border-[#dddddd] mb-4'>
             <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-paragraph-md border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'upload' 
                   ? 'border-[#2F80ED] font-bold text-primary ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('upload')}
             >
               <span className='hidden sm:inline'>Upload Video File</span>
               <span className='sm:hidden'>Upload</span>
             </button>
             <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-paragraph-md border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'embed' 
                   ? 'border-[#2F80ED] font-bold text-primary ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('embed')}
             >
               <span className='hidden sm:inline'>Embed Video Link</span>
               <span className='sm:hidden'>Embed</span>
             </button>
           </div>

           {/* Tab Content */}
           {activeTab === 'upload' && (
             <div className='space-y-4'>
               {/* Drag and Drop Area */}
               <div
                 className={`border-2 border-dashed rounded-lg p-4 sm:p-6 lg:p-8 text-center transition-colors ${
                   isDragOver 
                     ? 'border-primary bg-primary/5' 
                     : 'border-gray-300 hover:border-gray-400'
                 }`}
                 onDragOver={handleDragOver}
                 onDragLeave={handleDragLeave}
                 onDrop={handleDrop}
                 style={{ minHeight: '160px' }}
               >
                 <div className='flex flex-col items-center justify-center h-full space-y-3 sm:space-y-4'>
                   <div className='text-gray-500'>
                     <svg className='mx-auto h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12' stroke='currentColor' fill='none' viewBox='0 0 48 48'>
                       <path d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                     </svg>
                   </div>
                   <div className='space-y-2'>
                     <p className='text-sm sm:text-paragraph-md text-gray-600 font-bold px-2'>
                       Drag and drop a video file here  <br/> <span className='text-xs sm:text-paragraph-sm text-gray-400'>or click to browse</span>
                     </p>
                     <Button
                       variant="outline"
                       onClick={() => document.getElementById('video-file-input').click()}
                       className='mt-2 cursor-pointer py-2 sm:py-3 h-full text-sm sm:text-base'
                       style={{ backgroundColor: '#E0E0E0' }}
                     >
                       Upload a Video File
                     </Button>
                   </div>
                   <p className='text-xs sm:text-paragraph-sm text-gray-400 px-2'>
                     Supports MP4, MOV, AVI, and other video formats
                   </p>
                 </div>
                 
                 {/* Hidden file input */}
                 <input
                   id="video-file-input"
                   type="file"
                   accept="video/*"
                   onChange={handleFileSelect}
                   className='hidden'
                 />
               </div>
               
               {/* Selected file info */}
               {formData.videoFile && (
                 <div className='bg-gray-50 rounded-lg p-4'>
                   <p className='text-paragraph-sm text-gray-600'>
                     Selected file: <span className='font-medium'>{formData.videoFile.name}</span>
                   </p>
                   <p className='text-paragraph-xs text-gray-500 mt-1'>
                     Size: {(formData.videoFile.size / (1024 * 1024)).toFixed(2)} MB
                   </p>
                 </div>
               )}
             </div>
           )}

           {activeTab === 'embed' && (
             <div className='space-y-3'>
               <Input
                 value={formData.videoUrl}
                 onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                 placeholder="Paste video URL (YouTube, Vimeo, etc.)"
                 className='py-2 h-full'
               />
               <p className='text-paragraph-sm text-muted'>
                 Paste a link to a video from YouTube, Vimeo, or other platforms
               </p>
             </div>
           )}
         </div>


          {/* Lesson Description */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Lesson Description
           </label>
           <TextareaInput
             placeholder="Enter lesson description"
             className='py-2 h-full'
             rows={4}
             value={formData.description}
             onChange={(e) => handleInputChange('description', e.target.value)}
           />
         </div>

          {/* Lesson Type */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Lesson Type
           </label>
           <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder="Select lesson type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="video">Video</SelectItem>
              <SelectItem value="reading">Reading</SelectItem>
              <SelectItem value="quiz">Quiz</SelectItem>
            </SelectContent>
          </Select>
         </div>

         {/* Related Resources */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Related Resources
           </label>
           
           {/* Drag and Drop Area for Resources */}
           <div
             className={`border-2 border-dashed rounded-lg p-4 sm:p-6 lg:p-8 text-center transition-colors ${
               isResourceDragOver 
                 ? 'border-primary bg-primary/5' 
                 : 'border-gray-300 hover:border-gray-400'
             }`}
             onDragOver={handleResourceDragOver}
             onDragLeave={handleResourceDragLeave}
             onDrop={handleResourceDrop}
             style={{ minHeight: '160px' }}
           >
             <div className='flex flex-col items-center justify-center h-full space-y-3 sm:space-y-4'>
               <div className='text-gray-500'>
                 <svg className='mx-auto h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12' stroke='currentColor' fill='none' viewBox='0 0 48 48'>
                   <path d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                 </svg>
               </div>
               <div className='space-y-2'>
                 <p className='text-sm sm:text-paragraph-md text-gray-600 font-bold px-2'>
                   Drag and drop files here  <br/> <span className='text-xs sm:text-paragraph-sm text-gray-400'>or click to browse</span>
                 </p>
                 <Button
                   variant="outline"
                   onClick={() => document.getElementById('resource-file-input').click()}
                   className='mt-2 cursor-pointer py-2 sm:py-3 h-full text-sm sm:text-base'
                   style={{ backgroundColor: '#E0E0E0' }}
                 >
                   Attach Files
                 </Button>
               </div>
               <p className='text-xs sm:text-paragraph-sm text-gray-400 px-2'>
                 Supports PDF, DOC, PPT, and other document formats
               </p>
             </div>
             
             {/* Hidden file input for resources */}
             <input
               id="resource-file-input"
               type="file"
               multiple
               onChange={handleResourceFileSelect}
               className='hidden'
             />
           </div>
           
           {/* Selected resource files info */}
           {formData.resourceFiles && formData.resourceFiles.length > 0 && (
             <div className='bg-gray-50 rounded-lg p-4 mt-4'>
               <p className='text-paragraph-sm text-gray-600 mb-2'>
                 Attached files:
               </p>
               {Array.from(formData.resourceFiles).map((file, index) => (
                 <div key={index} className='flex justify-between items-center py-1'>
                   <span className='text-paragraph-sm font-medium'>{file.name}</span>
                   <span className='text-paragraph-xs text-gray-500'>
                     {(file.size / (1024 * 1024)).toFixed(2)} MB
                   </span>
                 </div>
               ))}
             </div>
           )}
         </div>

         {/* Action Buttons */}
         <div className='flex flex-col sm:flex-row sm:justify-end w-full gap-3 sm:gap-4 pt-6'>
           <Button 
             variant="outline" 
             onClick={onCancel}
             className='w-full sm:w-fit cursor-pointer py-3 h-full order-2 sm:order-1'
           >
             Cancel
           </Button>
           
           <Button 
             variant="default"
             onClick={handleSave}
             className='w-full sm:w-fit cursor-pointer py-3 h-full order-1 sm:order-2'
           >
             Save Changes
           </Button>
         </div>
      </div>
    </div>
  );
}

export default EditLessonPage;
