import * as zod from "zod"
import {
  AttributeContributionSchema,
  ContentContributionSchema,
  DateContributionSchema,
} from "../schemas"

export type ContentContributionData = zod.infer<
  typeof ContentContributionSchema
>

export type AttributeContributionData = zod.infer<
  typeof AttributeContributionSchema
>

export type DateData = zod.infer<typeof DateContributionSchema>
