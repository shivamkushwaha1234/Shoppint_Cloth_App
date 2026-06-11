import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="img-container">
        <img
          className="img-home"
          src="https://images.pexels.com/photos/37713979/pexels-photo-37713979.jpeg"
          alt="Banner"
        />

        <Link
          className="primary-btn position-img-button"
          to="/products"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Home;