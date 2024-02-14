
'use client'

import { CommandItem } from "@/components/ui/command";
import {useEffect, useState} from "react";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ToggleTheme() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const {theme, setTheme } = useTheme();



    useEffect(() => {
        setMounted(true);
        console.log(theme)
        if (!isDark) {
            if (theme === "dark") {
                setIsDark(true);
            }
        };
    }, [isDark, theme]);


    if (!mounted) {
        return null;
    }


    return (

        <CommandItem className="flex justify-between">
            <Label>Dark Mode</Label>
            <Switch checked={isDark} onCheckedChange={() => {
                setTheme(isDark ? "light" : "dark");
                setIsDark(!isDark);
            }} />
        </CommandItem>
    );
    };