import { MotionStyle, MotionValue } from "framer-motion";

/**
 * Unfortunately animating CSS variables requires you to type the styles
 * as any in Framer Motion.
 * To prevent to do typecasting everywhere in the code, I created this small
 * wrapper function that does the casting for us, as well as still checks pretty
 * well that we either input a value motion value, or a string looking like a css
 * variable.
 * @see: https://www.framer.com/motion/component/#%23%23animating-css-variables
 */
export default function stylesWithCssVar(styles) {
    const result = {};
    for (const key in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, key)) {
            const value = styles[key];
            if (typeof key === "string" && key.startsWith("--")) {
                result[key] = value instanceof MotionValue ? value : value.toString();
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}