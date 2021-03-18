


const filtersDefault = {
    text: '',
    gender: 'all',
    month: 'all',
    sortBy: 'date',
    startAge: 0,
    endAge: 200
}

export default (state = filtersDefault, action) => {
    switch (action.type) {
        case 'SET_CLEAR_FILTER':
            return {
                text: '',
                gender: 'all',
                month: 'all',
                sortBy: 'date',
                startAge: 0,
                endAge: 200
            }
        case 'SET_NAME_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_GENDER_FILTER':
            return {
                ...state,
                gender: action.gender
            }
        case 'SET_MONTH_FILTER':
            return {
                ...state,
                month: action.month
            }
        case 'SET_START_AGE':
            return {
                ...state,
                startAge: action.startAge
            }
        case 'SET_END_AGE':
            return {
                ...state,
                endAge: action.endAge
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_ALPHA':
            return {
                ...state,
                sortBy: 'alphabetical'
            }
        default:
            return state

    }
}