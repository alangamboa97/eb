/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConductor = /* GraphQL */ `
  query GetConductor($id: ID!) {
    getConductor(id: $id) {
      id
      nombre
      apellido
      incidencias {
        items {
          id
          title
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
export const listConductors = /* GraphQL */ `
  query ListConductors(
    $filter: ModelConductorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConductors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIncidencia = /* GraphQL */ `
  query GetIncidencia($id: ID!) {
    getIncidencia(id: $id) {
      id
      title
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
          title
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
export const listIncidencias = /* GraphQL */ `
  query ListIncidencias(
    $filter: ModelIncidenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncidencias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
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
      nextToken
    }
  }
`;
export const getDetalles = /* GraphQL */ `
  query GetDetalles($id: ID!) {
    getDetalles(id: $id) {
      id
      incidencia {
        id
        title
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
export const listDetalles = /* GraphQL */ `
  query ListDetalles(
    $filter: ModelDetallesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetalles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        incidencia {
          id
          title
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
      nextToken
    }
  }
`;
