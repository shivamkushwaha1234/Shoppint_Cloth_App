import {Link} from "react-router-dom"
const Home=()=>{
    return (<>
    <h1>
    <section>
        <img className="img-home"src="https://images.pexels.com/photos/37713979/pexels-photo-37713979.jpeg"  />
        <Link className="primary-btn"to="/products">Show Now</Link>
    </section>
        </h1></>)
}
export default Home