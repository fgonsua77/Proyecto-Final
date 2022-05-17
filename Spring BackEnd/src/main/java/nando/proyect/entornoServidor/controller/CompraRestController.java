package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Compra;
import nando.proyect.entornoServidor.service.IServiceCompra;

@RestController
@RequestMapping("/purchases")
public class CompraRestController {
    @Autowired
    private IServiceCompra compraService;
    @GetMapping("/all")
    public List<Compra> encontrarTodas() {
        return compraService.encontrarTodas();
    }
}
