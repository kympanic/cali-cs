import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
	return (
		<div className={`${styles.normalFlex}`}>
			{navItems &&
				navItems.map((i, index) => (
					<div className="flex" key={index}>
						<Link
							to={i.url}
							className={`${
								active === index + 1
									? "text-[#050f6bcb]"
									: "text-white"
							} font-[500] px-6 cursor-pointer`}
						>
							{i.title}
						</Link>
					</div>
				))}
		</div>
	);
};

export default Navbar;
