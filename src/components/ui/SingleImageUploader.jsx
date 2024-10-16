import * as React from 'react'
import ImageUploading from 'react-images-uploading'

export function SingleImageUploader() {
  const [image, setImage] = React.useState(null)
  const maxNumber = 1

  const onChange = (imageList) => {
    console.log(imageList)
    setImage(imageList[0])
  }

  return (
    <ImageUploading
      value={image ? [image] : []}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey='data_url'
    >
      {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove, isDragging, dragProps }) => (
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
              <div className='flex justify-center'>
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
