// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Incidencia, Conductor } = initSchema(schema);

export {
  Incidencia,
  Conductor
};