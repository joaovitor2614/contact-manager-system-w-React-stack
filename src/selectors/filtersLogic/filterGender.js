export default (contact, gender) => {
    if (!contact.gender) {
        return contact
    } else if (gender === 'all') {
        return contact
    } else if (gender === 'male') {
        if (contact.gender === 'male') {
            return contact
        }
    } else if (gender === 'female') {
        if (contact.gender === 'female') {
            return contact
        }
    } else {
        return;
    }
}
