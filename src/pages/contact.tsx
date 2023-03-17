
const formFields = ["Full Name, Email, Phone , Inquiry/Project"]

const Contact = ()=>{
    return(
        <div className="w-screen  h-screen flex flex-col justify-center items-center   bg-lightest-blue">
            <h1 className="text-4xl text-gray-600  font-medium font-serif my-6 ">Get In Touch Today, We are ready !</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6  pb-8 mb-4 ">
            {

              formFields.map((item, idx)=>(
               <>
                    <div className="mb-4" id={idx}>
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              {item}
            </label>
            
                 {
                    idx === formFields.length-1 ?
                <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                :

            <input className="shadow appearance-none border rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>

                 }
                   

               

            
           
          </div>
               
               </>
              ))

            }
        
{/*           
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Inquiry/Project details
            </label>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div> */}

          
          

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
       
      </div>
    )
}

export default Contact