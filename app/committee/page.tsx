import committeeData from '@data/comittee.json';
import Image from 'next/image';

const Committee = () => {
	return (
		<section id="committee" className="bg-black pt-16">
			<div className="max-w-screen-xl mx-auto">
				<h2 className="text-6xl text-unics-green font-bold font-sans uppercase py-5 px-20 ">Committee</h2>
				<ul id="committee-list" className="pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-8">
					{committeeData.map(({ name, role, social, img }) => (
						<li
							key={`${name}-comittee`}
							className="flex flex-col mx-auto hover:-translate-y-1 items-center content-around"
						>
							<a href={social}>
								<Image width={128} height={128} quality={100} className="h-32 w-32 rounded-full" src={img} alt={name} />
							</a>
							<p className="text-center text-lg font-bold text-white mt-2">{name}</p>
							<p className="text-center text-md text-unics-green">{role}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Committee;
