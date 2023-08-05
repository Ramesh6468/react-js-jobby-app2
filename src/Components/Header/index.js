import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'
import {BsFillBagFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    console.log(history)
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div className="headerCard">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </Link>
        <ul className="itemList">
          <Link to="/">
            <li className="item">Home</li>
          </Link>
          <Link to="/jobs">
            <li className="item">Jobs</li>
          </Link>
        </ul>
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>

      <div className="headerCard1">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
        </Link>
        <ul className="itemList">
          <Link to="/">
            <li className="item">
              <AiFillHome className="icon" />
            </li>
          </Link>
          <Link to="/jobs">
            <li className="item">
              <BsFillBagFill className="icon" />
            </li>
          </Link>
        </ul>
        <button type="button" className="button2" onClick={onClickLogout}>
          <BiLogIn className="icon2" />
        </button>
      </div>
    </>
  )
}

export default withRouter(Header)
