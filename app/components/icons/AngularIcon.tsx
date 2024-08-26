import { ComponentPropsWithRef } from "react";

export const AngularIcon = (props: ComponentPropsWithRef<"svg"> & { size?: number }) => {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 256 271"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <defs>
                <linearGradient x1="25.0714876%" y1="90.9292007%" x2="96.1321855%" y2="55.1837089%" id="linearGradient-1">
                    <stop stop-color="currentColor" offset="0%"></stop>
                    <stop stop-color="currentColor" offset="24%"></stop>
                    <stop stop-color="currentColor" offset="35.2%"></stop>
                    <stop stop-color="currentColor" offset="49.4%"></stop>
                    <stop stop-color="currentColor" offset="74.5%"></stop>
                    <stop stop-color="currentColor" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="21.8628652%" y1="12.0575311%" x2="68.3669921%" y2="68.2103006%" id="linearGradient-2">
                    <stop stop-color="currentColor" offset="0%"></stop>
                    <stop stop-color="currentColor" stop-opacity="0" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g>
                <path d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                    fill="currentColor"></path>
                <path d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z"
                    fill="currentColor"></path>
            </g>
        </svg>
    );
};