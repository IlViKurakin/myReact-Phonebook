function ContactList({contacts, onDeleteContact}) {

    // Рендеринг контента субкомпонента
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button onClick={()=> onDeleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList