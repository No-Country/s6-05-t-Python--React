import React from 'react'

const Community = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white'>
      <div className='flex flex-row justify-center items-center'>
        <div className='p-10 w-[380px] h-[500px]  rounded-[15px]  overflow-hidden'>
          <img src="https://i.pinimg.com/736x/5d/d2/93/5dd29335630f4aa8fc5a54dd3f2aa2c9.jpg" alt="drake_img" className=' rounded-[15px] w-full h-full' />
        </div>
        <div className='flex flex-col'>
          <h3 className='p-[10px] text-7xl text-black'>Drake</h3>
          <p className='p-[10px] text-left max-w-2xl text-black ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est voluptatem hic distinctio dolore, mollitia unde at ea nulla nisi saepe excepturi? Tempore eos accusantium blanditiis numquam eum totam nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, optio, iste aliquam est ullam possimus ipsa, eligendi placeat ipsum molestiae ut repellat ea asperiores aspernatur blanditiis eaque minima corrupti distinctio.</p>
        </div>
      </div>
      <div className='flex flex-row border-b-slate-200 border-b-4 w-[500px]  justify-center items-center '>
        <div className='w-1/4  p-[10px] flex justify-center items-center hover:text-priColor text-xl hover:text-2xl hover:border-priColor hover:border-b-4 hover:cursor-pointer'>
          <h4>Feed</h4>
        </div>
        <div className=' w-1/4 h-full p-[10px] flex justify-center items-center hover:text-priColor text-xl hover:text-2xl hover:border-priColor hover:border-b-4 hover:cursor-pointer'>
          <h4>Music</h4>
        </div>
      </div>
      <div className='bg-[red] mt-[20px] max-w-7xl w-full flex flex-row items-center justify-center'>
        <div className='w-2/3 pt-[10px]'> 
          <div className=''>
            {/* insert icon */}
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
              <img src="https://i.pinimg.com/736x/5d/d2/93/5dd29335630f4aa8fc5a54dd3f2aa2c9.jpg" alt="" />
            </div>
            <div>
              <h4>{`${'DrakeSpot'}`}</h4>
              <p>Waiting for concert !!!</p>
            </div>
          </div>
          <div></div>
          <div></div> 
        </div>
        <div className='flex flex-col justify-center items-center w-1/3 bg-slate-50'>
          <img src="https://i.pinimg.com/736x/5d/d2/93/5dd29335630f4aa8fc5a54dd3f2aa2c9.jpg" alt=""  className='rounded-3xl w-[300px]'/>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

  )
}

export default Community