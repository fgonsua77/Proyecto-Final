package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.service.IServiceExpansion;

@RestController
@RequestMapping("/expansion")
public class ExpansionRESTController {
    @Autowired
    private IServiceExpansion expansionService;
    @GetMapping("/")
    public List<Expansion> encontrarTodas() {
        return expansionService.encontrarTodasLasExpansiones();
    }
    @GetMapping("/{id}")
    public Expansion encontrarPorId(@PathVariable("id") Integer id) {
        return expansionService.encontrarUnaExpansionPorId(id);
    }
    @GetMapping("/last3expansions")
    public List<Expansion> encontrarUltimas3Expansiones() {
        Sort sort = Sort.by("releasedate").descending();
        List<Expansion> expansiones = expansionService.encontrarExpansionesPorFechaDeSalida(sort);
        return expansiones.subList(0, 3);
    }
    @GetMapping("/juego/{id}")
    public List<Expansion> encontrarExpansionesPorJuego(@PathVariable("id") Integer id) {
        List<Expansion> expansiones = expansionService.encontrarTodasLasExpansiones();
        List<Expansion> expansionesJuego = new ArrayList<>();
        for (Expansion expansion : expansiones) {
            if (expansion.getJuego().getId() == id) {
                expansionesJuego.add(expansion);
            }
        }
        return expansionesJuego;
    }
}
