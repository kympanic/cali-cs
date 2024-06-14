import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown, dropDown }) => {
	return (
		<div className="pb-4 w-[200px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
			{categoriesData &&
				categoriesData.map((i, index) => {
					return (
						<div
							key={index}
							className={`${styles.normalFlex} hover:bg-gray-200 `}
						>
							<h3 className="m-3 cursor-pointer select-none">
								{i.title}
							</h3>
						</div>
					);
				})}
		</div>
	);
};

export default DropDown;
