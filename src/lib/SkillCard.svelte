<script lang="ts">
    import type { States } from './types';

    export let percentage: number = 0;
    export let state: States = 'none';
</script>

<style>
</style>

<div class="flex w-full flex-col space-y-4 sm:px-4">
    <h4 class="flex flex-row items-center justify-between text-nowrap text-lg sm:pl-4 md:text-3xl">
        <div class="flex-shrink overflow-hidden text-ellipsis">
            <slot />
        </div>
        <div class="flex-0">
            {#if state === 'active'}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="h-6 w-6 stroke-2"
                >
                    <path d="M7 12.5L10 15.5L17 8.5" stroke-linecap="round" stroke-linejoin="round"
                    ></path>
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            {:else if state === 'learning'}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    class="h-6 w-6 stroke-[1.5]"
                >
                    <path
                        d="M8.5 16.5L12 13L15.5 16.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M8.5 10.5L12 7L15.5 10.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            {:else if state === 'paused'}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6 stroke-[1.5]"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                    />
                </svg>
            {/if}
        </div>
    </h4>
    <div class="relative h-12 w-full border-2 bg-transparent px-2.5 py-1.5">
        <span
            class="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 bg-black"
        ></span>
        <span
            class="absolute right-0 top-0 h-3 w-3 -translate-y-1/2 translate-x-1/2 rotate-45 border-2 bg-black"
        ></span>
        <span
            class="absolute bottom-0 left-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 border-2 bg-black"
        ></span>
        <span
            class="absolute bottom-0 right-0 h-3 w-3 translate-x-1/2 translate-y-1/2 rotate-45 border-2 bg-black"
        ></span>
        <div class="relative flex h-full w-full items-center bg-transparent text-white">
            <div
                class="flex h-full w-0 items-center justify-center bg-white"
                style="width: {percentage}%;"
            ></div>
            <span class="absolute z-10 w-full text-center text-2xl font-medium mix-blend-difference"
                >{percentage}%</span
            >
        </div>
    </div>
</div>
