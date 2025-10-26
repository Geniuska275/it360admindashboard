import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { X } from 'lucide-react';
import { TextareaInput } from '../../ui/textarea-input';
import { DatePicker } from '../../ui/date-picker';

function EditAssignmentPage({ lesson, onCancel, onSave }) {
  const [formData, setFormData] = React.useState({
    title: lesson?.title || '',
    type: lesson?.type || 'Assignment',
    duration: lesson?.duration || '',
    status: lesson?.status || '',
    assignmentFile: null,
    instructions: lesson?.instructions || '',
    dueDate: lesson?.dueDate || '',
    totalPoints: lesson?.totalPoints || ''
  });

  const [isDragOver, setIsDragOver] = React.useState(false);

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
      handleInputChange('assignmentFile', files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleInputChange('assignmentFile', file);
    }
  };


  const handleSave = () => {
    onSave(formData);
  };

  const handlePublish = () => {
    console.log('Publishing assignment:', formData);
  };

  return (
    <div className='container-main pb-4 px-4 sm:px-6 lg:px-8'>
       {/* edit assignment form context container*/}
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
           <h1 className='text-heading-md'>Edit Assignment Lesson</h1>
           <div className='flex gap-2'>
            <Button 
              onClick={handlePublish}
              className='w-fit cursor-pointer py-3 h-full bg-black text-white'
            >
              Publish
            </Button>
          </div>
         </div>

         {/* Assignment Title */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Assignment Title
           </label>
           <Input
             value={formData.title}
             onChange={(e) => handleInputChange('title', e.target.value)}
             placeholder="Enter assignment title"
             className='py-2 h-full'
           />
         </div>

         {/* Upload File */}
         <div className='pt-4'>
           <label className='text-heading-lg mb-3 block'>
             Upload File
           </label>
           
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
                   Drag and drop a file here  <br/> <span className='text-xs sm:text-paragraph-sm text-gray-400'>or click to browse</span>
                 </p>
                 <Button
                   variant="outline"
                   onClick={() => document.getElementById('assignment-file-input').click()}
                   className='mt-2 cursor-pointer py-2 sm:py-3 h-full text-sm sm:text-base'
                   style={{ backgroundColor: '#E0E0E0' }}
                 >
                   Upload File
                 </Button>
               </div>
               <p className='text-xs sm:text-paragraph-sm text-gray-400 px-2'>
                 Supports PDF, DOC, DOCX, and other document formats
               </p>
             </div>
             
             {/* Hidden file input */}
             <input
               id="assignment-file-input"
               type="file"
               accept=".pdf,.doc,.docx,.txt"
               onChange={handleFileSelect}
               className='hidden'
             />
           </div>
           
           {/* Selected file info */}
           {formData.assignmentFile && (
             <div className='bg-gray-50 rounded-lg p-4 mt-4'>
               <p className='text-paragraph-sm text-gray-600'>
                 Selected file: <span className='font-medium'>{formData.assignmentFile.name}</span>
               </p>
               <p className='text-paragraph-xs text-gray-500 mt-1'>
                 Size: {(formData.assignmentFile.size / (1024 * 1024)).toFixed(2)} MB
               </p>
             </div>
           )}
         </div>

         {/* Assignment Instructions */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Assignment Instructions
           </label>
           <TextareaInput
             placeholder="Enter assignment instructions for students"
             className='py-2 h-full'
             rows={4}
             value={formData.instructions}
             onChange={(e) => handleInputChange('instructions', e.target.value)}
           />
         </div>

         {/* Due Date */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Due Date
           </label>
           <DatePicker
             value={formData.dueDate}
             onChange={(value) => handleInputChange('dueDate', value)}
             placeholder="Select due date"
           />
         </div>

         {/* Grading Criteria */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Grading Criteria
           </label>
           <div>
             <label className='text-heading-xs mb-2 block'>
               Total Points
             </label>
             <Input
               value={formData.totalPoints}
               onChange={(e) => handleInputChange('totalPoints', e.target.value)}
               placeholder="e.g., 100, 50, 25"
               type="number"
               min="0"
             />
           </div>
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
             Save Assignment
           </Button>
         </div>
      </div>
    </div>
  );
}

export default EditAssignmentPage;
