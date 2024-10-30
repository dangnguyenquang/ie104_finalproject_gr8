import * as React from 'react'
import ImageUploading from 'react-images-uploading'

export function ImageUploader({ maxImages }) {
  const [images, setImages] = React.useState([])

  const onChange = (imageList) => {
    console.log(imageList)
    setImages(imageList)
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
            className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500'
            onClick={onImageUpload}
            {...dragProps}
          >
            Click here to upload
          </button>

          {imageList.map((image, index) => (
            <div key={index} className='my-5'>
              <img src={image['data_url']} alt='' width='100%' />
              <div className='flex justify-around'>
                <button
                  className='relative my-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500'
                  onClick={() => onImageUpdate(index)}
                >
                  Update
                </button>
                <button
                  className='relative my-1 cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:text-indigo-500'
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
