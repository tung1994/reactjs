import React from 'react'
import { useSelector } from 'react-redux'
import { selectMessageById } from '../../selectors/dashboard'

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

const FooterSend = () => {
    return (
        <div className='d-flex footer'>
            <input className='form-control input' placeholder='Aa'/>
        </div>
    )
}

const Messagereceives = (props) => {
    return (
        <>
        <div className='d-flex'>
            <img className='image2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9a-rqE4Cgj0D55zJ-lUGUrIu1bvN31zrwaMMjWlJViZaXqTK9awchBhDOQjN1EiclqEQ&usqp=CAU'/>
            <div className='receive-text'>
            <p className='text-inline'>{props.content}</p>
            </div>
        </div>
        <h2 className='clearfix'></h2>
        </>
    );
}

const MessageSends = (props) => {
    return (
        <>
        <div className='text-right'>
            <div className='sent-text'>
                <p className='text-inline'>{props.content}</p>
            </div>
        </div>
        <h2 className='clearfix'></h2>
        </>
    );
}

const TabCenter = () => {
    const Messages = useSelector(selectMessageById())
    return (
        <div className='tab-center'>
            <HeaderCenter/>
            <div className='message'>
                {Messages.map((value, key) => 
                    {
                        return value.from == 0 ?
                            <Messagereceives content={value.content}/>
                        :
                            <MessageSends content={value.content}/>
                    }        
                )}
            </div>
            <FooterSend/>
        </div>
    );
};


export default TabCenter