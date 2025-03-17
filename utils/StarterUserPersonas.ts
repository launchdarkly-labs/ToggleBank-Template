import {
    PERSONA_TIER_STANARD,
    PERSONA_ROLE_BETA,
    PERSONA_ROLE_DEVELOPER,
    PERSONA_TIER_PLATINUM,
    PERSONA_ROLE_USER,
} from "./constants";

import { Persona } from "@/utils/typescriptTypesInterfaceLogin";

export const STARTER_PERSONAS: Persona[] = [
    {
        personaname: "Christine",
        personatier: PERSONA_TIER_STANARD,
        personaimage: "/personas/persona3.png",
        personaemail: "user@launchmail.io",
        personarole: PERSONA_ROLE_USER,
    },
    {
        personaname: "Angela",
        personatier: PERSONA_TIER_PLATINUM,
        personaimage: "/personas/persona6.jpg",
        personaemail: "angela@launchmail.io",
        personarole: PERSONA_ROLE_USER,
    },
    {
        personaname: "Alysha",
        personatier: PERSONA_TIER_STANARD,
        personaimage: "personas/beta.png",
        personaemail: "alysha@launchmail.io",
        personarole: PERSONA_ROLE_BETA,
    },
    {
        personaname: "Jenn",
        personatier: PERSONA_TIER_STANARD,
        personaimage: "personas/woman.png",
        personaemail: "jenn@launchmail.io",
        personarole: PERSONA_ROLE_DEVELOPER,
    },
    {
        personaname: "Cody",
        personatier: PERSONA_TIER_STANARD,
        personaimage: "personas/standard.jpg",
        personaemail: "cody@launchmail.io",
        personarole: PERSONA_ROLE_USER,
    },
];
