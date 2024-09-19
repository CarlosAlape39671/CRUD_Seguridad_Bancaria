import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/atracos", "AtracosController.find");
    Route.get("/atracos/:id", "AtracosController.find");
    Route.post("/atracos", "AtracosController.create");
    Route.put("/atracos/:id", "AtracosController.update");
    Route.delete("/atracos/:id", "AtracosController.delete");
})
// .middleware(["security"])