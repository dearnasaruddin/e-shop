import { configureStore } from '@reduxjs/toolkit'
import categoriesSideBarReducer from './slices/categoriesSideBarSlice'
import  navSideBarReducer  from './slices/navSideBarSlice'

export const store = configureStore({
    reducer: {
        handleCategoriesSideBar: categoriesSideBarReducer,
        handleNavSideBar: navSideBarReducer
    },
})