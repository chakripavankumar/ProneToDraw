import { configureStore } from "@reduxjs/toolkit";
import MenuReduceder  from '@/slice/menuSlice'
 
export const store = configureStore({
    reducer: {
        menu: MenuReduceder
    }

})