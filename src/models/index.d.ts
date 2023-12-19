import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerIncidencia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Incidencia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly conductor?: Conductor | null;
  readonly estado?: boolean | null;
  readonly url_video?: string | null;
  readonly ubicacion?: string | null;
  readonly fecha?: string | null;
  readonly hora?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly conductorIncidenciasId?: string | null;
}

type LazyIncidencia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Incidencia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly conductor: AsyncItem<Conductor | undefined>;
  readonly estado?: boolean | null;
  readonly url_video?: string | null;
  readonly ubicacion?: string | null;
  readonly fecha?: string | null;
  readonly hora?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly conductorIncidenciasId?: string | null;
}

export declare type Incidencia = LazyLoading extends LazyLoadingDisabled ? EagerIncidencia : LazyIncidencia

export declare const Incidencia: (new (init: ModelInit<Incidencia>) => Incidencia) & {
  copyOf(source: Incidencia, mutator: (draft: MutableModel<Incidencia>) => MutableModel<Incidencia> | void): Incidencia;
}

type EagerConductor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conductor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly incidencias?: (Incidencia | null)[] | null;
  readonly num_incidencias?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConductor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Conductor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly apellido?: string | null;
  readonly incidencias: AsyncCollection<Incidencia>;
  readonly num_incidencias?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Conductor = LazyLoading extends LazyLoadingDisabled ? EagerConductor : LazyConductor

export declare const Conductor: (new (init: ModelInit<Conductor>) => Conductor) & {
  copyOf(source: Conductor, mutator: (draft: MutableModel<Conductor>) => MutableModel<Conductor> | void): Conductor;
}