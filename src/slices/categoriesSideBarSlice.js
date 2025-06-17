import { createSlice } from '@reduxjs/toolkit'

const initialState ={ value: false}

export const categoriesSideBarSlice = createSlice({
  name: 'categoriesSideBarSlice',
  initialState,
  reducers: {
    enableSideBar: (state) => {
      state.value = true
    },
    disableSideBar: (state) => {
      state.value = false
    }
  },
})

export const { enableSideBar, disableSideBar } = categoriesSideBarSlice.actions

export default categoriesSideBarSlice.reducer