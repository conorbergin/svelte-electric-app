import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ClubScalarFieldEnumSchema = z.enum(['id','name','age']);

export const ClubpersonScalarFieldEnumSchema = z.enum(['id','person_id','club_id']);

export const PersonScalarFieldEnumSchema = z.enum(['id','name','age']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CLUB SCHEMA
/////////////////////////////////////////

export const ClubSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647),
})

export type Club = z.infer<typeof ClubSchema>

/////////////////////////////////////////
// CLUBPERSON SCHEMA
/////////////////////////////////////////

export const ClubpersonSchema = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid(),
  club_id: z.string().uuid(),
})

export type Clubperson = z.infer<typeof ClubpersonSchema>

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

export const PersonSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647),
})

export type Person = z.infer<typeof PersonSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CLUB
//------------------------------------------------------

export const ClubSelectSchema: z.ZodType<Prisma.ClubSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  age: z.boolean().optional(),
}).strict()

// CLUBPERSON
//------------------------------------------------------

export const ClubpersonSelectSchema: z.ZodType<Prisma.ClubpersonSelect> = z.object({
  id: z.boolean().optional(),
  person_id: z.boolean().optional(),
  club_id: z.boolean().optional(),
}).strict()

// PERSON
//------------------------------------------------------

export const PersonSelectSchema: z.ZodType<Prisma.PersonSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  age: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ClubWhereInputSchema: z.ZodType<Prisma.ClubWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClubWhereInputSchema),z.lazy(() => ClubWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClubWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClubWhereInputSchema),z.lazy(() => ClubWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  age: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ClubOrderByWithRelationInputSchema: z.ZodType<Prisma.ClubOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubWhereUniqueInputSchema: z.ZodType<Prisma.ClubWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const ClubOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClubOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClubCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ClubAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClubMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClubMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ClubSumOrderByAggregateInputSchema).optional()
}).strict();

export const ClubScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClubScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClubScalarWhereWithAggregatesInputSchema),z.lazy(() => ClubScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClubScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClubScalarWhereWithAggregatesInputSchema),z.lazy(() => ClubScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  age: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ClubpersonWhereInputSchema: z.ZodType<Prisma.ClubpersonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClubpersonWhereInputSchema),z.lazy(() => ClubpersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClubpersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClubpersonWhereInputSchema),z.lazy(() => ClubpersonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  club_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const ClubpersonOrderByWithRelationInputSchema: z.ZodType<Prisma.ClubpersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  club_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubpersonWhereUniqueInputSchema: z.ZodType<Prisma.ClubpersonWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const ClubpersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClubpersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  club_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClubpersonCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClubpersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClubpersonMinOrderByAggregateInputSchema).optional()
}).strict();

export const ClubpersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClubpersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClubpersonScalarWhereWithAggregatesInputSchema),z.lazy(() => ClubpersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClubpersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClubpersonScalarWhereWithAggregatesInputSchema),z.lazy(() => ClubpersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  person_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  club_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PersonWhereInputSchema: z.ZodType<Prisma.PersonWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  age: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const PersonOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonWhereUniqueInputSchema: z.ZodType<Prisma.PersonWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const PersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonSumOrderByAggregateInputSchema).optional()
}).strict();

export const PersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  age: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ClubCreateInputSchema: z.ZodType<Prisma.ClubCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const ClubUncheckedCreateInputSchema: z.ZodType<Prisma.ClubUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const ClubUpdateInputSchema: z.ZodType<Prisma.ClubUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubUncheckedUpdateInputSchema: z.ZodType<Prisma.ClubUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubCreateManyInputSchema: z.ZodType<Prisma.ClubCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const ClubUpdateManyMutationInputSchema: z.ZodType<Prisma.ClubUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClubUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubpersonCreateInputSchema: z.ZodType<Prisma.ClubpersonCreateInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid(),
  club_id: z.string().uuid()
}).strict();

