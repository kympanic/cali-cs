import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Header from "../components/Layout/Header";
import RouteBar from "../components/Layout/RouteBar";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";
import { BsPlus } from "react-icons/bs";
import RelatedCarousel from "../components/Layout/RelatedCarousel";

function ProductDetailsPage() {
	const { id } = useParams();
	const { products } = useContext(ProductContext);

	const product = products.find((item) => {
		return item.id == id;
	});

	const relatedProducts = products.filter((el) => {
		return product?.category == el.category && product?.id !== el?.id;
	});

	return (
		<>
			<Header />
			<div className="w-3/4 mx-auto flex flex-col bg-white mt-2 rounded-t-md">
				<RouteBar product={product} />
				<div className="flex flex-wrap justify-between h-[400px] mt-4 ">
					<div className="flex ">
						<div className="w-[400px] flex justify-center items-center">
							<img
								className="h-[300px] w-[300px] object-contain"
								src={product?.image}
								alt=""
							/>
						</div>
						<div className="w-[650px] ml-5">
							<h1 className="w-full text-3xl font-bold mb-1 break-words">
								{product?.title}
							</h1>
							<p className=" font-bold text-gray-600">
								Item #: 8mx951sas
							</p>
							<ul className="list-disc pl-8 mt-3">
								<li className="text-sm">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Similique saepe
								</li>
								<li className="text-sm">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Similique saepe
								</li>
								<li className="text-sm">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Similique saepe
								</li>
								<li className="text-sm ">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Similique saepe
								</li>
							</ul>
							<span className=" text-sm font-bold ml-5">
								MANUFACTURERS ITEM #17713
							</span>
						</div>
					</div>

					<div className="w-[200px] flex flex-col align-center justify-start pr-7 ">
						<span className="w-full flex justify-center font-semibold">
							Quantity:
						</span>
						<div className="flex w-full justify-center align-middle mt-2 h-8">
							<input
								type="number"
								className="border w-[75px] text-center  "
							/>
							<div className="ml-2 w-[32px] flex align-middle justify-center bg-red-600 rounded-sm ">
								<BsPlus className="mt-1 text-white" size={25} />
							</div>
						</div>
						<div className="flex w-full justify-center align-middle mt-4 ">
							<button className="w-full uppercase p-1 bg-green-600 rounded-sm text-white">
								Add to quote
							</button>
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<h2
						className={`pl-4 ${styles.heading} text-blue-700 pb-2 border-b-2 border-grey-400 `}
					>
						Description
					</h2>
					<span className="px-20 mt-2 mb-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa cum odio tempore ullam mollitia? Aspernatur minus
						repellat, consequuntur itaque, sunt a error eum quos
						illum veritatis perspiciatis iure ratione atque! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Ipsa
						cum odio tempore ullam mollitia? Aspernatur minus
						repellat, consequuntur itaque, sunt a error eum quos
						illum veritatis perspiciatis iure ratione atque! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Ipsa
						cum odio tempore ullam mollitia? Aspernatur minus
						repellat, consequuntur itaque, sunt a error eum quos
						illum veritatis perspiciatis iure ratione atque! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Ipsa
						cum odio tempore ullam mollitia? Aspernatur minus
						repellat, consequuntur itaque, sunt a error eum quos
						illum veritatis perspiciatis iure ratione atque! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Ipsa
						cum odio tempore ullam mollitia? Aspernatur minus
						repellat, consequuntur itaque, sunt a error eum quos
						illum veritatis perspiciatis iure ratione atque!
					</span>
				</div>
				<div className="flex flex-col">
					<h2
						className={`pl-4 ${styles.heading} text-blue-700 pb-2 border-b-2 border-grey-400 `}
					>
						Specifications
					</h2>
					<ul className="list-disc  mt-3 px-20">
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa cum odio tempore ullam mollitia?
							Aspernatur minus repellat Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Ipsa cum odio tempore
							ullam mollitia? Aspernatur minus repellat Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Ipsa cum odio tempore ullam mollitia? Aspernatur
							minus repellat
						</li>
						<li>
							ullam mollitia? Aspernatur minus repellat,
							consequuntur itaque, sunt a error eum quos illum
							veritatis
						</li>
						<li>
							illum veritatis perspiciatis iure ratione atque!
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</li>
						<li>
							olor sit amet consectetur adipisicing elit. Ipsa cum
							odio tempore ullam mollitia? Aspernatur minus
							repellat, consequuntur it
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa cum odio tempore ullam mollitia?
							Aspernatur minus repellat
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa cum odio tempore ullam mollitia?
							Aspernatur minus repellat
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa cum odio tempore ullam mollitia?
							Aspernatur minus repellat
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa cum odio tempore ullam mollitia?
							Aspernatur minus repellat
						</li>
					</ul>
				</div>
				<div className="mt-10 mb-10">
					<h2
						className={`pl-4 ${styles.heading} text-blue-700 pb-2 border-b-2 border-grey-400 `}
					>
						Related Items
					</h2>
					<RelatedCarousel relatedProducts={relatedProducts} />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ProductDetailsPage;
