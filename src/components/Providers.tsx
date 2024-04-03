'use client';

import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <FluentProvider theme={teamsLightTheme}>
                {children}
        </FluentProvider>
    );
}

export default Providers;