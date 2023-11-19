import * as zod from "zod"

export const ContentContributionSchema = zod.object({
  content: zod.string().min(1, "Campo Obrigatório"),
})

export const AttributeContributionSchema = zod.object({
  attribute: zod.string(),
})

export const DateContributionSchema = zod.object({
  date: zod.string(),
})
