import type { ColumnDef } from "@tanstack/table-core";
import { createRawSnippet } from "svelte";
import { renderComponent, renderSnippet } from "$lib/components/ui/data-table/index.js";
import DataTableActions from "$lib/components/ui/data-table-coach/data-table-actions.svelte";
import DataTableStatusButton from "$lib/components/ui/data-table-coach/data-table-status-button.svelte";

export type RecentActivity = {
    id: string;
    name: string;
    status: string;
    challenge: string;
    reflectionQuality: number;
    date: string;
}

export type Payload = {
    cohortName: string,
    cohortId: string,
    cohortOrg: string
}

export const columns: ColumnDef<Payload>[] =[
    {
        accessorKey:"cohortName",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div class="text-left">Cohort Name</div>`
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row})=>{
            const nameCellSnippet = createRawSnippet<[string]>((getCohortName)=>{
                const name = getCohortName();
                return {
                    render: () => `<a href="${"cohort-progress/" + row.original.cohortId}"class="font-medium hover:text-blue-500 transition duration-100">${name}</a>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("cohortName")
            );
        },
    },
    {
        accessorKey:"cohortOrg",
        header: () => {
            const nameHeaderSnippet = createRawSnippet(()=>({
                render: () => `<div class="text-left">Cohort Organisation</div>`
            }));
            return renderSnippet(nameHeaderSnippet,"");
        },
        cell:({row})=>{
            const nameCellSnippet = createRawSnippet<[string]>((getCohortOrgName)=>{
                const name = getCohortOrgName();
                return {
                    render: () => `<div class="font-medium text-left">${name}</div>`,
                };
            });
            return renderSnippet(
                nameCellSnippet,
                row.getValue("cohortOrg")
            );
        },      
    },
    {
        id: "actions",
        cell:({row}) => {
            return renderComponent(DataTableActions,{id: row.original.cohortId})
        },
    },
]
