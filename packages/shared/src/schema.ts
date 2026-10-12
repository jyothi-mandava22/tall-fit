import { z } from "zod";

export const UnitSchema = z.enum(["cm", "in"]);
export const MeasurementTypeSchema = z.enum(["body", "garment", "both"]);
export const SourceSchema = z.enum(["chart", "tag", "description"]);

export const SizeSchema = z.object({
  label: z.string(),
  inseam: z.number().nullable(),
  outseam: z.number().nullable(),
  garment_length: z.number().nullable(),
  waist_flat: z.number().nullable(),
  hip_flat: z.number().nullable(),
  thigh_flat: z.number().nullable(),
  body_bust: z.number().nullable(),
  body_waist: z.number().nullable(),
  body_hip: z.number().nullable(),
  foot_length: z.number().nullable(),
  uk_size: z.string().nullable(),
  eu_size: z.string().nullable(),
});

export const ChartEntrySchema = z.object({
  unit: UnitSchema,
  measurement_type: MeasurementTypeSchema,
  source: SourceSchema,
  source_url: z.string().url(),
  retrieved_on: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "ISO date YYYY-MM-DD"),
  sizes: z.array(SizeSchema),
});

export type Unit = z.infer<typeof UnitSchema>;
export type MeasurementType = z.infer<typeof MeasurementTypeSchema>;
export type Source = z.infer<typeof SourceSchema>;
export type Size = z.infer<typeof SizeSchema>;
export type ChartEntry = z.infer<typeof ChartEntrySchema>;