import feature from "../assets/features1.png"
import eth from "../assets/ether.png"
import decentr from "../assets/decentr.png"
import community from "../assets/community.png"
import skill from "../assets/skill.png"
import evolving from "../assets/evolving.png"
import global from "../assets/global.png"

const Features = () => {

    const features = [
        {
            image:decentr,
            text:'Decentralized environment'
        },
        {
            image:eth,
            text:'Crypto bounties'
        },
        {
            image:community,
            text:'Community Engagement'
        },
        {
            image:skill,
            text:'Skill development'
        },
        {
            image:evolving,
            text:'Evolving platform'
        },
        {
            image:global,
            text:'Global reach'
        }

    ]


    return ( 
        <>
        <div className="text-left overflow-hidden bg-transparent py-2 sm:py-2 text-left">
            <div className="mx-auto max-w-7xl px-14 lg:px-14">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-24">
                    <div className="lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl pt-4">What to anticipate</p>
                    <p className="mt-6 text-lg leading-8 text-neutral-800">By bringing the developer community together, Growify aims to foster collaboration and support for the development of new solutions and technologies.</p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-100 lg:max-w-none">
                        {features.map((feature, i)=>(
                            <div className="relative pl-9" key={i}>
                            <dt className="inline font-semibold text-neutral-800">
                                <img src={feature.image} className="w-10 h-10 absolute left-1 -top-1"/>
                            <span className="ml-4">{feature.text}</span> 
                            </dt>
                            </div>
                        ))}
                    </dl>
                    </div>
                </div>
                <img src={feature} alt="Features" className="ml-10 w-[32rem] sm:w-[32rem] md:ml-10 lg:ml-10"/>
                </div>
            </div>
        </div>
        
        </>
     );
}
 
export default Features;