import * as React from "react";

export const useCopyToClipboard = ({code} : {code : string}) => {

    const [copied, setCopied] = React.useState(false);

    const copy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};