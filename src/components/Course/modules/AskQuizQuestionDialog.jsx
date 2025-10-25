import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { TextareaInput } from '../../ui/textarea-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Plus, Trash2 } from 'lucide-react';

function AskQuizQuestionDialog({ isOpen, onClose, onSave }) {
  const [questionData, setQuestionData] = React.useState({
    question: '',
    type: 'multiple-choice',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: ''
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

  const handleSave = () => {
    onSave(questionData);
    // Reset form
    setQuestionData({
      question: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    });
    onClose();
  };

  const handleCancel = () => {
    // Reset form
    setQuestionData({
      question: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Quiz Question</DialogTitle>
        </DialogHeader>
        
        <div className="p-6 space-y-6">
          {/* Question Text */}
          <div>
            <label className="text-heading-xs mb-3 block">
              Question Text
            </label>
            <TextareaInput
              value={questionData.question}
              onChange={(e) => handleInputChange('question', e.target.value)}
              placeholder="Enter your question here..."
              rows={3}
              className="py-2 h-full"
            />
          </div>

          {/* Question Type */}
          <div>
            <label className="text-heading-xs mb-3 block">
              Question Type
            </label>
            <Select
              value={questionData.type}
              onValueChange={(value) => handleInputChange('type', value)}
            >
              <SelectTrigger className="w-full">
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
              <label className="text-heading-xs mb-3 block">
                Answer Options
              </label>
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
                    {questionData.options.length > 2 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeOption(index)}
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={addOption}
                  className="w-fit"
                >
                  <Plus size={16} className="mr-2" />
                  Add Option
                </Button>
              </div>
            </div>
          )}

          {/* True/False Options */}
          {questionData.type === 'true-false' && (
            <div>
              <label className="text-heading-xs mb-3 block">
                Correct Answer
              </label>
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
            </div>
          )}

        
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>
            Save Question
          </Button>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AskQuizQuestionDialog;
