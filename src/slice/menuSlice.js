import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITEMS } from "@/constant";

const initialState = {
    activeMenuItem: MENU_ITEMS.PENCIL,
    actionMenuItem: null
    
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuItemClick: (state, action) => {
            state.activeMenuItem = action.payload
            
        },
        actionMenuItem: (state, action) => {
            state.actionMenuItem=action.payload
        }
    }
    
})
export const { menuItemClick,actionMenuItem } = menuSlice.actions

export default menuSlice.reducer