export const ClubpersonUncheckedCreateInputSchema: z.ZodType<Prisma.ClubpersonUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid(),
  club_id: z.string().uuid()
}).strict();

export const ClubpersonUpdateInputSchema: z.ZodType<Prisma.ClubpersonUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubpersonUncheckedUpdateInputSchema: z.ZodType<Prisma.ClubpersonUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubpersonCreateManyInputSchema: z.ZodType<Prisma.ClubpersonCreateManyInput> = z.object({
  id: z.string().uuid(),
  person_id: z.string().uuid(),
  club_id: z.string().uuid()
}).strict();

export const ClubpersonUpdateManyMutationInputSchema: z.ZodType<Prisma.ClubpersonUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClubpersonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClubpersonUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  person_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  club_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonCreateInputSchema: z.ZodType<Prisma.PersonCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const PersonUncheckedCreateInputSchema: z.ZodType<Prisma.PersonUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const PersonUpdateInputSchema: z.ZodType<Prisma.PersonUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonUncheckedUpdateInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonCreateManyInputSchema: z.ZodType<Prisma.PersonCreateManyInput> = z.object({
  id: z.string().uuid(),
  name: z.string(),
  age: z.number().int().gte(-2147483648).lte(2147483647)
}).strict();

export const PersonUpdateManyMutationInputSchema: z.ZodType<Prisma.PersonUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PersonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const ClubCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClubCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ClubAvgOrderByAggregateInput> = z.object({
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClubMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClubMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClubSumOrderByAggregateInput> = z.object({
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const ClubpersonCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClubpersonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  club_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubpersonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClubpersonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  club_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClubpersonMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClubpersonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  person_id: z.lazy(() => SortOrderSchema).optional(),
  club_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PersonAvgOrderByAggregateInput> = z.object({
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PersonSumOrderByAggregateInputSchema: z.ZodType<Prisma.PersonSumOrderByAggregateInput> = z.object({
  age: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ClubFindFirstArgsSchema: z.ZodType<Prisma.ClubFindFirstArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereInputSchema.optional(),
  orderBy: z.union([ ClubOrderByWithRelationInputSchema.array(),ClubOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClubScalarFieldEnumSchema.array().optional(),
}).strict()

export const ClubFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClubFindFirstOrThrowArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereInputSchema.optional(),
  orderBy: z.union([ ClubOrderByWithRelationInputSchema.array(),ClubOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClubScalarFieldEnumSchema.array().optional(),
}).strict()

export const ClubFindManyArgsSchema: z.ZodType<Prisma.ClubFindManyArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereInputSchema.optional(),
  orderBy: z.union([ ClubOrderByWithRelationInputSchema.array(),ClubOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClubScalarFieldEnumSchema.array().optional(),
}).strict()

export const ClubAggregateArgsSchema: z.ZodType<Prisma.ClubAggregateArgs> = z.object({
  where: ClubWhereInputSchema.optional(),
  orderBy: z.union([ ClubOrderByWithRelationInputSchema.array(),ClubOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ClubGroupByArgsSchema: z.ZodType<Prisma.ClubGroupByArgs> = z.object({
  where: ClubWhereInputSchema.optional(),
  orderBy: z.union([ ClubOrderByWithAggregationInputSchema.array(),ClubOrderByWithAggregationInputSchema ]).optional(),
  by: ClubScalarFieldEnumSchema.array(),
  having: ClubScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ClubFindUniqueArgsSchema: z.ZodType<Prisma.ClubFindUniqueArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereUniqueInputSchema,
}).strict()

export const ClubFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClubFindUniqueOrThrowArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereUniqueInputSchema,
}).strict()

export const ClubpersonFindFirstArgsSchema: z.ZodType<Prisma.ClubpersonFindFirstArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereInputSchema.optional(),
  orderBy: z.union([ ClubpersonOrderByWithRelationInputSchema.array(),ClubpersonOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubpersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClubpersonScalarFieldEnumSchema.array().optional(),
}).strict()

export const ClubpersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClubpersonFindFirstOrThrowArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereInputSchema.optional(),
  orderBy: z.union([ ClubpersonOrderByWithRelationInputSchema.array(),ClubpersonOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubpersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClubpersonScalarFieldEnumSchema.array().optional(),
}).strict()

export const ClubpersonFindManyArgsSchema: z.ZodType<Prisma.ClubpersonFindManyArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereInputSchema.optional(),
  orderBy: z.union([ ClubpersonOrderByWithRelationInputSchema.array(),ClubpersonOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubpersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClubpersonScalarFieldEnumSchema.array().optional(),
}).strict()

export const ClubpersonAggregateArgsSchema: z.ZodType<Prisma.ClubpersonAggregateArgs> = z.object({
  where: ClubpersonWhereInputSchema.optional(),
  orderBy: z.union([ ClubpersonOrderByWithRelationInputSchema.array(),ClubpersonOrderByWithRelationInputSchema ]).optional(),
  cursor: ClubpersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ClubpersonGroupByArgsSchema: z.ZodType<Prisma.ClubpersonGroupByArgs> = z.object({
  where: ClubpersonWhereInputSchema.optional(),
  orderBy: z.union([ ClubpersonOrderByWithAggregationInputSchema.array(),ClubpersonOrderByWithAggregationInputSchema ]).optional(),
  by: ClubpersonScalarFieldEnumSchema.array(),
  having: ClubpersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ClubpersonFindUniqueArgsSchema: z.ZodType<Prisma.ClubpersonFindUniqueArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereUniqueInputSchema,
}).strict()

export const ClubpersonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClubpersonFindUniqueOrThrowArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereUniqueInputSchema,
}).strict()

export const PersonFindFirstArgsSchema: z.ZodType<Prisma.PersonFindFirstArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PersonScalarFieldEnumSchema.array().optional(),
}).strict()

export const PersonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PersonFindFirstOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PersonScalarFieldEnumSchema.array().optional(),
}).strict()

export const PersonFindManyArgsSchema: z.ZodType<Prisma.PersonFindManyArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: PersonScalarFieldEnumSchema.array().optional(),
}).strict()

export const PersonAggregateArgsSchema: z.ZodType<Prisma.PersonAggregateArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PersonGroupByArgsSchema: z.ZodType<Prisma.PersonGroupByArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithAggregationInputSchema.array(),PersonOrderByWithAggregationInputSchema ]).optional(),
  by: PersonScalarFieldEnumSchema.array(),
  having: PersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const PersonFindUniqueArgsSchema: z.ZodType<Prisma.PersonFindUniqueArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict()

export const PersonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PersonFindUniqueOrThrowArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict()

export const ClubCreateArgsSchema: z.ZodType<Prisma.ClubCreateArgs> = z.object({
  select: ClubSelectSchema.optional(),
  data: z.union([ ClubCreateInputSchema,ClubUncheckedCreateInputSchema ]),
}).strict()

export const ClubUpsertArgsSchema: z.ZodType<Prisma.ClubUpsertArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereUniqueInputSchema,
  create: z.union([ ClubCreateInputSchema,ClubUncheckedCreateInputSchema ]),
  update: z.union([ ClubUpdateInputSchema,ClubUncheckedUpdateInputSchema ]),
}).strict()

