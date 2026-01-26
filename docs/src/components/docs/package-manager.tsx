"use client";
import type { Key } from "react";
import * as React from "react";

import { TabsList, Tabs, TabsContent, TabsTrigger } from "../ui/tabs"; // Updated imports
// import { CodeBlock } from "@/components/ui/code-block"; // Adjust path as needed

import { YarnIcon, NpmSmallIcon, PnpmIcon, BunIcon, CLIBoldIcon } from "../icons";


import { CodeBlock } from "fumadocs-ui/components/codeblock";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

type PackageManagerName = "cli" | "npm" | "yarn" | "pnpm" | "bun";

type PackageManager = {
    icon: React.ReactNode;
    name: PackageManagerName;
    label?: string;
};

const packageManagers: PackageManager[] = [
    {
        name: "cli",
        label: "CLI",
        icon: <CLIBoldIcon className="text-lg text-default-600 dark:text-default-400" />,
    },
    {
        name: "pnpm",
        icon: <PnpmIcon className="text-[#F69220]" />,
    },
    {
        name: "npm",
        icon: <NpmSmallIcon className="text-[#E53E3E]" />,
    },
    {
        name: "yarn",
        icon: <YarnIcon className="text-[#2C8EBB]" />,
    },
    {
        name: "bun",
        icon: <BunIcon className="text-lg text-[#FBF0DF]" />,
    },
];

export interface PackageManagersProps {
    commands: Partial<Record<PackageManagerName, string>>;
    showGlobalInstallWarning?: boolean;
}

export const PackageManagers = ({
    commands,
    showGlobalInstallWarning = false,
}: PackageManagersProps) => {
    const availableManagers = packageManagers.filter((pm) => Boolean(commands[pm.name]));
    const [selectedManager, setSelectedManager] = React.useState<PackageManagerName>(
        (availableManagers[0]?.name as PackageManagerName) || "npm"
    );

    const handleSelectionChange = (value: string) => {
        setSelectedManager(value as PackageManagerName);
    };

    return (
        <>
            <Tabs
                value={selectedManager}
                onValueChange={handleSelectionChange}
                className="group mt-4 min-w-[300px] w-full overflow-x-auto"
            >
                <TabsList>
                    {availableManagers.map(({ name, label, icon }) => (
                        <TabsTrigger key={name} value={name}>
                            <div className="flex items-center gap-2">
                                {icon}
                                <span className="font-medium">{label ?? name}</span>
                            </div>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {availableManagers.map(({ name }) => (
                    <TabsContent key={name} value={name}>
                        
                        <DynamicCodeBlock 
lang="bash"
code={commands[name] as string}
                        />

                    </TabsContent>
                ))}
            </Tabs>

            
        </>
    );
};
