export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Project Title' },
        { name: 'description', type: 'text' },
        { name: 'image', type: 'image' },
        { name: 'tech', type: 'array', of: [{ type: 'string' }] },
        { name: 'category', type: 'string' },
        { name: 'live', type: 'url' },
        { name: 'source', type: 'url' },
    ]
}
