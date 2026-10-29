import styles from './DirectionTabs.module.css'
import type {Direction} from "./arrivalRoutes.ts";
import {useRef, type KeyboardEvent} from "react";

type DirectionTabProps = {
    direction: Direction;
    onChangeDirection: (direction: Direction) => void
}

export default function DirectionTabs({direction, onChangeDirection}: DirectionTabProps) {
    const highwayTabRef = useRef<HTMLButtonElement>(null)
    const oppositeTabRef = useRef<HTMLButtonElement>(null)

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            onChangeDirection("opposite")
            oppositeTabRef.current?.focus()
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            onChangeDirection("highway55")
            highwayTabRef.current?.focus()
        }
    }

    return (
        <div
            role="tablist"
            onKeyDown={handleKeyDown}
            className={styles.tabs}>
            <button
                ref={highwayTabRef}
                id="tab-highway55"
                type="button"
                role="tab"
                aria-selected={direction === "highway55"}
                aria-controls={`panel-highway55`}
                tabIndex={direction === "highway55" ? 0 : -1}
                onClick={() => onChangeDirection("highway55")}
                className={`text-prose ${styles.tab}`}>From Highway 55</button>
            <button
                ref={oppositeTabRef}
                id="tab-opposite"
                type="button"
                role="tab"
                aria-selected={direction === "opposite"}
                aria-controls={`panel-opposite`}
                tabIndex={direction === "opposite" ? 0 : -1}
                onClick={() => onChangeDirection("opposite")}
                className={`text-prose ${styles.tab}`}>From the opposite direction</button>
        </div>
    )
}