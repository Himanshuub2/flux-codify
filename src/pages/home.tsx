import Main from "@/components/page/Main";


const Home = ()=>{
    return(
        <>
        <div className = "w-screen h-96 bg-gradient-to-b from-lighter-blue to-gray-50 flex flex-col justify-center items-center space-y-10">
            <h1 className="text-6xl text-gray-800 font-serif font-bold mt-20">Elevate your brand with our digital expertise.</h1>
            <h1 className="text-2xl text-gray-700">FluxCodify helps you elevate your brand and achieve your goals with tailored, digital solutions. </h1>

            <button className="px-10 py-4 bg-black text-white font-medium rounded-lg hover:bg-light-blue ">Get In Touch</button>
            
        </div>
        {/* <div className="flex flex-col  items-center w-screen text-3xl bg-gray-50 h-screen"> */}
            <Main/>
     
       
        </>
    )
}

export default Home;