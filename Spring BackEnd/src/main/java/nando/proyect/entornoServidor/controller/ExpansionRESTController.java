package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.service.IServiceExpansion;

@RestController
@RequestMapping("/expansion")
public class ExpansionRESTController {
    @Autowired
    private IServiceExpansion expansionService;
    @GetMapping("/all")
    public List<Expansion> encontrarTodas() {
        return expansionService.encontrarTodasLasExpansiones();
    }
}
