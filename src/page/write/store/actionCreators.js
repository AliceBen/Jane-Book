import  * as actionType from './actionType'

export const changleNewWrite = () => ({
    type:actionType.NEW_WRITE
})

export const changeCancelWrite = (count) => ({
    type:actionType.CANCELWRITE,
    count
})

export const handleAddWrite = () => ({
    type:actionType.HANDLE_ADD_WRITE
})