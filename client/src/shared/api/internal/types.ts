import {ExcursionEnum} from "@/shared/config";

export interface Request {
    name: string,
    typeExcursion: ExcursionEnum,
    date: Date
}