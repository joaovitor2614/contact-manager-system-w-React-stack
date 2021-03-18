const filterMonth = (contact, month) => {
    const splitDate = contact.date.split("-");
    const monthNumber = splitDate[1]

    switch (month) {
        case 'all':
            console.log('all case')
            return contact
            break;
        case 'jan':
            if (monthNumber === '01') {
                return contact
            }
            break;
        case 'feb':
            if (monthNumber === '02') {
                return contact
            }
            break;
        case 'march':
            if (monthNumber === '03') {
                return contact
            }
            break;
        case 'apr':
            if (monthNumber === '04') {
                return contact
            }
            break;
        case 'ma':
            if (monthNumber === '05') {
                return contact
            }
            break;
        case 'jun':
            if (monthNumber === '06') {
                return contact
            }
            break;
        case 'jul':
            if (monthNumber === '07') {
                return contact
            }
            break;
        case 'aug':
            if (monthNumber === '08') {
                return contact
            }
            break;
        case 'set':
            if (monthNumber === '09') {
                return contact
            }
            break;
        case 'oct':
            if (monthNumber === '10') {
                return contact
            }
            break;
        case 'nov':
            if (monthNumber === '11') {
                return contact
            }
            break;
        case 'dez':
            if (monthNumber === '12') {
                return contact
            }
            break;
        default:
            return contact


    }
}

export default filterMonth