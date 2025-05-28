<script lang="ts">
  import FilterMenu from "./data-table-filter-menu.svelte";
  import TableInput from "$lib/components/ui/input/table-input.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import pdfMake from "pdfmake/build/pdfmake";
  import pdfFonts from "pdfmake/build/vfs_fonts";
  import type { TDocumentDefinitions } from "pdfmake/interfaces";
  import { tableInput } from "./table-state.svelte.ts";
  import Button from "$lib/components/ui/button";
  import { Download } from "@lucide/svelte";
  (pdfMake as any).addVirtualFileSystem(pdfFonts);
  let { data } = $props();

  //function for downloading table data as a PDF, utilises makePdf
  function downloadAsPDF(data: any[]) {
    let bodyArr: (string | number)[][] = [];
    let tableColHeaders = Object.keys(data[0]);

    for (var i = 0; i < data.length; i++) {
      let row: (string | number)[] = Object.values(data[i]);
      bodyArr.push(row);
    }

    const docDefinition: TDocumentDefinitions = {
      content: [
        { text: "Cohort Data", fontSize: 18 },
        {
          table: {
            body: [tableColHeaders, ...bodyArr],
          },
          margin: [0, 10],
        },
      ],
      defaultStyle: {
        fontSize: 8,
      },
    };
    pdfMake.createPdf(docDefinition).download("my-pdf");
  }
</script>

<div class="flex items-center py-4">
  <div class="flex w-full justify-between items-center space-x-2">
    <!-- global search input -->
    <div class="flex space-x-2">
      <TableInput
        class="outline-none focus:outline-none max-w-sm"
        placeholder="Search..."
        bind:value={tableInput.input}
        onchange={(e) => {
          table.setGlobalFilter(e.currentTarget.value);
        }}
        oninput={(e) => {
          table.setGlobalFilter(e.currentTarget.value);
        }}
      />
      <FilterMenu filterColumns={filterableColumns} />
      {#each filterableColumns as filterColumn, i}
        {#if filterColumn.filterActive}
          <FilterTag
            bind:columnData={filterableColumns[i]}
            columnFilters={columnFilters.columnFilters}
          />
        {/if}
      {/each}
    </div>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}
        ><Download />Export</DropdownMenu.Trigger
      >
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <div class="flex flex-col">
            <Button
              variant={"ghost"}
              onclick={() => {
                toast("Your CSV file is downloading");
                downloadCSV(data);
                console.log("downloading");
              }}
            >
              Export as CSV
            </Button>
            <Button
              variant={"ghost"}
              onclick={() => {
                toast("Your PDF file is downloading");
                downloadAsPDF(data);
              }}
            >
              Export as PDF
            </Button>
          </div>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</div>
