import { useEffect, useState } from "react"
import { average } from 'color.js'

/**Function used to get the average RGB from an images (canvas)
 * Returns a RGB value as an Array.
 */

export default function useGetColor(banner) {
    const [colors, setColors] = useState("")

    useEffect(() => {

        average(banner, { amount: 1 }).then(color => {
            setColors(color)

        })
    }, [])
    return colors
}
