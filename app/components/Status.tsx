import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, BookOpenText, Bot, BotMessageSquare, Car, Contact, Gamepad, Home, LucideIcon, Package, TabletSmartphone, Trophy } from "lucide-react";
import Link from 'next/link';
import { GoProject } from "react-icons/go";
import { Badge } from "@/components/ui/badge";
import WaterDropGrid from "./WaterDropGrid";
import { Code } from "./Code";
import { UnityIcon } from "./icons/UnityIcon";
import { Project, ProjectProps } from "./Project";
import { ContactCard } from "./ContactCard";
import { Experience, ExperienceProps } from "./Experience";


export const Status = () => {
    return (
        <Section classname="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-3">
                    <p className="scroll-m-20 text-xl font-semibold tracking-tight w-full">
                        Projects <GoProject className="inline w-5 h-5"></GoProject>
                    </p>
                    <div className="flex flex-col gap-5">
                        {PROJECTS.map((project, index) => (
                            <Project
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="scroll-m-20 text-xl font-semibold tracking-tight w-full">
                        Experiences <Trophy className="inline w-5 h-5"></Trophy>
                    </p>
                    <div className="flex flex-col gap-4">
                        {EXPERIENCES.map((experience, index) => (
                            <Experience
                                key={index}
                                {...experience}
                            />
                        ))}
                    </div>
                </Card>

                <div className="w-full p-4 flex flex-col gap-1"> {/* Revoir le w-full */}
                    <WaterDropGrid></WaterDropGrid>
                </div>

                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="scroll-m-20 text-xl font-semibold tracking-tight w-full">
                        Contact me <Contact className="inline w-5 h-5"></Contact>
                    </p>
                    <ContactCard
                        url="https://github.com/Makale-Toure"
                        image="https://avatars.githubusercontent.com/u/119361788?v=4"
                        mediumImage="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        name="Makalé Touré"
                        description="Projects repositories" />

                    <ContactCard
                        url="https://www.linkedin.com/in/makal%C3%A9-tour%C3%A9/"
                        image="https://media.licdn.com/dms/image/v2/D4E03AQGTEGMO7RS10w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724072376859?e=1730332800&v=beta&t=FRAO_RzaZOEP9u29b7SIuhHb62lwbE7DDXoqzZOWf3c"
                        mediumImage="https://static.vecteezy.com/system/resources/previews/023/986/970/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                        name="Makalé Touré"
                        description="My LinkedIn Homepage" />
                </Card>
            </div>
        </Section>
    );
};


{/* PROJECTS BOX */ }
const PROJECTS: ProjectProps[] = [
    {
        Logo: Gamepad,
        title: "AstroBOB",
        description: (
            <>
                VR Game project made with <Code className="inline-flex items-center gap-1">Unity3D <UnityIcon size={16} className="inline"></UnityIcon></Code>.
            </>
        ),
        url: "/",
    },
    {
        Logo: TabletSmartphone,
        title: "CuisinKoala",
        description: (
            <>
                A brief description of project 2 using.
            </>
        ),
        url: "/",
    },
    {
        Logo: Package,
        title: "ENSIM-Box",
        description: (
            <>
                A brief description of project 3 with.
            </>
        ),
        url: "/",
    },
    {
        Logo: BotMessageSquare,
        title: "Telegram ChatBot",
        description: (
            <>
                A brief description of project 4 leveraging.
            </>
        ),
        url: "/",
    },
    {
        Logo: Bot,
        title: "FarmBot",
        description: (
            <>
                A brief description of project 4 with.
            </>
        ),
        url: "/",
    },
    {
        Logo: BookOpenText,
        title: "Bookworm",
        description: (
            <>
                A brief description of project 4 focusing on.
            </>
        ),
        url: "/",
    },
];



{/* EXPERIENCES BOX */ }
const EXPERIENCES: ExperienceProps[] = [
    {
        image: "https://dfacom.net/wp-content/uploads/2021/08/logobon.png",
        title: "DFACommunication",
        role: "Advertising intern",
        date: "2023",
        url: "https://dfacom.net/",
    },
    {
        image: "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-1/303439809_400805338862421_9085433213933703881_n.png?stp=dst-png_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=bGPsiXElInQQ7kNvgGnt00D&_nc_ht=scontent-bru2-1.xx&oh=00_AYDbJ3gY6Osz0l0It4APW4HxbPbSBaPkqTanO5DfyEC19Q&oe=66CEBEFD",
        title: "Ensim'ELEC",
        role: "Member of the robotics Club",
        date: "2023-2024",
        url: "https://www.facebook.com/ENSIMelec/",
        volunteer: true,
    },
]





