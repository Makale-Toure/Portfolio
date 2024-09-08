import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LinkedinIcon } from "./icons/LinkedinIncon"

export const Header = () => {
    return (
        <header className=" top-0 py-4">
            <Section classname="flex items-baseline"> {/* add sticky, if you want the header to be static */}
                <h1 className="text-lg font-bold text-primary">
                    Makale.com
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link
                        href="https://github.com/Makale-Toure"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/makal%C3%A9-tour%C3%A9/"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <LinkedinIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}