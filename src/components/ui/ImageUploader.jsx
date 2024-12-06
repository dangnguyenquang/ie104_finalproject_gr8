import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'

export function ImageUploader({ maxImages, handleAvatarChange, handleImagesChange }) {
  const [images, setImages] = useState([])

  const onChange = (imageList) => {
    setImages(imageList)

    if (maxImages === 1) {
      handleAvatarChange(imageList[0].file)
    } else {
      handleImagesChange(imageList.map((image) => image.file))
    }
  }

  return (
    <ImageUploading
      multiple={maxImages > 1}
      value={images}
      onChange={onChange}
      maxNumber={maxImages}
      dataURLKey='data_url'
    >
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
        <div className='text-center'>
          <button
            id='upload-button'
            className={`relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500 ${
              isDragging ? 'border-dashed border-4 border-indigo-600' : ''
            } p-2 m-2 sm:p-4 sm:m-4`}
            onClick={onImageUpload}
            {...dragProps}
          >
            Click here to upload
          </button>

          {imageList.map((image, index) => (
            <div key={index} className='my-5'>
              <img src={image['data_url']} alt='' width='100%' />
              <div className='flex justify-around mt-2'>
                <button
                  className='relative my-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500 p-2 m-2'
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </button>
                <button
                  className='relative my-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500 p-2 m-2'
                  onClick={() => onImageRemove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  )
}

export default ImageUploader
