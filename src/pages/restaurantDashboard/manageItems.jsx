import React, { useState, useEffect } from 'react'
import LoadingOverlay from 'react-loading-overlay-ts'
import hero from '../../assets/hero.png'
import ItemForm from '../../components/Dashboard/commom/ItemForm'
import { fetchAllItem, deleteItem, addItem, updateItem } from '../../features/products-slice'
import { useDispatch, useSelector } from 'react-redux'
import {
  SuccessfulNotification,
  FailedNotification,
} from '../../components/common/Notification.jsx'

const ManageItems = () => {
  const dispatch = useDispatch()
  const { itemList, isLoading, error } = useSelector((state) => state.RestaurantItems)

  const [openForm, setOpenForm] = useState(false)
  const [rawData, setRawData] = useState(null)
  const [imgFile, setImgFile] = useState(null)
  const [currentEditedId, setCurrentEditedId] = useState(null)
  const [currentUrl, setCurrentUrl] = useState(null)

  // Mở form tạo món mới
  const handleCreateItem = () => {
    setCurrentEditedId(null)
    setOpenForm(true)
    setRawData({
      images: '',
      title: '',
      description: '',
      category: '',
      price: '',
      quantity: '',
      discount: '',
    })
  }

  // Submit thêm mới hoặc cập nhật món
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('title', rawData.title)
      formData.append('description', rawData.description)
      formData.append('price', rawData.price)
      formData.append('category', rawData.category)
      formData.append('quantity', rawData.quantity)
      formData.append('discount', rawData.discount)

      if (imgFile) {
        formData.append('images', imgFile) // Thêm ảnh nếu có
      }

      if (currentEditedId) {
        // Chỉnh sửa món
        await dispatch(
          updateItem({
            currentEditedId,
            formData,
          }),
        )
        SuccessfulNotification('Item updated successfully')
      } else {
        // Thêm mới món
        await dispatch(addItem(formData))
        SuccessfulNotification('Item added successfully')
      }

      dispatch(fetchAllItem()) // Cập nhật danh sách món
      setOpenForm(false) // Đóng form
    } catch (err) {
      FailedNotification('Failed to process item')
    }
  }

  // Xử lý xóa món
  const handleDeleteItem = async (id) => {
    try {
      await dispatch(deleteItem(id))
      SuccessfulNotification('Item deleted successfully')
      dispatch(fetchAllItem()) // Cập nhật danh sách món
    } catch (err) {
      FailedNotification('Failed to delete item')
    }
  }

  // Lấy danh sách món ăn khi component được mount
  useEffect(() => {
    dispatch(fetchAllItem())
  }, [dispatch])

  return (
    <LoadingOverlay active={isLoading} spinner text='Loading...'>
      <div className='relative mx-5 my-2 px-3 py-4'>
        <div className='flex justify-between mb-3'>
          <h3 className='text-3xl font-bold'>Manage Items</h3>
          <button
            onClick={handleCreateItem}
            className='bg-blue-600 text-white font-bold rounded-md px-3 py-2'
          >
            Add New Product
          </button>
        </div>

        <div className='bg-white shadow rounded'>
          <div className='px-6 pb-6'>
            <table className='w-full border'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {itemList?.length > 0 ? (
                  itemList.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={item.imageUrl[0]?.url || hero}
                          alt={item.title}
                          className='w-[100px] mx-auto'
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className='bg-yellow-500 text-white px-2 py-1 rounded'
                          onClick={() => {
                            setCurrentEditedId(item._id)
                            setRawData(item)
                            setCurrentUrl(item.imageUrl[0]?.url || null)
                            setOpenForm(true)
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className='bg-red-500 text-white px-2 py-1 rounded ml-2'
                          onClick={() => handleDeleteItem(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan='5' className='text-center'>
                      No items found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <ItemForm
          rawData={rawData}
          setRawData={setRawData}
          openForm={openForm}
          setOpenForm={setOpenForm}
          currentEditedId={currentEditedId}
          onSubmit={onSubmit}
          imgFile={imgFile}
          setImgFile={setImgFile}
          currentUrl={currentUrl}
          setCurrentUrl={setCurrentUrl}
        />
      </div>
    </LoadingOverlay>
  )
}

export default ManageItems
