function BackgroundHeader({ className, imgSrcDesktop, imgSrcMobile }) {
  return (
    <div className={className}>
      <img className="hidden md:block w-full" src={imgSrcDesktop} />
      <img className="block md:hidden w-full" src={imgSrcMobile} />
    </div>
  );
}

export default BackgroundHeader;
