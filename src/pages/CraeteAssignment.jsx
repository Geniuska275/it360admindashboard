import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DotsIcon from '@/components/icons/DotsIcon';
import QuizIcon from '@/components/icons/QuizIcon';
import AssignmentIcon from '@/components/icons/AssignmentIcon';
import AddQuizForm from '@/components/Assignment/Assessment/AddQuizForm';

function CreateAssignment() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [lessonTitle, setLessonTitle] = useState('Lesson 1: Introduction to the Module');
  const [showQuizForm, setShowQuizForm] = useState(false);

  const handleAddQuiz = () => {
    setShowQuizForm(true);
  };

  const handleAddNewCourse = () => {
    // Navigate to create course page
    navigate('/create-course');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className='flex-1 bg-white py-4 shadow-md w-full top-0 sticky z-10'>
        <div className='flex gap-3 items-center px-6'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l px-2 text-[#71717A]'>Course Management</h2>
          <IoIosArrowForward />
          <h2 className='px-2 text-[#71717A]'>Course List View</h2>
          <IoIosArrowForward />
          <h2 className='px-2 text-black font-bold'>Create Assignment/Quizzes</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Page Title and Add Button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-heading-xl text-primary">Create Assignment/Quizzes</h1>
          <Button
            onClick={handleAddNewCourse}
            className="px-8 bg-primary text-white hover:bg-primary/90"
          >
            Add new course
          </Button>
        </div>

        {/* Select Course and Select Module */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-8  w-full md:w-1/3">
          {/* Select Course */}
          <div >
            <Select value={selectedCourse} onValueChange={setSelectedCourse}> 
              <SelectTrigger className="w-full rounded-sm h-10 bg-input-light">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="course-1">Introduction to Web Development</SelectItem>
                <SelectItem value="course-2">Advanced JavaScript</SelectItem>
                <SelectItem value="course-3">React Mastery</SelectItem>
                <SelectItem value="course-4">Node.js Fundamentals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Module */}
          <div>
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger className="w-full rounded-sm h-10 bg-input-light">
                <SelectValue placeholder="Select Module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="module-1">Module 1: Basics</SelectItem>
                <SelectItem value="module-2">Module 2: Intermediate Concepts</SelectItem>
                <SelectItem value="module-3">Module 3: Advanced Topics</SelectItem>
                <SelectItem value="module-4">Module 4: Final Project</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-input-light rounded-xl p-6 mb-6">
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-3">
              <DotsIcon />
              <span className='block text-subheading-sm text-primary bg-white border border-border rounded-md w-full px-4 py-2'>Module 1</span>
            </div>

            {/* Show Quiz form when Add Quiz is clicked - appears after Module */}
            {showQuizForm && (
              <div className='w-[98%] ml-auto bg-white  rounded-lg  py-3 mb-4'> 
                <AddQuizForm /> 
              </div>
            )}

            <div className='w-[98%] ml-auto bg-white mt-4 rounded-lg  py-4'>

              <div className='flex items-center gap-3 px-4'>
                <DotsIcon />
                <Input 
                  type="text"
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  className='text-subheading-sm text-primary rounded-md border border-border bg-input-light w-full px-4 py-2'
                  placeholder="Lesson 1: Introduction to the Module"
                />
              </div>

              {/* add Quize and Adssignment  */}
              <div className='flex items-center gap-3 mt-4 ml-6'>
                <div className='flex items-center border border-border rounded-md px-1'>
                  <QuizIcon />
                  <Button variant="outline" className='border-none text-primary cursor-pointer' onClick={handleAddQuiz}>Add Quiz</Button>
                </div>
                <div className='flex items-center border border-border rounded-md px-1'>
                  <AssignmentIcon />
                  <Button variant="outline" className='border-none text-primary cursor-pointer'>Add Assignment</Button>
                </div>
              </div>

            </div>
          </div>

            {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 ">
            <Button variant="outline" className="px-8" >
              Cancel
            </Button>
            <Button className="px-8">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAssignment;
