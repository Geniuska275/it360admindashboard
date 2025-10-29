import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ICONS } from '@/icons';

const BadgeIcon = ICONS.Badge;
const AwardIcon = ICONS.Award;
const BeltIcon = ICONS.Belt;
const ExpertIcon = ICONS.Expert;
const RookieIcon = ICONS.Rookie;
const MastermindIcon = ICONS.Mastermind;

function GradeSubmission() {
  const [grade, setGrade] = useState('');
  const [selectedReward, setSelectedReward] = useState(0);
  const [selectedRewardType, setSelectedRewardType] = useState(''); // 'badge', 'award', 'belt'
  const [selectedReward2, setSelectedReward2] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedTitleType, setSelectedTitleType] = useState(''); // 'expert', 'rookie', 'beginner', 'mastermind'
  const [showBadgeDropdown, setShowBadgeDropdown] = useState(false);
  const [showTitleDropdown, setShowTitleDropdown] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white py-4 shadow-md w-full sticky top-0 z-10'>
        <div className='flex gap-3 items-center px-6'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l border-[#71717A] px-3 text-[#71717A]'>
            Course Management
          </h2>
          <IoIosArrowForward className='text-[#71717A]' />
          <h2 className='px-2 font-bold text-[#373737]'>Grade Assignments</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-6 bg-white min-h-screen'>
        <h1 className='text-2xl font-bold text-[#373737] mb-6'>
          Grade Assignments
        </h1>

        {/* Course and Module Info */}
        <div className='mb-6'>
          <p className='text-heading-sm font-bold text-[#373737] mb-2'>Course:</p>
          <p className='text-sm' style={{ color: '#828282' }}>
            Introduction to Web Development | Module 1: Introduction
          </p>
        </div>

        {/* Student Submission */}
        <div className='mb-8'>
          <h2 className='text-lg font-semibold text-primary mb-3'>Student Submission</h2>
          <div className='space-y-2 flex gap-2'>
            <div className='flex flex gap-2'>
              <p className='text-sm' style={{ color: '#828282' }}>
                <span className='font-medium'>Submitted By:</span> Alex Emmanuel |
              </p> 
              <p className='text-sm' style={{ color: '#828282' }}>
                <span className='font-medium'>Submission Date:</span> July 26, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Grading Section */}
        <div className='mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Grading Grade */}
            <div>
             <h3 className='text-heading-sm font-bold mb-2'>Grading Grade</h3>
              <label className='block text-paragraph-sm mb-2'>Grade</label>
              <Input
                type='number'
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder='Enter grade'
                className='w-full'
              />
            </div>

            {/* Rewards & Recognition */}
            <div className="relative">
              <h3 className='text-heading-sm font-bold text-primary mb-2'>Rewards & Recognition</h3>
              <label className='block text-paragraph-sm mb-2'>Select Rewards</label>
              
              {/* Badge holder */}
              <button
                onClick={() => setShowBadgeDropdown(!showBadgeDropdown)}
                className="w-full border border-gray-300 rounded-md p-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                {selectedReward > 0 ? (
                  <div className="flex items-center gap-2">
                    {selectedRewardType === 'badge' && <BadgeIcon className="w-10 h-16" />}
                    {selectedRewardType === 'award' && <AwardIcon className="w-7 h-9" />}
                    {selectedRewardType === 'belt' && <BeltIcon className="w-14 h-7" />}
                    <span>{selectedReward} {selectedRewardType.charAt(0).toUpperCase() + selectedRewardType.slice(1)}</span>
                  </div>
                ) : (
                  <span className="text-gray-400 text-sm">Click to select a badge</span>
                )}
                <svg className={`w-4 h-4 transition-transform ${showBadgeDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Dropdown */}
              {showBadgeDropdown && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg p-3">
                  <div>
                    <h1> Badges </h1>
                    
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <button
                          key={num}
                          onClick={() => {
                            setSelectedReward(num);
                            setSelectedRewardType('badge');
                            setShowBadgeDropdown(false);
                          }}
                          className={`inline-flex flex-col items-center gap-2 p-2 rounded transition-all hover:scale-105 ${
                            selectedReward === num && selectedRewardType === 'badge' ? 'ring-2 ring-primary' : ''
                          }`}
                          type="button"
                        >
                          <BadgeIcon className="w-10 h-16" />
                          <input
                            type="radio"
                            name="reward"
                            checked={selectedReward === num && selectedRewardType === 'badge'}
                            readOnly
                            className="cursor-pointer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h1> Awards </h1>
                    
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <button
                          key={num}
                          onClick={() => {
                            setSelectedReward(num);
                            setSelectedRewardType('award');
                            setShowBadgeDropdown(false);
                          }}
                          className={`inline-flex flex-col items-center gap-2 p-2 rounded transition-all hover:scale-105 ${
                            selectedReward === num && selectedRewardType === 'award' ? 'ring-2 ring-primary' : ''
                          }`}
                          type="button"
                        >
                          <AwardIcon className="w-7 h-9" />
                          <input
                            type="radio"
                            name="reward"
                            checked={selectedReward === num && selectedRewardType === 'award'}
                            readOnly
                            className="cursor-pointer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>


                  <div>
                    <h1> Belts </h1>
                    
                    <div className="flex flex-wrap gap-3">
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          onClick={() => {
                            setSelectedReward(num);
                            setSelectedRewardType('belt');
                            setShowBadgeDropdown(false);
                          }}
                          className={`inline-flex flex-col items-center gap-2 p-2 rounded transition-all hover:scale-105 ${
                            selectedReward === num && selectedRewardType === 'belt' ? 'ring-2 ring-primary' : ''
                          }`}
                          type="button"
                        >
                          <span className='border block p-2 rounded-lg'>
                            <BeltIcon className="w-14 h-7" />
                          </span>
                          <input
                            type="radio"
                            name="reward"
                            checked={selectedReward === num && selectedRewardType === 'belt'}
                            readOnly
                            className="cursor-pointer"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rewards & Recognition 2 */}
            <div>
              <h3 className='text-heading-sm font-bold text-primary mb-2'>Rewards & Reconion</h3>
              <Select value={selectedReward2} onValueChange={setSelectedReward2}>
                <SelectTrigger className="w-full" size="md"> 
                  <SelectValue placeholder="Select Rewards" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="can-performer">Can Performer</SelectItem>
                  <SelectItem value="rookie">Rookie</SelectItem>
                  <SelectItem value="headies">Headies</SelectItem>
                  <SelectItem value="brainy">Brainy</SelectItem>
                  <SelectItem value="smartlegend">Smartlegend</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Assign a Title */}
            <div className="relative">
              <label className='block text-heading-sm font-bold text-primary mb-2'>
                Assign a Title
              </label>
              
              {/* Title holder */}
              <button
                onClick={() => setShowTitleDropdown(!showTitleDropdown)}
                className="w-full border border-gray-300 rounded-md p-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                {selectedTitle ? (
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-medium">{selectedTitleType.charAt(0).toUpperCase() + selectedTitleType.slice(1)}</span>
                  </div>
                ) : (
                  <span className="text-gray-400 text-sm">Click to select a title</span>
                )}
                <svg className={`w-4 h-4 transition-transform ${showTitleDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Dropdown for Titles */}
              {showTitleDropdown && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg p-3">
                  <div>
                    <h1>Titles</h1>
                    
                    <div className="flex flex-wrap gap-3">
                      {[
                        { type: 'expert', icon: ExpertIcon },
                        { type: 'rookie', icon: RookieIcon },
                        { type: 'mastermind', icon: MastermindIcon }
                      ].map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.type}
                            onClick={() => {
                              setSelectedTitle(item.type);
                              setSelectedTitleType(item.type);
                              setShowTitleDropdown(false);
                            }}
                            className={`inline-flex flex-col items-center gap-2 p-2 rounded transition-all hover:scale-105 ${
                              selectedTitleType === item.type ? 'ring-2 ring-primary' : ''
                            }`}
                            type="button"
                          >
                            <span className='border block p-2 rounded-lg'>
                              <IconComponent className="w-10 h-10" />
                            </span>
                            <input
                              type="radio"
                              name="title"
                              checked={selectedTitleType === item.type}
                              readOnly
                              className="cursor-pointer"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex justify-end gap-4 pt-6'>
          <Button
            variant='outline'
            className='border-gray-300 text-[#373737] hover:bg-gray-50'
          >
            Cancel
          </Button>
          <Button className='text-white hover:bg-primary/90'>
            Submit Grade
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GradeSubmission;