export const ClubCreateManyArgsSchema: z.ZodType<Prisma.ClubCreateManyArgs> = z.object({
  data: ClubCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ClubDeleteArgsSchema: z.ZodType<Prisma.ClubDeleteArgs> = z.object({
  select: ClubSelectSchema.optional(),
  where: ClubWhereUniqueInputSchema,
}).strict()

export const ClubUpdateArgsSchema: z.ZodType<Prisma.ClubUpdateArgs> = z.object({
  select: ClubSelectSchema.optional(),
  data: z.union([ ClubUpdateInputSchema,ClubUncheckedUpdateInputSchema ]),
  where: ClubWhereUniqueInputSchema,
}).strict()

export const ClubUpdateManyArgsSchema: z.ZodType<Prisma.ClubUpdateManyArgs> = z.object({
  data: z.union([ ClubUpdateManyMutationInputSchema,ClubUncheckedUpdateManyInputSchema ]),
  where: ClubWhereInputSchema.optional(),
}).strict()

export const ClubDeleteManyArgsSchema: z.ZodType<Prisma.ClubDeleteManyArgs> = z.object({
  where: ClubWhereInputSchema.optional(),
}).strict()

export const ClubpersonCreateArgsSchema: z.ZodType<Prisma.ClubpersonCreateArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  data: z.union([ ClubpersonCreateInputSchema,ClubpersonUncheckedCreateInputSchema ]),
}).strict()

