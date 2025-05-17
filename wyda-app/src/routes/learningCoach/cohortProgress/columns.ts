import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderSnippet } from "$lib/components/ui/data-table/index.js";


export type RecentActivity = {
    name: string;
    org: string;
    status: string;
    challenge: string;
    reflectionQuality: number;
    date: string;
}

export const columns: ColumnDef<RecentActivity>[] = [
    {
        accessorKey: "name",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div class="text-left">Name</div>`,
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row}) => {
            const nameCellSnippet = createRawSnippet<[string]>((getName) =>{
                const name = getName();
                return {
                    render: () => `<div class ="font-medium">${name}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("name")
            );
        },
    },
    {
        accessorKey: "org",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div>Org</div>`,
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        id:"org",
        cell:({row}) => {
            const nameCellSnippet = createRawSnippet<[string]>((getOrg) =>{
                const org = getOrg();
                return {
                    render: () => `<div class="font-medium">${org}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("org")
            );
        },
    },
    {
        accessorKey:"status",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div>Status</div>`,
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row}) => {
            const nameCellSnippet = createRawSnippet<[string]>((getStatus) =>{
                const status = getStatus();
                return {
                    render: () => `<div class="font-medium">${status}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("status")
            );
        },
    },
    {
        accessorKey:"challenge",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div>Challenge</div>`,
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row}) => {
            const nameCellSnippet = createRawSnippet<[string]>((getChallenge) =>{
                const challenge = getChallenge();
                return {
                    render: () => `<div class="font-medium">${challenge}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("challenge")
            );
        },
    },
    {
        accessorKey:"reflectionQuality",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div>Reflection Quality</div>`,
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row}) => {
            const nameCellSnippet = createRawSnippet<[string]>((getReflectionQuality) =>{
                const reflectionQuality = getReflectionQuality();
                return {
                    render: () => `<div class="font-medium">${reflectionQuality}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("reflectionQuality")
            );
        },
    },
    {
        accessorKey:"date",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div>Date</div>`,
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row}) => {
            const nameCellSnippet = createRawSnippet<[string]>((getDate) =>{
                const date = getDate();
                return {
                    render: () => `<div class="font-medium">${date}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("date")
            );
        },
    }
]

