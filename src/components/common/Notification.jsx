import { toast } from 'react-toastify'
import { deleteItem } from '../../features/products-slice'

export const SuccessfulNotification = (name) => {
  console.log('reder 2 lân')
  const toastId = `${name}-error`
  if (!toast.isActive(toastId)) {
    toast.success(`${name} was successful`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      style: {
        backgroundColor: '#fff',
        color: '#000',
      },
    })
  }
}
export const FailedNotification = (name) => {
  return toast.error(`${name} was not successful`, {
    position: 'top-center',
    autoClose: 2000,
    closeOnClick: true,
    hideProgressBar: false,
  })
}

export const FailedAccess = async (name) => {
  return toast.error(`${name} access.Redirecting to login.`, {
    position: 'top-center',
    autoClose: 5000,
    closeOnClick: true,
    hideProgressBar: true,
  })
}
