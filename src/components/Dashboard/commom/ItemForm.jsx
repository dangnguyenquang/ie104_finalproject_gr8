import React, { memo } from 'react'
import { FormData } from '../../../configs/FormDate'
import UploadImage from './UploadImage'

const ItemForm = ({
  rawData,
  setRawData,
  className,
  openForm,
  setOpenForm,
  buttonText,
  imgFile,
  setImgFile,
  onSubmit,
  setCurrentEditedId,
  currentEditedId,
  currentUrl,
  setCurrentUrl,
}) => {
  // console.log(rawData.images)
  const handleForm = (Item) => {
    let value = rawData[Item.name] || ''
    let element = null
    let classCustom = 'border-2 border-black border-opacity-20 rouded-sm py-2 px-3'
    if (Item.componentType === 'input') {
      element = (
        <input
          type={Item.type}
          placeholder={Item.placeholder}
          className={classCustom}
          id={Item.name}
          name={Item.name}
          value={value}
          onChange={(event) => {
            setRawData({ ...rawData, [Item.name]: event.target.value })
          }}
        />
      )
    } else if (Item.componentType === 'textarea') {
      element = (
        <textarea
          type={Item.type}
          placeholder={Item.placeholder}
          id={Item.name}
          name={Item.name}
          className={classCustom}
          value={value}
          onChange={(event) => {
            setRawData({ ...rawData, [Item.name]: event.target.value })
          }}
        />
      )
    } else if (Item.componentType === 'select') {
      element = (
        <select
          value={value}
          className={classCustom}
          id={Item.name}
          name={Item.name}
          onChange={(event) => {
            setRawData({ ...rawData, [Item.name]: event.target.value })
          }}
        >
          {Item?.options.map((elm) => (
            <option key={elm.id} id={elm.id} value={elm.id}>
              {elm.label}
            </option>
          ))}
        </select>
      )
    } else {
      element = (
        <input
          type={Item.type}
          placeholder={Item.placeholder}
          className={classCustom}
          id={Item.name}
          name={Item.name}
          value={value}
          onChange={(event) => {
            setRawData({ ...rawData, [Item.name]: event.target.value })
          }}
        />
      )
    }

    return element
  }
  const handleCloseForm = () => {
    setCurrentEditedId(null)
    console.log(currentEditedId, 'day la current id')
    setOpenForm(false)
  }
  return (
    <div className={className}>
      <form className='w-full'>
        <div className='flex justify-between mb-2'>
          <div className='text-2xl font-mono font-bold'>
            {buttonText === 'Add' ? 'Add New Product' : 'Edit Product'}
          </div>
          <div className='cursor-pointer' onClick={() => handleCloseForm()}>
            <svg width={20} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z'
                  fill='#0F0F0F'
                ></path>{' '}
              </g>
            </svg>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <UploadImage
            setImgFile={setImgFile}
            imgFile={imgFile}
            rawData={rawData}
            currentUrl={currentUrl}
            setCurrentUrl={setCurrentUrl}
          />
          {FormData &&
            FormData.map((Item) => {
              return (
                <div className='w-full grid gap-1' key={Item.id}>
                  <label className='first-letter:capitalize text-xl'>{Item.lable}</label>
                  {handleForm(Item)}
                </div>
              )
            })}
        </div>
        <div className='flex justify-end'>
          <button
            onClick={(event) => onSubmit(event)}
            type='submit'
            className='mt-3 max-w-[200px] w-full py-1 text-white bg-[#198754]'
          >
            {buttonText || 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default memo(ItemForm)
