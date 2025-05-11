import Image from "next/image"
import Button from "./Button";


const JobFeatureCard = () => {
  return (
    <article className="p-6 bg-accent rounded-2xl border border-tertiary-dark max-w-90">
        <div className="flex flex-col gap-2">
            <Image src="linkedin.svg" width={36} height={36} alt="logo"/>
            <div className="min-w-42">
                <span className="mb-2 text-tertiary-dark font-medium font-ibm-plex-mono text-base">Facebook, Inc.</span>
                <p className="font-inter text-[10px] text-[#8F9298]">California, USA</p>
            </div>
        </div>
        <div className="my-3.5">
        <h3 className="text-xl text-black font-ibm-plex-mono font-semibold mb-3">Senior Product Designer Engineer</h3>
        <ul className="text-[#8F9298] space-y-2 font-inter text-xs mb-4">
            <li className="flex gap-1 items-center">
                <span>Fulltime</span>
                <span className="size-0.5 bg-[#8F9298] rounded-full"></span> 
                <span>Remote</span>
                <span className="size-0.5 bg-[#8F9298] rounded-full"></span> 
                <span>2 days ago</span>
            </li>
            <li>Night Shift, 5 days a week</li>
            <li>Relocation Allowance</li>
        </ul>
        <p className="text-black font-ibm-plex-mono text-[10px] font-light"><span className="text-sm font-semibold">7LPA</span> + Stock Options</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5">
        <Button href="/" type="link" variant="outline" className="w-full">Reach HR</Button>
        <Button hasIcon={true} type="button" variant="dark" className="w-full">Direct Apply</Button>
        </div>
    </article>
  )
}

export default JobFeatureCard