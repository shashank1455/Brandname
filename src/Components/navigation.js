const Navigation =() => {


    return(

    <nav className="flex items-center justify-between w-full h-18">
    <div className="">
      <img src='./Images/brand_logo.png' className='s-20'></img>
    </div>
    <ul className="flex font-bold gap-5 ">
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>
    <button className=' px-3 py-0.5 text-white bg-red-500 font-bold '>
      Login
    </button>
    </nav> 
    );
}
export default Navigation;