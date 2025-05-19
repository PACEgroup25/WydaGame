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
  import FilterButton from "./data-table-filter-button.svelte";
  import { CircleCheckBigIcon, TriangleAlert } from "@lucide/svelte";

  type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
  };

  let { data, columns }: DataTableProps<TData, TValue> = $props();

  //local reactive variables
  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 9 });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let globalFilter = $state<string>("");

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
      console.log(globalFilter);
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
  let page = $state(1);

  //for filter button:
  //use dropdown menu to hold toggleable buttons to determine and set
  //filter parameters, need to pass in column references to filter button
  //for it to toggle sorting handler
</script>

<div class="flex items-center py-4">
  <div class="flex w-full">
    <!-- global search input -->
    <Input
      class="outline-none focus:outline-none max-w-sm"
      placeholder="Search..."
      onchange={(e) => {
        table.setGlobalFilter(e.currentTarget.value);
      }}
      oninput={(e) => {
        table.setGlobalFilter(e.currentTarget.value);
      }}
    />
    <FilterButton />
  </div>
</div>
<div class="rounded-md border">
  <Table.Root>
    <Table.Header>
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
                <div class="flex justify-between items-center">
                  <FlexRender
                    content={cell.column.columnDef.cell}
                    context={cell.getContext()}
                  />
                  <CircleCheckBigIcon color="green" />
                </div>
              {:else if cell.getContext().getValue() == "Behind"}
                <div class="flex justify-between items-center">
                  <FlexRender
                    content={cell.column.columnDef.cell}
                    context={cell.getContext()}
                  />
                  <TriangleAlert color="red" />
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
<div class="flex items-center justify-end space-x-2 py-4">
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
    Previous
  </Button>
  <Input
    class="w-[3em] text-center"
    bind:value={page}
    onchange={(e) => {
      let count = table.getPageCount();
      //reset page number if out of bounds
      if (page > count) {
        page = count;
      }
      if (page < 1) {
        page = 1;
      }
      //page is one indexed but setPage is zero indexed
      table.setPageIndex(page - 1);
    }}
  />
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
    Next
  </Button>
</div>
