import React from "react"

const whatCards = [
    {
        "heading":"Web Development",
        "description":"We specialize in creating and maintaining websites that are customized to fit the needs of our clients,Ensuring that the website is fast, reliable and user friendly."

    },
    {
        "heading":"Web Design",
        "description":"Our web design services focus on creating visually stunning websites that are optimized for user experience.We use the latest design tools and techniques to ensure that your website looks great on any device."

    },  
    {
        "heading":"UI/UX",
        "description":"Experienced UI/UX experts conduct extensive research on your target audience to create designs that are intuitive, easy-to-use, and aesthetically pleasing."


    },
    {
        "heading":"Backend Development",
        "description":"Defining the database architecture and building loosely coupled solutions to enable support for multiple platforms based on business goals."

    },  
    {
        "heading":"Digital Marketing",
        "description":"We help you increase your online presence and drive more traffic to your websites. We use a variety of tactics, including social media marketing, email marketing etc. to reach your target audience and drive conversions."

    }, 
   
    
]

const What = ()=>{
    return(
        <div className="flex flex-row flex-wrap justify-center w-4/5 h-[100%]  ">
            {
                whatCards.map(card=>(
                    <>
                    <div className="hover:cursor-pointer hover: w-96 h-content mb-5 mx-3 pb-2 bg-gray-500 drop-shadow-2xl rounded-[30px] text-center  px-8">
                        <h1 className="text-3xl font-bold text-white mt-5 mb-6">{card.heading}</h1>
                        <div className="text-[18px] text-white">{card.description}</div>
                    </div>
                    </>

                ))
            }
          
            
        </div>
    )
}

export default What 