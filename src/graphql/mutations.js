/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createIncidencia = /* GraphQL */ `
  mutation CreateIncidencia(
    $input: CreateIncidenciaInput!
    $condition: ModelIncidenciaConditionInput
  ) {
    createIncidencia(input: $input, condition: $condition) {
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
export const updateIncidencia = /* GraphQL */ `
  mutation UpdateIncidencia(
    $input: UpdateIncidenciaInput!
    $condition: ModelIncidenciaConditionInput
  ) {
    updateIncidencia(input: $input, condition: $condition) {
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
export const deleteIncidencia = /* GraphQL */ `
  mutation DeleteIncidencia(
    $input: DeleteIncidenciaInput!
    $condition: ModelIncidenciaConditionInput
  ) {
    deleteIncidencia(input: $input, condition: $condition) {
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
export const createDetalles = /* GraphQL */ `
  mutation CreateDetalles(
    $input: CreateDetallesInput!
    $condition: ModelDetallesConditionInput
  ) {
    createDetalles(input: $input, condition: $condition) {
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
export const updateDetalles = /* GraphQL */ `
  mutation UpdateDetalles(
    $input: UpdateDetallesInput!
    $condition: ModelDetallesConditionInput
  ) {
    updateDetalles(input: $input, condition: $condition) {
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
export const deleteDetalles = /* GraphQL */ `
  mutation DeleteDetalles(
    $input: DeleteDetallesInput!
    $condition: ModelDetallesConditionInput
  ) {
    deleteDetalles(input: $input, condition: $condition) {
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
