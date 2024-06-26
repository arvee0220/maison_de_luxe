import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { images } from "../../constants";
import SubHeading from "../../components/Subheading/SubHeading.component";
import "./Gallery.styles.scss";
import { useRef } from "react";

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
	const scrollRef = useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === "left") {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className="app__gallery flex_center">
			<div className="app__gallery-content">
				<SubHeading title="Instagram" />
				<h1 className="headtext__bodoni">Photo Gallery</h1>
				<p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
					Discover the exquisite culinary creations served at Maison De Luxe. Our photo
					gallery offers a glimpse into the artistry and passion behind each dish. Bon
					appétit!
				</p>
				<button type="button" className="custom__button">
					View More
				</button>
			</div>

			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{galleryImages.map((img, i) => (
						<div
							className="app__gallery-images_card flex__center"
							key={`gallery_image-${i + 1}`}
						>
							<img src={img} alt="gallery" />
							<BsInstagram className="gallery__image-icon" />
						</div>
					))}
				</div>

				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => scroll(`left`)}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => scroll(`right`)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
