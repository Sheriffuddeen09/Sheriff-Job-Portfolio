import { FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "react-share"
const Footer = () =>{

    return (
        <div className="flex flex-row flex-wrap mt-40 justify-center text-center mx-auto px-4 py-1 items-center gap-6">
            <p>
                &copy; 2024SheriffPortifolio
            </p>
            <p className="font-bold">
                Odukoya Sheriff Olawale
            </p>
            <div className="inline-flex gap-2">
           <FacebookIcon width={30} className="rounded-lg" />
           <WhatsappIcon width={30}/>
           <LinkedinIcon width={30}/>
           <TwitterIcon width={30}/>
            </div>
        </div>
    )
}

export default Footer