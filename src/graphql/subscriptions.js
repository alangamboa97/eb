/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIncidencia = /* GraphQL */ `
  subscription OnCreateIncidencia(
    $filter: ModelSubscriptionIncidenciaFilterInput
  ) {
    onCreateIncidencia(filter: $filter) {
      id
      conductor {
        id
        nombre
        apellido
        incidencias {
          nextToken
        }
        num_incidencias
        createdAt
        updatedAt
      }
      estado
      url_video
      ubicacion
      fecha
      hora
      createdAt
      updatedAt
      conductorIncidenciasId
    }
  }
`;
export const onUpdateIncidencia = /* GraphQL */ `
  subscription OnUpdateIncidencia(
    $filter: ModelSubscriptionIncidenciaFilterInput
  ) {
    onUpdateIncidencia(filter: $filter) {
      id
      conductor {
        id
        nombre
        apellido
        incidencias {
          nextToken
        }
        num_incidencias
        createdAt
        updatedAt
      }
      estado
      url_video
      ubicacion
      fecha
      hora
      createdAt
      updatedAt
      conductorIncidenciasId
    }
  }
`;
export const onDeleteIncidencia = /* GraphQL */ `
  subscription OnDeleteIncidencia(
    $filter: ModelSubscriptionIncidenciaFilterInput
  ) {
    onDeleteIncidencia(filter: $filter) {
      id
      conductor {
        id
        nombre
        apellido
        incidencias {
          nextToken
        }
        num_incidencias
        createdAt
        updatedAt
      }
      estado
      url_video
      ubicacion
      fecha
      hora
      createdAt
      updatedAt
      conductorIncidenciasId
    }
  }
`;
export const onCreateConductor = /* GraphQL */ `
  subscription OnCreateConductor(
    $filter: ModelSubscriptionConductorFilterInput
  ) {
    onCreateConductor(filter: $filter) {
      id
      nombre
      apellido
      incidencias {
        items {
          id
          estado
          url_video
          ubicacion
          fecha
          hora
          createdAt
          updatedAt
          conductorIncidenciasId
        }
        nextToken
      }
      num_incidencias
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConductor = /* GraphQL */ `
  subscription OnUpdateConductor(
    $filter: ModelSubscriptionConductorFilterInput
  ) {
    onUpdateConductor(filter: $filter) {
      id
      nombre
      apellido
      incidencias {
        items {
          id
          estado
          url_video
          ubicacion
          fecha
          hora
          createdAt
          updatedAt
          conductorIncidenciasId
        }
        nextToken
      }
      num_incidencias
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConductor = /* GraphQL */ `
  subscription OnDeleteConductor(
    $filter: ModelSubscriptionConductorFilterInput
  ) {
    onDeleteConductor(filter: $filter) {
      id
      nombre
      apellido
      incidencias {
        items {
          id
          estado
          url_video
          ubicacion
          fecha
          hora
          createdAt
          updatedAt
          conductorIncidenciasId
        }
        nextToken
      }
      num_incidencias
      createdAt
      updatedAt
    }
  }
`;
