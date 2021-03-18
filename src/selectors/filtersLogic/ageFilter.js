

export default (contact, startAge, endAge) => {
    if (!contact.age) {
        return contact
    } else if (contact.age >= startAge && contact.age <= endAge) {
        return contact
    }
}
