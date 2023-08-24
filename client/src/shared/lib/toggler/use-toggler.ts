import {TogglerInstance} from "./types";
import {useStore, useEvent} from "effector-react";

export const useToggler = (togglerInstance: TogglerInstance) => {
    const {$isOpen, ...togglerEvents} = togglerInstance;

    const isOpen = useStore($isOpen);
    const open = useEvent(togglerEvents.open);
    const close = useEvent(togglerEvents.close);
    const toggle = useEvent(togglerEvents.toggle);

    return {
        isOpen,
        open,
        close,
        toggle
    }
}