export const ClubpersonUpsertArgsSchema: z.ZodType<Prisma.ClubpersonUpsertArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereUniqueInputSchema,
  create: z.union([ ClubpersonCreateInputSchema,ClubpersonUncheckedCreateInputSchema ]),
  update: z.union([ ClubpersonUpdateInputSchema,ClubpersonUncheckedUpdateInputSchema ]),
}).strict()

export const ClubpersonCreateManyArgsSchema: z.ZodType<Prisma.ClubpersonCreateManyArgs> = z.object({
  data: ClubpersonCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ClubpersonDeleteArgsSchema: z.ZodType<Prisma.ClubpersonDeleteArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  where: ClubpersonWhereUniqueInputSchema,
}).strict()

export const ClubpersonUpdateArgsSchema: z.ZodType<Prisma.ClubpersonUpdateArgs> = z.object({
  select: ClubpersonSelectSchema.optional(),
  data: z.union([ ClubpersonUpdateInputSchema,ClubpersonUncheckedUpdateInputSchema ]),
  where: ClubpersonWhereUniqueInputSchema,
}).strict()

export const ClubpersonUpdateManyArgsSchema: z.ZodType<Prisma.ClubpersonUpdateManyArgs> = z.object({
  data: z.union([ ClubpersonUpdateManyMutationInputSchema,ClubpersonUncheckedUpdateManyInputSchema ]),
  where: ClubpersonWhereInputSchema.optional(),
}).strict()

export const ClubpersonDeleteManyArgsSchema: z.ZodType<Prisma.ClubpersonDeleteManyArgs> = z.object({
  where: ClubpersonWhereInputSchema.optional(),
}).strict()

export const PersonCreateArgsSchema: z.ZodType<Prisma.PersonCreateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  data: z.union([ PersonCreateInputSchema,PersonUncheckedCreateInputSchema ]),
}).strict()

export const PersonUpsertArgsSchema: z.ZodType<Prisma.PersonUpsertArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereUniqueInputSchema,
  create: z.union([ PersonCreateInputSchema,PersonUncheckedCreateInputSchema ]),
  update: z.union([ PersonUpdateInputSchema,PersonUncheckedUpdateInputSchema ]),
}).strict()

export const PersonCreateManyArgsSchema: z.ZodType<Prisma.PersonCreateManyArgs> = z.object({
  data: PersonCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const PersonDeleteArgsSchema: z.ZodType<Prisma.PersonDeleteArgs> = z.object({
  select: PersonSelectSchema.optional(),
  where: PersonWhereUniqueInputSchema,
}).strict()

export const PersonUpdateArgsSchema: z.ZodType<Prisma.PersonUpdateArgs> = z.object({
  select: PersonSelectSchema.optional(),
  data: z.union([ PersonUpdateInputSchema,PersonUncheckedUpdateInputSchema ]),
  where: PersonWhereUniqueInputSchema,
}).strict()

export const PersonUpdateManyArgsSchema: z.ZodType<Prisma.PersonUpdateManyArgs> = z.object({
  data: z.union([ PersonUpdateManyMutationInputSchema,PersonUncheckedUpdateManyInputSchema ]),
  where: PersonWhereInputSchema.optional(),
}).strict()

export const PersonDeleteManyArgsSchema: z.ZodType<Prisma.PersonDeleteManyArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
}).strict()

