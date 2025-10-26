import { Table } from '@radix-ui/themes'
import React from 'react'

function Resources() {
      const files=[
      {
        id:1,
        file:"Setting Up Your Development Environment",
        type:"PDF",
        date:"10-10-2024",
      
      },
         {
        id:2,
        file:"Setting Up Your Development Environment",
        type:"PDF",
        date:"10-10-2024",
      
      },
         {
        id:3,
        file:"Setting Up Your Development Environment",
        type:"PDF",
        date:"10-10-2024",
      
      },
         {
        id:4,
        file:"Setting Up Your Development Environment",
        type:"PDF",
        date:"10-10-2024",
      
      },
      
    ]

       const links=[
      {
        id:1,
        file:"Setting Up Your Development Environment",
        type:"PDF",
        date:"10-10-2024",
      
      },
         {
        id:2,
        file:"Setting Up Your Development Environment",
        type:"PDF",
        date:"10-10-2024",
      
      },        
      
    ]



     const videos=[
      {
        id:1,
        type:"PDF",
        desc:"A beginner's guide to Python programming.",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        
      },
      {
        id:2,
        type:"PDF",
        desc:"A beginner's guide to Python programming.",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        
      },

        
    ]


  return (
    <div className='mx-5 bg-white flex-1 '>
        <div className='my-5'>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='text-2xl font-bold'>Files</h1>
                <button className='border my-2 bg-[#2F80ED] py-2 px-4 rounded-xl border-[#dddddd] text-white'> Upload File</button>
            </div>
            <div className='mt-6 relative'>
                             <Table.Root >
                            <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>File Name</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Upload Date</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>          
                            </Table.Row>
                         </Table.Header> 
                          <Table.Body>
                           {files.map((item, index)=>(
                             <Table.Row key={item.id}>    
                             <Table.Cell>             
                               {item.file} 
                               </Table.Cell>
                         
                             <Table.Cell>{item.type}</Table.Cell>
                      
                             <Table.Cell>{item.date}</Table.Cell>
                           <Table.Cell>
                             <div className='flex gap-2'>
                                <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-black'> Edit</button>
                                <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-red-800'> Delete</button>
                             </div>               
                            </Table.Cell>
                             </Table.Row>
                              ))}
                            </Table.Body>
                         </Table.Root>
                           </div>
            
        </div>
         <div className='my-5'>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='text-2xl font-bold'>Links</h1>
                <button className='border my-2 bg-[#2F80ED] py-2 px-4 rounded-xl border-[#dddddd] text-white'> Upload Link</button>
            </div>
            <div className='mt-6 relative'>
                             <Table.Root >
                            <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>URL</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Upload Date</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>          
                            </Table.Row>
                         </Table.Header> 
                          <Table.Body>
                           {links.map((item, index)=>(
                             <Table.Row key={item.id}>    
                             <Table.Cell>             
                               {item.file} 
                               </Table.Cell>
                         
                             <Table.Cell>{item.type}</Table.Cell>
                      
                             <Table.Cell>{item.date}</Table.Cell>
                           <Table.Cell>
                             <div className='flex gap-2'>
                                <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-black'> Edit</button>
                                <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-red-800'> Delete</button>
                             </div>               
                            </Table.Cell>
                             </Table.Row>
                              ))}
                            </Table.Body>
                         </Table.Root>
                           </div>
            
        </div>
  
         <div className='my-5'>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='text-2xl font-bold'>Video</h1>
                <div className='flex gap-3'>

                <button className='border my-2 bg-[#2F80ED] py-2 px-4 rounded-xl border-[#dddddd] text-white'> Upload Video</button>
                <button className=' my-2 bg-[#F3F3F3] py-2 px-4 rounded-xl  text-black'> Embed Video</button>

                </div>
            </div>
            <div className='mt-6 relative'>
                             <Table.Root >
                            <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeaderCell>Thumbnail</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>          
                            </Table.Row>
                         </Table.Header> 
                          <Table.Body>
                           {videos.map((item, index)=>(
                             <Table.Row key={item.id}>    
                             <Table.Cell>             
                                  <img src={item.img} className='w-8 h-8 rounded-full'/>
                               </Table.Cell>
                         
                             <Table.Cell>{item.type}</Table.Cell>
                      
                             <Table.Cell>{item.desc}</Table.Cell>
                           <Table.Cell>
                             
                                <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-red-800 mr-[160px]'> Remove</button>

                            </Table.Cell>
                             </Table.Row>
                              ))}
                            </Table.Body>
                         </Table.Root>
                           </div>
            
        </div>
  
      
    </div>
  )
}

export default Resources
