import { configureStore } from "@reduxjs/toolkit"; 
import Menureducer from "./src/slice/menuslice"
import ToolboxReducer from './src/slice/toolboxslice';

export const store = configureStore({
    reducer: {
        menu: Menureducer,
        
        toolbox:ToolboxReducer
        
    }
    
})