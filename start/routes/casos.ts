import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/casos", "CasosController.find");
    Route.get("/casos/:id", "CasosController.find");
    Route.post("/casos", "CasosController.create");
    Route.put("/casos/:id", "CasosController.update");
    Route.delete("/casos/:id", "CasosController.delete");
})
// .middleware(["security"])