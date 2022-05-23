import React from "react";
import process1 from '../../img/process-01-198x198.jpg'
import process2 from '../../img/process-02-198x198.jpg'
import process3 from '../../img/process-03-198x198.jpg'
import process4 from '../../img/process-04-198x198.jpg'

const WorkingProcess = () => {
  return (
    <div className="p-4 md:px-28 md:py-20">
      <div className="text-center space-y-3">
        <h5 className="text-secondary font-medium">Our Working Process</h5>
        <h4 className="md:text-5xl  text-2xl text-neutral leading-relaxed ">
          Simple Step To Get<span className="font-bold">Textile?</span>
        </h4>
        <div className="divider w-24 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 pt-16 md:grid-cols-4 gap-4 place-items-center">

        <div className="card card-compact w-80">
          <div className="avatar relative">
          <div className="badge badge-lg  text-white  absolute top-0 left-24 z-20 badge-secondary">1</div>
            <div className="w-36 mx-auto mask mask-squircle">
              <img src={process1} />
            </div>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title justify-center">Production of Fabric</h4>
            <p>We Produce the best quality of fabric covered all aspects</p>
          </div>
        </div>

        <div className="card card-compact w-80">
          <div className="avatar relative">
          <div className="badge badge-lg   text-white  absolute top-0 left-24 z-20 badge-secondary">2</div>
            <div className="w-36 mx-auto mask mask-squircle">
              <img src={process2} />
            </div>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title justify-center">Exportation Globally</h4>
            <p>We not only export locally but all over the world</p>
          </div>
        </div>
        <div className="card card-compact w-80">
          <div className="avatar relative">
          <div className="badge badge-lg   text-white  absolute top-0 left-24 z-20 badge-secondary">3</div>
            <div className="w-36 mx-auto mask mask-squircle">
              <img src={process3} />
            </div>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title justify-center">Digital Shop Available</h4>
            <p>Showcased digitally our all the products for best reach</p>
          </div>
        </div>
        <div className="card card-compact w-80">
          <div className="avatar relative">
          <div className="badge badge-lg   text-white  absolute top-0 left-24 z-20 badge-secondary">4</div>
            <div className="w-36 mx-auto mask mask-squircle">
              <img src={process4} />
            </div>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title justify-center">Great Client Support</h4>
            <p>our front desk is available for clients for 24*7!</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkingProcess;
