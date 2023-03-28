/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          fecha_hora
          createdAt
          updatedAt
          conductorIncidenciasId
          incidenciaDetallesId
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
          fecha_hora
          createdAt
          updatedAt
          conductorIncidenciasId
          incidenciaDetallesId
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
          fecha_hora
          createdAt
          updatedAt
          conductorIncidenciasId
          incidenciaDetallesId
        }
        nextToken
      }
      num_incidencias
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIncidencia = /* GraphQL */ `
  subscription OnCreateIncidencia(
    $filter: ModelSubscriptionIncidenciaFilterInput
  ) {
    onCreateIncidencia(filter: $filter) {
      id
      estado
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
      detalles {
        id
        incidencia {
          id
          estado
          fecha_hora
          createdAt
          updatedAt
          conductorIncidenciasId
          incidenciaDetallesId
        }
        ubicacion
        url_video
        createdAt
        updatedAt
        detallesIncidenciaId
      }
      fecha_hora
      createdAt
      updatedAt
      conductorIncidenciasId
      incidenciaDetallesId
    }
  }
`;
export const onUpdateIncidencia = /* GraphQL */ `
  subscription OnUpdateIncidencia(
    $filter: ModelSubscriptionIncidenciaFilterInput
  ) {
    onUpdateIncidencia(filter: $filter) {
      id
      estado
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
      detalles {
        id
        incidencia {
          id
          estado
          fecha_hora
          createdAt
          updatedAt
          conductorIncidenciasId
          incidenciaDetallesId
        }
        ubicacion
        url_video
        createdAt
        updatedAt
        detallesIncidenciaId
      }
      fecha_hora
      createdAt
      updatedAt
      conductorIncidenciasId
      incidenciaDetallesId
    }
  }
`;
export const onDeleteIncidencia = /* GraphQL */ `
  subscription OnDeleteIncidencia(
    $filter: ModelSubscriptionIncidenciaFilterInput
  ) {
    onDeleteIncidencia(filter: $filter) {
      id
      estado
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
      detalles {
        id
        incidencia {
          id
          estado
          fecha_hora
          createdAt
          updatedAt
          conductorIncidenciasId
          incidenciaDetallesId
        }
        ubicacion
        url_video
        createdAt
        updatedAt
        detallesIncidenciaId
      }
      fecha_hora
      createdAt
      updatedAt
      conductorIncidenciasId
      incidenciaDetallesId
    }
  }
`;
export const onCreateDetalles = /* GraphQL */ `
  subscription OnCreateDetalles($filter: ModelSubscriptionDetallesFilterInput) {
    onCreateDetalles(filter: $filter) {
      id
      incidencia {
        id
        estado
        conductor {
          id
          nombre
          apellido
          num_incidencias
          createdAt
          updatedAt
        }
        detalles {
          id
          ubicacion
          url_video
          createdAt
          updatedAt
          detallesIncidenciaId
        }
        fecha_hora
        createdAt
        updatedAt
        conductorIncidenciasId
        incidenciaDetallesId
      }
      ubicacion
      url_video
      createdAt
      updatedAt
      detallesIncidenciaId
    }
  }
`;
export const onUpdateDetalles = /* GraphQL */ `
  subscription OnUpdateDetalles($filter: ModelSubscriptionDetallesFilterInput) {
    onUpdateDetalles(filter: $filter) {
      id
      incidencia {
        id
        estado
        conductor {
          id
          nombre
          apellido
          num_incidencias
          createdAt
          updatedAt
        }
        detalles {
          id
          ubicacion
          url_video
          createdAt
          updatedAt
          detallesIncidenciaId
        }
        fecha_hora
        createdAt
        updatedAt
        conductorIncidenciasId
        incidenciaDetallesId
      }
      ubicacion
      url_video
      createdAt
      updatedAt
      detallesIncidenciaId
    }
  }
`;
export const onDeleteDetalles = /* GraphQL */ `
  subscription OnDeleteDetalles($filter: ModelSubscriptionDetallesFilterInput) {
    onDeleteDetalles(filter: $filter) {
      id
      incidencia {
        id
        estado
        conductor {
          id
          nombre
          apellido
          num_incidencias
          createdAt
          updatedAt
        }
        detalles {
          id
          ubicacion
          url_video
          createdAt
          updatedAt
          detallesIncidenciaId
        }
        fecha_hora
        createdAt
        updatedAt
        conductorIncidenciasId
        incidenciaDetallesId
      }
      ubicacion
      url_video
      createdAt
      updatedAt
      detallesIncidenciaId
    }
  }
`;
