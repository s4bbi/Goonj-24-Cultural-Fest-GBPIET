import error_md from "../assets/Images/error_md.jpeg"
import error_sm from "../assets/Images/error_sm.jpeg"

const Error = () => {
  return (
    <div className="w-full h-screen">
        <img src={error_md} alt="Error Image" className="object-cover h-screen w-full hidden md:flex"/>
        <img src={error_sm} alt="Error Image" className="object-cover h-screen w-full md:hidden"/>
    </div>
  )
}

export default Error