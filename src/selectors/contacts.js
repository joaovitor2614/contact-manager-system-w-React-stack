import filterMonth from './filtersLogic/monthFilter'
import ageFilter from './filtersLogic/ageFilter'
import filterGender from './filtersLogic/filterGender'


function gotMonth(contact, month) {
    if (!contact.date) {
        return contact
    } else {
        return filterMonth(contact, month)
    }
}

export default (contacts, { text, gender, month, startAge, endAge, sortBy }) => {
    return contacts.filter((contact) => {
        if (contact.date) {
            const splitDate = contact.date.split("-");
            const monthNumber = splitDate[1]

        }
        const name = `${contact.firstName} ${contact.lastName}`
        const textMatch = name.toLowerCase().includes(text.toLowerCase())

        return textMatch && filterGender(contact, gender) && gotMonth(contact, month) && ageFilter(contact, startAge, endAge)
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if (sortBy === 'alphabetical') {
            return a.firstName < b.firstName ? -1 : 1;
        }
    })
}