module.exports = {
    paths: {
      '/create': {
        post: {
          tags: ['Tareas'],
          description: 'Crear una nueva tarea',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task'
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Tarea creada con éxito'
            },
            '400': {
              description: 'Error en la solicitud'
            }
          }
        }
      }
    }
  };
  