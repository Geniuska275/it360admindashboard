import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

function QuizQuestionList({ questions, onEditQuestion, onDeleteQuestion }) {
  if (!questions || questions.length === 0) {
    return (
      <div className='text-center py-8 text-gray-500'>
        <p className='text-paragraph-sm'>No questions added yet</p>
        <p className='text-paragraph-xs mt-1'>Click "Add Question" to get started</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      {questions.map((question, index) => (
        <div key={index} className=' rounded-lg'>
          <div className='flex justify-between items-start mb-3'>
            <div className='flex-1'>
              <h3 className='text-heading-sm font-medium text-gray-800 mb-2'>
                Question {index + 1}
              </h3>
              <p className='text-paragraph-sm text-gray-700 mb-2'>
                {question.question}
              </p>
              <div className='flex items-center gap-4 text-xs text-gray-500'>
                <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded'>
                  {question.type}
                </span>
                {question.type === 'multiple-choice' && (
                  <span>{question.options.length} options</span>
                )}
              </div>
            </div>
            
            <div className='flex gap-2 ml-4'>
              <div 
                onClick={() => onEditQuestion(index)}
                className='w-8 h-8 cursor-pointer flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded'
              >
                <Edit size={20} />
              </div>
              <div 
                onClick={() => onDeleteQuestion(index)}
                className='w-8 h-8 cursor-pointer flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 rounded'
              >
                <Trash2 size={20} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuizQuestionList;
