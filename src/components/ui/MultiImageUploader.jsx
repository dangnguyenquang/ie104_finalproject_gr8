import * as React from 'react'
import ImageUploading from 'react-images-uploading'

export function MultiImageUploader() {
  const [images, setImages] = React.useState([])
  const maxNumber = 4

  const onChange = (imageList) => {
    console.log(imageList)
    setImages(imageList)
  }

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey='data_url'
    >
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
        <div className='text-center'>
          <button
            className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
            onClick={onImageUpload}
            {...dragProps}
          >
            Click here
          </button>

          {imageList.map((image, index) => (
            <div key={index} className='my-5'>
              <img src={image['data_url']} alt='' width='100%' />
              <div className='flex justify-around'>
                <button
                  className='relative my-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </button>
                <button
                  className='relative my-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
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
