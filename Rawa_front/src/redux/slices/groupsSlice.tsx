import {createSlice} from "@reduxjs/toolkit"

const initialState: [] = []

export const groupSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {
        setGroups: (state, action) => {
            state = action.payload
        }
    }
})

export const { setGroups } = groupSlice.actions

export default groupSlice.reducer