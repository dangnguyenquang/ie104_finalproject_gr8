import React, { useState } from 'react'
import { Button } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

const AvatarUploader = ({ currentAvatar, onAvatarChange }) => {
  const [avatar, setAvatar] = useState(currentAvatar)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl) // Hiển thị preview ảnh
      onAvatarChange(file) // Truyền file ảnh về parent component
    }
  }

  return (
    <div className='flex flex-col items-center'>
      {/* Hiển thị avatar */}
      <div className='mb-4'>
        {avatar ? (
          <img
            src={avatar}
            alt='Avatar'
            className='w-40 h-40 rounded-full object-cover border border-gray-300'
          />
        ) : (
          <div className='w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center'>
            <span className='text-gray-500'>Chưa có ảnh</span>
          </div>
        )}
      </div>

      {/* Nút chọn ảnh */}
      <input
        type='file'
        accept='image/*'
        id='avatar-upload'
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor='avatar-upload'>
        <Button
          variant='outlined'
          startIcon={<PhotoCameraIcon />}
          component='span'
          sx={{
            color: '#000',
            borderColor: '#ccc',
            padding: '8px 16px',
            borderRadius: '24px',
            fontWeight: 'bold',
            fontSize: '14px',
            textTransform: 'none',
          }}
        >
          Đổi hình
        </Button>
      </label>
    </div>
  )
}

export default AvatarUploader
