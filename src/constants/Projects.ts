
export interface Project {
    title: string,
    logo: string,
    github: string,
    description: string,
    stack: Array<string>,
    live: string,
    images: Array<string>,
    projectStart: string,
    projectEnd: string,
}

const projects : Array<Project> = [
    {
        title:"Project  1",
        github: "https://github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel enim faucibus luctus. Donec in dignissim neque. Nullam vel orci et velit fermentum vulputate.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        live: "https://example.com",
        images: ["/project1.png", "/project2.png"],
        logo: "https://example.com",
        projectStart: '29 Jan 2023',
        projectEnd: "12 Feb 2024",
    },
    {
        title:"Project  2",
        github: "https://github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel enim faucibus luctus. Donec in dignissim neque. Nullam vel orci et velit fermentum vulputate.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        live: "https://example.com",
        images: ["/project1.png", "/project2.png"],
        logo: "https://example.com",
        projectStart: '29 Jan 2023',
        projectEnd: "12 Feb 2024",
    },
    {
        title:"Project  3",
        github: "https://github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel enim faucibus luctus. Donec in dignissim neque. Nullam vel orci et velit fermentum vulputate.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        live: "https://example.com",
        images: ["/project1.png", "/project2.png"],
        logo: "https://example.com",
        projectStart: '29 Jan 2023',
        projectEnd: "12 Feb 2024",
    },
    {
        title:"Project  4",
        github: "https://github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel enim faucibus luctus. Donec in dignissim neque. Nullam vel orci et velit fermentum vulputate.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        live: "https://example.com",
        images: ["/project1.png", "/project2.png"],
        logo: "https://example.com",
        projectStart: '29 Jan 2023',
        projectEnd: "12 Feb 2024",
    },
    {
        title:"Project  5",
        github: "https://github.com/",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum vel enim faucibus luctus. Donec in dignissim neque. Nullam vel orci et velit fermentum vulputate.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        live: "https://example.com",
        images: ["/project1.png", "/project2.png"],
        logo: "https://example.com",
        projectStart: '29 Jan 2023',
        projectEnd: "12 Feb 2024",
    }
]

export default projects