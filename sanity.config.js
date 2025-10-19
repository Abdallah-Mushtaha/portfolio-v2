'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import schemaTypes from './src/sanity/schemaTypes'  // default export

import { structure } from './src/sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,      // استخدام Project ID
  dataset,        // استخدام Dataset
  schema: {
    types: schemaTypes
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
