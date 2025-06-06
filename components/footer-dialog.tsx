"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface FooterDialogProps {
    title: string;
    triggerText: string;
    children: React.ReactNode;
}

export function FooterDialog({ title, triggerText, children }: FooterDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="text-sm text-muted-foreground hover:text-foreground">
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5">
                <DialogHeader className="contents space-y-0 text-left">
                    <DialogTitle className="border-b border-border px-6 py-4 text-base">
                        {title}
                    </DialogTitle>
                    <div className="overflow-y-auto">
                        <DialogDescription asChild>
                            <div className="px-6 py-4">
                                {children}
                            </div>
                        </DialogDescription>
                        <DialogFooter className="px-6 pb-6 sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button">Tamam</Button>
                            </DialogClose>
                        </DialogFooter>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
} 