import React, { useState, useEffect } from 'react'
import api from '~/features/api'
import LoadingOverlay from 'react-loading-overlay-ts'

const SpecialtyFood = () => {
  const [specialFood, setSpecialFood] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditFood, setIsEditFood] = useState(false)
  const [editingFood, setEditingFood] = useState(null)
  const [imgFood, setImgFood] = useState(null)
  const [nameFood, setNameFood] = useState('')

  const fetchAllSpecialFood = async () => {
    setIsLoading(true)
    try {
      const res = await api.get('/admin/specialty-food')
      if (res.data) {
        setSpecialFood(res.data.specialtyFoods)
      } else {
        console.error('Failed to fetch data:', res.status)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const openModal = (food = null) => {
    if (food) {
      setEditingFood(food)
      setNameFood(food.name)
    } else {
      setEditingFood(null)
      setNameFood('')
    }
    setImgFood(null)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleImageChange = (e) => {
    setImgFood(e.target.files[0])
  }

  const handleSaveFood = async () => {
    const formData = new FormData()
    formData.append('name', nameFood)
    if (imgFood) {
      formData.append('image', imgFood)
    }

    try {
      if (editingFood) {
        await api.patch(`/admin/specialty-food/edit/${editingFood._id}`, formData)
        alert('Cập nhật món ăn thành công!')
      } else {
        await api.post('/admin/specialty-food/create', formData)
        alert('Thêm món ăn thành công!')
      }
      fetchAllSpecialFood()
      closeModal()
    } catch (error) {
      console.error('Error saving food:', error)
      alert(error.message || 'Đã xảy ra lỗi!')
    }
  }

  const handleDeleteFood = async (foodID) => {
    if (!foodID) {
      alert('Food ID is required')
      return
    }
    try {
      await api.delete(`/admin/specialty-food/delete/${foodID}`)
      alert('Món ăn đã được xóa thành công!')
      fetchAllSpecialFood()
    } catch (error) {
      console.error('Error deleting food:', error)
      alert('Đã xảy ra lỗi khi xóa món ăn')
    }
  }

  useEffect(() => {
    fetchAllSpecialFood()
  }, [])

  return (
    <LoadingOverlay active={isLoading} spinner text='Đang tải dữ liệu...'>
      <div className='h-100 py-10'>
        <div className='px-6 pb-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-[40px] text-center text-primary'>
              QUẢN LÝ MÓN ĂN ĐẶC SẢN
            </h1>
            <button
              className='px-2 py-2 text-white bg-green-500 rounded'
              onClick={() => openModal()}
            >
              Thêm món đặc sản
            </button>
          </div>
          <table className='w-full border-2 mt-10'>
            <thead>
              <tr>
                <th className='bg-secondary text-accent text-[20px]'>Ảnh món ăn</th>
                <th className='bg-secondary text-accent text-[20px]'>Tên</th>
                <th className='bg-secondary text-accent text-[20px]'>Xử lý</th>
              </tr>
            </thead>
            <tbody>
              {specialFood && specialFood.length > 0 ? (
                specialFood.map((item) => (
                  <tr key={item._id}>
                    <td className='flex justify-center items-center'>
                      {item.imageUrl?.url ? (
                        <img
                          src={item.imageUrl.url}
                          alt={item.name}
                          className='w-[150px] h-[150px] object-cover rounded-xl'
                        />
                      ) : (
                        'No Image'
                      )}
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        className='px-2 py-1 bg-green-500 text-white rounded'
                        onClick={() => openModal(item)}
                      >
                        Chỉnh sửa
                      </button>
                      <button
                        className='px-2 py-1 bg-red-700 text-white rounded ml-2'
                        onClick={() => handleDeleteFood(item._id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='3' className='text-center'>
                    Không có dữ liệu để hiển thị.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-4 rounded-md w-[400px]'>
              <h2 className='text-2xl font-bold mb-4 uppercase'>
                {editingFood ? 'Chỉnh sửa món ăn' : 'Thêm món ăn'}
              </h2>
              <div>
                <label htmlFor='name' className='block mb-2 text-left'>
                  Tên món ăn
                </label>
                <input
                  type='text'
                  id='name'
                  value={nameFood}
                  onChange={(e) => setNameFood(e.target.value)}
                  className='w-full border p-2 rounded mb-4'
                />
                <label htmlFor='image' className='block mb-2 text-left'>
                  Chọn ảnh
                </label>
                <input
                  type='file'
                  id='image'
                  onChange={handleImageChange}
                  className='w-full border p-2 rounded mb-4'
                />
              </div>
              <div className='flex justify-end'>
                <button
                  className='px-4 py-2 bg-blue-500 text-white rounded mr-2'
                  onClick={handleSaveFood}
                >
                  Lưu
                </button>
                <button className='px-4 py-2 bg-gray-500 text-white rounded' onClick={closeModal}>
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </LoadingOverlay>
  )
}

export default SpecialtyFood
