package nando.proyect.entornoServidor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import nando.proyect.entornoServidor.model.Juego;
import nando.proyect.entornoServidor.service.IServiceJuego;

@RestController
@RequestMapping("/games")

@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT})
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
