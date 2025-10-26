import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Plus, X } from 'lucide-react';
import { TextareaInput } from '../../ui/textarea-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import AskQuizQuestionDialog from './AskQuizQuestionDialog';
import QuizQuestionList from './QuizQuestionList';

function EditQuizPage({ lesson, onCancel, onSave }) {
  const [formData, setFormData] = React.useState({
    title: lesson?.title || '',
    type: lesson?.type || 'Quiz',
    status: lesson?.status || '',
    instructions: lesson?.instructions || '',
    questions: lesson?.questions || [],
    timeLimit: lesson?.timeLimit || '',
    passingScore: lesson?.passingScore || '',
    feedbackOption: lesson?.feedbackOption || 'immediate'
  });

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddQuestion = () => {
    setIsDialogOpen(true);
  };

  const handleSaveQuestion = (questionData) => {
    setFormData(prev => ({
      ...prev,
      questions: [...prev.questions, questionData]
    }));
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handlePublish = () => {
    console.log('Publishing quiz:', formData);
  };

  const handleEditQuestion = (questionIndex) => {
    console.log('Editing question:', formData);
    setIsDialogOpen(true);
  };

  const handleDeleteQuestion = (questionIndex) => {
    console.log('Deleting question:', questionIndex);
    setFormData(prev => ({
      ...prev,
      questions: prev.questions.filter((_, index) => index !== questionIndex)
    }));
  };

  return (
    <div className='container-main pb-4 px-4 sm:px-6 lg:px-8'>
       {/* edit quiz form context container*/}
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
           <h1 className='text-heading-md'>Edit Quiz Lesson</h1>
           <div className='flex gap-2'>
            <Button 
              onClick={handlePublish}
              className='w-fit cursor-pointer py-3 h-full bg-black text-white'
            >
              Publish
            </Button>
          </div>
         </div>

         {/* Quiz Title */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Quiz Title
           </label>
           <Input
             value={formData.title}
             onChange={(e) => handleInputChange('title', e.target.value)}
             placeholder="Enter quiz title"
             className='py-2 h-full'
           />
         </div>

         {/* Quiz Instructions */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Quiz Questions
           </label>
          <Button 
            onClick={handleAddQuestion}
            className='w-fit cursor-pointer py-3 h-full bg-gray-200 text-gray-600 hover:bg-gray-300'
          >
            Add Question
          </Button>
         </div>

         {/* Created Quiz Questions */}
         <div>
           <QuizQuestionList
             questions={formData.questions}
             onEditQuestion={handleEditQuestion}
             onDeleteQuestion={handleDeleteQuestion}
           />
         </div>

         {/* Quiz Settings */}
         <div>
           <label className='text-heading-xs mb-3 block'>
             Quiz Settings
           </label>
           
           <div className='flex flex-col gap-10'>
             {/* Time Limit */}
             <div>
               <label className='text-heading-xs mb-2 block'>
                 Time Limit (minutes)
               </label>
               <Input
                 value={formData.timeLimit}
                 onChange={(e) => handleInputChange('timeLimit', e.target.value)}
                 className="w-1/2"
                 placeholder="30"
                 type="number"
                 min="0"
               />
             </div>

             {/* Passing Score */}
             <div>
               <label className='text-heading-xs mb-2 block'>
                 Passing Score (%)
               </label>
               <Input
                 value={formData.passingScore}
                 onChange={(e) => handleInputChange('passingScore', e.target.value)}
                 className="w-1/2"
                 placeholder="70"
                 type="number"
                 min="0"
                 max="100"
               />
             </div>
           </div>

           {/* Feedback Options */}
           <div className='mt-10'>

             <div className='space-y-3'>
               <label className='flex items-center gap-3 cursor-pointer  border border-gray-200 py-5 px-3 rounded-md'>
                 <input
                   type="radio"
                   name="feedbackOption"
                   value="immediate"
                   checked={formData.feedbackOption === 'immediate'}
                   onChange={(e) => handleInputChange('feedbackOption', e.target.value)}
                 />
                 <span className='text-paragraph-sm font-semibold'>Show feedback immediately</span>
               </label>
               
               <label className='flex items-center gap-3 cursor-pointer  border border-gray-200 py-5 px-3 rounded-md'>
                 <input
                   type="radio"
                   name="feedbackOption"
                   value="after-submission"
                   checked={formData.feedbackOption === 'after-submission'}
                   onChange={(e) => handleInputChange('feedbackOption', e.target.value)}
                 />
                 <span className='text-paragraph-sm font-semibold'>Show feedback after submission</span>
               </label>
               
               <label className='flex items-center gap-3 cursor-pointer  border border-gray-200 py-5 px-3 rounded-md'>
                 <input
                   type="radio"
                   name="feedbackOption"
                   value="no-feedback"
                   checked={formData.feedbackOption === 'no-feedback'}
                   onChange={(e) => handleInputChange('feedbackOption', e.target.value)}
                 />
                 <span className='text-paragraph-sm font-semibold'>Do not show feedback</span>
               </label>
             </div>
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
             Save Quiz
           </Button>
         </div>
      </div>

      {/* Quiz Question Dialog */}
      <AskQuizQuestionDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSaveQuestion}
      />
    </div>
  );
}

export default EditQuizPage;
