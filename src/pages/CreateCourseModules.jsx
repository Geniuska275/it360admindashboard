import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddModuleDialog from '@/components/Course/modules/AddModuleDialog';

function CreateCourseModules() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [modules, setModules] = useState([]);
  const [isAddModuleDialogOpen, setIsAddModuleDialogOpen] = useState(false);

  const addModule = () => {
    setIsAddModuleDialogOpen(true);
  };

  const handleSaveModule = (moduleData) => {
    const newModule = {
      id: modules.length + 1,
      title: moduleData.title,
      lessons: []
    };
    setModules([...modules, newModule]);
  };

  const removeModule = (id) => {
    setModules(modules.filter(module => module.id !== id));
  };

  const handleContinue = () => {
    // Navigate to Preview step
    console.log('Navigate to Preview');
  };

  const handleBack = () => {
    // Navigate back to Course Details
    window.history.back();
  };

  const handleCancel = () => {
    // Navigate back to Course List
    navigate('/Course-List');
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
          <h2 className='px-2 text-black font-bold'>Create Course</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Page Title */}
        <h1 className="text-heading-xl text-primary mb-8">Create New Course</h1>

        {/* Progress Steps */}
        <div className="flex items-center mb-12">
          <div className="flex items-center space-x-4">
            {/* Course Details */}
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                currentStep >= 1 
                  ? 'border-[#DC2626] text-[#DC2626]' 
                  : 'border-gray-300 text-gray-500'
              }`}>
                01
              </div>
              <span className={`text-base font-medium ml-3 ${
                currentStep >= 1 
                  ? 'text-[#DC2626]' 
                  : 'text-gray-500'
              }`}>
                Course Details
              </span>
              <ChevronRight className="h-5 w-5 text-gray-400 mx-4" />
            </div>

            {/* Modules */}
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                currentStep >= 2 
                  ? 'border-[#DC2626] text-[#DC2626]' 
                  : 'border-gray-300 text-gray-500'
              }`}>
                02
              </div>
              <span className={`text-base font-medium ml-3 ${
                currentStep >= 2 
                  ? 'text-[#DC2626]' 
                  : 'text-gray-500'
              }`}>
                Modules
              </span>
              <ChevronRight className="h-5 w-5 text-gray-400 mx-4" />
            </div>

            {/* Preview */}
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                currentStep >= 3 
                  ? 'border-[#DC2626] text-[#DC2626]' 
                  : 'border-gray-300 text-gray-500'
              }`}>
                03
              </div>
              <span className={`text-base font-medium ml-3 ${
                currentStep >= 3 
                  ? 'text-[#DC2626]' 
                  : 'text-gray-500'
              }`}>
                Preview
              </span>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div className="space-y-6">
          {modules.length === 0 ? (
            <div className="bg-input-light rounded-xl p-8 text-center">
              <p className="text-gray-500 text-lg mb-4">No modules added yet</p>
              <p className="text-gray-400">Click "Add Module" to create your first module</p>
            </div>
          ) : (
            modules.map((module, index) => (
              <div key={module.id} className="bg-input-light rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-primary">Module {index + 1}</h3>
                  <button
                    onClick={() => removeModule(module.id)}
                    className="text-destructive hover:bg-red-50 p-2 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Module Title - Full Width Display */}
                <div className="mb-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-primary">{module.title}</h4>
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9959 7.5H8.00488" stroke="#828282" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.99981 1.5H8.00879" stroke="#828282" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.9998 7.5H14.0088" stroke="#828282" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.9998 1.5H14.0088" stroke="#828282" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.99981 7.5H2.00879" stroke="#828282" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.99981 1.5H2.00879" stroke="#828282" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Add Module Button */}
          <div className="flex justify-start">
            <Button
              onClick={addModule}
              className="px-4 py-3 bg-primary text-white hover:bg-primary/90"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M10.6504 9.49227C9.15697 10.5445 8.29157 12.3088 8 12.8337V3.83366C8.22624 3.42642 8.79799 2.39728 9.74057 1.50602C10.4409 0.843767 10.7911 0.512642 11.3956 0.77297C12 1.0333 12 1.62835 12 2.81845V7.32506C12 7.95275 12 8.26659 11.8877 8.48312C11.7754 8.69964 11.4004 8.96385 10.6504 9.49226L10.6504 9.49227Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.99998 3.7037C7.54205 3.22268 6.21448 2.08026 3.98702 1.67972C2.85858 1.4768 2.29436 1.37534 1.81384 1.76422C1.33331 2.1531 1.33331 2.78458 1.33331 4.04756V8.58646C1.33331 9.74126 1.33331 10.3187 1.64171 10.6792C1.95011 11.0397 2.62908 11.1618 3.98702 11.4059C5.19753 11.6236 6.14227 11.9704 6.8261 12.319C7.4989 12.6619 7.83532 12.8333 7.99998 12.8333C8.16464 12.8333 8.50106 12.6619 9.17386 12.319C9.85768 11.9704 10.8024 11.6236 12.0129 11.4059C13.3709 11.1618 14.0499 11.0397 14.3582 10.6792C14.6666 10.3187 14.6666 9.74126 14.6666 8.58646V4.04756C14.6666 2.78458 14.6666 2.1531 14.1861 1.76422C13.7056 1.37534 12.6666 1.67972 12 2.16667" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add Module
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-12 pt-6 border-t border-[#dddddd]">
          <Button variant="outline" onClick={handleCancel} className="px-8">
            Cancel
          </Button>
          <Button onClick={handleContinue} className="px-8">
            Save Module
          </Button>
        </div>
      </div>

      {/* Add Module Dialog */}
      <AddModuleDialog
        isOpen={isAddModuleDialogOpen}
        onClose={() => setIsAddModuleDialogOpen(false)}
        onSave={handleSaveModule}
      />
    </div>
  );
}

export default CreateCourseModules;
