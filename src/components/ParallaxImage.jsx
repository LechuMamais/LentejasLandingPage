function ParallaxImage() {
  return (
    <div className="relative h-[240px] overflow-hidden">
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
        <img
          src="/images/ParallaxImage.jpg"
          alt="Parallax"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ParallaxImage;
