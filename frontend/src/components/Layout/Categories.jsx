import React from "react";
import { brandingData } from "../../static/data";
import styles from "../../styles/styles";

const Categories = () => {
	return (
		<>
			<div className={`${styles.section}`}>
				<div className="my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md">
					{brandingData &&
						brandingData.map((i, index) => (
							<div className="flex items-start" key={index}>
								<div className="px-3">
									{i.icon}
									<h3 className="font-bold text-sm md:text-base">
										{i.title}
									</h3>
									<p className="text-xs md:text-sm">
										{i.Description}
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default Categories;
