import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type ExperienceProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    volunteer?: boolean;
};

export const Experience = (props: ExperienceProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img
                src={props.image}
                alt={props.title}
                className="w-10 h-10 object-contain rounded-md"
            />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.volunteer && <Badge variant="outline">Volunteer</Badge>}
                </div>
                <p className="text-xs text-muted-foreground w-full">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground w-full">
                {props.date}
            </p>
        </Link>
    )
};