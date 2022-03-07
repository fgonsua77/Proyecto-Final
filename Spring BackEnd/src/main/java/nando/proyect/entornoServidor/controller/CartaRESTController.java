package nando.proyect.entornoServidor.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.service.IServiceCarta;

@RestController
@RequestMapping("/apicartas")
@CrossOrigin(origins = "http://localhost:3000")
public class CartaRESTController {
    @Autowired
    private IServiceCarta cartaService;

    @GetMapping("/cartas")
    public List<Carta> encontrarTodas() {
        return cartaService.encontrarTodas();
    }
    @GetMapping("/cartas/{id}")
    public Carta encontrarUnaCartaPorId(@PathVariable("id") Integer id) {
        return cartaService.encontrarUnaCartaPorId(id);
    }
    @PostMapping("/save")
    public Carta guardarCarta(@RequestBody Carta carta) {
        cartaService.guardarCarta(carta);
        return cartaService.encontrarUnaCartaPorId(carta.id);
    }
    @Transactional
    @PutMapping("/update")
    public Carta actualizarCarta(@RequestBody Carta carta) {
        Carta cartaAModificar = cartaService.encontrarUnaCartaPorId(carta.id);
        cartaAModificar.nombre = carta.nombre;
        cartaAModificar.texto = carta.texto;
        cartaAModificar.expansion = carta.expansion;
        cartaAModificar.codigo = carta.codigo;
        cartaAModificar.keywords = carta.keywords;
        cartaAModificar.reprint = carta.reprint;
        cartaAModificar.precio = carta.precio;
        return cartaService.encontrarUnaCartaPorId(carta.id);
    }
}
