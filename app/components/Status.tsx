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
import { IonicIcon } from "./icons/IonicIcon";
import { ArduinoIcon } from "./icons/ArduinoIcon";
import { SpringIcon } from "./icons/SpringIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { CPlusIcon } from "./icons/CPlusIcon";
import { FlutterIcon } from "./icons/FlutterIcon";


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
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-5">
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

                <div className="w-full p-4 flex flex-col gap-2"> {/* Revoir le w-full */}
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
                VR Game where you have to carry out missions and discover the planet.
                <br />Made with <Code className="inline-flex items-center gap-1">Unity3D <UnityIcon size={16} className="inline"></UnityIcon></Code>
            </>
        ),
        url: "https://github.com/Makale-Toure/AstroBobVR.git",
    },
    {
        Logo: TabletSmartphone,
        title: "CuisinKoala",
        description: (
            <>
                An app that analyzes your shopping list and suggests super dishes.
                <br />Made with <Code className="inline-flex items-center gap-1">Ionic <IonicIcon size={16} className="inline"></IonicIcon></Code>
            </>
        ),
        url: "https://github.com/Estebancott/CuisinKoala.git",
    },
    {
        Logo: Package,
        title: "ENSIM-Box",
        description: (
            <>
                Arduino coding boxes for introduction to computer science.
                <br />Made with <Code className="inline-flex items-center gap-1">Arduino <ArduinoIcon size={16} className="inline"></ArduinoIcon></Code>
            </>
        ),
        url: "https://docs.google.com/document/d/1U2huaPYTanPKElzbtk1_Z-BTNnJvSVvGEfrNNCXCHSA/edit?usp=sharing",
    },
    {
        Logo: BotMessageSquare,
        title: "Telegram ChatBot",
        description: (
            <>
                Implement a Telegram robot to act as a personal assistant.
                <br />Made with <Code className="inline-flex items-center gap-1">SpringBoot <SpringIcon size={16} className="inline"></SpringIcon></Code>
                and <Code className="inline-flex items-center gap-1">Telegram API </Code>
            </>
        ),
        url: "https://github.com/CharlesPeslerbe/MCBOT.git",
    },
    {
        Logo: Bot,
        title: "Farming Mars",
        description: (
            <>
                Design a robot to take part in the 2024 French Robotics Cup.
                <br />Made with <Code className="inline-flex items-center gap-1">Python <PythonIcon size={16} className="inline" /></Code>
                and<Code className="inline-flex items-center gap-1">C++<CPlusIcon size={16} className="inline" /></Code>
            </>
        ),
        url: "https://github.com/ENSIMelec",
    },
    {
        Logo: BookOpenText,
        title: "Bookworm",
        description: (
            <>
                An app that allows me to list my books by scanning the barcode.
                <br />Made with <Code className="inline-flex items-center gap-1">Flutter <FlutterIcon size={16} className="inline"></FlutterIcon></Code>
            </>
        ),
        url: "https://github.com/Makale-Toure/Bookworm.git",
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
        image: "https://pbs.twimg.com/profile_images/1179127082565193728/wgMSrvUz_400x400.jpg",
        title: "Ensim'ELEC",
        role: "Member of the robotics Club",
        date: "2023-2024",
        url: "https://www.facebook.com/ENSIMelec/",
        volunteer: true,
    },
]





