package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.model.Juego;
import nando.proyect.entornoServidor.model.Usuarios;
import nando.proyect.entornoServidor.service.IServiceCarta;
import nando.proyect.entornoServidor.service.IServiceExpansion;
import nando.proyect.entornoServidor.service.IServiceJuego;
import nando.proyect.entornoServidor.service.IServiceUsuario;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT})

@RequestMapping("/apicartas")
public class CartaRESTController {
    @Autowired
    private IServiceCarta cartaService;
    @Autowired
    private IServiceExpansion expansionService;
    @Autowired
    private IServiceJuego juegoService;
    @Autowired
    private IServiceUsuario usuarioService;

    
    @GetMapping("/cartas")
    public List<Carta> encontrarTodas() {
        return cartaService.encontrarTodas();
    }
    @GetMapping("/cartas/destacadas")
    public List<Carta> encontrarDestacadas() {
        return cartaService.encontrarCartasDestacadas();
    }
    @GetMapping("/cartas/buscarPorNombre/{lineaNombre}")
    public List<Carta> encontrarCartasPorLineadeNombre(@PathVariable String lineaNombre) {
        return cartaService.encontrarCartasPorLineadeNombre(lineaNombre);
    }
    @GetMapping("/cartas/{nombreJuego}/buscarPorJuego/{lineaNombre}")
    public List<Carta> encontrarCartasPorjuego(@PathVariable("nombreJuego") String nombreJuego, @PathVariable("lineaNombre") String lineaNombre) {
        Juego juegoReclamado = juegoService.encontrarJuegoPorNombre(nombreJuego);
        List<Expansion> expansiones = expansionService.encontrarTodasLasExpansiones();
        List<Expansion> expansionesJuego = new ArrayList<Expansion>();
        List<Carta> cartas = cartaService.encontrarCartasPorLineadeNombre(lineaNombre);
        List<Carta> cartasExpansiones = new ArrayList<Carta>();
        for(int i = 0; i<expansiones.size(); i++) {
            if(expansiones.get(i).getJuego().getId().equals(juegoReclamado.getId())) {
                expansionesJuego.add(expansiones.get(i));
            }
        }
        for(int i = 0; i<cartas.size(); i++) {
            for(int j = 0; j<expansionesJuego.size(); j++) {
                if(cartas.get(i).getExpansion().getId().equals(expansionesJuego.get(j).getId())) {
                    cartasExpansiones.add(cartas.get(i));
                }
            }
        }
        return cartasExpansiones;
    }
    @GetMapping("/cartas/{nombreJuego}/buscarPorJuego")
    public List<Carta> encontrarTodasLasCartasPorjuego(@PathVariable("nombreJuego") String nombreJuego) {
        Juego juegoReclamado = juegoService.encontrarJuegoPorNombre(nombreJuego);
        List<Expansion> expansiones = expansionService.encontrarTodasLasExpansiones();
        List<Expansion> expansionesJuego = new ArrayList<Expansion>();
        List<Carta> cartas = cartaService.encontrarTodas();
        List<Carta> cartasExpansiones = new ArrayList<Carta>();
        for(int i = 0; i<expansiones.size(); i++) {
            if(expansiones.get(i).getJuego().getId().equals(juegoReclamado.getId())) {
                expansionesJuego.add(expansiones.get(i));
            }
        }
        for(int i = 0; i<cartas.size(); i++) {
            for(int j = 0; j<expansionesJuego.size(); j++) {
                if(cartas.get(i).getExpansion().getId().equals(expansionesJuego.get(j).getId())) {
                    cartasExpansiones.add(cartas.get(i));
                }
            }
        }
        return cartasExpansiones;
    }
    @PostMapping("/cartas/addtoFavs/cardId={cardId}&username={username}")
    public void añadirAFavoritos(@PathVariable("cardId") int cardId, @PathVariable("username") String username) {
        Usuarios usuario = usuarioService.encontrarPorNombreUsuario(username);
        usuarioService.añadirCartaFavoritaAlUsuario(usuario.getId(), cardId);
    }
    @GetMapping("/cartas/idExpansion={idExpansion}")
    public List<Carta> encontrarCartasPorExpansion(@PathVariable("idExpansion") Integer idExpansion) {
        List<Carta> cartas = cartaService.encontrarTodas();
        List<Carta> cartasExpansion = new ArrayList<Carta>();
        for(int i = 0; i<cartas.size(); i++) {
            if(cartas.get(i).getExpansion().getId().equals(idExpansion)) {
                cartasExpansion.add(cartas.get(i));
            }
        }
        return cartasExpansion;
    }
    @GetMapping("/cartas/getCarta/cardId={id}")
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
        cartaAModificar.setName(carta.getName());
        cartaAModificar.setExpansion(carta.getExpansion()) ;
        cartaAModificar.setCode(carta.getCode());
        cartaAModificar.setReprint(carta.getReprint());
        cartaAModificar.setImage(carta.getImage());
        cartaAModificar.setRarity(carta.getRarity());
        cartaAModificar.setHighlighted(carta.getHighlighted());
        cartaService.guardarCarta(cartaAModificar);
        return cartaService.encontrarUnaCartaPorId(carta.id);
    }
}
