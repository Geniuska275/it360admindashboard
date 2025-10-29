import { Input, Select } from '@/components/design-system';
import DotsIcon from '@/components/icons/DotsIcon';
import React, { useState } from 'react';
import { TextareaInput } from '@/components/ui/textarea-input';
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

function AddQuizForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [questionData, setQuestionData] = useState({
    question: '',
    type: 'multiple-choice',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const handleInputChange = (field, value) => {
    setQuestionData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const addOption = () => {
    setQuestionData(prev => ({
      ...prev,
      options: [...prev.options, '']
    }));
  };

  const removeOption = (index) => {
    const newOptions = questionData.options.filter((_, i) => i !== index);
    setQuestionData(prev => ({
      ...prev,
      options: newOptions,
      correctAnswer: prev.correctAnswer >= newOptions.length ? 0 : prev.correctAnswer
    }));
  };

  const addQuestion = () => {
    if (questionData.question.trim()) {
      if (editingIndex !== null) {
        // Update existing question
        const updatedQuestions = [...questions];
        updatedQuestions[editingIndex] = questionData;
        setQuestions(updatedQuestions);
        setEditingIndex(null);
      } else {
        // Add new question
        setQuestions([...questions, { ...questionData, id: Date.now() }]);
      }
      // Reset form
      setQuestionData({
        question: '',
        type: 'multiple-choice',
        options: ['', '', '', ''],
        correctAnswer: 0
      });
    }
  };

  const handleDeleteClick = (index) => {
    setQuestionToDelete(index);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (questionToDelete !== null) {
      setQuestions(questions.filter((_, index) => index !== questionToDelete));
      setDeleteDialogOpen(false);
      setQuestionToDelete(null);
    }
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setQuestionData(questions[index]);
  };

  return (
    <div className='rounded-lg px-4 py-3 '>
      <div className='flex items-center gap-3 mb-4'>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          >
            <DotsIcon />
          </button>
          <Input type='text' placeholder='Quiz1: Enter quiz title' className='block text-subheading-sm text-primary rounded-md  border border-border bg-input-light w-full px-4 py-2' />
        </div>

      {isExpanded && (
      <div className='relative ml-10 bg-input-light rounded-lg p-6 border border-border'>
        {/* description */}

        <div className='mb-4 '>
          <label className='text-heading-xs mb-3 block'> Quiz description </label>
          <TextareaInput
            placeholder='Enter quiz description'
            className='py-2 h-full bg-white border border-border rounded-md px-4 py-2'
            rows={4}
          />
        </div>

        {/* quiz settings */}
        <div className='mb-4 space-y-4'>
          <div>
            <label className='text-heading-xs mb-3 block'> Quiz Settings </label>
            <div className='flex flex-col gap-10'>
              <div className='mb-4'>
                <label className='text-paragraph-sm mb-3 block r'> Time Limit (minutes) </label>
                <Input type='number' placeholder='E.g 30' className=' bg-white ' />
              </div>
            </div>

            {/* passing Score */}
            <div className='flex flex-col gap-10'>
              <div className='mb-4'>
                <label className='text-paragraph-sm mb-3 block'> Passing Score (%) </label>
                <Input type='number' placeholder='E.g 1 points for an answered question' className='bg-white' />
              </div>
            </div>

            {/* show feed back options */}
            <div className='flex flex-col gap-10'>
              <div className='mb-4'>
                <label className='text-paragraph-sm mb-3 block'> Show feed back options</label>
                <div className='space-y-3'>
                  <label className='bg-white flex items-center gap-3 cursor-pointer border border-gray-200 py-5 px-3 rounded-md'>
                    <input
                      type="radio"
                      name="feedbackOption"
                      value="immediate"
                      defaultChecked
                    />
                    <span className='text-paragraph-sm font-semibold'>Show feedback immediately</span>
                  </label>
                  
                  <label className='bg-white flex items-center gap-3 cursor-pointer border border-gray-200 py-5 px-3 rounded-md'>
                    <input
                      type="radio"
                      name="feedbackOption"
                      value="after-submission"
                    />
                    <span className='text-paragraph-sm font-semibold'>Show feedback after submission</span>
                  </label>
                  
                  <label className='bg-white flex items-center gap-3 cursor-pointer border border-gray-200 py-5 px-3 rounded-md'>
                    <input
                      type="radio"
                      name="feedbackOption"
                      value="no-feedback"
                    />
                    <span className='text-paragraph-sm font-semibold'>Do not show feedback</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Quiz Questions */}
            <div className='mb-4 md:w-1/2'>
              <label className='text-heading-xs mb-3 block'> Quiz Questions </label>

              <div className='bg-white rounded-md px-4 py-6 border border-border space-y-4'>
                <div>
                  <span className='text-paragraph-sm font-semibold block mb-3'>Question Text</span>
                  <TextareaInput
                    value={questionData.question}
                    onChange={(e) => handleInputChange('question', e.target.value)}
                    placeholder='Enter question text'
                    className='py-2 h-full bg-white border border-border rounded-md px-4 py-2'
                    rows={3}
                  />
                </div>
                
                {/* Question Type */}
                <div>
                  <span className='text-paragraph-sm font-semibold block mb-3'>Question Type</span>
                  <Select
                    value={questionData.type}
                    onValueChange={(value) => handleInputChange('type', value)}
                  >
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder="Select question type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                      <SelectItem value="true-false">True/False</SelectItem>
                      <SelectItem value="short-answer">Short Answer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Options (for multiple choice) */}
                {questionData.type === 'multiple-choice' && (
                  <div>
                    <span className='text-paragraph-sm font-semibold block mb-3'>Answer Options</span>
                    <div className="space-y-3">
                      {questionData.options.map((option, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={questionData.correctAnswer === index}
                            onChange={() => handleInputChange('correctAnswer', index)}
                            className="mt-1"
                          />
                          <Input
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            placeholder={`Option ${index + 1}`}
                            className="flex-1"
                          />
                        </div>
                      ))}
                      <Button
                        variant="outline"
                        onClick={addQuestion}
                        className="w-fit"
                        disabled={!questionData.question.trim()}
                      >
                        <Plus size={16} className="mr-2" />
                        Add Question
                      </Button>
                    </div>
                  </div>
                )}

                {/* True/False Options */}
                {questionData.type === 'true-false' && (
                  <div>
                    <span className='text-paragraph-sm font-semibold block mb-3'>Correct Answer</span>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="correctAnswer"
                          checked={questionData.correctAnswer === 0}
                          onChange={() => handleInputChange('correctAnswer', 0)}
                        />
                        True
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="correctAnswer"
                          checked={questionData.correctAnswer === 1}
                          onChange={() => handleInputChange('correctAnswer', 1)}
                        />
                        False
                      </label>
                    </div>
                    {/* Add Question Button for True/False */}
                    <Button
                      onClick={addQuestion}
                      disabled={!questionData.question.trim()}
                      className="w-full mt-4"
                    >
                      <Plus size={16} className="mr-2" />
                      Add Question
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Question List */}
            {questions.length > 0 && (
              <div className='mb-4'>
                <label className='text-heading-xs mb-3 block'>Question List</label>
                <div className='space-y-3'>
                  {questions.map((q, index) => (
                    <div key={q.id} className='bg-white border border-border rounded-md px-4 py-3 space-y-2'>
                      <div>
                        <p className='text-paragraph-sm font-medium'>{index + 1}. {q.question}</p>
                        <p className='text-paragraph-xs mt-1'>Type: {q.type}</p>
                      </div>
                      
                      {/* Display options for multiple choice */}
                      {q.type === 'multiple-choice' && q.options && (
                        <div className='ml-4 space-y-2 mt-3'>
                          <p className='text-paragraph-xs font-semibold text-secondary'>Options:</p>
                          {q.options.map((option, optIndex) => (
                            <div key={optIndex} className='flex items-center gap-2'>
                              <input
                                type="radio"
                                checked={q.correctAnswer === optIndex}
                                readOnly
                                className="mt-1"
                              />
                              <p className={`text-paragraph-xs ${q.correctAnswer === optIndex ? 'text-success font-semibold' : 'text-secondary'}`}>
                                {option || `Option ${optIndex + 1}`}
                              </p>
                              {q.correctAnswer === optIndex && <span className='text-paragraph-xs text-success'>(Correct)</span>}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Display answer for true/false */}
                      {q.type === 'true-false' && (
                        <div className='ml-4 mt-3'>
                          <p className='text-paragraph-xs font-semibold text-success'>Answer: {q.correctAnswer === 0 ? 'True' : 'False'}</p>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className='flex gap-2 mt-3 pt-3 border-t border-gray-200'>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteClick(index)}
                          className='flex items-center gap-2 bg-red'
                        >
                          <Trash2 size={16} />
                          Remove
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditClick(index)}
                          className='flex items-center gap-2'
                        >
                          <Edit2 size={16} />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to cancel this section?</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-paragraph-sm">This will remove the quiz you've added.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              No
            </Button>
            <Button    className='bg-black text-white' onClick={confirmDelete}>
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddQuizForm;