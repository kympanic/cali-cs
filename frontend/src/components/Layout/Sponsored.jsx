import styles from "../../styles/styles";
import {
	rubbermaidlogo,
	gojologo,
	torklogo,
	gplogo,
	essitylogo,
} from "../../assets";

const Sponsored = () => {
	return (
		<div
			className={`${styles.section} mt-[100px] hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
		>
			<div className="flex justify-between w-full items-center">
				<div className="flex items-start">
					<img
						src={gojologo}
						alt=""
						style={{ width: "150px", objectFit: "contain" }}
					/>
				</div>
				<div className="flex items-start">
					<img
						src={rubbermaidlogo}
						style={{ width: "200px", objectFit: "contain" }}
						alt=""
					/>
				</div>
				<div className="flex items-start">
					<img
						src={torklogo}
						style={{ width: "150px", objectFit: "contain" }}
						alt=""
					/>
				</div>
				<div className="flex items-start">
					<img
						src={essitylogo}
						style={{ width: "170px", objectFit: "contain" }}
						alt=""
					/>
				</div>
				<div className="flex items-start">
					<img
						src={gplogo}
						style={{ width: "150px", objectFit: "contain" }}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Sponsored;
