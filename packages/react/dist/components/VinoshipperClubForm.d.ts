declare global {
    interface Window {
        Vinoshipper: any;
    }
}
export type EmbedTheme = "indigo" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "teal" | "cyan" | "gray" | "black";
export interface VinoshipperClubFormProps {
    accountId: string;
    theme?: EmbedTheme;
    darkMode?: boolean;
}
export declare const VinoshipperClubForm: ({ accountId, theme, darkMode, }: VinoshipperClubFormProps) => import("react/jsx-runtime").JSX.Element;
