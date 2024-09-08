import { ComponentPropsWithRef } from "react";

export const CPlusIcon = (props: ComponentPropsWithRef<"svg"> & { size?: number }) => {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 256 288"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <g>
                <path d="M255.986979,84.5904965 C255.984975,79.7525971 254.950286,75.4776168 252.857869,71.8086261 C250.802513,68.2007351 247.724488,65.1767975 243.595746,62.7858936 C209.515099,43.1348071 175.401398,23.5438187 141.331768,3.87269944 C132.146771,-1.42995881 123.24123,-1.23664316 114.124344,4.14213939 C100.559194,12.142202 32.6433004,51.0527356 12.4052555,62.7748756 C4.0706466,67.5997538 0.0150245322,74.9838106 0.0130212613,84.5814817 C0,124.10101 0.0130212613,163.619536 0,203.140066 C0,207.871792 0.992620764,212.063636 2.99288682,215.677537 C5.04924447,219.394606 8.17034063,222.50168 12.3942375,224.946672 C32.633284,236.668812 100.558193,275.576341 114.120337,283.578406 C123.24123,288.960194 132.146771,289.152508 141.334773,283.847846 C175.405404,264.175725 209.521109,244.585739 243.606764,224.934652 C247.830661,222.490662 250.951757,219.381585 253.008115,215.667521 C255.005376,212.05362 256,207.861775 256,203.129048 C256,203.129048 256,124.111026 255.986979,84.5904965"
                    fill="currentColor"></path>
                <path d="M128.391639,143.475645 L2.99288682,215.677537 C5.04924447,219.394606 8.17034063,222.50168 12.3942375,224.946672 C32.633284,236.668812 100.558193,275.576341 114.120337,283.578406 C123.24123,288.960194 132.146771,289.152508 141.334773,283.847846 C175.405404,264.175725 209.521109,244.585739 243.606764,224.934652 C247.830661,222.490662 250.951757,219.381585 253.008115,215.667521 L128.391639,143.475645"
                    fill="currentColor"></path>
                <path d="M91.2499941,164.862566 C98.5469086,177.601366 112.264307,186.193395 128,186.193395 C143.832852,186.193395 157.628378,177.492188 164.888232,164.617165 L128.391639,143.475645 L91.2499941,164.862566"
                    fill="currentColor"></path>
                <path d="M255.986979,84.5904965 C255.984975,79.7525971 254.950286,75.4776168 252.857869,71.8086261 L128.391639,143.475645 L253.008115,215.667521 C255.005376,212.05362 255.997997,207.861775 256,203.129048 C256,203.129048 256,124.111026 255.986979,84.5904965"
                    fill="currentColor"></path>
                <path d="M249.13479,148.636071 L239.39689,148.636071 L239.39689,158.375974 L229.656987,158.375974 L229.656987,148.636071 L219.920088,148.636071 L219.920088,138.899172 L229.656987,138.899172 L229.656987,129.161272 L239.39689,129.161272 L239.39689,138.899172 L249.13479,138.899172 L249.13479,148.636071 Z M128,58.8474629 C159.134857,58.8474629 186.357629,75.5874614 201.169171,100.555682 L201.614198,101.314804 L164.612782,122.621594 C157.279808,110.013007 143.634528,101.528152 128,101.528152 C104.620826,101.528152 85.6668779,120.481099 85.6668779,143.860273 C85.6668779,151.505757 87.7052062,158.672458 91.2499941,164.862566 C98.5469086,177.601366 112.264307,186.193395 128,186.193395 C143.658865,186.193395 157.324933,177.682372 164.646534,165.040098 L164.888232,164.617165 L201.834558,186.023117 C187.185639,211.619912 159.606608,228.874085 128,228.874085 C96.4514872,228.874085 68.9155261,211.689025 54.2455728,186.167352 C47.0838791,173.708009 42.9861884,159.263423 42.9861884,143.860273 C42.9861884,96.9096113 81.0473351,58.8474629 128,58.8474629 Z M203.864873,129.161272 L203.864873,138.899172 L213.601772,138.899172 L213.601772,148.636071 L203.864873,148.636071 L203.864873,158.375974 L194.126973,158.375974 L194.126973,148.636071 L184.389073,148.636071 L184.389073,138.899172 L194.126973,138.899172 L194.126973,129.161272 L203.864873,129.161272 Z"
                    fill="#FFFFFF"></path>
            </g>
        </svg>
    );
};