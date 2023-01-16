<script lang="ts">
// @ts-nocheck

    import { page } from '$app/stores';
    import { ParseClockTime } from '$lib/parser';
    import axios from 'axios';
    import type { TAG_TYPE } from 'src/types/types';
    import { getContext } from 'svelte';

    console.log($page.params) // via dynamic routing
    console.log($page.data) // via page loading

    let eventId = $page.params.eventId
    let tags: import('$types/types').TAG_TYPE[];

    // so this is done server-side.
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    let eventData = axios
        .get(`/event/${eventId}`)
        .then(res => {
            return res.data.data
        })
    let tagData = axios
        .get(`/tags/${eventId}`)
        .then(res => {
            console.log(res.data.data)
            res.data.data.forEach(element => {
                console.log(ParseClockTime(element.period))
            });

            return res.data.data as TAG_TYPE[]
        })

</script>

<div>
    <p>/event/{eventId}</p>
    <div>
        {#await eventData}
            <p>loading...</p>
        {:then event}
            <div>
                <h1>{event.title}</h1>
                <h2>Created by: {event.author_username}</h2>
                {#await tagData}
                    <p>loading...</p>
                {:then tags}
                    {#each tags as tag}
                        <p>{tag.period}-{tag.username}</p>
                    {/each}
                {/await}
            </div>
        {:catch err}
        <p><i>{err}</i></p>
        {/await}
    </div>
</div>