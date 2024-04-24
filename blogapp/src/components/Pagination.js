import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
  const {page, handlePageChange, totalPages} = useContext(AppContext);

  if(!totalPages) return null;

  return (
    <div className='fixed bottom-0 mx-auto justify-center items-center inset-x-0 bg-white py-2.5 border-t-2 border-t-gray-300'>
      <div className='flex items-center mx-auto justify-between w-11/12 max-w-[530px] py-2'>
        <div className='flex gap-2'>
        {
          page > 1 &&
          (
            <button className='rounded-md border-2 px-4 py-1' onClick={() => handlePageChange(page-1)}>
              Previous
            </button>
          )
        }
        {
          page < totalPages &&
          (
            <button className='rounded-md border-2 px-4 py-1' onClick={() => handlePageChange(page+1)}>
              Next
            </button>
          )
        }
        </div>
       

        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination