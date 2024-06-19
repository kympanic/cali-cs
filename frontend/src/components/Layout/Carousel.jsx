import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
	genpak,
	georgia,
	gojo,
	impact,
	pactive,
	rubbermaid,
	tork,
} from "../../assets";

const Carousel = () => {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		appendDots: (dots) => (
			<div
				style={{
					backgroundColor: "transparent",
					borderRadius: "20px",
					padding: "20px",
					position: "absolute",
					bottom: 0,
					color: "blue",
				}}
			>
				<ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		),
	};
	return (
		<div className="w-full ">
			<Slider {...settings}>
				<div className="w-full ">
					<img className="w-full object-cover" src={georgia} alt="" />
				</div>
				<div className="w-full ">
					<img className="w-full object-cover" src={gojo} alt="" />
				</div>
				<div className="w-full ">
					<img className="w-full object-cover" src={genpak} alt="" />
				</div>
				<div className="w-full ">
					<img className="w-full object-cover" src={impact} alt="" />
				</div>
				<div className="w-full ">
					<img className="w-full object-cover" src={pactive} alt="" />
				</div>
				<div className="w-full">
					<img
						className="w-full object-cover"
						src={rubbermaid}
						alt=""
					/>
				</div>
				<div className="w-full ">
					<img className="w-full object-cover" src={tork} alt="" />
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
