import React from 'react';
import myImg from '../../img/ashraf.png';

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 ">
			<div className="w-full md:w-6/12">
				<h2 className='text-2xl '>About Me</h2>
				<p className="text-md text-gray-600 dark:text-gray-300">
                Hi ! I’m Ashraf Ali. I am Web Developer. I am the learned of HTML, CSS , Javascript,Bootstrap, TailwindCSS, React, NodeJs, MongoDb,Firebase and etc. . I know everything needed to make a website function, efficient. I didn't stop with the web. I even know the deployment, server and security.
				</p>
				<a
					href="mailto:ashrafalisimon2001@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					ashrafalisimon2001@gmail.com
				</a>
                <div>
                    <p className='text-lg font-bold'>Education:</p>
                    <p><span className='font-semibold'>Secondary Education:</span> Babunagor High School (2012-2017)</p>
                    <p><span className='font-semibold' >Diploma in Computer Science:</span> Chittagong Science and Technology Institute. (2017-2022)</p>
                </div>
			</div>

			<img
				src={myImg}
				alt="Ashraf"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
    );
};

export default AboutMe;