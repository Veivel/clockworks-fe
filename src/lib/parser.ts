import type { TIME_TYPE } from "src/types/types";

export function ParseClockTime(period: string): TIME_TYPE | null {
    const periodArr = period.split(" ")

    if (periodArr.length < 2) return null;

    const weekday = periodArr[0]
    const time = periodArr[1]
    const timeArr = time.split(":")

    if (timeArr.length < 2) return null;

    const parsedTime:TIME_TYPE = {
        weekday: weekday,
        hour: Number.parseInt(timeArr[0]),
        minute: Number.parseInt(timeArr[1]),
    }

    return parsedTime

}