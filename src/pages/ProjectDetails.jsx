import { Link, useParams } from "react-router-dom";
import { AllProjectDetails } from "../utils/Data";

const ProjectDetails = () => {
    const { slug } = useParams()

    const details = AllProjectDetails.find(i => i.slug === slug)
    console.log(details, "fff")
    return (
        <div>
            <h1 className="text-[#000] uppercase lg:text-[160px] font-[700] leading-[120%] text-center lg:tracking-[-11.2px] projectDetailsTitle">{details.title}</h1>
            <p className=" mt-[28px] mb-[59px] max-w-[1224px] mx-auto text-[#3B3B3B] text-center md:text-[32px] lg:text-[48px] font-[400] lg:leading-[150%]  lg:tracking-[-3.36px]">{details.description}</p>

            {/* <div className="flex flex-col items-center">
                {details.media.map((media, idx) => (
                    <div key={idx} className={`flex justify-center w-full mb-4 ${idx === details.media.length - 1 ? 'order-2' : (idx % 2 === 0 ? 'order-' : 'order-3')}`}>
                        <img
                            src={media.content}
                            alt=""
                            className="max-w-[300px]"
                        />
                    </div>
                ))}
            </div> */}
            <div className="max-w-[1638px] mx-auto mb-[100px] md:mb-[200px] lg:mb-[400px]">
                {details.media.map((media, idx) => <div className={`px-[20px] md:px-[50px] flex ${idx === 1 ? "-mt-[236px]" : "mt-[122px]"} ${idx === details.media.length - 1 ? "justify-center" : idx % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    {media.type === "image" && <img src={media.content} className={`projectDetailsImage ${idx === details.media.length - 1 ? "lg:max-w-[1147px]" : " lg:max-w-[907px]"}`} />}
                </div>)}
            </div>
            <p className="text-black text-2xl md:text-3xl lg:text-[48px] font-[600] leading-[140%] lg:tracking-[-2.4px] text-center mb-[64px] cursor-pointer"><Link>View Projects</Link></p>
        </div >
    );
};

export default ProjectDetails;