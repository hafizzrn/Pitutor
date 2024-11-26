import imageSectionMain from "./../../../assets/image-section.svg";
import imageSectionBottom from "./../../../assets/image-section-bottom.png";

const ImageSection = () => {
  return (
    <section className="pb-40 container relative">
      <img src={imageSectionBottom} alt="" className="absolute -bottom-10 opacity-50" />
      <img src={imageSectionMain} alt="" className="w-full" />
    </section>
  );
};

export default ImageSection;
