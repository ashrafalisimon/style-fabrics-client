import React from 'react';
import imgUrl1 from '../../img/project01.jpg';
import imgUrl2 from '../../img/project02.jpg';
import imgUrl3 from '../../img/project03.jpg';
import imgUrl4 from '../../img/project04.jpg';

const MyProject = () => {
    return (
        <div className="py-12">
			<h1 className='text-3xl py-4 text-primary' id="works">Recent Project</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <a
			href='https://boating-nevica.web.app/'
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 rounded-lg overflow-hidden"
		>
			<img
				src={imgUrl1}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
				<h4 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                Boating Nevica
				</h4>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
				
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            ReactJS
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            TailwindCss
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            NodeJS
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            MongoDB
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            Firebase
						</span>
				</p>
			</div>
		</a>

        <a
			href='https://dream-focus-click.web.app/'
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 rounded-lg overflow-hidden"
		>
			<img
				src={imgUrl2}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
				<h4 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                Dream Focus Click
				</h4>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
				
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            ReactJS
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            React Bootstrap
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            Firebase
						</span>
				</p>
			</div>
		</a>
        <a
			href='https://asus-tuf-graming.netlify.app/'
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 rounded-lg overflow-hidden"
		>
			<img
				src={imgUrl3}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
				<h4 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                Asus TuF Gaming Review
				</h4>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
				
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            ReactJS
						</span>
				</p>
			</div>
		</a>
        <a
			href='https://ashrafalisimon.github.io/influencer-gear-2022/'
			target="_blank"
			rel="noreferrer"
			className="bg-slate-300 rounded-lg overflow-hidden"
		>
			<img
				src={imgUrl4}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-600 dark:text-gray-300 ">
				<h4 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                Influencer Gear
				</h4>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
				
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            HTML
						</span>
						<span className="inline-block px-2 py-1 bg-slate-200  rounded-md">
                            CSS
						</span>
				</p>
			</div>
		</a>


			</div>
		</div>
    );
};

export default MyProject;