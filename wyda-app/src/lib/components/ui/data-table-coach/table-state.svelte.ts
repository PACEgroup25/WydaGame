  import {
    type PaginationState,
    type SortingState,
    type ColumnFiltersState,
  } from "@tanstack/table-core";

  
  export let pageSize = 10;

  export const pagination = $state({paginationState: {pageIndex:0,pageSize:pageSize} as PaginationState})
  export const sorting = $state({sortingState: [] as SortingState});
  export const columnFilters = $state({columnFilters: [] as ColumnFiltersState});
  export const globalFilter = $state({globalFilter: ""});
  export const currentPageIndex = $state({value: 1});

