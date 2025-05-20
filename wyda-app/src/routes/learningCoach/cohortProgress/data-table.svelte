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
  import Input from "$lib/components/ui/input/input.svelte";
  import TableInput from "$lib/components/ui/input/table-input.svelte";
  import FilterButton from "./data-table-filter-button.svelte";
  import { ChevronRight, ChevronLeft } from "lucide-svelte";
  import { ChevronsLeft, ChevronsRight } from "@lucide/svelte";

  type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
  };

  let { data, columns }: DataTableProps<TData, TValue> = $props();

  //local reactive variables
  let pageSize = $state(10);
  let pagination = $state<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let globalFilter = $state<string>("");
  let page = $state(1);

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
    },
    onGlobalFilterChange: (updater) => {
      if (typeof updater === "function") {
        console.log(globalFilter);
        globalFilter = updater(globalFilter);
      } else {
        globalFilter = updater;
      }
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

  const filterColumns = {
    reflectionQuality: table.getColumn("reflectionQuality"),
    date: table.getColumn("date"),
  };

  //Item boundary calculations to display on table

  let rowAmount = table.getRowCount();
  //page size is reactive, (user may change it in the future)
  //so let numPages derive for pageSize updates
  let numPages = $derived(Math.ceil(rowAmount / pageSize));
  let itemBoundaryEnd = () => {
    let res = pageSize * page;
    if (page > numPages) {
      res = rowAmount;
    }
    return res;
  };

  let itemBoundaryStart = () => {
    if (page > numPages) {
      return pageSize * page - (pageSize - 1);
    }
    return itemBoundaryEnd() - (pageSize - 1);
  };

  //reactive value for rendering alternative metadata
  let tableInput = $state("");
</script>

<div class="flex items-center py-4">
  <div class="flex w-full items-center space-x-2">
    <!-- global search input -->
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
    <FilterButton columns={filterColumns} />
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
    {#if tableInput}
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
          page = 1;
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
          page--;
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
          page++;
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
          page = numPages;
        }}
        disabled={!table.getCanNextPage()}
      >
        <ChevronsRight />
      </Button>
    </div>
    <div class="flex justify-center">
      Page {page} of {numPages}
    </div>
  </div>
</div>
