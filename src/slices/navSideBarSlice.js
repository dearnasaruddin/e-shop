import { createSlice } from '@reduxjs/toolkit'

const initialState ={ value: false}

export const navSideBarSlice = createSlice({
  name: 'navSideBarSlice',
  initialState,
  reducers: {
    enableNavSideBar: (state) => {
      state.value = true
    },
    disableNavSideBar: (state) => {
      state.value = false
    }
  },
})

export const { enableNavSideBar, disableNavSideBar } = navSideBarSlice.actions

export default navSideBarSlice.reducer