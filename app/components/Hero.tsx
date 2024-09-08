import { Section } from "./Section"
import { CodeIcon } from "./icons/CodeIcon"
import { Code } from "./Code"
import { HTMLIcon } from "./icons/HTMLIcon"
import { CSSIcon } from "./icons/CSSIcon"
import { FigmaLogoIcon } from "@radix-ui/react-icons"
import { Eye, Plane } from "lucide-react"

export const Hero = () => {
    return (
        <Section classname="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary ">
                    Makalé Touré
                </h2>
                <h3 className="text-3xl font-caption text-amber-700">
                    Software Engineer
                </h3>
                <p className="text-base leading-loose text-justify">
                    I&apos;m currently in my final year of an engineering school specializing in computer science at ENSIM, Le Mans.
                    With strong basics in <Code className="inline-flex items-center gap-1">HTML <HTMLIcon size={20}></HTMLIcon></Code> and <Code className="inline-flex items-center gap-1">CSS <CSSIcon size={20}></CSSIcon></Code>,
                    I have a passion for<Code className="inline-flex items-center gap-1">web and mobile development <CodeIcon size={20} className="inline" /></Code>.
                    I also really like <Code className="inline-flex items-center gap-1">UI/UX design <FigmaLogoIcon className="inline" /></Code> and Project Management.
                    I have various hobbies but my favourite is <Code className="inline-flex items-center gap-1">travelling <Plane size={20} className="inline" /></Code>.
                    Dynamic and enterprising, I&apos;m looking for an end-of-study internship to validate my diploma.
                    {/*We can wrap the Code in a Link*/}
                </p>

                {/*<a href="/documents/CV.pdf" target="_blank" rel="noopener noreferrer" className="text-base leading-loose text-justify font-semibold">
                    Resume view (french version) &nbsp;
                    <Eye className="inline" size={20} />
                </a>*/}

            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="https://media.licdn.com/dms/image/D4E03AQGTEGMO7RS10w/profile-displayphoto-shrink_400_400/0/1724072376859?e=1729728000&v=beta&t=3QkdWtL1vjeyO9SEktnO8ViyflXAJgqqR9AhKesSYa8"
                    className="w-full h-auto max-w-sm rounded-full max-md:w-56"
                    alt="makale's picture"
                />
            </div>
        </Section>
    )


}