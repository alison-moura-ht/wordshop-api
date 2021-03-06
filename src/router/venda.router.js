import express from "express";
import { verificar } from "../middleware/auth.middleware.js";
import VendaService from "./../service/venda.service.js";
import ErrosUtils from "./../utils/erros.util.js";

const router = express.Router();

router.get("/vendas", verificar, async (req, res) => {
  try {
    res.json(await VendaService.buscarTodos());
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao buscar vendas");
    console.log("Erro ao buscar vendas: " + error.message);
  }
});

router.post("/vendas", verificar, async (req, res) => {
  try {
    res.json(await VendaService.cadastrar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao cadastrar venda");
    console.log("Erro ao cadastrar venda: " + error.message);
  }
});

router.put("/vendas", verificar, async (req, res) => {
  try {
    res.json(await VendaService.atualizar(req.body));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao atualizar venda");
    console.log("Erro ao atualizar venda: " + error.message);
  }
});

router.delete("/vendas/:id", verificar, async (req, res) => {
  try {
    res.json(await VendaService.remover(req.params.id));
  } catch (error) {
    ErrosUtils.enviarResponseError(error, res, "Erro ao remover venda");
    console.log("Erro ao remover venda: " + error.message);
  }
});

export default router;
