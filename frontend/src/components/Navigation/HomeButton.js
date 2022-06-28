import { Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const HomeButton = () => {
    const history = useHistory()

    const handleOnClick = e => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <div className='home-button-logo'>
            <button onClick={handleOnClick} className='home-button'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAQAAAAs/tcnAAABMUlEQVR4Ac3UJfQUARTGUaxnrBHpPeDu7u7uTg/QO/SK9q1U3KHg2i7fH4exNeSdc9/ZNL/RHfRfjdHOuOajt246b7Fh/T38WO/9OnfM7s+hx3gUh5XNWYN7D4wnTlOe6OGsv/6eQlQFmNX9WScTs4jqwD3DOr/j04gJxHyiOsCiTgITibnEdGIJURc410lgJrGYmE+sIuoCz1301BstGwxueqQLiVXEMmI9cVp7c9WIYmAqkUysIjYQa4mtRAJtJwb//kgXEdOJTcR2Yiuxi2g/wIYfgTnEBmIFsYvYS+whDhCdBFo/ApuJvcRO4hBxhDhMHCU6Cbz5EThKHCe+7BNEcXceKFxB/e7yFs0h1hP1u/OHXHiL6nfnr2nhO6jfR3r50L5cR9O+oX5+/FX8vfkElmh0Xu+KRLEAAAAASUVORK5CYII='></img>
                Home
                </button>
        </div>
    )
}

export default HomeButton
