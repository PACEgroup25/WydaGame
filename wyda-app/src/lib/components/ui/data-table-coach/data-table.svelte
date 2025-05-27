<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type PaginationState,
    type SortingState,
    type ColumnFiltersState,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/table-core";
  import {
    createSvelteTable,
    FlexRender,
  } from "$lib/components/ui/data-table/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import TableInput from "$lib/components/ui/input/table-input.svelte";
  import FilterMenu from "./data-table-filter-menu.svelte";
  import FilterTag from "./data-table-filter-tag.svelte";
  import pdfMake from "pdfmake/build/pdfmake";
  import pdfFonts from "pdfmake/build/vfs_fonts";
  (pdfMake as any).addVirtualFileSystem(pdfFonts);

  import { toast } from "svelte-sonner";
  import {
    ChevronRight,
    ChevronLeft,
    ChevronsLeft,
    ChevronsRight,
    Download,
  } from "@lucide/svelte";

  async function downloadAsPDF() {
    const docDefinition = {
      content: [
        { text: "Hello, world!", fontSize: 18 },
        { text: "This is a PDF generated with pdfmake.", margin: [0, 10] },
        {
          table: {
            body: [
              ["Column 1", "Column 2"],
              ["Data 1", "Data 2"],
            ],
          },
          margin: [0, 10],
        },
      ],
    };
    pdfMake.createPdf(docDefinition).download("my-pdf");
  }

  type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
  };

  function downloadCSV(data: any[]) {
    let csvContent = "";

    const headers = Object.keys(data[0]).join(",") + "\r\n";
    csvContent += headers;

    for (var i = 0; i < data.length; i++) {
      let row = Object.values(data[i]).join(",");
      console.log(row);
      csvContent += row + "\r\n";
    }

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  let { data, columns }: DataTableProps<TData, TValue> = $props();

  //local reactive variables
  let pageSize = 10;
  let pagination = $state<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let globalFilter = $state<string>("");
  let currentPageIndex = $state(1);

  //Initialisation of svelte table instance
  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    //function parameters needed for table features
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: "includesString",

    //change handler parameters take in a function to update our reactive variables
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: (updater) => {
      if (typeof updater === "function") {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: (updater) => {
      if (typeof updater === "function") {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
      if (table.getRowCount() == 0) {
        currentPageIndex = 0;
      } else {
        currentPageIndex = 1;
      }
      numPages = Math.ceil(table.getRowCount() / pageSize);
    },
    onGlobalFilterChange: (updater) => {
      if (typeof updater === "function") {
        console.log(globalFilter);
        globalFilter = updater(globalFilter);
      } else {
        globalFilter = updater;
      }
      if (table.getRowCount() == 0) {
        currentPageIndex = 0;
      } else {
        currentPageIndex = 1;
      }
      numPages = Math.ceil(table.getRowCount() / pageSize);
    },
    //pass in getters to state for table to
    //access our variables when it needs to
    state: {
      get globalFilter() {
        return globalFilter;
      },
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
    },
  });

  const filterableColumns = $state([
    {
      name: "Status",
      id: "status",
      column: table.getColumn("status"),
      filterActive: false,
    },
    {
      name: "Reflection Quality",
      id: "reflectionQuality",
      column: table.getColumn("reflectionQuality"),
      filterActive: false,
    },
  ]);

  //Item boundary calculations to display on table

  let rowAmount = $state(table.getRowCount());
  let numPages = $state(Math.ceil(rowAmount / pageSize));

  let itemBoundaryEnd = () => {
    let res = pageSize * currentPageIndex;
    if (res > rowAmount) {
      res = rowAmount;
    }
    return res;
  };

  let itemBoundaryStart = () => {
    if (pageSize * currentPageIndex > rowAmount) {
      return pageSize * currentPageIndex - (pageSize - 1);
    }
    return itemBoundaryEnd() - (pageSize - 1);
  };

  //reactive value for rendering alternative metadata
  let tableInput = $state("");
</script>

<div class="flex items-center py-4">
  <div class="flex w-full justify-between items-center space-x-2">
    <!-- global search input -->
    <div class="flex space-x-2">
      <TableInput
        class="outline-none focus:outline-none max-w-sm"
        placeholder="Search..."
        bind:value={tableInput}
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
          <FilterTag bind:columnData={filterableColumns[i]} {columnFilters} />
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
                downloadAsPDF();
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
<div class="rounded-md border">
  <Table.Root>
    <Table.Header class="bg-[#f0fcff]">
      {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
        <Table.Row>
          {#each headerGroup.headers as header (header.id)}
            <Table.Head>
              {#if !header.isPlaceholder}
                <FlexRender
                  content={header.column.columnDef.header}
                  context={header.getContext()}
                />
              {/if}
            </Table.Head>
          {/each}
        </Table.Row>
      {/each}
    </Table.Header>
    <Table.Body>
      {#each table.getRowModel().rows as row (row.id)}
        <Table.Row data-state={row.getIsSelected() && "selected"}>
          {#each row.getVisibleCells() as cell (cell.id)}
            <Table.Cell>
              <!-- render the appropriate symbol based on cell content -->
              {#if cell.getContext().getValue() == "On track"}
                <div class="flex justify-center bg-green-50 p-1 rounded-md">
                  <FlexRender
                    content={cell.column.columnDef.cell}
                    context={cell.getContext()}
                  />
                </div>
              {:else if cell.getContext().getValue() == "Behind"}
                <div
                  class="flex justify-center items-center bg-red-100 p-1 rounded-md"
                >
                  <FlexRender
                    content={cell.column.columnDef.cell}
                    context={cell.getContext()}
                  />
                </div>
              {:else}
                <FlexRender
                  content={cell.column.columnDef.cell}
                  context={cell.getContext()}
                />
              {/if}
            </Table.Cell>
          {/each}
        </Table.Row>
      {:else}
        <Table.Row>
          <Table.Cell colspan={columns.length} class="h-24 text-center">
            No results.
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
<!-- UI elements for pagination -->
<div class="flex items-center justify-between space-x-2 py-4">
  <div class="flex font-medium">Items per page: {pageSize}</div>
  <!-- if user is searching through input display amount of items found
  else render normal table meta data -->
  <div class="font-medium">
    {#if tableInput || table.getState().columnFilters.length > 0}
      {table.getRowCount()} Items out of {rowAmount}
    {:else}
      Items {itemBoundaryStart()} - {itemBoundaryEnd()} of {rowAmount}
    {/if}
  </div>
  <div class="flex flex-col">
    <div class="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onclick={() => {
          table.firstPage();
          currentPageIndex = 1;
        }}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronsLeft />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onclick={() => {
          table.previousPage();
          console.log("previous page pressed!");
          currentPageIndex--;
        }}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onclick={() => {
          table.nextPage();
          console.log("next page pressed!");
          currentPageIndex++;
        }}
        disabled={!table.getCanNextPage()}
      >
        <ChevronRight />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onclick={() => {
          table.lastPage();
          currentPageIndex = numPages;
        }}
        disabled={!table.getCanNextPage()}
      >
        <ChevronsRight />
      </Button>
    </div>
    <div class="flex justify-center">
      Page {currentPageIndex} of {numPages}
    </div>
  </div>
</div>
