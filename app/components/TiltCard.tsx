"use client";

import React, { ComponentPropsWithoutRef, useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { FigmaIcon } from "./icons/FigmaIcon";
import { UnityIcon } from "./icons/Unityicon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn(
                "bg-accent/10 font-mono hover:bg-accent/25 transition-colors border-accent m-1 rounded-sm text-secondary",
                className)}
            {...props}
        />
    )

}

type TiltCardProps = {
    image: string;
    title: string;
    description: React.ReactNode;
};

const Carousel: React.FC = () => {
    const projects = [
        {
            image: "/photos/AstroBob.png",
            title: "AstroBob",
            description: (
                <p className="text-sm text-gray-600 leading-loose text-justify">
                    Il s'agit d'un jeu en réalité virtuelle développé sur <Code className="inline-flex items-center gap-1">Unity <UnityIcon size={20} className="inline" /></Code>. 
                    Le jeu offre une expérience immersive en utilisant le casque VR.
                </p>
            ),
        },
        {
            image: "/path/to/your/image2.jpg",
            title: "Project 2",
            description: "A brief description of project 2.",
        },
        {
            image: "/path/to/your/image3.jpg",
            title: "Project 3",
            description: "A brief description of project 3.",
        },
        {
            image: "/path/to/your/image4.jpg",
            title: "Project 4",
            description: "A brief description of project 4.",
        },
    ];

    return (
        <Section classname="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary ">
                    Mes projets
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard: React.FC<TiltCardProps> = ({ image, title, description }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-gray-600 to-gray-900 mx-auto "
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 rounded-xl bg-white shadow-lg"
            >
                <img
                    src={image}
                    alt={title}
                    className="h-40 w-full object-cover rounded-2xl p-2"
                    style={{ transform: "translateZ(50px)" }}
                />
                <div className="p-4" style={{ transform: "translateZ(50px)" }}>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
                <button
                    className="absolute bottom-4 right-4 p-2 bg-gray-700 text-white rounded-full shadow-lg"
                    style={{ transform: "translateZ(75px)" }}
                >
                    <FiPlus className="text-lg" />
                </button>
            </div>
        </motion.div>
    );
};

export default Carousel;
