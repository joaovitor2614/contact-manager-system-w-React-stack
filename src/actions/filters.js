

export const setClearFilter = () => ({
    type: 'SET_CLEAR_FILTER'
})

export const setNameFilter = (text) => ({
    type: 'SET_NAME_FILTER',
    text
})

export const setGenderFilter = (gender) => ({
    type: 'SET_GENDER_FILTER',
    gender
})

export const setMonthFilter = (month) => ({
    type: 'SET_MONTH_FILTER',
    month
})

export const setStartAgeFilter = (startAge) => ({
    type: 'SET_START_AGE',
    startAge
})

export const setEndAgeFilter = (endAge) => ({
    type: 'SET_END_AGE',
    endAge
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

export const sortByAlpha = () => ({
    type: 'SORT_BY_ALPHA'
})