import { configureStore } from '@reduxjs/toolkit'
import categoriesSideBarSlice from './slices/categoriesSideBarSlice'

export const store = configureStore({
    reducer: {
        handleCategoriesActive: categoriesSideBarSlice
    },
})