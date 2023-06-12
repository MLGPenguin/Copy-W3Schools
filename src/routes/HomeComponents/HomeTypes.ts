export type DisplaySection = {
    name: string
    description: string
    backgroundcolor: string
    textbox: TextBox
    pills: Pill[]
}

export type TextBox = {
    header: string
    content: string
}

export type Pill = {
    content: string
    backgroundcolor: string 
    textcolor: string | null // Defaults to white
}