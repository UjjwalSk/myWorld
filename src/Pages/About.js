import React from "react";

const About = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center p-9 dark:text-white-900">
			<h1 className="text-4xl font-bold underline decoration-double">
				About Us
			</h1>
			<div className="w-9/12 shadow-2xl p-10 text-justify m-2">
				<img
					src={`https://picsum.photos/300?t=${Math.random()}`}
					alt=""
					className="float-right ml-5 rounded shadow-2xl"
				/>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Excepturi, molestias officia. Reiciendis delectus labore
					quae ut ullam quidem quasi dolore voluptates. Rerum commodi
					nam vel aliquid explicabo ea! Ad voluptatum modi minima
					accusantium accusamus minus velit adipisci laboriosam
					consequatur quos repudiandae, hic numquam cum earum
					doloremque officia totam commodi illum perspiciatis nobis
					repellendus. Amet consequuntur quos eos eaque, quo maxime
					commodi ducimus sapiente voluptate officiis unde maiores,
					nostrum debitis doloremque magnam odit. Vel repellendus eius
					earum non architecto recusandae sed iste molestiae eum. Quia
					similique unde nihil quae voluptatum facere alias laborum.
					Animi, quia itaque dolor commodi voluptatibus voluptates ad?
					Nulla amet, rerum, consectetur deserunt ratione facere et id
					vitae expedita veniam, quae fuga adipisci nihil in eius
					saepe nisi totam voluptatem tempora? Ipsam, quia!
				</p>
				<br />
				<img
					src="https://picsum.photos/300"
					alt=""
					className="float-left mr-5 rounded"
				/>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Excepturi, molestias officia. Reiciendis delectus labore
					quae ut ullam quidem quasi dolore voluptates. Rerum commodi
					nam vel aliquid explicabo ea! Ad voluptatum modi minima
					accusantium accusamus minus velit adipisci laboriosam
					consequatur quos repudiandae, hic numquam cum earum
					doloremque officia totam commodi illum perspiciatis nobis
					repellendus. Amet consequuntur quos eos eaque, quo maxime
					commodi ducimus sapiente voluptate officiis unde maiores,
					nostrum debitis doloremque magnam odit. Vel repellendus eius
					earum non architecto recusandae sed iste molestiae eum. Quia
					similique unde nihil quae voluptatum facere alias laborum.
					Animi, quia itaque dolor commodi voluptatibus voluptates ad?
					Nulla amet, rerum, consectetur deserunt ratione facere et id
					vitae expedita veniam, quae fuga adipisci nihil in eius
					saepe nisi totam voluptatem tempora? Ipsam, quia!
				</p>
			</div>
		</div>
	);
};

export default About;
