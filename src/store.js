import { configureStore } from "@reduxjs/toolkit";
import MenuReduceder from '@/slice/menuSlice'
import ToolbarReducer from '@/slice/toolboxSlice'
 
export const store = configureStore({
    reducer: {
        menu: MenuReduceder,
        toolbar: ToolbarReducer
    }

})