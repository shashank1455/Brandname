const Hero = () => {
  return (
    <main className=" container flex px-16 py-16">
      <div className="">
        <h1 className="text-8xl font-extrabold">
          YOUR FEET DESERVE <br></br>THE BEST
        </h1>
        <p className="py-10 font-semibold">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO<br></br> HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE <br></br>THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          <br></br>SHOES.
        </p>
        <div className="gap-5" >
          <button className='mr-9 px-3 py-1  text-white bg-red-500 font-bold text-2xl '>Shop Now</button>
          <button className=' border-2 px-3 py-1 font-bold text-2xl text-center '>Category</button>
        </div>
        <div className="pt-10 pb-5">
          <p>Also Available On</p>
        </div>
        <div className="flex gap-5">
          <img src="./Images/amazon.png" />
          <img src="./Images/flipkart.png" />
        </div>
      </div>
      <div className="basis-3/4 ">
        <img src="./Images/shoe_image.png" className="" />
      </div>
    </main>
  );
};
export default Hero;
