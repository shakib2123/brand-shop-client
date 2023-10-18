const Banner = () => {
  return (
    <div
      className="hero min-h-[87vh] bg-cover bg-center max-w-7xl mx-auto"
      style={{
        backgroundImage: "url(https://i.ibb.co/7b7hymM/tech-gadgets.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Your Source for Global Tech Products
          </h1>
          <p className="mb-5">
            Welcome to Global Tech, where tech dreams come to life. Explore our
            wide range of cutting-edge tech products that are designed to make
            your life smarter, easier, and more enjoyable. Embrace innovation
            today.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
