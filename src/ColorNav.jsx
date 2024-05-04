import React from 'react'


function ColourBar(props) {

  return (
    <div className='h-24 border-1 border-red-600 flex justify-between pt-3 mx-24'>
            <ul className='flex justify-between mt-2'>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#FF3380  ")}>Menu</li>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#DAF7A6")}>Location</li>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#FFF933")}>About</li>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#9FFF33")}>Contact</li>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#33FF58")}>Location</li>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#33C7FF")}>About</li>
                <li className='mx-4 text-gray-700 font-bold'onClick={()=>props.onChange("#C433FF")}>Contact</li>

            </ul>
        <div className=''>
            <button className='mx-4 bg-slate-600 py-1 px-4 mt-1 text-white font-medium'> Dark Theme </button>
        </div>
    </div>
  )
}

export default ColourBar