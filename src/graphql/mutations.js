/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncidencia = /* GraphQL */ `
  mutation CreateIncidencia(
    $input: CreateIncidenciaInput!
    $condition: ModelIncidenciaConditionInput
  ) {
    createIncidencia(input: $input, condition: $condition) {
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
export const updateIncidencia = /* GraphQL */ `
  mutation UpdateIncidencia(
    $input: UpdateIncidenciaInput!
    $condition: ModelIncidenciaConditionInput
  ) {
    updateIncidencia(input: $input, condition: $condition) {
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
export const deleteIncidencia = /* GraphQL */ `
  mutation DeleteIncidencia(
    $input: DeleteIncidenciaInput!
    $condition: ModelIncidenciaConditionInput
  ) {
    deleteIncidencia(input: $input, condition: $condition) {
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
export const createConductor = /* GraphQL */ `
  mutation CreateConductor(
    $input: CreateConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    createConductor(input: $input, condition: $condition) {
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
export const updateConductor = /* GraphQL */ `
  mutation UpdateConductor(
    $input: UpdateConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    updateConductor(input: $input, condition: $condition) {
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
export const deleteConductor = /* GraphQL */ `
  mutation DeleteConductor(
    $input: DeleteConductorInput!
    $condition: ModelConductorConditionInput
  ) {
    deleteConductor(input: $input, condition: $condition) {
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
