import { create } from 'zustand'
import userAction from '~/services/axios/actions/user.action'

const initialState = {
  isAuth: null,
  user: null,
}

const useAuth = create((set) => {
  return {
    ...initialState,
    login() {
      set({ isAuth: true })
    },
    logout() {
      set({ isAuth: false })
    },
    setUser(user) {
      set({ user })
    },
    async fetchMe() {
      try {
        const res = await userAction.getMe()
        set({ user: res })
      } catch (error) {
        this.logoutC()
      }
    },
  }
})

export default useAuth
