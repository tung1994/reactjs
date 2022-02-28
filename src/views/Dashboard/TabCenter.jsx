import React from 'react'

const HeaderCenter = () => {
    return (
        <div className='d-flex margin borderBottom'>
          <img className='image1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9a-rqE4Cgj0D55zJ-lUGUrIu1bvN31zrwaMMjWlJViZaXqTK9awchBhDOQjN1EiclqEQ&usqp=CAU'/>
          <div>
            <p><span className='name-center'>Nguyễn Văn B</span><br/>
              Đang hoạt động</p>
          </div>
        </div>
    );
}

const MessageCenter = (props) => {
    return (
        <div>
            <div className='message'>
            <div className='d-flex'>
                <img className='image2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9a-rqE4Cgj0D55zJ-lUGUrIu1bvN31zrwaMMjWlJViZaXqTK9awchBhDOQjN1EiclqEQ&usqp=CAU'/>
                <div className='receive-text'>
                <p className='text-inline'>{props.received}</p>
                </div>
            </div>
            <div className='text-right'>
                <div className='sent-text'>
                <p className='text-inline'>{props.sent}</p>
                </div>
            </div>
            </div>
            <h2 className='clearfix'></h2>
        </div>
    );
}

const Messages = [
    {
        'received' : 'do you know? I like you so much',
        'sent'     : "i don't know. Sorry",
    },
    {
        'received' : 'do you know? I like you so much',
        'sent'     : "i don't know. Sorry",
    },
    {
        'received' : 'do you know? I like you so much',
        'sent'     : "i don't know. Sorry",
    },
    {
        'received' : 'do you know? I like you so much',
        'sent'     : "i don't know. Sorry",
    },
    {
        'received' : 'do you know? I like you so much',
        'sent'     : "i don't know. Sorry",
    },
];

const TabCenter = () => {
    return (
        <div className='tab-center'>
            <HeaderCenter/>
            {Messages.map((value, key) => (
                <MessageCenter received={value.received} sent={value.sent}/>
            ))}
        </div>
    );
};


export default TabCenter