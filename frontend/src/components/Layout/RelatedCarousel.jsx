import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const RelatedCarousel = ({ relatedProducts }) => {
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} `}
				style={{
					...style,
					display: "flex",
					background: "blue",
					height: "30px",
					width: "30px",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50px",
				}}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} `}
				style={{
					...style,
					display: "flex",
					background: "blue",
					height: "30px",
					width: "30px",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "50px",
				}}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div className="slider-container">
			<Slider {...settings}>
				{relatedProducts.map((product) => {
					return (
						<div
							key={product?.id}
							className="pl-10 pr-10 pt-10 pb-10 flex flex-col "
						>
							<img
								className="w-[150px] h-[150px] object-contain"
								src={product?.image}
								alt=""
							/>
							<h3 className="truncate pt-2 cursor-pointer">
								<Link to={`/product/${product?.id}`}>
									{product?.title}
								</Link>
							</h3>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default RelatedCarousel;
