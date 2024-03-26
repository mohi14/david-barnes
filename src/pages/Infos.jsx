import mailIcon from "../assets/mailIcon.svg"
import person from "../assets/person.svg"
import InfoGrid from "../components/Info/InfoGrid"
import InfoBanner from "../components/Info/InfoBanner"
import Connect from "../components/Info/Connect"

const Infos = () => {
  return (
    // <div className="pl-[35px] pr-[45px] flex  gap-[220px] items-center my-[195px]">
    //   <div>
    //     <h1 className="text-[48px] font-[700] mb-[30px]">AGENT OF CHANGE</h1>
    //     <p className="text-[32px] font-[400]">Over my career I've applied creative thinking to help produce award-winner work, drive business forward, and deliver to the bottomline of organisations in the areas of branding, advertising, digital, social, PR, experiential marketing, e-commerce, media and film.</p>
    //   </div>
    //   <div className="flex-shrink-0">
    //     <img src={person} alt="" className="w-full" />
    //     <h6 className="mt-[30px] text-[30px] font-[400]">Contact</h6>
    //     <div className="flex gap-[20px] items-center mt-[20px]">
    //       <img src={mailIcon} alt="" />
    //       <a href="mailto:tdavidbarnes@gmail.com" className="text-[24px] font-[600] ">tdavidbarnes@gmail.com</a>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-[1449px] m-auto">
      <InfoBanner />
      <InfoGrid />
      <Connect />
    </div>
  )
}

export default Infos