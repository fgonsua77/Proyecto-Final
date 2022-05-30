package nando.proyect.entornoServidor.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import nando.proyect.entornoServidor.model.Compra;
import nando.proyect.entornoServidor.model.Usuarios;
import nando.proyect.entornoServidor.service.IServiceCompra;
import nando.proyect.entornoServidor.service.IServiceDireccion;
import nando.proyect.entornoServidor.service.IServiceUsuario;
import nando.proyect.entornoServidor.service.IServiceVenta;

@RestController
@RequestMapping("/purchases")
public class CompraRestController {
    @Autowired
    private IServiceCompra compraService;

    @Autowired
    private IServiceUsuario usuarioService;

    @GetMapping("/")
    public List<Compra> encontrarTodas() {
        return compraService.encontrarTodas();
    }

    @GetMapping("/{id}")
    public Compra encontrarPorId(@PathVariable("id") Integer id) {
        return compraService.encontrarUnaCompraPorId(id);
    }

    // @GetMapping("/idUser={id}/nombreVendedor={lineaVendedor}")
    // public List<Compra> encontrarTodasLasComprasDeUnUsuarioPorNombreVendedor(
    //         @PathVariable("lineaVendedor") String lineaVendedor,
    //         @PathVariable("id") Integer id) {
    //     List<Compra> compras = compraService.encontrarTodas();
    //     Usuarios usuario = usuarioService.encontrarUsuarioPorId(id);
    //     List<Compra> comprasFiltradas = new ArrayList<Compra>();
    //     for (Compra compra : compras) {
    //         if ((compra.getVendedor().getUsername().contains(lineaVendedor))
    //                 && (compra.getDireccion().getUsuario().getId().equals(usuario.getId()))) {
    //             comprasFiltradas.add(compra);
    //         }
    //     }
    //     return comprasFiltradas;
    // }

    @GetMapping("/idUser={id}")
    public List<Compra> encontrasTodasLasComprasDeUnUsuario(@PathVariable("id") Integer id) {
        List<Compra> compras = compraService.encontrarTodas();
        Usuarios usuario = usuarioService.encontrarUsuarioPorId(id);
        List<Compra> comprasFiltradas = new ArrayList();
        for (Compra compra : compras) {
            if ((compra.getDireccion().getUsuario().getId().equals(usuario.getId()))) {
                comprasFiltradas.add(compra);
            }
        }
        return comprasFiltradas;
    }

}
