import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ArrowBigDownDash } from "lucide-react"
import { ReactIcon } from "./icons/ReactIcon"
import { Code } from "./Code"
import { IntelliJIcon } from "./icons/IntelliJIcon"
import { AndroidIcon } from "./icons/AndroidIcon"
import { FigmaIcon } from "./icons/FigmaIcon"
import { SpringIcon } from "./icons/SpringIcon"


export const Skills = () => {
    return <Section classname="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Tools</Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Enjoy working with <ArrowBigDownDash className="inline animate-bounce" size={32}></ArrowBigDownDash>
        </h2>
        <div className="flex max-md:flex-col gap-4">

            {/*React*/}
            <div className="flex flex-col gap-2 flex-1">
                <ReactIcon size={42} className="animate-spin" style={{
                    animationDuration: "2s",
                }} />

                <h3 className="text-2xl font-semibold tracking-tight">
                    React
                </h3>
                <p className="text-sm text-muted-foreground ">
                    When it comes to web development, I really like <Code>React</Code> because of its simplicity and flexibility.
                    I also enjoy working with <Code>Bootstrap</Code> and <Code>NextJS</Code> frameworks.
                </p>
            </div>

            {/*IntelliJ*/}
            <div className="flex flex-col gap-2 flex-1">
                <IntelliJIcon size={42} />

                <h3 className="text-2xl font-semibold tracking-tight">
                    IntelliJ IDEA
                </h3>
                <p className="text-sm text-muted-foreground">
                    I use <Code>IntelliJ IDEA</Code> for Java development because
                    this IDE has a lot of features that make development easier.
                </p>
            </div>

            {/*Android*/}
            <div className="flex flex-col gap-2 flex-1">
                <AndroidIcon size={42} />

                <h3 className="text-2xl font-semibold tracking-tight">
                    Android Studio
                </h3>
                <p className="text-sm text-muted-foreground">
                    One of the best IDE i worked on for mobile development was <Code>Android Studio</Code>.
                    I also prefer <Code>Flutter</Code> than <Code>Kotlin</Code>.
                </p>
            </div>
        </div>

        <div className="mt-4 flex max-md:flex-col gap-4">

            {/*Figma*/}
            <div className="flex flex-col gap-2 flex-1">
                <FigmaIcon size={42} />

                <h3 className="text-2xl font-semibold tracking-tight">
                    Figma
                </h3>
                <p className="text-sm text-muted-foreground">
                    For UI design, my favorite modeling software is <Code>Figma</Code>.
                    It offers a lot of features and possibilities that make design easier and more interactive.
                </p>
            </div>

            {/*Spring*/}
            <div className="flex flex-col gap-2 flex-1">
                <SpringIcon size={42} />

                <h3 className="text-2xl font-semibold tracking-tight">
                    Spring Boot
                </h3>
                <p className="text-sm text-muted-foreground">
                    The<Code>Spring Boot</Code>framework is my go-to choice because
                    it simplifies the development process by providing a comprehensive set of tools and libraries for
                    <Code>Java</Code>coding.
                </p>
            </div>


        </div>
    </Section>
}