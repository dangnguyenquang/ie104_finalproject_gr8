import React, { useState } from 'react'
import UploadImage from './UploadImage'
import { FormData } from '../../../configs/FormDate'

const ItemForm = ({
  rawData,
  setRawData,
  openForm,
  setOpenForm,
  currentEditedId,
  onSubmit,
  imgFile,
  setImgFile,
  currentUrl,
  setCurrentUrl,
}) => {
  const handleCloseForm = () => {
    setOpenForm(false)
    setRawData(null) // Reset rawData khi đóng form
    setImgFile(null) // Reset file ảnh
    setCurrentUrl(null) // Reset URL ảnh
  }

  const renderFormFields = () => {
    return FormData.map((field) => {
      let inputElement

      if (field.componentType === 'input') {
        inputElement = (
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={rawData?.[field.name] || ''}
            onChange={(e) => setRawData({ ...rawData, [field.name]: e.target.value })}
            className='border border-gray-300 rounded px-3 py-2 w-full'
          />
        )
      } else if (field.componentType === 'textarea') {
        inputElement = (
          <textarea
            placeholder={field.placeholder}
            value={rawData?.[field.name] || ''}
            onChange={(e) => setRawData({ ...rawData, [field.name]: e.target.value })}
            className='border border-gray-300 rounded px-3 py-2 w-full'
          ></textarea>
        )
      } else if (field.componentType === 'select') {
        inputElement = (
          <select
            value={rawData?.[field.name] || ''}
            onChange={(e) => setRawData({ ...rawData, [field.name]: e.target.value })}
            className='border border-gray-300 rounded px-3 py-2 w-full'
          >
            {field.options.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        )
      }

      return (
        <div key={field.name} className='mb-4'>
          <label className='block text-lg font-semibold mb-1'>{field.lable}</label>
          {inputElement}
        </div>
      )
    })
  }

  return (
    <div
      className={`${
        openForm ? 'block' : 'hidden'
      } fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
    >
      <div className='bg-white w-full max-w-lg h-[80vh] p-6 rounded-lg shadow-lg relative overflow-y-auto'>
        <h3 className='text-2xl font-bold mb-6 text-center'>
          {currentEditedId ? 'Edit Item' : 'Add New Product'}
        </h3>
        <form onSubmit={(e) => onSubmit(e)}>
          {renderFormFields()}
          <UploadImage
            imgFile={imgFile}
            setImgFile={setImgFile}
            rawData={rawData}
            currentUrl={currentUrl}
            setCurrentUrl={setCurrentUrl}
          />
          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
            >
              Submit
            </button>
            <button
              type='button'
              onClick={handleCloseForm}
              className='ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
            >
              Cancel
            </button>
          </div>
        </form>
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-black'
          onClick={handleCloseForm}
        >
          <i className='bx bx-x text-2xl'></i>
        </button>
      </div>
    </div>
  )
}

export default ItemForm
