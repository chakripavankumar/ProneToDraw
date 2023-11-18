import { configureStore } from "@reduxjs/toolkit"; 
import MenuReducer from '@/slice/menuslice'
import ToolboxReducer from '@/slice/toolboxslice'

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        
        toolbox:ToolboxReducer
        
    }
    
})