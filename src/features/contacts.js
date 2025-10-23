import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        { platform: 'Phone', handle: '+973 3412 3546', categories: ['contact'], url: 'tel:+97334123546', icon: '/socialMediaIcons/Phone.svg' },
        { platform: 'WhatsApp', handle: 'Chat on WhatsApp', categories: ['contact'], url: 'https://wa.me/97334123546', icon: '/socialMediaIcons/Whatsapp.svg' },
        { platform: 'Email', handle: 'ahmadrza.1110@gmail.com', categories: ['contact'], url: 'mailto:ahmadrza.1110@gmail.com', icon: '/socialMediaIcons/Email.svg' },
        { platform: 'LinkedIn', handle: 'linkedin.com/in/ahmdrza', categories: ['media','contact','portfolio'], url: 'https://bh.linkedin.com/in/ahmdrza', icon: '/socialMediaIcons/Linkedin.svg' },
        { platform: 'GitHub', handle: 'github.com/Ahmadrzaa', categories: ['media','portfolio'], url: 'https://github.com/Ahmadrzaa', icon: '/socialMediaIcons/Github.svg' },
    ]
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
});

export default contactsSlice.reducer;
