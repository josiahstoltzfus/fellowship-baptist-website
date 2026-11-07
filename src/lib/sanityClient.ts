import {createClient} from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'l4i3zywx',
    dataset: 'production',
    apiVersion: '2026-11-05',
    useCdn: false,
})