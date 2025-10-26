import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { X, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { TextareaInput } from '@/components/ui/textarea-input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function CreateCourse() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    category: '',
    level: '',
    instructor: '',
    price: '',
    description: '',
    image: null,
    video: null,
  });

  const handleInputChange = (field, value) => {
    setCourseData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setCourseData(prev => ({ ...prev, [field]: file }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(field, file);
    }
  };

  const handleContinue = () => {
    // Navigate to Modules page
    navigate('/create-course-modules');
  };

  const handleCancel = () => {
    // Navigate back to course list or dashboard
    navigate('/course-list');
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

        {/* Form */}
        {/* Course Title */}
        <div className="mb-6">
          <label className="text-base font-medium text-primary mb-2 block">
            Course Title
          </label>
          <TextareaInput
            placeholder="Enter course title"
            value={courseData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full rounded-xl min-h-[60px] bg-input-light"
          />
        </div>

        {/* Category, Level, Instructor, Price Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Category */}
          <div>
            <label className="text-base font-medium text-primary mb-2 block">
              Category
            </label>
            <Select value={courseData.category} onValueChange={(value) => handleInputChange('category', value)}>
              <SelectTrigger className="w-full rounded-xl h-12 bg-input-light">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Level */}
          <div>
            <label className="text-base font-medium text-primary mb-2 block">
              Level
            </label>
            <Select value={courseData.level} onValueChange={(value) => handleInputChange('level', value)}>
              <SelectTrigger className="w-full rounded-xl h-12 bg-input-light">
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Instructor */}
          <div>
            <label className="text-base font-medium text-primary mb-2 block">
              Instructor
            </label>
            <Select value={courseData.instructor} onValueChange={(value) => handleInputChange('instructor', value)}>
              <SelectTrigger className="w-full rounded-xl h-12 bg-input-light">
                <SelectValue placeholder="Select Instructor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="mike-wilson">Mike Wilson</SelectItem>
                <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <label className="text-base font-medium text-primary mb-2 block">
              Price
            </label>
            <Input
              type="number"
              placeholder="Enter price"
              value={courseData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              className="w-full rounded-xl !h-12 bg-input-light"
            />
          </div>
        </div>

        {/* Course Description */}
        <div className="mb-6">
          <label className="text-base font-medium text-primary mb-2 block">
            Course Description
          </label>
          <TextareaInput
            placeholder="Enter course description"
            value={courseData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full rounded-xl min-h-[120px] bg-input-light"
          />
        </div>

        {/* Course Image Upload */}
        <div className="mb-6">
          <label className="text-base font-medium text-primary mb-2 block">
            Course Image
          </label>
          <div
            className="border-2 border-dashed border-[#71717A] rounded-xl p-12 text-center hover:border-[#FF6500] transition-colors cursor-pointer bg-input-light"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'image')}
            onClick={() => document.getElementById('image-upload').click()}
          >
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
              <circle cx="32.3886" cy="32.3893" r="28.9352" fill="white" stroke="white" strokeWidth="5.85937"/>
              <path d="M32.6665 54.333L15.346 34.119L49.987 34.119L32.6665 54.333Z" fill="#D4D6DA"/>
              <rect x="29.6111" y="11" width="6.66667" height="25.6044" fill="#D4D6DA"/>
            </svg>
            <p className="text-sm">
              <span className="text-[#DC2626] font-medium">Click to Upload</span>
              <span className="text-black"> or drag and drop</span>
            </p>
            <p className="text-sm text-muted mt-1">
              JPG, PNG (Max 20MB)
            </p>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileUpload('image', e.target.files[0])}
            />
            {courseData.image && (
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm text-success">{courseData.image.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFileUpload('image', null);
                  }}
                  className="ml-2 text-destructive"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

          {/* Separator */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-[#dddddd]"></div>
            <span className="px-4 text-sm text-muted">or</span>
            <div className="flex-1 border-t border-[#dddddd]"></div>
          </div>

        {/* Cover Video Upload */}
        <div className="mb-8">
          <label className="text-base font-medium text-primary mb-2 block">
            Cover Video
          </label>
          <div
            className="border-2 border-dashed border-[#71717A] rounded-xl p-12 text-center hover:border-[#FF6500] transition-colors cursor-pointer bg-input-light"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'video')}
            onClick={() => document.getElementById('video-upload').click()}
          >
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
              <rect width="46" height="46" rx="8" fill="white"/>
              <path d="M28.4776 20.0111C28.485 20.011 28.4925 20.011 28.5 20.011C30.9853 20.011 33 22.0294 33 24.5193C33 26.8398 31.25 28.7508 29 29M28.4776 20.0111C28.4924 19.8461 28.5 19.679 28.5 19.5101C28.5 16.467 26.0376 14 23 14C20.1232 14 17.7623 16.2127 17.5204 19.0319M28.4776 20.0111C28.3753 21.1476 27.9286 22.1846 27.2428 23.0165M17.5204 19.0319C14.984 19.2737 13 21.4139 13 24.0183C13 26.4417 14.7178 28.4632 17 28.9273M17.5204 19.0319C17.6783 19.0169 17.8382 19.0092 18 19.0092C19.1258 19.0092 20.1647 19.3819 21.0005 20.011" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 24L23 32M23 24C22.2998 24 20.9915 25.9943 20.5 26.5M23 24C23.7002 24 25.0085 25.9943 25.5 26.5" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm">
              <span className="text-[#DC2626] font-medium">Click to Upload</span>
              <span className="text-black"> or drag and drop</span>
            </p>
            <p className="text-sm text-muted mt-1">
              MP4, MOV (max. 800x400px)
            </p>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => handleFileUpload('video', e.target.files[0])}
            />
            {courseData.video && (
              <div className="mt-4 flex items-center justify-center">
                <span className="text-sm text-success">{courseData.video.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFileUpload('video', null);
                  }}
                  className="ml-2 text-destructive"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-[#dddddd]">
          <Button variant="outline" onClick={handleCancel} className="px-8">
            Cancel
          </Button>
          <Button onClick={handleContinue} className="px-8">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
