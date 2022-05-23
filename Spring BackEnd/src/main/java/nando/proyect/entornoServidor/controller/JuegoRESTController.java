package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Juego;
import nando.proyect.entornoServidor.service.IServiceJuego;

@RestController
@RequestMapping("/games")
public class JuegoRESTController {
    @Autowired
    private IServiceJuego juegoService;

    @GetMapping("/")
    public List<Juego> conseguirTodosLosJuegos() {
        return juegoService.encontrarTodas();
    }

    @GetMapping("/gameId={id}")
    public Juego conseguirJuegoPorId(@PathVariable("id") int id) {
        return juegoService.encontrarUnaJuegoPorId(id);
    }
}
