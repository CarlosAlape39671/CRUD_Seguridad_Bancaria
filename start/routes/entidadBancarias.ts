    import Route from '@ioc:Adonis/Core/Route'
    Route.group(() => {
        Route.get('/entidadesBancarias/:codigoEntidad?', 'EntidadBancariasController.find');
        Route.post('/entidadesBancarias', 'EntidadBancariasController.create');
        Route.put('/entidadesBancarias/:codigoEntidad?', 'EntidadBancariasController.update');
        Route.delete('/entidadesBancarias/:codigoEntidad', 'EntidadBancariasController.delete');
    })
    // .middleware(["security"])