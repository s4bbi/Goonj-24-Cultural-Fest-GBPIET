const Event = (props) => {
    console.log("in Event com",props)
    return (
        <div className=" text-white border-2 border-[#5F43B2] my-8 bg-[#5F43B2] rounded-[32px] bg-clip-padding backdrop-filter  bg-opacity-[0] h-40 w-32 flex items-center justify-center  md:w-52 md:h-64 cursor-pointer">
           <h3 className="md: text-2xl">{props.data.name}</h3>
        </div>
    )
}

export default Event