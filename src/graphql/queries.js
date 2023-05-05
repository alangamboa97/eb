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
          estado
          url_video
          ubicacion
          fecha_hora
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
      fecha_hora
      createdAt
      updatedAt
      conductorIncidenciasId
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
        conductor {
          id
          nombre
          apellido
          num_incidencias
          createdAt
          updatedAt
        }
        estado
        url_video
        ubicacion
        fecha_hora
        createdAt
        updatedAt
        conductorIncidenciasId
      }
      nextToken
    }
  }
`;
