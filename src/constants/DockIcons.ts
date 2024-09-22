import github from '@/assets/images/icons/github.avif'
import finder from '@/assets/images/icons/finder.png.avif'
import mail from '@/assets/images/icons/mail.avif'
import message from '@/assets/images/icons/message.avif'
import terminal from '@/assets/images/icons/terminal.avif'
import resume from '@/assets/images/icons/resume.avif'

export const dockIcons = {
    github,
    finder,
    mail,
    message,
    terminal,
    resume
}

const openResume = () => {
    console.log('resume');
}

export const dock = [
    {
        name: "GitHub",
        icon: github,
        url: "https://github.com",
        onPress: undefined,
        isLink: true
    },
    {
        name: "Finder",
        icon: finder,
        url: "https://www.apple.com/finder/",
        onPress: undefined,
        isLink: false

    },
    {
        name: "Mail",
        icon: mail,
        url: "https://mail.google.com/mail/u/0/#inbox",
        onPress: undefined,
        isLink: true

    },

    {
        name: "Messages",
        icon: message,
        url: "https://www.apple.com/messages/",
        onPress: undefined,
        isLink: false

    },
    {
        name: "Terminal",
        icon: terminal,
        url: "https://www.apple.com/terminal/",
        onPress: undefined,
        isLink: false
        
    },
    {
        name: "Resume",
        icon: resume,
        url: "/resume",
        onPress: openResume,
        isLink: false
    }
]
