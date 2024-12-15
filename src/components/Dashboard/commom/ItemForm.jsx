import React from 'react'
import UploadImage from './UploadImage'

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
    setRawData(null)
    setImgFile(null)
    setCurrentUrl(null)
  }

  return (
    <div
      className={`${
        openForm ? 'block' : 'hidden'
      } fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
    >
      <div className='bg-white w-full max-w-lg h-[80vh] p-6 rounded-lg shadow-lg relative overflow-y-auto'>
        <h3 className='text-2xl font-bold mb-6 text-center'>
          {currentEditedId ? 'Chỉnh sửa món' : 'Thêm món mới'}
        </h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-1'>Tên món</label>
            <input
              type='text'
              value={rawData?.title || ''}
              onChange={(e) => setRawData({ ...rawData, title: e.target.value })}
              className='border border-gray-300 rounded px-3 py-2 w-full'
              placeholder='Nhập tên món'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-1'>Mô tả</label>
            <textarea
              value={rawData?.description || ''}
              onChange={(e) => setRawData({ ...rawData, description: e.target.value })}
              className='border border-gray-300 rounded px-3 py-2 w-full'
              placeholder='Nhập mô tả'
            ></textarea>
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-1'>Loại</label>
            <input
              type='text'
              value={rawData?.category || ''}
              onChange={(e) => setRawData({ ...rawData, category: e.target.value })}
              className='border border-gray-300 rounded px-3 py-2 w-full'
              placeholder='Nhập loại'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-1'>Giá</label>
            <input
              type='number'
              value={rawData?.price || ''}
              onChange={(e) => setRawData({ ...rawData, price: e.target.value })}
              className='border border-gray-300 rounded px-3 py-2 w-full'
              placeholder='Nhập giá'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-1'>Số lượng</label>
            <input
              type='number'
              value={rawData?.quantity || ''}
              onChange={(e) => setRawData({ ...rawData, quantity: e.target.value })}
              className='border border-gray-300 rounded px-3 py-2 w-full'
              placeholder='Nhập số lượng'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-1'>Giảm giá</label>
            <input
              type='number'
              value={rawData?.discount || ''}
              onChange={(e) => setRawData({ ...rawData, discount: e.target.value })}
              className='border border-gray-300 rounded px-3 py-2 w-full'
              placeholder='Nhập giảm giá'
            />
          </div>
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
              Lưu
            </button>
            <button
              type='button'
              onClick={handleCloseForm}
              className='ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ItemForm
