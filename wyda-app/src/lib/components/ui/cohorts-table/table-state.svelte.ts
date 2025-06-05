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
  
  export let pageSize = 10;
  export const sorting = $state({sortingState: [] as SortingState});
  export const columnFilters  = $state({columnFilters: [] as ColumnFiltersState})
  export const pagination = $state({paginationState: {pageIndex: 0, pageSize: pageSize} as PaginationState} )
  export const globalFilter = $state({globalFilter: ""});
  export const currentPageIndex = $state({value: 1});
  export const tableInput = $state({input: ""})

  // export const table = $state({table: createSvelteTable({
  //   get data() {
  //     return data;
  //   },
  //   columns,
  //   //function parameters needed for table features
  //   getCoreRowModel: getCoreRowModel(),
  //   getPaginationRowModel: getPaginationRowModel(),
  //   getSortedRowModel: getSortedRowModel(),
  //   getFilteredRowModel: getFilteredRowModel(),
  //   globalFilterFn: "includesString",

  //   //change handler parameters take in a function to update our reactive variables
  //   onPaginationChange: (updater) => {
  //     if (typeof updater === "function") {
  //       pagination.paginationState = updater(pagination.paginationState);
  //     } else {
  //       pagination.paginationState = updater;
  //     }
  //   },
  //   onSortingChange: (updater) => {
  //     if (typeof updater === "function") {
  //       sorting.sortingState = updater(sorting.sortingState);
  //     } else {
  //       sorting.sortingState = updater;
  //     }
  //   },
  //   onColumnFiltersChange: (updater) => {
  //     if (typeof updater === "function") {
  //       columnFilters.columnFilters = updater(columnFilters.columnFilters);
  //     } else {
  //       columnFilters.columnFilters = updater;
  //     }
  //     if (table.getRowCount() == 0) {
  //       currentPageIndex.value = 0;
  //     } else {
  //       currentPageIndex.value = 1;
  //     }
  //     numPages = Math.ceil(table.getRowCount() / pageSize);
  //   },
  //   onGlobalFilterChange: (updater) => {
  //     if (typeof updater === "function") {
  //       console.log(globalFilter);
  //       globalFilter.globalFilter = updater(globalFilter.globalFilter);
  //     } else {
  //       globalFilter.globalFilter = updater;
  //     }
  //     if (table.getRowCount() == 0) {
  //       currentPageIndex.value = 0;
  //     } else {
  //       currentPageIndex.value = 1;
  //     }
  //     numPages = Math.ceil(table.getRowCount() / pageSize);
  //   },
  //   //pass in getters to state for table to
  //   //access our variables when it needs to
  //   state: {
  //     get globalFilter() {
  //       return globalFilter.globalFilter;
  //     },
  //     get pagination() {
  //       return pagination.paginationState;
  //     },
  //     get sorting() {
  //       return sorting.sortingState;
  //     },
  //     get columnFilters() {
  //       return columnFilters.columnFilters;
  //     },
  //   },
  // }
  // )});

  // const filterableColumns = $state([
  //   {
  //     name: "Status",
  //     id: "status",
  //     column: table.getColumn("status"),
  //     filterActive: false,
  //   },
  //   {
  //     name: "Reflection Quality",
  //     id: "reflectionQuality",
  //     column: table.getColumn("reflectionQuality"),
  //     filterActive: false,
  //   },
  // ]);


  // let rowAmount = $state(table.getRowCount());
  // let numPages = $state(Math.ceil(rowAmount / pageSize));