interface ClubGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ClubArgs
  readonly type: Prisma.ClubGetPayload<this['_A']>
}

interface ClubpersonGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ClubpersonArgs
  readonly type: Prisma.ClubpersonGetPayload<this['_A']>
}

interface PersonGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.PersonArgs
  readonly type: Prisma.PersonGetPayload<this['_A']>
}

export const tableSchemas = {
  club: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "age",
        "INT4"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ClubCreateInputSchema as any)
      .partial()
      .or((ClubUncheckedCreateInputSchema as any).partial()),
    createSchema: ClubCreateArgsSchema,
    createManySchema: ClubCreateManyArgsSchema,
    findUniqueSchema: ClubFindUniqueArgsSchema,
    findSchema: ClubFindFirstArgsSchema,
    updateSchema: ClubUpdateArgsSchema,
    updateManySchema: ClubUpdateManyArgsSchema,
    upsertSchema: ClubUpsertArgsSchema,
    deleteSchema: ClubDeleteArgsSchema,
    deleteManySchema: ClubDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ClubCreateInputSchema>,
    Prisma.ClubCreateArgs['data'],
    Prisma.ClubUpdateArgs['data'],
    Prisma.ClubFindFirstArgs['select'],
    Prisma.ClubFindFirstArgs['where'],
    Prisma.ClubFindUniqueArgs['where'],
    never,
    Prisma.ClubFindFirstArgs['orderBy'],
    Prisma.ClubScalarFieldEnum,
    ClubGetPayload
  >,
  clubperson: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "person_id",
        "UUID"
      ],
      [
        "club_id",
        "UUID"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ClubpersonCreateInputSchema as any)
      .partial()
      .or((ClubpersonUncheckedCreateInputSchema as any).partial()),
    createSchema: ClubpersonCreateArgsSchema,
    createManySchema: ClubpersonCreateManyArgsSchema,
    findUniqueSchema: ClubpersonFindUniqueArgsSchema,
    findSchema: ClubpersonFindFirstArgsSchema,
    updateSchema: ClubpersonUpdateArgsSchema,
    updateManySchema: ClubpersonUpdateManyArgsSchema,
    upsertSchema: ClubpersonUpsertArgsSchema,
    deleteSchema: ClubpersonDeleteArgsSchema,
    deleteManySchema: ClubpersonDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ClubpersonCreateInputSchema>,
    Prisma.ClubpersonCreateArgs['data'],
    Prisma.ClubpersonUpdateArgs['data'],
    Prisma.ClubpersonFindFirstArgs['select'],
    Prisma.ClubpersonFindFirstArgs['where'],
    Prisma.ClubpersonFindUniqueArgs['where'],
    never,
    Prisma.ClubpersonFindFirstArgs['orderBy'],
    Prisma.ClubpersonScalarFieldEnum,
    ClubpersonGetPayload
  >,
  person: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "age",
        "INT4"
      ]
    ]),
    relations: [
    ],
    modelSchema: (PersonCreateInputSchema as any)
      .partial()
      .or((PersonUncheckedCreateInputSchema as any).partial()),
    createSchema: PersonCreateArgsSchema,
    createManySchema: PersonCreateManyArgsSchema,
    findUniqueSchema: PersonFindUniqueArgsSchema,
    findSchema: PersonFindFirstArgsSchema,
    updateSchema: PersonUpdateArgsSchema,
    updateManySchema: PersonUpdateManyArgsSchema,
    upsertSchema: PersonUpsertArgsSchema,
    deleteSchema: PersonDeleteArgsSchema,
    deleteManySchema: PersonDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof PersonCreateInputSchema>,
    Prisma.PersonCreateArgs['data'],
    Prisma.PersonUpdateArgs['data'],
    Prisma.PersonFindFirstArgs['select'],
    Prisma.PersonFindFirstArgs['where'],
    Prisma.PersonFindUniqueArgs['where'],
    never,
    Prisma.PersonFindFirstArgs['orderBy'],
    Prisma.PersonScalarFieldEnum,
    PersonGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
