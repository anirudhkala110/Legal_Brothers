let details = [
    {
        id: "a2ae7f7d-c45e-4cb5-a999-ad9d32bd0080",
        name: "Testing Name",
        mobile: "7668490213",
        email: "anirudhkala110@gmail.com",
        date: "12/6/2023",
        time: "12:27 PM",
        query: "Testing data"
    },
    {
        id: "a2ae7f7d-c45f-4cb5-a999-ad9d32bd0080",
        name: "Testing Name",
        mobile: "7668490000",
        email: "anirudhkala110@gmail.com",
        date: "12/6/2023",
        time: "12:27 PM",
        query: "Testing data"
    },
]

if (!localStorage.getItem('contactDetailsSaved')) {
    localStorage.setItem('contact-details', JSON.stringify(details))
}
export default details