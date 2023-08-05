import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="HomeCard">
      <h1 className="title">Find The Job That Fits Your Life</h1>
      <p className="para">
        Millions of people are searching for jobs,salary information,company
        reviews.Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs">
        <button className="button2" type="button">
          Find Jobs
        </button>
      </Link>
    </div>
  </>
)

export default Home
