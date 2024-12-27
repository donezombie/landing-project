import { contactInfo } from "@/customize/data"

export const genTitle = (title: string) => {
    return `${title} - ${contactInfo.nameProject}`
}