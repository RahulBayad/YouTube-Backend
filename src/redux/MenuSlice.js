import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice({
    name : "menu",
    initialState : {
        toggle : false
    },
    reducers : {
        toggleSidebar(state){
            state.toggle = !state.toggle
        }
    }
})

export const {toggleSidebar} = menuSlice.actions
export default menuSlice.reducer