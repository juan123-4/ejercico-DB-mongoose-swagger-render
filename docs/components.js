module.exports = {
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: 'Título de la tarea'
            },
            completed: {
              type: 'boolean',
              description: 'Estado de la tarea'
            }
          }
        }
      },
      responses: {
        NotFound: {
          description: 'Elemento no encontrado'
        }
      }
    }
  };
  