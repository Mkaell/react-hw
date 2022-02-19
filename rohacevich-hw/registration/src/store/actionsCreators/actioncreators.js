export const fetchingremove = () => ({
    type: "FETCHING_DELETED"
})

export const fetchingstart = (data) => ({
    type: 'FETCHING_START',
    payload: data
})