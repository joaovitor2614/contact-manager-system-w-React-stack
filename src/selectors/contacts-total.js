


const contactsBalance = (contacts) => {
    let contactsTotal = 0, totalMale = 0, totalFemale = 0;

    contacts.forEach((contact) => {
        if (contact.gender && contact.gender === 'male') {
            totalMale++
            contactsTotal++
        } else if (contact.gender && contact.gender === 'female') {
            totalFemale++
            contactsTotal++
        } else if (!contact.gender) {
            contactsTotal++
        } else if (!contact) {
            return;
        }
    })

    return { contactsTotal, totalMale, totalFemale }
}

export default contactsBalance