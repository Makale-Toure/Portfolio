import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ContactCard } from "./ContactCard"
import { Smile } from "lucide-react"


export const Contact = () => {
    return <Section classname="flex flex-col items-start gap-4">
        <Badge variant={"outline"} className="hover:bg-accent/10">Get In Touch</Badge>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be honored to work with you <Smile className="inline" size={32}></Smile> !
        </h2>
        <div className="flex max-md:flex-col w-full gap-4">
            <ContactCard
                className="flex-1"
                url="https://github.com/Makale-Toure"
                image="https://avatars.githubusercontent.com/u/119361788?v=4"
                mediumImage="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                name="Makalé Touré"
                description="Projects repositories" />

            <ContactCard
                className="flex-1"
                url="https://www.linkedin.com/in/makal%C3%A9-tour%C3%A9/"
                image="https://media.licdn.com/dms/image/v2/D4E03AQGTEGMO7RS10w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724072376859?e=1730332800&v=beta&t=FRAO_RzaZOEP9u29b7SIuhHb62lwbE7DDXoqzZOWf3c"
                mediumImage="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                name="Makalé Touré"
                description="My LinkedIn Homepage" />

            <ContactCard
                className="flex-1"
                url="mailto:makale.toure03@gmail.com"
                image="https://media.licdn.com/dms/image/v2/D4E03AQGTEGMO7RS10w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724072376859?e=1730332800&v=beta&t=FRAO_RzaZOEP9u29b7SIuhHb62lwbE7DDXoqzZOWf3c"
                mediumImage="https://c.clc2l.com/t/g/m/gmail-cgKrcq.png"
                name="@makaleToure.com"
                description="Email me 👀" />
        </div>
    </Section>
}