function ParallaxImage() {
  return (
    <div
      className="w-[100svw] h-[240px] bg-[url(/images/ParallaxImage.jpg)] bg-cover bg-center"
      style={{ backgroundAttachment: 'scroll' }}
    />
  );
}

export default ParallaxImage;
