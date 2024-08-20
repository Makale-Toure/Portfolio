import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import { CodeIcon } from "./icons/CodeIcon"
import { FigmaIcon } from "./icons/FigmaIcon"
import { BoxIcon } from "@radix-ui/react-icons"
const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn(
                "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent m-1 rounded-sm text-primary",
                className)}
            {...props}
        />
    )

}

export const Hero = () => {
    return (
        <Section classname="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary ">
                    Makalé Touré
                </h2>
                <h3 className="text-3xl font-caption text-amber-700">
                    Software Engineer
                </h3>
                <p className="text-base leading-loose text-justify">
                    Je suis actuellement dernière année d'école d'ingénieur en spécialité informatique à ENSIM, Le Mans.
                    J'ai une passion pour le<Code className="inline-flex items-center gap-1">développement web et mobile <CodeIcon size={20} className="inline" /></Code>
                    ainsi que l'<Code className="inline-flex items-center gap-1">UI/UX design <FigmaIcon size={20} className="inline" /></Code>.
                    Dynamique et entreprenante, je suis à la recherche d'un stage de fin d'étude pour valider mon diplôme.
                    {/*We can wrap the Code in a Link*/}
                </p>
            </div>
            <div className="flex-1 max-md:m-auto ml-auto">
                <img
                    src="https://media.licdn.com/dms/image/D4E03AQGTEGMO7RS10w/profile-displayphoto-shrink_400_400/0/1724072376859?e=1729728000&v=beta&t=3QkdWtL1vjeyO9SEktnO8ViyflXAJgqqR9AhKesSYa8"
                    className="w-full h-auto max-w-xs rounded-full max-md:w-56"
                    alt="makale's picture"
                />
            </div>
        </Section>
    )


}