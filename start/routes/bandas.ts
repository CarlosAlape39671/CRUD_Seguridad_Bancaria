import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/bandas", "BandasController.find");
    Route.get("/bandas/:id", "BandasController.find");
    Route.post("/bandas", "BandasController.create");
    Route.put("/bandas/:id", "BandasController.update");
    Route.delete("/bandas/:id", "BandasController.delete");
})
// .middleware(["security"])