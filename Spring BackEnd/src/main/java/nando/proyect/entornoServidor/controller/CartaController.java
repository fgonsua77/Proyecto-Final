package nando.proyect.entornoServidor.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import nando.proyect.entornoServidor.model.Carta;
import nando.proyect.entornoServidor.model.Expansion;
import nando.proyect.entornoServidor.service.IServiceCarta;
import nando.proyect.entornoServidor.service.IServiceExpansion;

@Controller
@RequestMapping("/cartas")
public class CartaController {
    @Autowired
    private IServiceCarta cartaService;
    @Autowired
    private IServiceExpansion expansionService;

    @GetMapping("/list")
    public String encontrarTodas(Model model) {
        List<Carta> cartas = cartaService.encontrarTodas();
        model.addAttribute("cartas", cartas);
        return "listaCartas";
    }
    @GetMapping("/add")
    public String addCarta(Model model) {
        Carta carta = new Carta();
        model.addAttribute("carta", carta);
        List<Expansion> expansiones = expansionService.encontrarTodasLasExpansiones();
        model.addAttribute("expansiones", expansiones);
        return "crearCarta";
    }
    @GetMapping("/edit/{id}")
    public String editarCarta(Model model, @PathVariable("id") Integer id) {
        Carta carta = cartaService.encontrarUnaCartaPorId(id);
        model.addAttribute("carta", carta);
        List<Expansion> expansiones = expansionService.encontrarTodasLasExpansiones();
        model.addAttribute("expansiones", expansiones);
        return "crearCarta";
    }
    @PostMapping("/save")
    public String guardarCarta(Carta carta) {
        cartaService.guardarCarta(carta);
        return "redirect:/cartas/list";
    }
    @Transactional
    @PutMapping("/update")
    public String actualizarCarta(Carta carta){
        Carta cartaAModificar = cartaService.encontrarUnaCartaPorId(carta.id);
        cartaAModificar.setName(carta.getName());
        cartaAModificar.setExpansion(carta.getExpansion()) ;
        cartaAModificar.setCode(carta.getCode());
        cartaAModificar.setReprint(carta.getReprint());
        cartaAModificar.setImage(carta.getImage());
        cartaAModificar.setRarity(carta.getRarity());
        cartaAModificar.setHighlighted(carta.getHighlighted());
        cartaService.guardarCarta(cartaAModificar);
        return "redirect:/cartas/list";
    }

    
}
