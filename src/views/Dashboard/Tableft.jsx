import React from 'react'
import { useSelector } from 'react-redux'
import { selectListUser } from '../../selectors/dashboard'
import { useHistory } from 'react-router-dom'
import { dashboardActions as action } from 'src/slices/dashboard'
import { useDispatch } from 'react-redux'

const HeaderLeft = () => {
    return (
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <h2>Chat</h2>
            <input className='form-control input' placeholder='Tìm kiếm trên Messenger'/>
        </div>
    )
}

const ItemUser = (props) => {
    const {active, image, name, info, id} = props;
    const history = useHistory()
    const dispatch = useDispatch();
    const userSelected = (id) => {
        // history.push('/' + id)
        dispatch(action.fetchMessageById(id))
    }
    return (
        <div className='d-flex margin' onClick={ () =>userSelected(id) }>
          <img className='image' src={image}/>
          <div className='info'>
            <p>{name} <br/>
              {info}・{active}
            </p>
          </div>
        </div>
    );
}

const Tableft = () => { 
    const UserInfos = useSelector(selectListUser())
    return (
        <div className='tab-left'>
            <HeaderLeft />
            {UserInfos.map((value, key) => (
                <ItemUser id={value.id} image={value.profile_image_url} name={value.name} info={value.last_message} active={value.last_time}/>
            ))}
        </div>
    )}

export default Tableft